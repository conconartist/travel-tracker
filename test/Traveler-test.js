import { expect} from 'chai';

import Traveler from '../src/Traveler.js';
import travelers from '../test/data/traveler-data.js';
import tripData from '../test/data/trip-data.js';
import destinations from '../test/data/destination-data.js'

let traveler1, traveler2; //let tripData?

describe('Traveler', () => {
  beforeEach(() => {
    traveler1 = new Traveler(travelers[0], tripData);
    traveler2 = new Traveler(travelers[1]);
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
    expect(traveler1.trips).to.eql([]);
  });
  it('should have a total amount spent on trips for the year, including a 10% agent fee', () => {
    expect(traveler1.totalAmtSpent).to.equal();
  });
  it('should be able to determine the total amount spent on trips, including the agent fee', () => {
    expect(traveler1.determineTotalAmtSpent(tripData, 2020, destinations)).to.equal();
  })
  it('should be able to login to the dashboard with a password and user ID', () => {
    expect(traveler1.loginTraveler).to.equal();
  })
});