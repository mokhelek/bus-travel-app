const returnPriceElem = document.querySelector(".price-return")
const returnTripsElem = document.querySelector(".trips-return")
const singlePriceElem = document.querySelector(".price-single")
const singleTripsElem = document.querySelector(".trips-single")


const busTravelInstance = busTravel() ;

function displayInfo(){
    let returnTripElem = document.querySelector("#returnCheck") ;

    if(returnTripElem.checked){
        returnPriceElem.innerHTML = busTravelInstance.getPricePerTrip() ;

        returnTripsElem.innerHTML = busTravelInstance.getNumOfTrips() ;

        singlePriceElem.innerHTML = 0;

        singleTripsElem.innerHTML = 0 ;
    }else{
        singlePriceElem.innerHTML = busTravelInstance.getPricePerTrip() ;

        singleTripsElem.innerHTML = busTravelInstance.getNumOfTrips() ;

        returnPriceElem.innerHTML = 0;

        returnTripsElem.innerHTML = 0 ;
    }
    

  
 
}

function calculateBtnClicked(){
    let pointsInput =  document.querySelector("#pointsInput");
    let startLocations = document.querySelector("#start-locations")

    let timeRadio = document.querySelector(".time:checked");
    let returnTripElem = document.querySelector("#returnCheck")

    busTravelInstance.setDepartureLocation(startLocations.value) ;
    busTravelInstance.setTravelPointsAmount(Number(pointsInput.value)) ;

    busTravelInstance.returnTrip(returnTripElem.checked) ;
    busTravelInstance.peakTime(timeRadio.value) ;

    busTravelInstance.numberOfTrips()
    busTravelInstance.setPricePerTrip()
    displayInfo();
}

const calculateBtn = document.querySelector(".calculate-btn");

calculateBtn.addEventListener("click", function (){
    calculateBtnClicked()
})