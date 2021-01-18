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
    
    showUpcomingTrips(traveler, tripData, dateToday, destinations) {
        let upcomingTripsSection = document.querySelector('.card-upcoming-trips');
        let upcomingTripsList = traveler.filterUpcomingTrips(tripData, dateToday);
        upcomingTripsList.forEach(trip => {
            destinations.forEach(destination => {
                if(destination.id === trip.destinationID) {
                  upcomingTripsSection.insertAdjacentHTML('afterbegin', `
                    <p class="display-date upcoming-date">Date: ${trip.date}</p>
                    <p class="display-destination upcoming-destination">Destination: ${destination.destination}</p>
                    <img src="${destination.image}" class="destination-photo" alt="photo of ${destination.destination}>
                    <p class="display-duration upcoming-duration">Duration: ${trip.duration}</p>
                    <p class="display-number-travelers upcoming-travelers"># of Travelers: ${trip.travelers}</p>
                    `)
                }
            })
        })
    },

    showPendingTrips(traveler, tripData, destinations) {
        let pendingTripsSection = document.querySelector('.card-pending-trips');
        let pendingTripsList = traveler.filterPendingTrips(tripData);
        pendingTripsList.forEach(trip => {
            destinations.forEach(destination => {
            if(destination.id === trip.destinationID) {
            pendingTripsSection.insertAdjacentHTML('afterbegin', `
            <p class="display-date pending-date">Date:${trip.date}</p>
            <p class="display-destination pending-destination">Destination: ${destination.destination}</p>
            <img src ="${destination.image}" class="destination-photo" alt="photo of ${destination.destination}>
            <p class="display-duration pending-duration">Duration:${trip.duration}</p>
            <p class="display-number-travelers pending-travelers"># of Travelers:${trip.travelers}</p>
            `)
            }
          })
        
        })
    },

    showPastTrips(traveler, tripData, dateToday, destinations) {
        let pastTripsSection = document.querySelector('.card-past-trip');
        let pastTrips = traveler.filterPastTrips(tripData, dateToday);
        pastTrips.forEach(trip => {
            destinations.forEach(destination => {
                if(destination.id === trip.destinationID) {
                pastTripsSection.insertAdjacentHTML('afterbegin', `
                <p class="display-date pending-date">Date:${trip.date}</p>
                <p class="display-destination pending-destination">Destination: ${destination.destination}</p>
                <img src ="${destination.image}" class="destination-photo" alt="photo of ${destination.destination}>
                <p class="display-duration pending-duration">Duration:${trip.duration}</p>
                <p class="display-number-travelers pending-travelers"># of Travelers:${trip.travelers}</p>
                `)
                }
              })
        })
    },

    showPresentTrip(traveler, tripData, dateToday, destinations) {
        let presentTripsSection = document.querySelector('.card-present-trip');
        let presentTrips = traveler.filterPresentTrips(tripData, dateToday);
        presentTrips.forEach(trip => {
            destinations.forEach(destination => {
                if(destination.id === trip.destinationID) {
                presentTripsSection.insertAdjacentHTML('afterbegin', `
                <p class="display-date pending-date">Date:${trip.date}</p>
                <p class="display-destination pending-destination">Destination: ${destination.destination}</p>
                <img src ="${destination.image}" class="destination-photo" alt="photo of ${destination.destination}>
                <p class="display-duration pending-duration">Duration:${trip.duration}</p>
                <p class="display-number-travelers pending-travelers"># of Travelers:${trip.travelers}</p>
                `)
                }
            })
        })
    },
    displayTotalAnnualAmt(traveler, tripData, year, destinations) {
        let totalAmtSpent = traveler.determineTotalAmtSpent(tripData, year, destinations);
        let totalSpentDisplay = document.querySelector('.total-amount-spent');
        totalSpentDisplay.innerHTML += `$${totalAmtSpent} (agent fee included)`;
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