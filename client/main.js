import { Template } from 'meteor/templating'
import { startTracker } from '/lib/recursive'

import './main.html'
import './imports.js'

Session.set('modal', false)

var modalCallback
var recursiveStarted = false

Template.body.onCreated(()=>{
  
})

Template.body.helpers({
  navLink(){
    NavLinks.map((a,i)=>{
      if(a.path == Session.get('page')){
        return a
      }
    }).filter(Boolean)[0]
  },
})

Template.body.events({
  'keydown .modalInput'(e){
    if(e.keyCode == 13){
      var inputs = {}
      $('.modalInput').map((index, input)=>{
        inputs[input.id.replace('Modal','').toLowerCase()] = $(`#${input.id}`).val()
      })
      modalCallback(inputs)
      Session.set('modal', false)
    }
  },
  'click #ModalConfirm'(e){
    var inputs = {}
    $('.modalInput').map((index, input)=>{
      inputs[input.id.replace('Modal','').toLowerCase()] = $(`#${input.id}`).val()
    })
    modalCallback(inputs)
    Session.set('modal', false)
  },
  'click #ModalDeny'(){
    Session.set('modal', false)    
  },
  'mouseenter #PageWrapper'(){
    if(!recursiveStarted){
      startTracker()
      recursiveStarted = true
    }
  },
})

Modal = (modal, callback)=>{
  modalCallback = callback
  Session.set('modal', modal)
}