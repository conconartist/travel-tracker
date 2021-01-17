class Traveler {
  constructor(travelerData) {
      this.id = travelerData.id;
      this.name = travelerData.name;
      this.travelerType = travelerData.travelerType;
      this.password = travelerData.password;
      this.trips = [];
  }
  filterTrips(tripData) {
      this.trips = tripData.filter(trip => trip.userID === this.id);
      return this.trips;
      //separate into all/ pending/ present/ future?
  }
  determineTotalAmtSpent(tripData, year, destinations) {
      let userTrips = this.filterTrips(tripData);
      let tripsInYear = userTrips.filter(trip => trip.date.includes(year) && trip.status === 'approved');
      let getCostStats = tripsInYear.map(trip => {
        let tripCost = {};
        destinations.forEach(destination => {
            if(trip.destinationID === destination.id) {
              tripCost.totalLodging = destination.estimatedLodgingCostPerDay * trip.duration;
              tripCost.totalFlightCost = destination.estimatedFlightCostPerPerson * trip.travelers;
              tripCost.agentFee = (tripCost.totalLodging + tripCost.totalFlightCost) * 0.1;
            }
        })
        return tripCost;
      })
      let totalCostPerGivenYear = getCostStats.reduce((costSum, costStat) => {
          console.log(costStat)
        costSum += costStat.totalLodging + costStat.totalFlightCost + costStat.agentFee;
        console.log(costSum)
        return costSum;
      }, 0)
      console.log(totalCostPerGivenYear)
      return totalCostPerGivenYear;
  }
  addTrip() {
      //?
  }
}

export default Traveler;