import { expect} from 'chai';

import Traveler from '../src/Traveler.js';
import travelers from '../test/data/traveler-data.js';
import tripData from '../test/data/trip-data.js';
import destinations from '../test/data/destination-data.js'

let traveler1, traveler2; //let tripData?

describe('Traveler', () => {
  beforeEach(() => {
    traveler1 = new Traveler(travelers[0], tripData);
    traveler2 = new Traveler(travelers[1], tripData);
  });

  it('should have an id', () => {
    expect(traveler1.id).to.equal(3);
    expect(traveler2.id).to.equal(36);
  });

  it('should have a name', () => {
    expect(traveler1.name).to.equal("Julian Ullyott");
    expect(traveler2.name).to.equal("Lorettalorna Borell");
  });

  it('should have a property that suggests their traveler type', () => {
    expect(traveler1.travelerType).to.equal("relaxer");
    expect(traveler2.travelerType).to.equal("foodie");
  });
  it('should have a password', () => {
    expect(traveler1.password).to.equal();
  });
  it('should have a list of trips', () => {
    traveler1.filterTrips(tripData);
    expect(traveler1.trips).to.eql([{
      "id": 1,
      "userID": 3,
      "destinationID": 49,
      "travelers": 1,
      "date": "2019/09/16",
      "duration": 8,
      "status": "approved",
      "suggestedActivities": ["shopping", "dining"]
  },
  {
      "id": 2,
      "userID": 3,
      "destinationID": 25,
      "travelers": 5,
      "date": "2020/10/04",
      "duration": 18,
      "status": "pending",
      "suggestedActivities": []
  },
  {
      "id": 3,
      "userID": 3,
      "destinationID": 22,
      "travelers": 4,
      "date": "2020/05/22",
      "duration": 17,
      "status": "approved",
      "suggestedActivities": []
  }, 
  {
    "id": 6,
    "userID": 3,
    "destinationID": 35,
    "travelers": 3,
    "date": "2020/06/29",
    "duration": 9,
    "status": "approved",
    "suggestedActivities": []
}]);
  });

  it('should be able to determine the total amount spent on trips, including the agent fee, for a specified year', () => {
    expect(traveler1.determineTotalAmtSpent(tripData, '2019', destinations)).to.equal(2200);
    expect(traveler1.determineTotalAmtSpent(tripData, '2020', destinations)).to.equal(10241);

  })
});