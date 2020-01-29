import './home.html'

Template.home.onCreated(()=>{
  Session.set('hasNav', false)
})

Template.home.helpers({
  navLinks(){
    return NavLinks
  }
})

Template.home.events({
  'click .navLink'(){
    FlowRouter.go(`/${this.path}`)
  }
})