import { expect } from 'chai';

import Destination from '../src/Destination.js';
import destinations from '../test/data/destination-data.js'

let destination1, destination2, destination3;

describe('Destination', () => {
    beforeEach(() => {
        destination1 = new Destination(destinations[0]);
        destination2 = new Destination(destinations[1]);
        destination3 = new Destination(destinations[2]);
    });
    it('should have an id', () => {
        expect(destination1.id).to.equal(destinations[0].id);
    });
    it('should have a destination property', () => {
        expect(destination1.destination).to.equal("Lima, Peru");
    });
    it('should have an estimated cost of lodging per day', () => {
        expect(destination2.estimatedLodgingCostPerDay).to.equal(100);
    });
    it('should have an estimated cost of flight per person', () => {
        expect(destination2.estimatedFlightCostPerPerson).to.equal(780);
    });
    it('should have a link to an image of the destination', () => {
        expect(destination2.image).to.equal("https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
    });
    it('should have an alt tag for the image of the destination in a string', () => {
        expect(destination3.alt).to.equal("opera house and city buildings on the water with boats");
    });
});