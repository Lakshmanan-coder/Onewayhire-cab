const searchBox = document.querySelector('[data-city-search]')

const search = new google.maps.places.SearchBox(searchBox)
var miles
var kms
var value
var valueint
var cartype
var latitude 
var longitude
var latitude2
var longitude2
var destination=[]
var totalRate
var tripType 
var beta
var displaykms

     var pickupl 
     var pickupd 
     var pickupt
     var dropl 
     var phone 
     var name
     var formelements=[]
    
const car = document.querySelector('#cars');
cartype=car.value
const form = document.querySelector('#pickupform')
const trip =document.querySelector('#tripType')
tripType=trip.value

if(trip.value==="droptrip"){
  
  document.querySelector('.type-selector').classList.add('display-none-js')
}else{
  document.querySelector('.type-selector').classList.remove('display-none-js')
}

form.addEventListener('submit',(e)=>{
      e.preventDefault()
      $('#myModal').modal('show')
      pickupl = searchBox.value
      pickupd = document.querySelector('.date-start').value
      pickupt = document.querySelector('#time').value
      dropl =searchBox1.value
      phone =document.querySelector('#phone').value
      name= document.querySelector('.nameCustomer').value

    formelements.push(pickupl)
    formelements.push(dropl)
    formelements.push(phone)
    formelements.push(pickupt)
    formelements.push(pickupd)
    formelements.push(name)


     searchBox.value=""
     document.querySelector('.date-start').value=""
     document.querySelector('#time').value=""
    searchBox1.value=""
     document.querySelector('#phone').value=""
     document.querySelector('.date-end').value=""
     document.querySelector('.nameCustomer').value=""

     return formelements
})

car.addEventListener('change',()=>{
  console.log(cartype)
  return cartype=car.value;
})

trip.addEventListener('change',()=>{
  console.log(tripType)
  if(trip.value==="droptrip"){
    document.querySelector('.type-selector').classList.add('display-none-js')
  }else{
    document.querySelector('.type-selector').classList.remove('display-none-js')
  }
  return tripType=trip.value;

})
search.addListener('places_changed',()=>{
    const place = search.getPlaces()

    if(place == null) return
    latitude = place[0].geometry.location.lat()
    longitude =place[0].geometry.location.lng()
    console.log(latitude,longitude)
 

})

const searchBox1 = document.querySelector('[data-drop-city]')

const search2 = new google.maps.places.SearchBox(searchBox1)

search2.addListener('places_changed',()=>{
    const place2 = search2.getPlaces()
   
    if(place2 == null) return
   var latitude2 = place2[0].geometry.location.lat()
   var longitude2 =place2[0].geometry.location.lng()
   
    destination.push(latitude2)
    destination.push(longitude2)
    return destination

 

})



async function distanceCalculator(){

  console.log(formelements)
  if((latitude && longitude && destination) != undefined ){
     const lat2 = destination[0]
     const long2=destination[1]
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${latitude},${longitude}&destinations=${lat2},${long2}&key=AIzaSyBxgaV6J5TXybOy9-ZuyfIv7V_JFM47u-0`;
   const data = await fetch(proxy + url);
   const response = await data.json()
  var miles =await response.rows[0].elements[0].distance.text
  kms = miles.split(/(\s+)/)[0]
  

  if(cartype==="sedan"){
    if(tripType==="droptrip"){ 
      value = kms*12
      beta=300
    }else{
      value = kms*10*2
      beta=400
    }
 }else{if(tripType==="droptrip"){ 
  value = kms*15
  beta=300
}else{
  value = kms*13*2
  beta=400
}}

if(tripType==="droptrip"){displaykms=kms}else{
  displaykms=(kms*2)}
 

  valueint=parseInt(value)
  totalRate = valueint + beta
   
  document.querySelector('#nameModal').innerHTML=formelements[5]
  document.querySelector('#totalModal').innerHTML=totalRate
  document.querySelector('#tripInfo').innerHTML=tripType
  document.querySelector('#pickuplModal').innerHTML=`Pickup Location: ${formelements[0]}`
  document.querySelector('#droplModal').innerHTML=`Drop Location:${formelements[1]}`
  
  document.querySelector('#kmsModal').innerHTML=displaykms
  document.querySelector('#rateModal').innerHTML=`Rate:${valueint}`
  document.querySelector('#betaModal').innerHTML=`Driver Beta :${beta}`
  document.querySelector('#totalModals').innerHTML=`Total Rate :${totalRate}`
 
  document.querySelector('.display-none-custom').click()
  console.log(miles)
  console.log(valueint)
console.log(kms)



}else{
    console.log("no values")
  }
} 
// console.log(formelements,totalRate,kms)
document.querySelector('.msg-btn').addEventListener('click',()=>{
  // console.log(formelements,totalRate,kms)
//   $.ajax({
//   type : "POST",  //type of method
//   url  : "sms.php",  //your page
//   data : { kms : displaykms, rate : totalRate,pickupl:formelements[0],dropl:formelements[1],pickupt:formelements[3],phone:formelements[2],pickupd:formelements[4],name:formelements[5]},// passing the values
//   success: function(res){ 
//     alert("Good job!", "We will contact you asap !", "success");
    
//                         console.log(res)      }
// });

$.ajax({
  type : "POST",  //type of method
  url  : "email.php",  //your page
  data : { kms : displaykms, rate : totalRate,pickupl:formelements[0],dropl:formelements[1],pickupt:formelements[3],phone:formelements[2],pickupd:formelements[4],name:formelements[5]},// passing the values
  success: function(res){ 
  
    
                        console.log(res)      }
});

})






