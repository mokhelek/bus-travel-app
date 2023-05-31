
function busTravel(){
    
    let travelPointsAmount = 0 ; // * The Total Points I have for trips
    let departureLocation = "" ; // * The location from which i am traveling
    
    let travelCostObj = {
        "Khayelitsha" : 40,
        "Dunoon" : 25,
        "Mitchells Plain" :30
    }

    let returnTripVal = false ;
    let peakTimeVal = false ;
    let pricePerTrip = 0 ;
    let numOfTrips = 0;

    function setTravelPointsAmount(amount){
        travelPointsAmount = amount ;
    }


    function getTravelPointsAmount(){
        return travelPointsAmount ;
    }

    function setDepartureLocation(locationFrom){
        departureLocation = locationFrom ;
    }
   
    function getDepartureLocation(){
        return departureLocation ;
    }

    // ? if bool = true then the trip is a return
    // ? else it is a single
    function returnTrip(bool){
        returnTripVal = bool ;
    }

    function checkReturnTrip(){
        return returnTripVal;
    }



    function numberOfTrips(){

        
        if( checkReturnTrip() == true && checkPeak()==false){
    
            numOfTrips = Math.trunc( getTravelPointsAmount() / (travelCostObj[getDepartureLocation()]*2)  )
   
        }
        if(checkReturnTrip()==false && checkPeak()==false){
            numOfTrips = Math.trunc(getTravelPointsAmount() / travelCostObj[getDepartureLocation()] )

        }


        if(checkReturnTrip() == true && checkPeak()==true){
            numOfTrips = Math.trunc(getTravelPointsAmount() / ( (travelCostObj[getDepartureLocation()]*2) + (0.25 *travelCostObj[getDepartureLocation()]*2) ))

        }
        if(checkReturnTrip()==false && checkPeak()==true){
            numOfTrips = Math.trunc(getTravelPointsAmount() / ( travelCostObj[getDepartureLocation()] + (0.25 *travelCostObj[getDepartureLocation()]) ) )

        }
    }

    function getNumOfTrips(){
        return numOfTrips ;
    }

    function peakTime(bool){
        if(bool == "peak"){
           peakTimeVal = true
        }else{
            peakTimeVal = false
        }
    }

    function checkPeak(){
        return peakTimeVal ;
    }

    function setPricePerTrip(){
        if( checkReturnTrip() == true && checkPeak()==false){
            pricePerTrip =  travelCostObj[getDepartureLocation()]*2 
        }
        if(checkReturnTrip()==false && checkPeak()==false){
            pricePerTrip = travelCostObj[getDepartureLocation()] 
        }

        if(checkReturnTrip() == true && checkPeak()==true){
            pricePerTrip = (travelCostObj[getDepartureLocation()]*2) + (0.25 *travelCostObj[getDepartureLocation()]*2) 
        }
        if(checkReturnTrip()==false && checkPeak()==true){
            pricePerTrip = travelCostObj[getDepartureLocation()] + (0.25 *travelCostObj[getDepartureLocation()]) 
        }
    }

    function getPricePerTrip(){
        return pricePerTrip ;
    }

    return {
        setTravelPointsAmount,
        setDepartureLocation,
        setPricePerTrip,
        getTravelPointsAmount,
        getDepartureLocation,
        getPricePerTrip,
        numberOfTrips,
        returnTrip,
        checkReturnTrip,
        peakTime,
        getNumOfTrips,
    }
}