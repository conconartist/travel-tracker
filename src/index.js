import './css/base.scss';

import domUpdates from './domUpdates';

import Traveler from './Traveler.js';
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
let today = new Date().toLocaleDateString();
const getData = () => {
    let userPromise = fetch('http://localhost:3001/api/v1/travelers/25')
      .then(res => res.json());
    let tripsPromise = fetch('http://localhost:3001/api/v1/trips')
      .then(res => res.json());
    let destinationsPromise = fetch('http://localhost:3001/api/v1/destinations')
      .then(res => res.json());
    //instantiate user (default user until login functionality?)
    Promise.all([userPromise, tripsPromise, destinationsPromise])
      .then(dataset => {
          traveler = new Traveler(dataset[0]);
          console.log(traveler)
          //refactor for login input
          trips = dataset[1];
          console.log(trips)
          destinations = dataset[2];
          console.log(destinations)
          domUpdates.displayPendingTrips(trips)
          domUpdates.displayPastTrips(trips, today)
          domUpdates.displayBookTrip();
          domUpdates.displayTotalAnnualAmt(trips, destinations);
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

const calculateCostEstimate = (trip, destinations) => {
    domUpdates.showCostEstimate(trip, destinations);
}

const submitBookingRequest = () => {
    domUpdates.submitRequest();
}

const displayPendingTrips = (trips) => {
    domUpdates.showPendingTrips(trips)
}

const displayUpcomingTrips = () => {
    domUpdates.showUpcomingTrips(today);
}

const displayBookTripForm = () => {
    domUpdates.displayBookTrip();
}

const displayPastTrips = () => {
    domUpdates.showPastTrips(trips)
}
//window.onload = login page?
//login page -> openDashboard();
window.onload = openDashboard();
homeButton.addEventListener('click', goHome);
calculateCostButton.addEventListener('click', calculateCostEstimate)
submitRequestButton.addEventListener('click', submitBookingRequest)
upcomingTripsHeader.addEventListener('click', displayUpcomingTrips);
pendingTripsHeader.addEventListener('click', displayPendingTrips);
bookTripHeader.addEventListener('click', displayBookTripForm);
pastTripsHeader.addEventListener('click',displayPastTrips);
