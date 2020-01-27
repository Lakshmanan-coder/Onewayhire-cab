window.addEventListener('scroll',()=>{
  if(scrollY > 88){
    document.querySelector('.header-img').classList.add('pos-sticky');
  }else{
    document.querySelector('.header-img').classList.remove('pos-sticky');
  }
})

const oneTrip = document.querySelector('#dropTrip')
const roundTrip = document.querySelector('#roundTrip')
const btn1=document.querySelector('.switch-btn1')
const btn2=document.querySelector('.switch-btn2')
const parabtm = document.querySelectorAll('.para-head')
const paraXuv = document.querySelectorAll('.para-Xuv')
const paraSedan = document.querySelectorAll('.para-sedan')
console.log(oneTrip,roundTrip,btn1,btn2);


console.log(oneTrip)

btn1.addEventListener('click',()=>{
       
            oneTrip.classList.add("fade");
            
      
      paraSedan.forEach((para)=>{
        para.textContent = "Rs 12/KM"
      })
      paraXuv.forEach((para)=>{
        para.textContent = "Rs 15/KM"
      })
     parabtm.forEach((para)=>{
       para.textContent = "Drop Trip"
     })
    
     setInterval(()=>{
      oneTrip.classList.remove("fade")
    },1500)
  })


  btn2.addEventListener('click',()=>{
    
      oneTrip.classList.add("fade");
    
 
    paraSedan.forEach((para)=>{
      para.textContent = "Rs 10/KM"
    })
    paraXuv.forEach((para)=>{
      para.textContent = "Rs 13/KM"
    })
    parabtm.forEach((para)=>{
      
      para.textContent = "Round Trip"
    })
    setInterval(()=>{
      oneTrip.classList.remove("fade")
    },1500)
 })

console.log(roundTrip)

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:3,
    loop:true,
    
    
    margin:10,
  
   
  });
});

