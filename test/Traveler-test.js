import { expect} from 'chai';

import Traveler from '../src/Traveler.js';
import travelers from '../test/data/traveler-data.js';
import tripData from '../test/data/trip-data.js';
import destinations from '../test/data/destination-data.js'

let traveler1, traveler2, traveler3, dateToday;

describe('Traveler', () => {
  beforeEach(() => {
    dateToday = "2020/03/04";
    traveler1 = new Traveler(travelers[0], tripData);
    traveler2 = new Traveler(travelers[1], tripData);
    traveler3 = new Traveler(travelers[2], tripData);
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
    expect(traveler1.password).to.equal("travel2020");
  });

  it('should have a list of trips', () => {
    traveler1.filterAllTrips(tripData);
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

  it('should be able to filter their pending trips', () => {
    traveler1.filterPendingTrips(tripData);
    expect(traveler1.pendingTrips).to.eql([{
      "id": 2,
      "userID": 3,
      "destinationID": 25,
      "travelers": 5,
      "date": "2020/10/04",
      "duration": 18,
      "status": "pending",
      "suggestedActivities": []
  }]);
    traveler2.filterPendingTrips(tripData);
    expect(traveler2.pendingTrips).to.eql([]);
  });

  it('should be able to filter their upcoming trips', () => {
    traveler2.filterUpcomingTrips(tripData, dateToday);
    expect(traveler2.upcomingTrips).to.eql([]);
  });

  it('should be able to filter their past trips', () => {
    traveler1.filterPastTrips(tripData, dateToday);
    expect(traveler1.pastTrips).to.eql([{
      "id": 1,
      "userID": 3,
      "destinationID": 49,
      "travelers": 1,
      "date": '2019/09/16',
      "duration": 8,
      "status": 'approved',
      "suggestedActivities": [ 'shopping', 'dining' ]
    }]);
    traveler2.filterPastTrips(tripData, dateToday);
    expect(traveler2.pastTrips).to.eql([{
      "id": 9,
      "userID": 36,
      "destinationID": 51,
      "travelers": 5,
      "date": '2019/12/19',
      "duration": 19,
      "status": 'approved',
      "suggestedActivities": []
    }]);
  });

  it('should be able to filter their present trips', () => {
    traveler1.filterPresentTrips(tripData, dateToday);
    expect(traveler1.presentTrips).to.eql([]);
    traveler3.filterPresentTrips(tripData, dateToday);
    expect(traveler3.presentTrips).to.eql([{
      "id": 5,
      "userID": 42,
      "destinationID": 29,
      "travelers": 3,
      "date": "2020/03/01",
      "duration": 18,
      "status": "approved",
      "suggestedActivities": []
  }]);
  });

  it('should be able to determine the total amount spent on trips, including the agent fee, for a specified year', () => {
    expect(traveler1.determineTotalAmtSpent(tripData, '2019', destinations)).to.equal(2200);
    expect(traveler1.determineTotalAmtSpent(tripData, '2020', destinations)).to.equal(10241);

  })
});