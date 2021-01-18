class Traveler {
  constructor(travelerData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
    this.username = "traveler" + this.id;
    this.password = "travel2020";
    this.trips = [];
    this.pendingTrips = [];
    this.upcomingTrips = [];
    this.pastTrips = [];
}
  filterAllTrips(tripData) {
    this.trips = tripData.filter(trip => trip.userID === this.id);
    return this.trips;
    //separate into all/ pending/ present/ future?
  }
  filterPendingTrips(tripData) {
    this.filterAllTrips(tripData);
    this.pendingTrips = this.trips.filter(trip => trip.status ==='pending');
    return this.pendingTrips;
  }  
  filterUpcomingTrips(tripData, dateToday) {
    this.filterAllTrips(tripData);
    this.upcomingTrips = this.trips.filter(trip => Date.parse(trip.date) > Date.parse(dateToday));
    return this.upcomingTrips;
  }
  filterPastTrips(tripData, dateToday) {
    this.filterAllTrips(tripData);
    this.pastTrips = this.trips.filter(trip => Date.parse(trip.date) < Date.parse(dateToday));
    return this.pastTrips;
  }

  //filter Today's trip?

  determineTotalAmtSpent(tripData, year, destinations) {
      let userTrips = this.filterTrips(tripData);
      let tripsInYear = userTrips.filter(trip => trip.date.includes(year) && trip.status === 'approved');
      let getCostStats = tripsInYear.map(trip => {
        let totalTripCost = {};
        destinations.forEach(destination => {
            if(trip.destinationID === destination.id) {
              totalTripCost.totalLodging = destination.estimatedLodgingCostPerDay * trip.duration;
              totalTripCost.totalFlightCost = destination.estimatedFlightCostPerPerson * trip.travelers;
              totalTripCost.agentFee = (tripCost.totalLodging + tripCost.totalFlightCost) * 0.1;
            }
        })
        return totalTripCost;
      });
      let totalCostPerGivenYear = getCostStats.reduce((costSum, costStat) => {
        costSum += costStat.totalLodging + costStat.totalFlightCost + costStat.agentFee;
        return costSum;
      }, 0);
      return totalCostPerGivenYear;
  }
  getTripCostEstimate(trip, destinations) {
    let findDestination = destinations.find(destination => destination.id === trip.destinationID);
    let lodgingEstimate = findDestination.estimatedLodgingCostPerDay * trip.duration;
    let flightEstimate = findDestination.estimatedFlightCostPerPerson * trip.travelers;
    let agentFee = (lodgingEstimate + flightEstimate) * 0.1;
    let tripEstimate = lodgingEstimate + flightEstimate + agentFee;
    return tripEstimate;
  }
  addTrip() {
      //?
  }
}

export default Traveler;