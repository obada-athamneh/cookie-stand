'use strict'

let customershourly = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', 'total'];

let mainEl = document.getElementById('main-container')
let tableEl = document.createElement('table');
mainEl.appendChild(tableEl);

function headerMaker() {
  let tr1El = document.createElement('tr');
  tableEl.appendChild(tr1El);
  let thEl = document.createElement('th');
  tr1El.appendChild(thEl);
  thEl.textContent = 'Location';

  for (let i = 0; i < customershourly.length; i++) {
    let th1El = document.createElement('th');
    tr1El.appendChild(th1El);
    th1El.textContent = customershourly[i];
  }
  // for (let i=0 ; i < LocFac.length ; i++){

  //   let trEl = document.createElement('tr');
  //   tableEl.appendChild(trEl);
  //   trEl.textContent= LocFac[i]; 
  //   for (let j=0 ; j< 15; j++){
  //     let tdEl=document.createElement('td');
  //     trEl.appendChild(tdEl);
  //     tdEl.textContent='';
  //   }
  // } 
}
headerMaker()
 
let arrayGlobal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let grandTotal = 0 ;
function shop(shopname, min, max, avgCookies) {
  this.name = shopname;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.cookiesPerHour=[];
  this.total = 0;
}



shop.prototype.render = function () {

  let tr2El = document.createElement('tr');
  tableEl.appendChild(tr2El);
  let td1El = document.createElement('td');
   tr2El.appendChild(td1El);
  td1El.textContent = this.name

    for(let i = 0; i< customershourly.length-1;i++)
    {
    this.cookiesPerHour.push(Math.floor(Math.floor((Math.random() * (this.max - this.min + 1) + this.min)*this.avgCookies)));
    arrayGlobal[i] = arrayGlobal[i] + this.cookiesPerHour[i];
    let td2El = document.createElement('td');
    tr2El.appendChild(td2El);
  td2El.textContent= this.cookiesPerHour[i];
    this.total = this.total + this.cookiesPerHour[i];
    }
   grandTotal = this.total;

   
   

    let td3El = document.createElement('td');
    tr2El.appendChild(td3El);
    td3El.textContent = this.total 

  }
  
let seattle = new shop('seattle', 23, 65, 6.3);
seattle.render();

let  Tokyo = new shop('Tokyo',3,24,1.2);
Tokyo.render();


let  Dubai = new shop('Dubai',11,38,3.7);
Dubai.render();


let  Paris = new shop('Paris',20,38,2.3);
Paris.render();


let  Lima = new shop('Lima',2,16,4.6);
Lima.render();


function footerMaker() {
  let tr1El = document.createElement('tr');
  tableEl.appendChild(tr1El);
  let thEl = document.createElement('th');
  tr1El.appendChild(thEl);
  thEl.textContent = 'Total';

  for (let i = 0; i < customershourly.length-1; i++) {
    let th1El = document.createElement('th');
    tr1El.appendChild(th1El);
    th1El.textContent= arrayGlobal[i];
    // th1El.textContent = seattle.cookiesPerHour[i] + Tokyo.cookiesPerHour[i] + Dubai.cookiesPerHour[i]+ Paris.cookiesPerHour[i] + Lima.cookiesPerHour[i];
  }
  let th3El = document.createElement('th');
  tr1El.appendChild(th3El);
  // th3El.textContent= seattle.total + Tokyo.total + Dubai.total + Paris.total + Lima.total;

  let sum = 0;
  for (let i=0; i < arrayGlobal.length; i++){
    sum = sum + arrayGlobal[i];
 
  } 
  th3El.textContent= sum;
  
}
footerMaker()

const form = document.getElementById('cookiesStand');

form.addEventListener('submit', NewCookies);

function NewCookies(event) {
  // to prevent default behavior from the webpages
  event.preventDefault()
  console.log(event);
  const CountryName = event.target.country.value;
  // console.log(countryName);
  const MinValue = event.target.minValue.value;

  // likes = likes.split(',');
  // console.log(MinValue);

  // let image = event.target.LinkField.value;
  // console.log(image);
  // convert our string to array 
  // console.log(typeof likes);
  const MaxValue = event.target.maxValue.value;
  // console.log(dogs);
  const Avgcookies = event.target.avg.value;
  // console.log(kids);
  // console.log(cats);
  
  
  
  let newLocation = new shop(CountryName, MinValue, MaxValue, Avgcookies); 
  tableEl.deleteRow(tableEl.rows.length-1);
  newLocation.render();
  footerMaker();


}
  // console.log(New);
  // shop.shop();

// let seatte ={

//   LocFac:'Seattle',  
//    min : 23,
//    max : 65,
//    avgcookies:6.3,
//    cookiesperhour:[],

//   cookies:function(){
//     let mainEl=document.getElementById('main-container')
//     let header2 = document.createElement('h2')
//     mainEl.appendChild(header2)
//     header2.textContent=this.LocFac;
//     let ulEl=document.createElement('ul')
//     mainEl.appendChild(ulEl)

