class Trip {
  constructor(id, userID, destination, travelers, date, duration, status, suggestedActivities) {
      this.id = id;
      this.userID = userID;
      this.destinationID = destination;
      this.travelers = travelers;
      this.date = date;
      this.duration = duration;
      this.status = status;
      this.suggestedActivities = suggestedActivities;
  }
  updateTripStatus() {
      //for agent 
  }
}

export default Trip;