'use strict'

let customersHourly =['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];

let seattle ={

  LocFac:'Seattle',  
   min : 23,
   max : 65,
   avgcookies:6.3,
   cookiesperhour:[],

  cookies:function(){
    let mainEl=document.getElementById('main-container')
    let header2 = document.createElement('h2')
    mainEl.appendChild(header2)
    header2.textContent=this.LocFac;
    let ulEl=document.createElement('ul')
    mainEl.appendChild(ulEl)

    let total = 0;
    for(let i = 0; i< customersHourly.length;i++)
    {
    this.cookiesperhour.push(Math.floor(Math.floor((Math.random() * (this.max - this.min + 1) + this.min)*this.avgcookies)));
    let liEl=document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`${customersHourly[i]}: ${this.cookiesperhour[i]} cookies`
    total=total+this.cookiesperhour[i]
    }
    let liEl=document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`Total: ${total} cookies`
} }
    
    seattle.cookies();
    console.log(seattle.cookiesperhour);
 


    
let Tokyo	 ={

  LocFac:'Tokyo	',  
   min : 24,
   max : 3,
   avgcookies:1.2,
   cookiesperhour:[],

  cookies:function(){
    let mainEl=document.getElementById('main-container')
    let header2 = document.createElement('h2')
    mainEl.appendChild(header2)
    header2.textContent=this.LocFac;
    let ulEl=document.createElement('ul')
    mainEl.appendChild(ulEl)

    let total = 0;
    for(let i = 0; i< customersHourly.length;i++)
    {
    this.cookiesperhour.push(Math.floor(Math.floor((Math.random() * (this.max - this.min + 1) + this.min)*this.avgcookies)));
    let liEl=document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`${customersHourly[i]}: ${this.cookiesperhour[i]} cookies`
    total=total+this.cookiesperhour[i]
    }
    let liEl=document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`Total: ${total} cookies`
} }
    
    Tokyo.cookies();
    console.log(Tokyo.cookiesperhour);


        
let Dubai	 ={

  LocFac:'Dubai	',  
   min : 38,
   max : 11,
   avgcookies:3.7,
   cookiesperhour:[],

  cookies:function(){
    let mainEl=document.getElementById('main-container')
    let header2 = document.createElement('h2')
    mainEl.appendChild(header2)
    header2.textContent=this.LocFac;
    let ulEl=document.createElement('ul')
    mainEl.appendChild(ulEl)

    let total = 0;
    for(let i = 0; i< customersHourly.length;i++)
    {
    this.cookiesperhour.push(Math.floor(Math.floor((Math.random() * (this.max - this.min + 1) + this.min)*this.avgcookies)));
    let liEl=document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`${customersHourly[i]}: ${this.cookiesperhour[i]} cookies`
    total=total+this.cookiesperhour[i]
    }
    let liEl=document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`Total: ${total} cookies`
} }
    
    Dubai.cookies();
    console.log(Dubai.cookiesperhour);


            
let Paris	 ={

  LocFac:'Paris	',  
   min : 38,
   max : 20,
   avgcookies:2.3,
   cookiesperhour:[],

  cookies:function(){
    let mainEl=document.getElementById('main-container')
    let header2 = document.createElement('h2')
    mainEl.appendChild(header2)
    header2.textContent=this.LocFac;
    let ulEl=document.createElement('ul')
    mainEl.appendChild(ulEl)

    let total = 0;
    for(let i = 0; i< customersHourly.length;i++)
    {
    this.cookiesperhour.push(Math.floor(Math.floor((Math.random() * (this.max - this.min + 1) + this.min)*this.avgcookies)));
    let liEl=document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`${customersHourly[i]}: ${this.cookiesperhour[i]} cookies`
    total=total+this.cookiesperhour[i]
    }
    let liEl=document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`Total: ${total} cookies`
} }
    
    Paris.cookies();
    console.log(Paris.cookiesperhour);


              
let Lima	 ={

  LocFac:'Lima	',  
   min : 16,
   max : 2, 
   avgcookies:4.6,
   cookiesperhour:[],

  
    cookies:function(){
    let mainEl=document.getElementById('main-container')
    let header2 = document.createElement('h2')
    mainEl.appendChild(header2)
    header2.textContent=this.LocFac;
    let ulEl=document.createElement('ul')
    mainEl.appendChild(ulEl)

    let total = 0;
    for(let i = 0; i< customersHourly.length;i++)
    {
    this.cookiesperhour.push(Math.floor(Math.floor((Math.random() * (this.max - this.min + 1) + this.min)*this.avgcookies)));
    let liEl=document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`${customersHourly[i]}: ${this.cookiesperhour[i]} cookies`
    total=total+this.cookiesperhour[i]
    }
    let liEl=document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`Total: ${total} cookies`
} }
    
    Lima.cookies();
    console.log(Lima .cookiesperhour);