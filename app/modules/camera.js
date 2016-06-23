'use strict'
import { Button } from 'snabbdom-material'
const R = {
  evolve:require('ramda/src/evolve'),
  not:require('ramda/src/not'),
  always:require('ramda/src/always'),
}
const h = require('snabbdom/h')
const F = require('F')

module.exports = F.def({
  init: ()=>({
    takePicture:false,
    img_source:'',
  }),
  inputs:{
    arduino: (ctx,Action,a)=>{
      ctx.action$(Action.Arduino())
    },
  },
  actions:{
    Arduino:[[],(m)=>{
      navigator.camera.getPicture(function(imageURI) {
        if(m.takePicture==false){
          return R.evolve({takePicture:R.not,img_source:R.always(imageURI)},m)
        }else{
          return R.evolve({takePicture:R.not},m)
        }
      }, function(message) {
        return R.evolve({takePicture:R.not},m)
      }, {quality:50})
    }],
  },
  interfaces:{
    view:(ctx,i,m)=>{
      if(m.img_source==true){
        i.arduino({a:'a'})
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
          Button({onClick:i.arduino,secondary:'secondary',style:{width:'95%'}},'takePicture'),
        ]),
        h('div',[
          h('img',{
            attrs:{src:((m.img_source!='')?m.img_source:require('../vendor/imgs/fractal.png'))},
            style:{maxWidth:'100%'}
          }),
        ]),
      ])
    }
  },
})
