import './contact.html'

Template.contact.helpers({
  contacts(){
    return {
      regular:[
        {icon:'far fa-phone', name:'Phone', type:'tel:', path:'(801)960-2016'},
        {icon:'far fa-envelope', name:'Email', type:'mailto:', path:'espene.cornwall@gmail.com'},
        // {icon:'fal fa-comment-lines', name:'My Blog', type:'', path:'Deprecated', disabled:true},
      ],
      social:[
        {icon:'fab fa-linkedin-in', name:"linkedin", path:'https://www.linkedin.com/in/spencer-cornwall'},
        {icon:'fab fa-github-alt', name:"github", path:'https://github.com/Ganakim'},
        {icon:'fab fa-facebook-f', name:"facebook", path:'https://www.facebook.com/spencer.cornwall'},
        {icon:'fab fa-discord', path:'https://discordapp.com/users/102566151778762752'},
        // {icon:'fab fa-instagram', name:"instagram", path:'https://www.instagram.com/spencer_cornwall'},
        // {icon:'fab fa-twitter', name:"twitter", path:'https://twitter.com/_Ganakim_'},
      ]
    }
  }
})