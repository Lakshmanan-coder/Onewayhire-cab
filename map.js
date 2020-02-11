const searchBox = document.querySelector('[data-city-search]')

const search = new google.maps.places.SearchBox(searchBox)

search.addListener('places_changed',()=>{
    const place = search.getPlaces()

    if(place == null) return
    const latitude = place[0].geometry.location.lat()
    const longitude =place[0].geometry.location.lng()
    console.log(latitude,longitude)
 

})

const searchBox1 = document.querySelector('[data-drop-city]')

const search2 = new google.maps.places.SearchBox(searchBox1)

search2.addListener('places_changed',()=>{
    const place2 = search2.getPlaces()
      console.log(search2.getPlaces())
    if(place2 == null) return
    const latitude2 = place2[0].geometry.location.lat()
    const longitude2 =place2[0].geometry.location.lng()
    console.log(latitude2,longitude2)
 

})

function initMap(){
    srcLocation = new google.maps.LatLng(latitude, longitude);
    dstLocation = new google.maps.LatLng(latitude1, longitude2);
    var distance = google.maps.geometry.spherical.computeDistanceBetween(srcLocation, dstLocation)
    console.log(distance/1000); // Distance in Kms.
}