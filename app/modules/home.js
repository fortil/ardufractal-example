'use strict'
import { Button } from 'snabbdom-material'
const h = require('snabbdom/h')
const F = require('F')

module.exports = F.def({
  init: ()=>({
  }),
  inputs:{
  },
  outputNames: ['changePage$'],
  interfaces:{
    view:(ctx,i,m)=>{
      return h('div.home',
                {
                  style:{width:'100%',height:'100%',overflow:'auto',display:'flex',justifyContent:'center',flexDirection:'column'}
                },[
        h('div',[
          h('img',{
            attrs:{src:require('../vendor/imgs/fractal.png')},
            style:{width:'100%'}
          }),
        ]),
        h('div',{style:{margin:'0px 10px'}},[
          h('h1','ArduFractal'),
          h('p','Una aplicación funcional creada con FractalJS y johnny-five'),
          h('b','¡Genial!')
        ]),
        h('div',{style:{maxWidth:'100%',margin:'0px 10px'}},[
          Button({onClick:()=>ctx.changePage$('led'),primary:'primary',style:{width:'95%'}},'Comienza'),
        ])
      ])
    }
  },
})
