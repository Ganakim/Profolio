FlowRouter.notFound={
  action(params, queryParams) {
    console.log(params, queryParams)
    Session.set('page', '404')
  }
}

FlowRouter.route('/', {
  action: function(params, queryParams){
    FlowRouter.go('/home')
  }
})

FlowRouter.route('/:page', {
  action: function(params, queryParams){
    console.log(params, queryParams)
    NavLinks.map((a,i)=>{
      if(a.path == params.page){
        Session.set('page', a)
      }
    })
  }
})