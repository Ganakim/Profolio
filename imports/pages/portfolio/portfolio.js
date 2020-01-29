import './portfolio.html'

Template.portfolio.onCreated(()=>{
  Session.set('hasNav', true)
})

Template.portfolio.helpers({
  skills(){
    return [
      {text:'HTML', exp:moment('3-20-2008','M-DD-YYYY'), icon:'fab fa-html5'},
      {text:'CSS', exp:moment('3-20-2008','M-DD-YYYY'), icon:'fab fa-css3-alt'},
      {text:'JavaScript', exp:moment('3-20-2008','M-DD-YYYY'), icon:'fab fa-js'},
      {text:'Meteor', exp:moment('3-20-2016','M-DD-YYYY'), icon:'fas fa-meteor'},
      {text:'Angular', exp:moment('3-20-2016','M-DD-YYYY'), icon:'fab fa-angular'},
      {text:'Vue', exp:moment('3-20-2017','M-DD-YYYY'), icon:'fab fa-vuejs'},
      {text:'NodeJs', exp:moment('3-20-2012','M-DD-YYYY'), icon:'fab fa-node-js'},
      {text:'React', exp:moment('3-20-2015','M-DD-YYYY'), icon:'fab fa-react'},
      {text:'TypeSript', exp:moment('3-20-2016','M-DD-YYYY'), icon:'fal fa-i-cursor'},
      {text:'CoffeScript', exp:moment('3-20-2016','M-DD-YYYY'), icon:'fal fa-coffee'},
      {text:'Ruby', exp:moment('3-20-2015','M-DD-YYYY').subtract(moment('3-20-2016','M-DD-YYYY').format('YYYY')-moment().format('YYYY'), 'year'), icon:'fal fa-gem'},
      {text:'PHP', exp:moment('3-20-2012','M-DD-YYYY'), icon:'fab fa-php'},
      {text:'Python', exp:moment('3-20-2019','M-DD-YYYY'), icon:'fab fa-python'},
    ]
  },
  awards(){
    return [
      {text:'Eagle Scout', exp:moment('3-20-2012','M-DD-YYYY')},
    ]
  },
  certs(){
    return [
      {text:'Microsoft Office'},
      {text:'CPR'},
    ]
  },
  expParse(e){
    var years = moment().format('YYYY')-e.format('YYYY')
    return years > 0 ? `${years} year${years > 1 ? 's' : ''}` : 'Less than a year'
  }
})