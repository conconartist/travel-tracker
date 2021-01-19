import Trip from "./Trip";

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

    displayBookTrip(destinations) {
        // let bookTripSection = document.querySelector('.card-book-trip');
        //remove hidden class 

        const destinationMenu = document.querySelector(".destination-menu");
        destinations.forEach(destination => {
            const listElement = document.createElement("option");
            listElement.innerHTML = `${destination.destination}`;
            listElement.value = `${destination.id}`;
            destinationMenu.appendChild(listElement);
        })
    },
    
    showUpcomingTrips(traveler, tripData, dateToday, destinations) {
        let upcomingTripsSection = document.querySelector('.card-upcoming-trips');
        let upcomingTripsList = traveler.filterUpcomingTrips(tripData, dateToday);
        upcomingTripsList.forEach(trip => {
            destinations.forEach(destination => {
                if(destination.id === trip.destinationID) {
                  upcomingTripsSection.insertAdjacentHTML('afterbegin', `
                    <div class="card-trip">
                      <p class="display-date upcoming-date">Date: ${trip.date}</p>
                      <p class="display-destination upcoming-destination">Destination: ${destination.destination}</p>
                      <img src="${destination.image}" class="destination-photo" alt="photo of ${destination.destination}>
                      <p class="display-duration upcoming-duration">Duration: ${trip.duration}</p>
                      <p class="display-number-travelers upcoming-travelers"># of Travelers: ${trip.travelers}</p>
                    </div>
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
            <div class="card-trip">
              <p class="display-date pending-date">Date: ${trip.date}</p>
              <p class="display-destination pending-destination">Destination: ${destination.destination}</p>
              <img src ="${destination.image}" class="destination-photo" alt="photo of ${destination.destination}>
              <p class="display-duration pending-duration">Duration: ${trip.duration}</p>
              <p class="display-number-travelers pending-travelers"># of Travelers: ${trip.travelers}</p>
            </div>
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
                <div class="card-trip">
                  <p class="display-date pending-date">Date: ${trip.date}</p>
                  <p class="display-destination pending-destination">Destination: ${destination.destination}</p>
                  <img src ="${destination.image}" class="destination-photo" alt="photo of ${destination.destination}>
                  <p class="display-duration pending-duration">Duration: ${trip.duration}</p>
                  <p class="display-number-travelers pending-travelers"># of Travelers: ${trip.travelers}</p>
                </div>
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
                <p class="display-date pending-date">Date: ${trip.date}</p>
                <p class="display-destination pending-destination">Destination: ${destination.destination}</p>
                <img src ="${destination.image}" class="destination-photo" alt="photo of ${destination.destination}>
                <p class="display-duration pending-duration">Duration: ${trip.duration}</p>
                <p class="display-number-travelers pending-travelers"># of Travelers:${trip.travelers}</p>
                `)
                }
            })
        })
    },
    displayTotalAnnualAmt(traveler, tripData, year, destinations) {
        let totalAmtSpent = traveler.determineTotalAmtSpent(tripData, year, destinations);
        let totalSpentDisplay = document.querySelector('.total-amount-spent');
        totalSpentDisplay.innerHTML += `<p class="amount-spent-amount">$${totalAmtSpent}</p>`;
    }, 

    displayDateToday() {

    },

    submitRequest() {
        //check that all input fields are full 
        event.preventDefault()
        document.querySelector(".card-book-trip").insertAdjacentHTML('beforeend', `
        <p class="trip-status-announcement">Your trip is now pending.</p>`)
        //if they are, then submit and create a new trip to enter into data with pending status
        //animation to create a pending screen while fetch request is made?
    }, 

    showCostEstimate(tripEstimate) {
        event.preventDefault()
        document.querySelector(".card-book-trip").insertAdjacentHTML('beforeend', `
        <p class="cost-estimate-announcement">Trip Cost Estimate: $${tripEstimate}<p>
        `)
    },

    clearForm() {
        document.querySelector("#book-date").value = "";
        document.querySelector(".destination-menu").value = "";
        document.querySelector("#book-duration").value = "";
        document.querySelector("#book-travelers").value = "";
        //hide form?
    },

    clearText() {
        document.querySelector(".cost-estimate-announcement").innerHTML = "";
    }

}
export default domUpdates;