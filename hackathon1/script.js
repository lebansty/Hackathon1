 bukData=[];
 data=[];
let iceFire= async ()=>{
try{
  let books= await fetch('https://www.anapioficeandfire.com/api/books');
 data= await books.json();
 console.log(data)
}
catch(error){
console.log(error)
}
let multiCard='';

data.forEach((ele,index)=>{
    multiCard+=`<div class="col mb-3" ><div class="card"id="cardMod" style="width: 18rem;">
    
    <div class="card-body">
    <h5>BOOK ${index+1}</h5>
      <h6 class="card-title" id="title${index}">${ele.name}</h6>
      <p class="card-text">ISBN: ${ele.isbn}.</p>
      <p class="card-text">Number of pages: ${ele.numberOfPages}.</p>
      <p class="card-text">Authors: ${ele.authors}.</p>
      <p class="card-text">Publisher: ${ele.publisher}.</p>
      <p class="card-text">Released date: ${ele.released}.</p>
      <button class="btn" id="btnMod" onclick="clickFun(${index})" data-bs-toggle="modal" data-bs-target="#modalShow">More details</button>
    </div>
  </div></div>`


  
})


document.getElementById('dynaCard').innerHTML=multiCard

}

document.addEventListener('DOMContentLoaded',iceFire)




async function clickFun(index){
 
  
let buk = document.getElementById(`title${index}`).innerText
console.log(buk)

document.getElementById('modalHead').innerText=`Some of the characters of "${buk}"`

bukData=data.filter(val=>val.name===buk)

console.log(bukData)

// let charBuk =[bukData[0].characters[1],bukData[0].characters[2],bukData[0].characters[3],bukData[0].characters[4],bukData[0].characters[5]]
// console.log(charBuk)

//1
let char1 = await fetch(`${bukData[0].characters[1]}`)

let char1res= await char1.json();

if(char1res.name===""){
  document.getElementById('name1').innerText=char1res.aliases[0]
}
else{
  document.getElementById('name1').innerText=char1res.name
}
console.log(char1res.name)

//2
let char2 = await fetch(`${bukData[0].characters[2]}`)

let char2res= await char2.json();

if(char2res.name===""){
  document.getElementById('name2').innerText=char2res.aliases[0]
}else{
  document.getElementById('name2').innerText=char2res.name
}
console.log(char2res.name)

//3
let char3 = await fetch(`${bukData[0].characters[3]}`)

let char3res= await char3.json();

if(char3res.name===""){
  document.getElementById('name3').innerText=char3res.aliases[0]
}else{
  document.getElementById('name3').innerText=char3res.name
}
console.log(char3res.name)

//4
let char4 = await fetch(`${bukData[0].characters[4]}`)

let char4res= await char4.json();

if(char4res.name===""){
  document.getElementById('name4').innerText=char4res.aliases[0]
}else{
  document.getElementById('name4').innerText=char4res.name
}
console.log(char4res.name)

//5
let char5 = await fetch(`${bukData[0].characters[5]}`)

let char5res= await char5.json();

if(char5res.name===""){
  document.getElementById('name5').innerText=char5res.aliases[0]
}else{
  document.getElementById('name5').innerText=char5res.name
}
console.log(char5res.name)

}

let emt=()=>{
  document.getElementById('name1').innerText=''
  document.getElementById('name2').innerText=''
  document.getElementById('name3').innerText=''
  document.getElementById('name4').innerText=''
  document.getElementById('name5').innerText=''
}


// let nav=document.createElement('nav')
// nav.setAttribute('id','navBar')
// nav.innerText='BOOKS'
// document.body.append(nav)