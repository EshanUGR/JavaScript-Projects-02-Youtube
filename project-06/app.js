// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navToggle=document.querySelector('.nav-toggle');
const link=document.querySelector('.links');


navToggle.addEventListener('click',()=>

  {
    // if(link.classList.contains('show-links'))
// {
//   link.classList.remove('show-links');
// }
// else{
//   link.classList.add('show-links');
// }
link.classList.toggle("show-links");
})

