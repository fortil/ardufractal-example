'use strict'
import { Button, Input } from 'snabbdom-material'
const R = {
  evolve:require('ramda/src/evolve'),
  not:require('ramda/src/not'),
  always:require('ramda/src/always'),
  T:require('ramda/src/T'),
}
const h = require('snabbdom/h')
const F = require('F')
const io = require('socket.io-client')

module.exports = F.def({
  init: ()=>({
    state:'false',
    send:false,
    focus:false,
    focusServ:false,
    val:'',
    server:'localhost:8080',
  }),
  inputs:{
    msInput: (ctx,Action,a)=>ctx.action$(Action.MsInput()),
    serverInput: (ctx,Action,a)=>ctx.action$(Action.ServerInput()),
    setServer: (ctx,Action,a)=>ctx.action$(Action.SetServer(a.target.value)),
    setValue: (ctx,Action,a)=>ctx.action$(Action.SetValue(a.target.value)),
    arduino: (ctx,Action,a)=>ctx.action$(Action.Arduino(a)),
  },
  outputNames: ['changePage$'],
  actions:{
    ServerInput:[[],R.evolve({focusServ:R.not})],
    MsInput:[[],R.evolve({focus:R.not})],
    SetValue:[[String],(_,m)=>R.evolve({val:R.always(_),focus:((_!='')?R.T:R.F)},m)],
    SetServer:[[String],(_,m)=>R.evolve({server:R.always(_),focusServ:((_!='')?R.T:R.F)},m)],
    Arduino:[[String],(_,m)=>R.evolve({state:R.always(_),send:R.not},m)],
  },
  interfaces:{
    view:(ctx,i,m)=>{
      if(m.send){
        let socket = io('http://'+m.server)
        socket.emit('led',{ms:+m.val,state:m.state})
        i.arduino('true')
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
            'Has que parpadee el LED a diferente tiempo',
          ]),
        ]),
        h('div',{style:{maxWidth:'100%',margin:'0px 10px'}},[
          Input({label:'Tiempo en ms',type:'number',isFocused:()=>m.focus,onFocus:i.msInput,onBlur:i.msInput,onChange:i.setValue}),
          Input({label:'Servidor',type:'text',value:m.server,isFocused:()=>m.focusServ,onFocus:i.serverInput,onBlur:i.serverInput,onChange:i.setServer}),
          Button({onClick:()=>{i.arduino('true')},primary:'primary',style:{width:'95%'}},'Iniciar'),
          Button({onClick:()=>{i.arduino('false')},secondary:'secondary',style:{width:'95%'}},'Parar'),
        ])
      ])
    }
  },
})
