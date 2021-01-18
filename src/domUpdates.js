import Traveler from './Traveler.js';

let domUpdates = {

    showTripSection(tripSection) {
        let tripLists = document.querySelectorAll('trip-list-wrapper');
        tripLists.classList.add('hidden');
        //if event.target.classlist.contains ${tripSection}, remove hidden
        //reveal section display
        //hide other section displays
        //toggle to expand and hide 
    },

    displayMessage(message) {
        const errorMessage = document.querySelector('.error-message');
        errorMessage.innerHTML = `<p class="message">${message}</p>`
    }, 

    displayBookTrip() {
        console.log('hi')
        // let bookTripSection = document.querySelector('.card-book-trip');
        //remove hidden class 
    },
    
    showUpcomingTrips(traveler, tripData, dateToday) {
        let upcomingTripsSection = document.querySelector('.card-upcoming-trips');
        let upcomingTripsList = traveler.filterUpcomingTrips(tripData, dateToday);
        upcomingTripsList.forEach(trip => {
            upcomingTripsSection.insertAdjacentHTML('afterbegin', `
            <p class="display-date upcoming-date">Date: ${trip.date}</p>
            <p class="display-destination upcoming-destination">Destination: </p>
            <p class="display-duration upcoming-duration">Duration: ${trip.duration}</p>
            <p class="display-number-travelers upcoming-travelers"># of Travelers: ${trip.travelers}</p>
            `)
        })
    },

    showPendingTrips(traveler, tripData) {
        let pendingTripsSection = document.querySelector('.card-pending-trips');
        let pendingTripsList = traveler.filterPendingTrips(tripData);
        pendingTripsList.forEach(trip => {
            pendingTripsSection.insertAdjacentHTML('afterbegin', `
            <p class="display-date pending-date">Date:${trip.date}</p>
            <p class="display-destination pending-destination">Destination:</p>
            <p class="display-duration pending-duration">Duration:${trip.duration}</p>
            <p class="display-number-travelers pending-travelers"># of Travelers:${trip.travelers}</p>
            `)
        })
    },

    showPastTrips(traveler, tripData, dateToday) {
        let pastTripsSection = document.querySelector('.card-past-trip');
        let pastTrips = traveler.filterPastTrips(tripData, dateToday);
        pastTrips.forEach(trip => {
            pastTripsSection.insertAdjacentHTML('afterbegin', `
            <p class="display-date">Date: ${trip.date}</p>
            <p class="display-destination">Destination:</p>
            <p class="display-duration">Duration: ${trip.duration}</p>
            <p class="display-number-travelers"># of Travelers: ${trip.travelers}</p>
            `)
        })
    },

    displayTotalAnnualAmt(traveler, tripData, year, destinations) {
        let totalAmtSpent = traveler.determineTotalAmtSpent(tripData, year, destinations);
        let totalSpentDisplay = document.querySelector('.total-amount-spent');
        totalSpentDisplay.innerHTML += `${totalAmtSpent}`;
    }, 

    displayDateToday() {

    },

    submitRequest() {
        //check that all input fields are full 
        //if they are, then submit and create a new trip to enter into data with pending status
    }, 

    showCostEstimate(trip, destinations) {
        //check if all input fields are full
        //if they are, calculate the cost of the trip 
        traveler.getTripCostEstimate(trip, destinations)
    }



}
export default domUpdates;