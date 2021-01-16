import { expect} from 'chai';

import Traveler from '../src/Traveler.js';
import travelers from '../test/test-data.js';

let traveler1, traveler2;

describe('Traveler', () => {
  beforeEach(() => {
    traveler1 = new Traveler(travelers[0]);
    traveler2 = new Traveler(travelers[1]);
  });
  it('should have an id', () => {
    expect(traveler1.id).to.equal(17);
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
});