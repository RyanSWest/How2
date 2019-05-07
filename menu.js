// class Dropdown{
//     constructor(element){
//         this.element = document.querySelectorAll('.dropdown');

//         this.button= document.querySelectorAll('.dropdown-button');

//         this.content =document.querySelector('.dropdown-content');
//          this.content.classList =('.content-hidden')

//         this.button.addEventListener('click',() =>this.toggleContent())
//     }

//     toggleContent(){
//         this.content.classList.toggle('dropdown-content')
//     }
// }
// let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));

const dropMenu = ()=> {

    stuff.classList.toggle('dropdown-open');
}



 let stuff = document.querySelector('.dropdown-content');
  console.log(stuff);
   let dButton = document.querySelector('.dropdown-button');

const slogan = document.querySelector('.slogan');
 const mtn = document.querySelector('.mtn')    
   
//   stuff.style.classList =('.dropdown-hidden')
const middle = document.querySelector('.middle')
const newA = document.createElement('a');
newA.textContent ='new Stuff';
dButton.addEventListener('click',dropMenu)
 console.log(newA)

 //adding a signup sheet to the DOM
 let bottomContent = document.querySelector('#passwordDiv')
 let nameInput = document.createElement('input');
 let emailInput = document.createElement('input');
 let name = document.createElement('span');
 name.textContent ='name :';

 let email = document.createElement('span');
 email.textContent= 'email:';
 
 let passwordInput = document.createElement('input')
 let password = document.createElement('span')
 password.textContent = 'create password'
 let p = document.querySelector('p');
 let signUp = document.querySelector('button')
 signUp.addEventListener('click' ,function(){
      bottomContent.append(name, nameInput, email,emailInput, password, passwordInput)
 })
   console.log(bottomContent)