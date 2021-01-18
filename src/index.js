import './css/base.scss';

import Traveler from './Traveler.js';
import Trip from './Trip.js';
import Destination from './Destination.js';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

//query selectors:
const homeButton = document.querySelector('#button-home');
const totalAmtDisplay = document.querySelector('.total-amount-spent');
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
}

const goHome = () => {
    //add hidden to all display sections
    //reveal headers
}

const showUpcomingTrips = () => {
    //reveal upcomingtrips section
    //hide other section displays
    //or refactor to toggle for all displays?
}
//All categories should have display functionality
//Each category header (h3) is a button
//when button is clicked, it reveals the pertinent info
//when another button is clicked, it toggles the hidden property

//

//event listeners:
//window.onload = login page?
//login page -> openDashboard();
window.onload = openDashboard();
homeButton.addEventListener('click', goHome);
upcomingTripsHeader.addEventListener('click', showUpcomingTrips);