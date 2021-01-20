import './css/base.scss';

import domUpdates from './domUpdates.js';

import Traveler from './Traveler.js';
import Trip from './Trip.js';

const logInButton = document.querySelector(".button-login");
const logOutButton = document.querySelector('#button-log-out');
const calculateCostButton = document.querySelector('.button-cost-estimate');
const submitRequestButton = document.querySelector('.button-submit-request');

let traveler, travelerId, trips, destinations;

let today = new Date().toISOString().slice(0, 10).replaceAll("-", "");
// let today = "2020/07/25";
let year = '2020';

const instantiateUser = (travelers, userLogin) => {
  const travelerInfo = travelers.find(traveler => {
    return traveler.id === userLogin;
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
      instantiateUser(dataset[0].travelers, travelerId)
      trips = dataset[1].trips;
      destinations = dataset[2].destinations;
      domUpdates.greetUser(traveler);
      domUpdates.revealDashboard();
      domUpdates.displayTotalAnnualAmt(traveler, trips, year, destinations);
      domUpdates.showPendingTrips(traveler, trips, destinations);
      domUpdates.showUpcomingTrips(traveler, trips, today, destinations);
      domUpdates.showPastTrips(traveler, trips, today, destinations);
      domUpdates.showPresentTrip(traveler, trips, today, destinations);
      domUpdates.displayBookTrip(destinations);
    })
    .catch(error => domUpdates.displayMessage("Oops! Something went wrong. Please try again."));
}

const openDashboard = () => {
  getData();
}

const getTravelerId = () => {
  const userLogin = document.querySelector("#input-username").value;
  const userPassword = document.querySelector("#input-password").value;
  if (!userLogin.includes("traveler") || userPassword !== "travel2020") {
    domUpdates.displayMessage("Wrong username and/or password. Please try again.");
  } else {
    travelerId = Number(userLogin.slice(8));
    return travelerId;
  }
}

const checkLoginInfo = () => {
  if (document.querySelector("#input-username").value && document.querySelector("#input-password").value) {
    getTravelerId();
    openDashboard();
  } else {
    domUpdates.displayMessage("Wrong username and/or password. Please try again.");
  }
}

const loginUser = () => {
  domUpdates.hideDashboard();
}

const addTrip = (tripDetails) => {
  tripDetails.status = 'pending';
  tripDetails.id = parseInt(trips.length) + 1;
  tripDetails.date = tripDetails.date.replaceAll('-', "/");
  tripDetails.userID = traveler.id;
  tripDetails.suggestedActivities = [];
  tripDetails = new Trip(tripDetails);
  fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(tripDetails)
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => domUpdates.displayMessage("Sorry.  Your trip request didn't go through."))
}

const logOutUser = () => {
  reload = location.reload();
}

const getTripDetails = () => {
  const tripDetails = {};
  tripDetails.date = document.querySelector("#book-date").value;
  tripDetails.destinationID = +document.querySelector(".destination-menu").value;
  tripDetails.duration = document.querySelector("#book-duration").value;
  tripDetails.travelers = document.querySelector("#book-travelers").value;
  return tripDetails;
}

const checkInputFields = () => {
  event.preventDefault();
  if (document.querySelector("#book-date").value && document.querySelector(".destination-menu").value && document.querySelector("#book-duration").value > 0 && document.querySelector("#book-travelers").value > 0) {
    getTripCostEstimate();
    domUpdates.revealSubmissionButton();
  }
}

const getTripCostEstimate = () => {
  event.preventDefault();
  const tripDetails = getTripDetails();
  const findDestination = destinations.find(destination => destination.id == tripDetails.destinationID);
  const lodgingEstimate = findDestination.estimatedLodgingCostPerDay * tripDetails.duration;
  const flightEstimate = findDestination.estimatedFlightCostPerPerson * tripDetails.travelers;
  const agentFee = (lodgingEstimate + flightEstimate) * 0.1;
  const tripEstimate = lodgingEstimate + flightEstimate + agentFee;
  domUpdates.showCostEstimate(tripEstimate);
}

const submitBookingRequest = () => {
  const tripDetails = getTripDetails();
  domUpdates.submitRequest();
  addTrip(tripDetails);
  domUpdates.clearText();
  domUpdates.clearForm();
}

window.onload = loginUser();
logInButton.addEventListener('click', checkLoginInfo);
logOutButton.addEventListener('click', logOutUser, true);
calculateCostButton.addEventListener('click', checkInputFields);
submitRequestButton.addEventListener('click', submitBookingRequest);
