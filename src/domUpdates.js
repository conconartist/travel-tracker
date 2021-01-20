let domUpdates = {

  hideDashboard() {
    document.querySelector(".dashboard-wrapper").classList.add("hidden");
    document.querySelector(".button-nav").classList.add("hidden");
  },

  revealDashboard() {
    document.querySelector(".login-display").classList.add("hidden");
    document.querySelector(".dashboard-wrapper").classList.remove("hidden");
    document.querySelector(".button-nav").classList.remove("hidden");
  },

  displayMessage(message) {
    const displayMessage = document.querySelector('.error-message');
    displayMessage.innerHTML = `<p class="message">${message}</p>`
  }, 

  greetUser(traveler) {
    const name = traveler.name.split(' ')[0]
    const userGreeting = document.querySelector(".greeting");
    userGreeting.innerText = `Welcome, ${name}`
  },

  displayBookTrip(destinations) {
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
        if (destination.id === trip.destinationID) {
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
        if (destination.id === trip.destinationID) {
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
        if (destination.id === trip.destinationID) {
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
        if (destination.id === trip.destinationID) {
          presentTripsSection.insertAdjacentHTML('afterbegin', `
          <p class="display-date pending-date">Date: ${trip.date}</p>
          <p class="display-destination pending-destination">Destination: ${destination.destination}</p>
          <img src ="${destination.image}" class="destination-photo" alt="photo of ${destination.destination}>
          <p class="display-duration pending-duration">Duration: ${trip.duration}</p>
          <p class="display-number-travelers pending-travelers"># of Travelers: ${trip.travelers}</p>
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

  revealSubmissionButton() {
    document.querySelector(".button-submit-request").classList.remove("hidden");
  },

  clearForm() {
    document.querySelector(".date-input").value = "";
    document.querySelector(".destination-menu").value = "";
    document.querySelector(".duration-input").value = "";
    document.querySelector(".travelers-input").value = "";
    document.querySelector(".button-submit-request").classList.add("hidden");
  }, 

  submitRequest() {
    event.preventDefault()
    document.querySelector(".card-book-trip").insertAdjacentHTML('beforeend', `
    <p class="trip-status-announcement">Your trip has been submitted and is now pending.</p>`)
    document.querySelector(".button-submit-request").classList.add("hidden");
    this.clearForm();
  }, 

  showCostEstimate(tripEstimate) {
    event.preventDefault()
    document.querySelector(".card-book-trip").insertAdjacentHTML('beforeend', `
    <p class="cost-estimate-announcement">Trip Cost Estimate: $${tripEstimate}<p>
    `)
  },

  clearText() {
    document.querySelector(".cost-estimate-announcement").innerHTML = "";
  }
}
export default domUpdates;