'use strict'
import { Button, Input} from 'snabbdom-material'
const R = {
  evolve:require('ramda/src/evolve'),
  always:require('ramda/src/always'),
  not:require('ramda/src/not'),
  T:require('ramda/src/T'),
  F:require('ramda/src/F'),
}
const h = require('snabbdom/h')
const F = require('F')
const io = require('socket.io-client')

module.exports = F.def({
  init: ()=>({
    img_source:'',
    initSystem:false,
    isFocus:false,
    server:'',
  }),
  inputs:{
    takePicture: (ctx,Action,a)=>{
      let name = getName()
      let options = {
        name: 'img', //image suffix
        dirName: "securityCam", //foldername
        orientation: "landscape", //or portrait
        type: "back" //or front
      }
      function success(imgurl) {
        window.requestFileSystem(window.PERSISTENT, 5 * 1024 * 1024,(fs)=>{
          let blob = new Blob([imgurl], { type: 'image/png' })
          fs.root.getFile(name, { create: true, exclusive: false }, (fileEntry)=>{
            fileEntry.createWriter((fileWriter)=>{
              fileWriter.onwriteend = ()=>console.log("Successful file write...")
              fileWriter.onerror = (e)=>alert("Failed file write: " + e.toString())
              fileWriter.write(blob)
            })
          }, (e)=>alert('onErrorCreateFile: '+e))
        }, (e)=>alert('requestFileSystem: '+e))
        ctx.action$(Action.ImageSRC(imgurl))
      }
      window.plugins.CameraPictureBackground.takePicture(success,(e)=>alert('error camera: '+e), options)
    },
    initApp:(ctx,Action,a)=>ctx.action$(Action.InitApp()),
    setServer:(ctx,Action,_)=>ctx.action$(Action.SetServer(_)),
    focused:(ctx,Action,a)=>ctx.action$(Action.Focused()),
  },
  load:(ctx,i,Action)=>({}),
  actions:{
    ImageSRC:[[String],(img,m)=>R.evolve({img_source:R.always(img),initSystem:R.F},m)],
    InitApp:[[],(m)=>R.evolve({initSystem:R.T},m)],
    SetServer:[[String],(_,m)=>R.evolve({server:R.always(_)},m)],
    Focused:[[],(m)=>R.evolve({isFocus:((m.server!='')?R.T:R.not) },m)]
  },
  interfaces:{
    view:(ctx,i,m)=>{
      if(m.initSystem==true){
        let socket = io('http://'+m.server+':8080')
        socket.on('sensor',(volt)=>{
          i.takePicture(undefined)
        })
      }
      return h('div.home',
                {
                  style:{width:'100%',height:'100%',overflow:'auto',display:'flex',justifyContent:'center',flexDirection:'column'}
                },[
        h('div',[
          h('img',{
            attrs:{src:require('../vendor/imgs/fractal.png')},
            style:{maxWidth:'100%'}
          }),
        ]),
        h('div',{style:{margin:'0px 10px'}},[
          h('p',[
            'Toma una foto de tu celular.',
          ]),
        ]),
        h('div',{style:{maxWidth:'100%',margin:'0px 10px'}},[
          Input({
            label:'Servidor',
            isFocused:m.isFocus,
            onChange:(a)=>i.setServer(a.target.value),
            onFocus:i.focused,
            onBlur:i.focused,
            value:'192.168.0.18'
          }),
          Button({onClick:i.initApp,secondary:'secondary',style:{button:{width:'95%'}}},'Iniciar'),
        ]),
        h('div',[
          h('p',((m.img_source!='')?m.img_source:'')),
          h('img',{
            attrs:{src:((m.img_source!='')?m.img_source:require('../vendor/imgs/fractal.png'))},
            style:{maxWidth:'100%'}
          }),
        ]),
      ])
    }
  },
})

function getName() {
  let a = new Date()
  return 'IMG_'+a.getUTCFullYear()+'-'+a.getUTCMonth()+'-'+a.getDate()+'-'+a.getHours()+'-'+a.getMinutes()+'-'+a.getMilliseconds()+'.png'
}
