import './nav.html'

NavLinks = [
  {text:'Home', icon:'far fa-home-alt', path:'home'},
  {text:'About', icon:'far fa-user', path:'about'},
  {text:'Contact', icon:'far fa-envelope', path:'contact'},
  {text:'Portfolio', icon:'far fa-briefcase', path:'portfolio'},
  // {text:'Donate', icon:'far fa-donate', path:'donate'},
]

Template.nav.helpers({
  navLinks(){
    return NavLinks
  }
})

Template.nav.events({
  'click .navLink'(){
    FlowRouter.go(`/${this.path}`)
  },
})