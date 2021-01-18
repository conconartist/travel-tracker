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
        let bookTripSection = document.querySelector('.card-book-trip');
        //remove hidden class 
    },
    
    showUpcomingTrips(dateToday) {
        let upcomingTripsSection = document.querySelector('.card-upcoming-trips');
        upcomingTripsSection = '';
        let upcomingTripsList = traveler.filterTrips(tripData).filter(trip => trip.date >= dateToday);
        upcomingTripsList.forEach(trip => {
            upcomingTripsSection.insertAdjacentHTML('afterbegin', `
            <p class="display-date upcoming-date">Date: ${trip.date}</p>
            <p class="display-destination upcoming-destination">Destination: </p>
            <p class="display-duration upcoming-duration">Duration: ${trip.duration}</p>
            <p class="display-number-travelers upcoming-travelers"># of Travelers: ${trip.travelers}</p>
            `)
        })
    },

    showPendingTrips(tripData) {
        let pendingTripsSection = document.querySelector('.card-pending-trips');
        // pendingTripsSection.innerHTML = '';
        let filteredTripsList = traveler.filterTrips(tripData);
        let pendingTripsList = filteredTripsList.filter(trip => trip.status === 'pending');
        pendingTripsList.forEach(trip => {
            pendingTripsSection.insertAdjacentHTML('afterbegin', `
            <p class="display-date pending-date">Date:${trip.date}</p>
            <p class="display-destination pending-destination">Destination:</p>
            <p class="display-duration pending-duration">Duration:${trip.duration}</p>
            <p class="display-number-travelers pending-travelers"># of Travelers:${trip.travelers}</p>
            `)
        })
    },

    showPastTrips(trips) {
        console.log('hi')
        // let pastTripsSection = document.querySelector('.card-past-trip');
        // pastTripsSection.innerHTML = '';
        // let filteredTrips = traveler.filterTrips(trips)
        // let pastTrips = filteredTrips.filter(trip => trip.date <= today) 
        // pastTrips.forEach(trip => {
        //     pastTripsSection.insertAdjacentHTML('afterbegin', `
        //     <p class="display-date">Date: ${trip.date}</p>
        //     <p class="display-destination">Destination:</p>
        //     <p class="display-duration">Duration: ${trip.duration}</p>
        //     <p class="display-number-travelers"># of Travelers: ${trip.travelers}</p>
        //     `)
        // })
    },

    displayTotalAnnualAmt(tripData, destinations) {
        let year = '2020';
        console.log(traveler)
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