//     let total = 0;
//     for(let i = 0; i< customershourly.length;i++)
//     {
//     this.cookiesperhour.push(Math.floor(Math.floor((Math.random() * (this.max - this.min + 1) + this.min)*this.avgcookies)));
//     let liEl=document.createElement('li')
//     ulEl.appendChild(liEl)
//     liEl.textContent=`${customershourly[i]}: ${this.cookiesperhour[i]} cookies`
//     total=total+this.cookiesperhour[i]
//     }
//     let liEl=document.createElement('li')
//     ulEl.appendChild(liEl)
//     liEl.textContent=`Total: ${total} cookies`
// } }

//     seattle.cookies();
//     console.log(seattle.cookiesperhour);




// let Tokyo	 ={

//   LocFac:'Tokyo	',  
//    min : 24,
//    max : 3,
//    avgcookies:1.2,
//    cookiesperhour:[],

//   cookies:function(){
//     let mainEl=document.getElementById('main-container')
//     let header2 = document.createElement('h2')
//     mainEl.appendChild(header2)
//     header2.textContent=this.LocFac;
//     let ulEl=document.createElement('ul')
//     mainEl.appendChild(ulEl)

//     let total = 0;
//     for(let i = 0; i< customershourly.length;i++)
//     {
//     this.cookiesperhour.push(Math.floor(Math.floor((Math.random() * (this.max - this.min + 1) + this.min)*this.avgcookies)));
//     let liEl=document.createElement('li')
//     ulEl.appendChild(liEl)
//     liEl.textContent=`${customershourly[i]}: ${this.cookiesperhour[i]} cookies`
//     total=total+this.cookiesperhour[i]
//     }
//     let liEl=document.createElement('li')
//     ulEl.appendChild(liEl)
//     liEl.textContent=`Total: ${total} cookies`
// } }

//     Tokyo.cookies();
//     console.log(Tokyo.cookiesperhour);



// let Dubai	 ={

//   LocFac:'Dubai	',  
//    min : 38,
//    max : 11,
//    avgcookies:3.7,
//    cookiesperhour:[],

//   cookies:function(){
//     let mainEl=document.getElementById('main-container')
//     let header2 = document.createElement('h2')
//     mainEl.appendChild(header2)
//     header2.textContent=this.LocFac;
//     let ulEl=document.createElement('ul')
//     mainEl.appendChild(ulEl)

//     let total = 0;
//     for(let i = 0; i< customershourly.length;i++)
//     {
//     this.cookiesperhour.push(Math.floor(Math.floor((Math.random() * (this.max - this.min + 1) + this.min)*this.avgcookies)));
//     let liEl=document.createElement('li')
//     ulEl.appendChild(liEl)
//     liEl.textContent=`${customershourly[i]}: ${this.cookiesperhour[i]} cookies`
//     total=total+this.cookiesperhour[i]
//     }
//     let liEl=document.createElement('li')
//     ulEl.appendChild(liEl)
//     liEl.textContent=`Total: ${total} cookies`
// } }

//     Dubai.cookies();
//     console.log(Dubai.cookiesperhour);



// let Paris	 ={

//   LocFac:'Paris	',  
//    min : 38,
//    max : 20,
//    avgcookies:2.3,
//    cookiesperhour:[],

//   cookies:function(){
//     let mainEl=document.getElementById('main-container')
//     let header2 = document.createElement('h2')
//     mainEl.appendChild(header2)
//     header2.textContent=this.LocFac;
//     let ulEl=document.createElement('ul')
//     mainEl.appendChild(ulEl)

//     let total = 0;
//     for(let i = 0; i< customershourly.length;i++)
//     {
//     this.cookiesperhour.push(Math.floor(Math.floor((Math.random() * (this.max - this.min + 1) + this.min)*this.avgcookies)));
//     let liEl=document.createElement('li')
//     ulEl.appendChild(liEl)
//     liEl.textContent=`${customershourly[i]}: ${this.cookiesperhour[i]} cookies`
//     total=total+this.cookiesperhour[i]
//     }
//     let liEl=document.createElement('li')
//     ulEl.appendChild(liEl)
//     liEl.textContent=`Total: ${total} cookies`
// } }

//     Paris.cookies();
//     console.log(Paris.cookiesperhour);



// let Lima	 ={

//   LocFac:'Lima	',  
//    min : 16,
//    max : 2, 
//    avgcookies:4.6,
//    cookiesperhour:[],


//     cookies:function(){
//     let mainEl=document.getElementById('main-container')
//     let header2 = document.createElement('h2')
//     mainEl.appendChild(header2)
//     header2.textContent=this.LocFac;
//     let ulEl=document.createElement('ul')
//     mainEl.appendChild(ulEl)

//     let total = 0;
//     for(let i = 0; i< customershourly.length;i++)
//     {
//     this.cookiesperhour.push(Math.floor(Math.floor((Math.random() * (this.max - this.min + 1) + this.min)*this.avgcookies)));
//     let liEl=document.createElement('li')
//     ulEl.appendChild(liEl)
//     liEl.textContent=`${customershourly[i]}: ${this.cookiesperhour[i]} cookies`
//     total=total+this.cookiesperhour[i]
//     }
//     let liEl=document.createElement('li')
//     ulEl.appendChild(liEl)
//     liEl.textContent=`Total: ${total} cookies`
// } }

//     Lima.cookies()