import { expect } from 'chai';

import Trip from '../src/Trip.js';
import Traveler from '../src/Traveler.js';
import travelers from '../test/data/traveler-data.js';
import tripData from '../test/data/trip-data.js';

let trip1;

describe('Trip', () => {
  beforeEach(() => {
    // traveler = new Traveler(travelers[0]);
    trip1 = new Trip(tripData[0]);
  });
  it('should have an id', () => {
      expect(trip1.id).to.equal(1);
  });
  it('should be associated with a user', () => {
    expect(trip1.userID).to.equal(3);
  });
  it('should have a destination', () => {
    expect(trip1.destinationID).to.equal(49);
  });
  it('should have a number of travelers', () => {
    expect(trip1.travelers).to.equal(1);
  });
  it('should have a start date', () => {
    expect(trip1.date).to.equal("2019/09/16");
  });
  it('should have a duration', () => {
    expect(trip1.duration).to.equal(8);
  });
  it('should have a status of pending or approved', () => {
    expect(trip1.status).to.equal("approved");
  });
  it('should have a list of suggested activities', () => {
    expect(trip1.suggestedActivities).to.eql([]);
  });
});