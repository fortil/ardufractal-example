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

module.exports = F.def({
  init: ()=>({
    state:'off',
    ini:false,
    timeInput:{
      value:'',
      focus:false,
    }
  }),
  inputs:{
    ontimeInput: (ctx,Action,a)=>ctx.action$(Action.OntimeInput()),
    setValue: (ctx,Action,a)=>ctx.action$(Action.SetValue(a.target.value)),
    arduino: (ctx,Action,a)=>ctx.action$(Action.Arduino()),
  },
  outputNames: ['changePage$'],
  actions:{
    OntimeInput:[[],R.evolve({timeInput:R.evolve({focus:R.not})})],
    SetValue:[[String],(_,m)=>R.evolve({timeInput:R.evolve({value:R.always(_)})},m)],
    Arduino:[[],R.evolve({state:R.not,ini:R.always(R.T)})],
  },
  interfaces:{
    view:(ctx,i,m)=>{
      if(m.ini){
        strobeLed(m.timeInput.value,m.state)
      }
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
          h('p',[
            'Has que parpadee el LED a diferente tiempo',
          ]),
        ]),
        h('div',{style:{width:'100%',margin:'0px 10px'}},[
          Input({label:'Tiempo en ms',isFocused:m.timeInput.focus,type:'number',onFocus:i.ontimeInput,onBlur:i.ontimeInput,onChange:i.setValue}),
          Button({onClick:i.arduino,primary:'primary',style:{width:'95%'}},(m.state=='off')?'Iniciar':'Parar'),
        ])
      ])
    }
  },
})

function strobeLed(ms,state) {
  let five = require("johnny-five")
  let myBoard, myLed;
  myBoard = new five.Board()
  
  myBoard.on("ready", function() {
    myLed = new five.Led(13)
    if (state=='off') {
      console.log(ms,'off')
      myLed.stop().off()
    }else{
      console.log(ms,'on')
      myLed.strobe( +ms )
    }
    this.repl.inject({
      led: myLed
    })
  })
}