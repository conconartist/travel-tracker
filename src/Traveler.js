class Traveler {
  constructor(travelerData) {
      this.id = travelerData.id;
      this.name = travelerData.name;
      this.travelerType = travelerData.travelerType;
      this.password = travelerData.password;
      this.trips = travelerData.trips;
      this.amtSpent = travelerData.amtSpent; 
      this.totalAmtSpent = travelerData.totalAmtSpent;
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