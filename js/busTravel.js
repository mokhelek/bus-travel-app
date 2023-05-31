
function busTravel(){
    
    let travelPointsAmount = 0 ;
    let departureLocation = "" ;
    
    let travelCostObj = {
        "Khayelitsha" : 40,
        "Dunoon" : 25,
        "Mitchells Plain" :30
    }

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

    function peakOrOffPeak(time){
        if(time == "peak"){
            travelPointsAmount += 0.25 * getTravelPointsAmount() ;
        }
    }


    return {
        setTravelPointsAmount,
        setDepartureLocation,

        getTravelPointsAmount,
        getDepartureLocation
    }
}