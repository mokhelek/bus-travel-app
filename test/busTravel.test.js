
describe("Testing The Bus Travel Functionalities", function(){
    it("should be able to set the amount of travel points ", function(){
        const busTravelInstance = busTravel() ;

        busTravelInstance.setTravelPointsAmount(50);


        assert.equal(50, busTravelInstance.getTravelAmount() )
    })
    it("should allow points amount to be changed", function(){
        const busTravelInstance = busTravel() ;

        busTravelInstance.setTravelPointsAmount(50);

        busTravelInstance.setTravelPointsAmount(30);

        busTravelInstance.setTravelPointsAmount(165);


        assert.equal(165, busTravelInstance.getTravelAmount() )
    })
    it("should be able to set the departure location", function(){
        const busTravelInstance = busTravel() ;

        busTravelInstance.setDepartureLocation("Khayelitsha") ;

        assert.equal("Khayelitsha", busTravelInstance.getDepartureLocation() )
    })
    it("should be able to change the departure location", function(){
        const busTravelInstance = busTravel() ;

        busTravelInstance.setDepartureLocation("Khayelitsha") ;

        assert.equal("Khayelitsha", busTravelInstance.getDepartureLocation() )


        busTravelInstance.setDepartureLocation("Mitchells Plain") ;

        assert.equal("Mitchells Plain", busTravelInstance.getDepartureLocation() )
    })
})
