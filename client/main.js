import {Template} from 'meteor/templating'
import {startTracker} from '/lib/recursive'

import './main.html'

//lib
import '/lib/routes'
import '/lib/tools'
//components
import '/imports/components/nav/nav'
import '/imports/components/header/header'
//pages
import '/imports/pages/home/home'
import '/imports/pages/about/about'
import '/imports/pages/donate/donate'
import '/imports/pages/contact/contact'
import '/imports/pages/portfolio/portfolio'

Template.body.events({
  'click .navLink'(){
    FlowRouter.go(`/${this.path}`)
    Session.set('hasNav', this.nav)
  }
})

Template.body.events({
  'mouseenter #PageWrapper'(){
    if(Session.get('hasNav')){
      startTracker()
    }
  }
})