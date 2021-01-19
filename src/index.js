import './css/base.scss';

import domUpdates from './domUpdates.js';

import Traveler from './Traveler.js';
import TripRepository from './TripRepository.js'
import Trip from './Trip.js';
import Destination from './Destination.js';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

const homeButton = document.querySelector('#button-home');
const calculateCostButton = document.querySelector('.button-cost-estimate');
const submitRequestButton = document.querySelector('.button-submit-request');
const upcomingTripsHeader = document.querySelector('.heading-upcoming-trips');
const pendingTripsHeader = document.querySelector('.heading-pending-trips');
const bookTripHeader = document.querySelector('.heading-book-trip');
const pastTripsHeader = document.querySelector('.heading-past-trip');

let traveler, trips, destinations;

//LOGIN FUNCTIONALITY
//
//On load, the login screen should appear, hiding the .dashboard-wrapper
//When user inputs username and password
//method must check conditional
//get fetch single user by user id
//if password matches, add hidden to login display class and remove hidden from dashboard-wrapper

//DASHBOARD
// let today = new Date().toISOString().slice(0, 10);
let today = "2020/07/25";
let year = '2020';
const instantiateUser = (travelers, userLogin) => {
    let travelerId = Number(userLogin.slice(8))
    let travelerInfo = travelers.find(traveler => {
        return traveler.id === travelerId;
    })
    traveler = new Traveler({id: travelerId, name: travelerInfo.name, travelerType: travelerInfo.travelerType});
}

const getData = () => {
    let userPromise = fetch('http://localhost:3001/api/v1/travelers/')
      .then(res => res.json());
    let tripsPromise = fetch('http://localhost:3001/api/v1/trips')
      .then(res => res.json());
    let destinationsPromise = fetch('http://localhost:3001/api/v1/destinations')
      .then(res => res.json());
  
    Promise.all([userPromise, tripsPromise, destinationsPromise])
      .then(dataset => {
          instantiateUser(dataset[0].travelers, 'traveler25')
          //refactor for login input
          trips = dataset[1].trips;
          destinations = dataset[2].destinations;
          domUpdates.displayTotalAnnualAmt(traveler, trips, year, destinations);
          domUpdates.showPendingTrips(traveler, trips, destinations);
          domUpdates.showUpcomingTrips(traveler, trips, today, destinations);
          domUpdates.showPastTrips(traveler, trips, today, destinations);
          domUpdates.showPresentTrip(traveler, trips, today, destinations);
          domUpdates.displayBookTrip(destinations);
      })
      .catch(error => domUpdates.displayMessage("Oops! Something went wrong. Please try again."))
}


const openDashboard = () => {
    getData();
}

const goHome = () => {
    //add hidden to all display sections
    //reveal headers
}

const getTripCostEstimate = () => {
    event.preventDefault();
    let tripDetails = {};
    tripDetails.date = document.querySelector("#book-date").value;
    tripDetails.destinationID = document.querySelector(".destination-menu").value;
    tripDetails.duration = document.querySelector("#book-duration").value;
    tripDetails.travelers = document.querySelector("#book-travelers").value;
    let findDestination = destinations.find(destination => destination.id == tripDetails.destinationID);
    let lodgingEstimate = findDestination.estimatedLodgingCostPerDay * tripDetails.duration;
    let flightEstimate = findDestination.estimatedFlightCostPerPerson * tripDetails.travelers;
    let agentFee = (lodgingEstimate + flightEstimate) * 0.1;
    let tripEstimate = lodgingEstimate + flightEstimate + agentFee;
    domUpdates.showCostEstimate(tripEstimate);
}

const submitBookingRequest = () => {
    domUpdates.submitRequest();
}

const displayPendingTrips = (traveler, trips) => {
    domUpdates.showPendingTrips(traveler, trips)
}

const displayUpcomingTrips = (traveler, trips, today) => {
    domUpdates.showUpcomingTrips(traveler, trips, today);
}

const displayBookTripForm = (destinations) => {
    domUpdates.displayBookTrip(destinations);
}

const displayPastTrips = (trips, today) => {
    domUpdates.showPastTrips(trips, today)
}


// showCostEstimate(event, traveler, tripDetails, destinations) {
//     console.log(getTripCostEstimate(tripDetails, destinations))
//     //check if all input fields are full
//     //if they are, calculate the cost of the trip 
// }
//window.onload = login page?
//login page -> openDashboard();
window.onload = openDashboard();
homeButton.addEventListener('click', goHome);
calculateCostButton.addEventListener('click', getTripCostEstimate)
submitRequestButton.addEventListener('click', submitBookingRequest)
upcomingTripsHeader.addEventListener('click', displayUpcomingTrips);
pendingTripsHeader.addEventListener('click', displayPendingTrips);
bookTripHeader.addEventListener('click', displayBookTripForm);
pastTripsHeader.addEventListener('click',displayPastTrips);
