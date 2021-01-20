import { expect } from 'chai';

import Trip from '../src/Trip.js';
import tripData from '../test/data/trip-data.js';

let trip1, trip2, trip3;

describe('Trip', () => {
  beforeEach(() => {
    trip1 = new Trip(tripData[0]);
    trip2 = new Trip(tripData[1]);
    trip3 = new Trip(tripData[3]);
  });

  it('should have an id', () => {
      expect(trip1.id).to.equal(1);
      expect(trip3.id).to.equal(4)
  });

  it('should be associated with a user', () => {
    expect(trip1.userID).to.equal(3);
    expect(trip3.userID).to.equal(42);
  });

  it('should have a destination', () => {
    expect(trip1.destinationID).to.equal(49);
    expect(trip2.destinationID).to.equal(25)
  });

  it('should have a number of travelers', () => {
    expect(trip1.travelers).to.equal(1);
    expect(trip2.travelers).to.equal(5);
  });

  it('should have a start date', () => {
    expect(trip1.date).to.equal("2019/09/16");
    expect(trip2.date).to.equal("2020/10/04");
  });

  it('should have a duration', () => {
    expect(trip1.duration).to.equal(8);
    expect(trip2.duration).to.equal(18);
  });

  it('should have a status of pending or approved', () => {
    expect(trip1.status).to.equal("approved");
    expect(trip2.status).to.equal("pending");
  });

  it('should have a list of suggested activities', () => {
    expect(trip1.suggestedActivities).to.eql(["shopping", "dining"]);
    expect(trip2.suggestedActivities).to.eql([]);
  });
});