
function busTravel(){
    
    let travelPointsAmount = 0 ;
    let departureLocation = "" ;
    

    function setTravelPointsAmount(amount){
        travelPointsAmount = amount ;
    }

    function getTravelAmount(){
        return travelPointsAmount ;
    }

    function setDepartureLocation(locationFrom){
        departureLocation = locationFrom ;
    }
   
    function getDepartureLocation(){
        return departureLocation ;
    }


    return {
        setTravelPointsAmount,
        setDepartureLocation,

        getTravelAmount,
        getDepartureLocation
    }
}