describe("Testing The Bus Travel Functionalities", function () {
    it("should be able to set the amount of travel points ", function () {
        const busTravelInstance = busTravel();

        busTravelInstance.setTravelPointsAmount(50);

        assert.equal(50, busTravelInstance.getTravelPointsAmount());
    });
    it("should allow points amount to be changed", function () {
        const busTravelInstance = busTravel();

        busTravelInstance.setTravelPointsAmount(50);

        busTravelInstance.setTravelPointsAmount(30);

        busTravelInstance.setTravelPointsAmount(165);

        assert.equal(165, busTravelInstance.getTravelPointsAmount());
    });
    it("should be able to set the departure location", function () {
        const busTravelInstance = busTravel();

        busTravelInstance.setDepartureLocation("Khayelitsha");

        assert.equal("Khayelitsha", busTravelInstance.getDepartureLocation());
    });
    it("should be able to change the departure location", function () {
        const busTravelInstance = busTravel();

        busTravelInstance.setDepartureLocation("Khayelitsha");

        assert.equal("Khayelitsha", busTravelInstance.getDepartureLocation());

        busTravelInstance.setDepartureLocation("Mitchells Plain");

        assert.equal("Mitchells Plain", busTravelInstance.getDepartureLocation());
    });
});

describe("Testing Number of Possible Trips and Valid Trips", function () {
    it("should return 2 since it costs R40 to travel from khayelitsha", function () {
        const busTravelInstance = busTravel();

        busTravelInstance.setTravelPointsAmount(100);
        busTravelInstance.setDepartureLocation("Khayelitsha");

        busTravelInstance.numberOfTrips();
        assert.equal(2, busTravelInstance.getNumOfTrips());
    });

    it("should return 4 since it costs R25 to travel from Dunoon", function () {
        const busTravelInstance = busTravel();

        busTravelInstance.setTravelPointsAmount(100);
        busTravelInstance.setDepartureLocation("Dunoon");

        busTravelInstance.numberOfTrips();
        assert.equal(4, busTravelInstance.getNumOfTrips());
    });

    it("should return 3 since it costs R30 to travel from Mitchells Plain", function () {
        const busTravelInstance = busTravel();

        busTravelInstance.setTravelPointsAmount(100);
        busTravelInstance.setDepartureLocation("Mitchells Plain");

        busTravelInstance.numberOfTrips();
        assert.equal(3, busTravelInstance.getNumOfTrips());
    });

    it("should return 1 since it wil costs R80 to travel from Khayelitsha return", function () {
        const busTravelInstance = busTravel();

        busTravelInstance.setTravelPointsAmount(100);

        busTravelInstance.setDepartureLocation("Khayelitsha");

        busTravelInstance.returnTrip(true);

        busTravelInstance.numberOfTrips();


        assert.equal(1, busTravelInstance.getNumOfTrips());
    });

    it("should return 2 since it wil costs 50 to travel from Dunoon return", function () {
        const busTravelInstance = busTravel();

        busTravelInstance.setTravelPointsAmount(100);

        busTravelInstance.setDepartureLocation("Dunoon");

        busTravelInstance.returnTrip(true);

        busTravelInstance.numberOfTrips();


        assert.equal(2, busTravelInstance.getNumOfTrips());
    });

    it("should return 1 since it will costs R62.5 to travel from Dunoon return", function () {
        const busTravelInstance = busTravel();

        busTravelInstance.setTravelPointsAmount(100);

        busTravelInstance.setDepartureLocation("Dunoon");

        busTravelInstance.returnTrip(true);
        busTravelInstance.peakTime("peak")


        busTravelInstance.numberOfTrips();


        assert.equal(1, busTravelInstance.getNumOfTrips());
    });
});

describe("Testing For trip prices", function () {
    it("should return 40 for a single trip from khayelitsha at off-peak", function () {
        const busTravelInstance = busTravel();

        busTravelInstance.setTravelPointsAmount(100);
        busTravelInstance.setDepartureLocation("Khayelitsha");

        busTravelInstance.setPricePerTrip();

        assert.equal(40, busTravelInstance.getPricePerTrip());
    });
    it("should return 80 for a return trip from khayelitsha at off-peak", function () {
        const busTravelInstance = busTravel();

        busTravelInstance.setTravelPointsAmount(100);
        busTravelInstance.setDepartureLocation("Khayelitsha");

        busTravelInstance.returnTrip(true);
        busTravelInstance.setPricePerTrip();

        assert.equal(80, busTravelInstance.getPricePerTrip());
    });

    it("should return 50 for a return trip from Dunoon at off-peak", function () {
        const busTravelInstance = busTravel();

        busTravelInstance.setTravelPointsAmount(100);
        busTravelInstance.setDepartureLocation("Dunoon");

        busTravelInstance.returnTrip(true);
        busTravelInstance.setPricePerTrip();

        assert.equal(50, busTravelInstance.getPricePerTrip());
    });
    it("should return 60 for a return trip from Mitchells Plain at off-peak", function () {
        const busTravelInstance = busTravel();

        busTravelInstance.setTravelPointsAmount(100);
        busTravelInstance.setDepartureLocation("Mitchells Plain");

        busTravelInstance.returnTrip(true);
        busTravelInstance.setPricePerTrip();

        assert.equal(60, busTravelInstance.getPricePerTrip());
    });

    it("should return 37.5 for a single trip from Mitchells Plain at peak", function () {
        const busTravelInstance = busTravel();

        busTravelInstance.setTravelPointsAmount(200);
        busTravelInstance.setDepartureLocation("Mitchells Plain");

        busTravelInstance.returnTrip(false);
        busTravelInstance.peakTime("peak");
        busTravelInstance.setPricePerTrip();

        assert.equal(37.5, busTravelInstance.getPricePerTrip());
    });
    it("should return 50 for a single trip from Khayelitsha at peak", function () {
        const busTravelInstance = busTravel();

        busTravelInstance.setTravelPointsAmount(200);
        busTravelInstance.setDepartureLocation("Khayelitsha");

        busTravelInstance.returnTrip(false);
        busTravelInstance.peakTime("peak");
        busTravelInstance.setPricePerTrip();

        assert.equal(50, busTravelInstance.getPricePerTrip());
    });

    it("should return 31.25 for a single trip from Dunoon at peak", function () {
        const busTravelInstance = busTravel();

        busTravelInstance.setTravelPointsAmount(200);
        busTravelInstance.setDepartureLocation("Dunoon");

        busTravelInstance.returnTrip(false);
        busTravelInstance.peakTime("peak");
        busTravelInstance.setPricePerTrip();

        assert.equal(31.25, busTravelInstance.getPricePerTrip());
    });

    it("should return 62.5 for a return trip from Dunoon at peak", function () {
        const busTravelInstance = busTravel();

        busTravelInstance.setTravelPointsAmount(200);
        busTravelInstance.setDepartureLocation("Dunoon");

        busTravelInstance.returnTrip(true);
        busTravelInstance.peakTime("peak");
        busTravelInstance.setPricePerTrip();

        assert.equal(62.5, busTravelInstance.getPricePerTrip());
    });

    it("should return 62.5 for a return trip from Khayelitsha at peak", function () {
        const busTravelInstance = busTravel();

        busTravelInstance.setTravelPointsAmount(200);
        busTravelInstance.setDepartureLocation("Khayelitsha");

        busTravelInstance.returnTrip(true);
        busTravelInstance.peakTime("peak");
        busTravelInstance.setPricePerTrip();

        assert.equal(100, busTravelInstance.getPricePerTrip());
    });
});
