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
let today = "2020/03/08";
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
          domUpdates.showPendingTrips(traveler, trips);
          domUpdates.showUpcomingTrips(traveler, trips, today);
          domUpdates.showPastTrips(traveler, trips, today);
        //   domUpdates.displayBookTrip();
          domUpdates.displayTotalAnnualAmt(traveler, trips, year, destinations);
          console.log(traveler)
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

const displayPendingTrips = (traveler, trips) => {
    console.log("displayPending")
    domUpdates.showPendingTrips(traveler, trips)
}

const displayUpcomingTrips = (traveler, trips, today) => {
    domUpdates.showUpcomingTrips(traveler, trips, today);
}

const displayBookTripForm = () => {
    domUpdates.displayBookTrip();
}

const displayPastTrips = () => {
    domUpdates.showPastTrips(trips, today)
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
