class Destination {
  constructor(destinationData) {
    console.log(destinationData)
      this.id = destinationData.id;
      this.destination = destinationData.destination;
      this.estimatedLodgingCostPerDay = destinationData.estimatedLodgingCostPerDay;
      this.estimatedFlightCostPerPerson = destinationData.estimatedFlightCostPerPerson;
      this.image = destinationData.image;
      this.alt = destinationData.alt;
  }
}

export default Destination;