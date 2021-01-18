let domUpdates = {

    showTripSection(tripSection) {
        let tripLists = document.querySelectorAll('trip-list-wrapper');
        tripLists.classList.add('hidden');
        //if event.target.classlist.contains ${tripSection}, remove hidden
        //reveal section display
        //hide other section displays
        //toggle to expand and hide 
    },

    displayUpcomingTrips() {

    },

    displayPendingTrips(traveler) {
        let pendingTripsSection = document.querySelector('.card-pending-trips');
        pendingTrips.innerHTML = '';
        let pendingTripsList = traveler.filterTrips(tripData).filter(trip => trip.status === 'pending');
        pendingTripsList.forEach(trip => {
            pendingTripsSection.insertAdjacentHTML('afterbegin', `
            <p class="display-date pending-date">Date:${trip.date}</p>
            <p class="display-destination pending-destination">Destination:</p>
            <p class="display-duration pending-duration">Duration:${trip.duration}</p>
            <p class="display-number-travelers pending-travelers"># of Travelers:${trip.travelers}</p>
            `)
        })
    },

    displayBookTrip() {

    },

    displayPastTrips() {

    },

    displayTotalAnnualAmt(traveler, tripData, year, destinations) {
        let totalAmtSpent = traveler.determineTotalAmtSpent(tripData, year, destinations);
        let totalSpentDisplay = document.querySelector('.total-amount-spent');
        totalSpentDisplay.innerHTML += `${totalAmtSpent}`;
    }



}