const returnPriceElem = document.querySelector(".price-return")
const returnTripsElem = document.querySelector(".trips-return")
const singlePriceElem = document.querySelector(".price-single")
const singleTripsElem = document.querySelector(".trips-single")


const busTravelInstance = busTravel() ;

function displayInfo(){
    singlePriceElem.innerHTML = busTravelInstance.getPricePerTrip() ;

    singleTripsElem.innerHTML = busTravelInstance.getNumOfTrips() ;
 
}

function calculateBtnClicked(){
    let pointsInput =  document.querySelector("#pointsInput");
    let startLocations = document.querySelector("#start-locations")
    
    busTravelInstance.setDepartureLocation(startLocations.value) ;
    busTravelInstance.setTravelPointsAmount(Number(pointsInput.value)) ;
    busTravelInstance.numberOfTrips()
    busTravelInstance.setPricePerTrip()
    displayInfo();
}

const calculateBtn = document.querySelector(".calculate-btn");

calculateBtn.addEventListener("click", function (){
    calculateBtnClicked()
})