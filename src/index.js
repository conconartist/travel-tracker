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

let traveler, trip, destination;

//LOGIN FUNCTIONALITY
//
//On load, the login screen should appear, hiding the .dashboard-wrapper
//When user inputs username and password
//method must check conditional
//get fetch single user by user id
//if password matches, add hidden to login display class and remove hidden from dashboard-wrapper

//DASHBOARD
const getData = () => {
    //fetch requests for user data
    //instantiate user (default user until login functionality?)
}

const openDashboard = () => {
    getData();
    domUpdates.displayTotalAnnualAmt();
}

const goHome = () => {
    //add hidden to all display sections
    //reveal headers
}

//All categories should have display functionality
//Each category header (h3) is a button
//when button is clicked, it reveals the pertinent info
//when another button is clicked, it toggles the hidden property

//


//window.onload = login page?
//login page -> openDashboard();
window.onload = openDashboard();
homeButton.addEventListener('click', goHome);
calculateCostButton.addEventListener('click', domUpdates.showCostEstimate)
submitRequestButton.addEventListener('click', domUpdates.submitRequest)
upcomingTripsHeader.addEventListener('click', domUpdates.showTripSection);
pendingTripsHeader.addEventListener('click', domUpdates.showTripSection);
bookTripHeader.addEventListener('click', domUpdates.showTripSection);
pastTripsHeader.addEventListener('click', domUpdates.showTripSection);
