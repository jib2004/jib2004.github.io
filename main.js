// const special = document.querySelector('.specialties')
// const projects = document.querySelector('.project')
// const preview = document.querySelector('.preview')
// const footer = document.querySelector('.footer')
// window.addEventListener('scroll' ,()=>{
//   const scrollable = document.documentElement.scrollHeight - window.innerHeight
//   const scrolled = window.scrollY;
//   let point = 3/100 * scrollable
//    console.log(Math.ceil(scrolled))
//   // console.log(scrollable)
//     console.log(Math.ceil(point))

//    if(Math.ceil(scrolled) === 1){
//     // alert('33%')
//       special.classList.add('specialties-class')
//       projects.classList.add('project-class')
//       preview.classList.add('preview-class')
//       footer.classList.add("footer-class")
//    }
 


// })

let display = () =>{
   const nav = document.querySelector(".nav");
   const close = document.querySelector(".close-menu");
   const menuDisplay = document.querySelector(".menu-Display");
   menuDisplay.addEventListener('click', ()=>{
    nav.style.display ="block ";
   
   }) 
   close.addEventListener('click', ()=>{
        nav.style.display = "none"
   })
}

display();
 const aboutMe = document.getElementById('about_me');
 aboutMe.addEventListener('click', (e)=>{
   e.preventDefault()
 })


const observer = new IntersectionObserver((e)=>{
    e.forEach((entry)=>{
      if(entry.isIntersecting){
            entry.target.classList.add('show')
      }
    });
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el)=>observer.observe(el));


console.log('Hello World')
let arr = [];
for(let i = 0 ; i < arr.length + 1; i++){
 if(i > 20){
  
  break;
 } else{
  arr.push(i)
  // if(){
  //   arr.push(i)
  //     console.log(arr)

  // }else{
  //   return ;
  // }

 

  // continue;
 }
}





