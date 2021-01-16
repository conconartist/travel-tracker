class Traveler {
  constructor(id, name, travelerType, password, trips, amtSpent, totalAmtSpent) {
      this.id = id;
      this.name = name;
      this.travelerType = travelerType;
      this.password = password;
      this.trips = trips;
      this.amtSpent = amtSpent; 
      this.totalAmtSpent = totalAmtSpent;
  }
  determineTotalAmtSpent() {
      //this year
      //10% agent fee
  }
  loginTraveler() {
      //enter username and password === traveler
  }
}

export default Traveler;