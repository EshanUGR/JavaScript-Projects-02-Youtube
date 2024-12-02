let count=0;
const value=document.querySelector('#span');

const btns=document.querySelectorAll('.btn');

btns.forEach((btn)=>
{

btn.addEventListener('click',(e)=>
{
const styles=e.currentTarget.classList;
console.log(styles);


if (styles.contains("increment")) {
  count++;
  console.log(count);
  value.innerHTML = `${count}`;
}
else if(styles.contains("decrement"))
{
count--;
value.innerHTML = `${count}`;
}
else{
  count=0;
  value.innerHTML = `${count}`;
}

if(count>0)
{
  value.style.color='green'
}
else if(count<0)
{
   value.style.color = "red";
}
else{
   value.style.color = "black";
}
})



})