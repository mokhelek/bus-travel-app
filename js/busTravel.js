
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


    /*
        * first check if a travel is a single or return
        * then check  what time is selected
        * if the travel is return double the cost money
        * if the time is peak the add 25% to the cost money
        * combine these and divide the points with the total cost 
        * take the whole number and re-assign to num of trips
    */

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

    /*
        * depending on whether the bool is peak or off-peak, re-assign the peakTime val
    */
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

    /*
        * if the trip is a return and off-peak
        * then double the cost price
        * if the trip is single and off-peak
        * then the price stays the same
        * if the trip is return and on peak
        * the double the cost and add 25% of the cost
        * if the trip is single and on peak
        * the add 25% to the cost
    */

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