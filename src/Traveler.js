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
    this.presentTrips = [];
}
  filterAllTrips(tripData) {
    this.trips = tripData.filter(trip => trip.userID === this.id);
    return this.trips;
  }

  filterPendingTrips(tripData) {
    this.filterAllTrips(tripData);
    this.pendingTrips = this.trips.filter(trip => trip.status ==='pending');
    return this.pendingTrips;
  }  

  filterUpcomingTrips(tripData, dateToday) {
    this.filterAllTrips(tripData);
    this.upcomingTrips = this.trips.filter(trip => trip.status === 'approved' && parseInt(trip.status === trip.date.replaceAll('/', "")) > parseInt(dateToday.replaceAll('/', "")));
    return this.upcomingTrips;
  }

  filterPastTrips(tripData, dateToday) {
    this.filterAllTrips(tripData);
    this.pastTrips = this.trips.filter(trip => parseInt(trip.date.replaceAll('/', "")) < parseInt(dateToday.replaceAll('/', "")));
    return this.pastTrips;
  }

  filterPresentTrips(tripData, dateToday) {
    this.filterAllTrips(tripData);
    
    let presentTrips = [];
    this.trips.forEach(trip => {
      const tripStartDates = parseInt(trip.date.replaceAll('/', ""));
      const tripEndDates = tripStartDates + trip.duration;
      let todaysDate = parseInt(dateToday.replaceAll('/', ""))
      if(tripStartDates < todaysDate && tripEndDates > todaysDate){
        presentTrips.push(trip)
      }
    })
    return presentTrips;
  }

  determineTotalAmtSpent(tripData, year, destinations) {
      let userTrips = this.filterAllTrips(tripData);
      let tripsInYear = userTrips.filter(trip => trip.date.includes(year) && trip.status === 'approved');
      let getCostStats = tripsInYear.map(trip => {
        let totalTripCost = {};
        destinations.forEach(destination => {
            if(trip.destinationID === destination.id) {
              totalTripCost.totalLodging = destination.estimatedLodgingCostPerDay * trip.duration;
              totalTripCost.totalFlightCost = destination.estimatedFlightCostPerPerson * trip.travelers;
              totalTripCost.agentFee = (totalTripCost.totalLodging + totalTripCost.totalFlightCost) * 0.1;
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
  addTrip() {
      //?
  }
}

export default Traveler;