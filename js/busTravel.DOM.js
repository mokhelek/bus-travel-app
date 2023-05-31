const returnPriceElem = document.querySelector(".price-return")
const returnTripsElem = document.querySelector(".trips-return")
const singlePriceElem = document.querySelector(".price-single")
const singleTripsElem = document.querySelector(".trips-single")


const busTravelInstance = busTravel() ;

function displayInfo(){
    let returnTripElem = document.querySelector("#returnCheck") ;

    if(returnTripElem.checked){
        returnPriceElem.innerHTML = (busTravelInstance.getPricePerTrip()).toFixed(2) ;

        returnTripsElem.innerHTML = busTravelInstance.getNumOfTrips() ;

        singlePriceElem.innerHTML = 0;

        singleTripsElem.innerHTML = 0 ;
    }else{
        singlePriceElem.innerHTML = (busTravelInstance.getPricePerTrip()).toFixed(2) ;

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

    let pointsError = document.querySelector("#points-error");
    let locationError = document.querySelector("#location-error");
    let timeError = document.querySelector("#time-error");



    if(timeRadio && pointsInput.value != "" && startLocations.value != "" ){
        busTravelInstance.setDepartureLocation(startLocations.value) ;
        busTravelInstance.setTravelPointsAmount(Number(pointsInput.value)) ;
    
        busTravelInstance.returnTrip(returnTripElem.checked) ;
        busTravelInstance.peakTime(timeRadio.value) ;
    
        busTravelInstance.numberOfTrips()
        busTravelInstance.setPricePerTrip()
        displayInfo();
    }else{
        // *Displaying pop-up errors based on conditions
        if(pointsInput.value == ""){
            pointsError.style.display = "block"
            setTimeout(function(){
                pointsError.style.display = "none"
            },4000)
        }
        if(!timeRadio){
            timeError.style.display = "block"
            setTimeout(function(){
                timeError.style.display = "none"
            },4000)
        }
        if(startLocations.value == ""){
            locationError.style.display = "block"
            setTimeout(function(){
                locationError.style.display = "none"
            },4000)
        }
    }

  
}

// * Adding event on Button
const calculateBtn = document.querySelector(".calculate-btn");

calculateBtn.addEventListener("click", function (){
    calculateBtnClicked()
})