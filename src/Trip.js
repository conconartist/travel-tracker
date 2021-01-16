class Trip {
  constructor(tripData) {
      this.id = tripData.id;
      this.userID = tripData.userID;
      this.destinationID = tripData.destination;
      this.travelers = tripData.travelers;
      this.date = tripData.date;
      this.duration = tripData.duration;
      this.status = tripData.status;
      this.suggestedActivities = tripData.suggestedActivities;
  }
  updateTripStatus() {
      //for agent 
  }
}

export default Trip;