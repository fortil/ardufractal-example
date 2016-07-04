'use strict'
const h = require('snabbdom/h')
import { Button, Input, Select} from '../vendor/snabbdom-material'
const R = {
  T:require('ramda/src/T'),
  F:require('ramda/src/F'),
  always:require('ramda/src/always'),
  not:require('ramda/src/not'),
  evolve:require('ramda/src/evolve'),
}
const F = require('fractal-js/dist/fractal.min.js')
const emitTask = F.tasks.socketio.types.emit
const sendValueTask = F.tasks.value.types.send
module.exports = F.def({
  init: ()=>({
    img_source:'',
    initApp:false,
    isFocus:false,
    server:'localhost:4000',
  }),
  inputs:{
    takePicture: (ctx,Action,a)=>{
      console.log(a)
      let name = getName()
      let options = {
        name: 'img', //sufijo del nombre de la imagen
        dirName: "securityCam", //carpeta donde se guardará la imagen
        orientation: "landscape", // orientación de la captura (horizontal o vertical) - portrait
        type: "back" //tomar foto con la cámara frontal o trasera - front
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
    conectServer:(ctx,Action,nameServer)=>['value', sendValueTask(nameServer)],
    initApp:(ctx,Action,active)=>[
      Action.InitApp(),
      ['socket', emitTask('initCamera',active,()=>0)]
    ],
    setServer:(ctx,Action,_)=>Action.SetServer(_),
    focused:(ctx,Action,a)=>Action.Focused(),
  },
  actions:{
    InitApp:[[],(m)=>R.evolve({initApp:R.not},m)],
    ImageSRC:[[String],(img,m)=>R.evolve({img_source:R.always(img)},m)],
    SetServer:[[String],(_,m)=>R.evolve({server:R.always(_)},m)],
    Focused:[[],(m)=>R.evolve({isFocus:((m.server!='')?R.T:R.F) },m)]
  },
  interfaces:{
    view:(ctx,i,m)=>{
      return h('div.home',
                {
                  style:{width:'100%',height:'100%',overflow:'auto',display:'flex',justifyContent:'center',flexDirection:'column'}
                },[
        h('div',{style:{display:'flex',justifyContent:'center',flexDirection:'row'}},[
          h('img',{
            attrs:{src:require('../vendor/imgs/fractal.png')},
            style:{width:'auto',maxWidth:'100%',maxHeight:'200px'},
          }),
        ]),
        h('div',{style:{margin:'0px 10px'}},[
          h('p',{style:{textAlign:'center',fontSize:'18px'}},'Toma una foto de tu celular.'),
        ]),
        h('div',{style:{maxWidth:'100%',margin:'0px 10px'}},[
          Input({label:'Servidor', isFocused:m.isFocus, onChange:(a)=>i.setServer(a.target.value), onFocus:i.focused, onBlur:i.focused}),
          Button({onClick:()=>i.conectServer(m.server),primary:'primary',style:{button:{width:'95%',padding:'10px 0px'}}},'Conectar al servidor'),
          Button({key:((m.initApp==true)?'desactivada':'activada'),onClick:()=>i.initApp((m.initApp==true)?'desactivada':'activada'),...((m.initApp==true)? {primary:'primary'}:{secondary:'secondary'}),style:{button:{width:'95%',padding:'10px 0px'}}},((m.initApp==true)?'Parar':'Iniciar')),
        ]),
        h('div',[
          h('img',{
            attrs:{src:m.img_source},
            style:{maxWidth:'100%',width:'100%'}
          }),
        ]),
        h('div',{style:{position:'absolute',bottom:'5px',right:'10px'}},'Por William Penagos')
      ])
    },
    socket:(ctx,i,m)=>({
      takePicture:i.takePicture
    })
  },
})

function getName() {
  let a = new Date()
  return 'IMG_'+a.getUTCFullYear()+'-'+a.getUTCMonth()+'-'+a.getDate()+'-'+a.getHours()+'-'+a.getMinutes()+'-'+a.getMilliseconds()+'.png'
}
