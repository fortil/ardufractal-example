'use strict'
const R = {
  evolve:require('ramda/src/evolve'),
  always:require('ramda/src/always'),
  F:require('ramda/src/F'),
}
const h = require('snabbdom/h')
const F = require('F')
const Head = require('./modules/head')
const Home = require('./modules/home')
const Led = require('./modules/led')

module.exports = F.def({
  init: ()=>({
    page:'home',
    head:Head.init(),
    home:Home.init(),
    led:Led.init(),
  }),
  inputs:{
    headInput:(ctx,Action,a)=>ctx.action$(Action.HeadAction(a)),
    ledInput:(ctx,Action,a)=>ctx.action$(Action.LedAction(a)),
    changePage:(ctx,Action,_)=>ctx.action$(Action.ChangePageAct(_)),
  },
  load: (ctx, i, Action) => {
    return {
      head: F.createContext(Head,{action$: i.headInput,changePage$:i.changePage}),
      led: F.createContext(Led,{action$: i.ledInput,changePage$:i.changePage}),
      home: F.createContext(Home,{changePage$:i.changePage}),
    }
  },
  actions:{
    LedAction: [[Array],(a,m)=>R.evolve({led:Led.update(a)},m)],
    HeadAction: [[Array],(a,m)=>R.evolve({head:Head.update(a)},m)],
    ChangePageAct: [[String],(page,m)=>R.evolve({page:R.always(page),head:R.evolve({sidenav:R.F})},m)],
  },
  interfaces:{
    view:(ctx,i,m)=>{
      return h('div',{style:{height:'100%',width:'100%',overflow:'auto'}},[
        ...ctx._md.head.interfaces.view(m.head),
        ctx._md[m.page].interfaces.view(m[m.page])
      ])
    },
  },
})