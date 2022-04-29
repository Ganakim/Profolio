import navLinks from '/imports/components/nav/nav'

FlowRouter.notFound={
  action(params, queryParams) {
    console.log(params, queryParams)
    Session.set('page', '404')
  }
}

FlowRouter.route('/', {
  action(){
    FlowRouter.go('/home')
  }
})

FlowRouter.route('/:page', {
  action(params, queryParams){
    console.log(params, queryParams)
    navLinks.forEach(link=>{
      if(link.path == params.page){
        Session.set('page', link)
        Session.set('hasNav', link.nav)
      }
    })
  }
})