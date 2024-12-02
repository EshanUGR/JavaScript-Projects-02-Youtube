const colors=["red","blue","grey","pink","purple","green","black","orange"];
console.log('jhi');
const btn=document.getElementById('btn');
const color=document.querySelector('.color');
console.log(color);

btn.addEventListener('click',()=>
{
  console.log('clicked');
  //get random number
const randomNumber = Math.floor(Math.random() * colors.length);
console.log(randomNumber);
document.body.style.backgroundColor=colors[randomNumber];

color.textContent=`${colors[randomNumber]}`
color.style.backgroundColor=colors[randomNumber];


})