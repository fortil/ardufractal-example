'use strict'
const { Appbar,Icon,Sidenav } = require('snabbdom-material')
const R = {
  evolve:require('ramda/src/evolve'),
  not:require('ramda/src/not'),
}
const h = require('snabbdom/h')
const F = require('F')

module.exports = F.def({
  init: ()=>({
    sidenav: false,
  }),
  inputs:{
    openSideNav:(ctx,Action,m)=>ctx.action$(Action.OpenSideNav()),
  },
  outputNames: ['changePage$'],
  actions:{
    OpenSideNav: [[],(m)=>R.evolve({sidenav:R.not},m)],
  },
  interfaces:{
    view:(ctx,i,m)=>{
      return [
        Sidenav({isOpen:m.sidenav,onClose:i.openSideNav},
          [Sidenav.Title({
            showCloseButton:true,
            onClose:i.openSideNav,
            style:{
              textShadow:'1px 0px 8px rgba(250, 250, 250, 1)',
              background:'red'
            }
          },'ArduFractal'),
          h('div',[
            Sidenav.Item({onClick:()=>ctx.changePage$('home'),showIcon:true,icon:Icon({name:'home3'})},['Inicio']),
            Sidenav.Item({onClick:()=>ctx.changePage$('led'),showIcon:true,icon:Icon({name:'brightness-contrast'})},['LED']),
          ])
        ]),
        Appbar({fixed:true},[
          Appbar.Button({onClick:i.openSideNav,style:{float:'left'}},[
            Icon({name:'menu'}),
          ]),
          h('div',{
            on:{click:()=>ctx.changePage$('home')},
            style:{
              display:'flex',
              justifyContent:'space-around',
              height:'100%',
              float:'right',
              width:'auto',
              alignItems:'center'
            }
          },[
            h('p',{style:{height:'100%'}},'ArduFractal'),
          ])
        ])
      ]
    }
  },
})