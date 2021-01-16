import { expect } from 'chai';

import Trip from '../src/Trip.js';
import Traveler from '../src/Traveler.js'
import tripData from '../test/test-data.js';

let trip;

describe('Trip', () => {
  beforeEach(() => {
    traveler = new Traveler();
    trip = new Trip(tripData);
  });
  it('should have an id', () => {
      expect(trip[0].id).to.equal();
  });
  it('should be associated with a user', () => {
    expect(trip.userID).to.equal();
  it('should have a destination', () => {
    expect(trip.destinationID).to.equal();
  it('should have a number of travelers', () => {
    expect(trip.travelers).to.equal();
  })
  it('should have a start date', () => {
    expect(trip.date).to.equal();
  })
  it('should have a duration', () => {
    expect(trip.duration).to.equal();
  })
  it('should have a status of pending or approved', () => {
    expect(trip.status).to.equal();
  })
  it('should have a list of suggested activities', () => {
      expect(trip.suggestedActivities).to.eql([]);
  })
  }
})