import navLinks from '/imports/components/nav/nav'
Tools = {
  capitalize(a){
    return a.charAt(0).toUpperCase() + a.slice(1)
  },
  is(a,b){
    return a===b
  },
  get(a){
    if(a.includes('.')){
      b = a.split('.')
      return Session.get(b[0])[b[1]]
    }else{
      return Session.get(a)
    }
  },
  log(a){
    console.log(a)
  },
  navLinks(){
    return navLinks
  }
}

for(var helper in Tools){
  Template.registerHelper(helper, Tools[helper])
}