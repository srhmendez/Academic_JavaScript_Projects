document.querySelector('#title').innerHTML = "Hotel California";
document.querySelector('#slogan').innerHTML = "Such a Lovely Place";



// Hotel California

async function getHotelData() {
    try { 
        const response = await fetch('../Unit10/hotels.json')
        return await response.json() //.json returns json object instead of all the response data

    } catch (error) {

        console.error(error)
    }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)

let hotelList = document.querySelectorAll('button');
hotelList.forEach(hotel => {
    
    hotel.addEventListener('click', hotelInfo)
    
});

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })

    console.log(hotelChoice)

document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel Information` 
document.querySelector('#address').textContent = `${hotelChoice.address}` 
document.querySelector('#roomType').textContent = `${hotelChoice.roomtypes}` 
document.querySelector('#rooms').textContent = `${hotelChoice.rooms}`
document.querySelector('#gym').textContent = `${hotelChoice.gym}` 
document.querySelector('#picture').src = `../../Unit10/images/${hotelChoice.picture}` 




}