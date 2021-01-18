let domUpdates = {

    showTripSection(tripSection) {
        let tripLists = document.querySelectorAll('trip-list-wrapper');
        tripLists.classList.add('hidden');
        //if event.target.classlist.contains ${tripSection}, remove hidden
        //reveal section display
        //hide other section displays
        //toggle to expand and hide 
    },

    displayBookTrip() {
        let bookTripSection = document.querySelector('.card-book-trip');
        //remove hidden class 
    },
    
    displayUpcomingTrips(dateToday) {
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

    displayPendingTrips(traveler) {
        let pendingTripsSection = document.querySelector('.card-pending-trips');
        pendingTripsSection.innerHTML = '';
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

    displayPastTrips(traveler, dateToday) {
        let pastTripsSection = document.querySelector('.card-past-trip');
        pastTripsSection.innerHTML = '';
        let pastTrips = traveler.filterTrips(tripData).filter(trip => trip.date <= dateToday) 
        )
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
    }



}