
let renderRide =function(ride) {
    if (ride.length > 1) {
    levelofService = 'Noober Pool'
  } else if (ride.purpleRequested = true) {
    levelofService = 'Noober Purple'
  } else if (ride.numberOfPassengers > 3) {
    levelofService = 'Noober XL'
  } else {
    levelofService = 'Noober X'
  }

  

  let outputElement = document.querySelector('.rides')
  outputElement.insertAdjacentHTML('beforeend', `
  <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelofService}</span>
    </h1>`)

  for (let i = 0; i < ride.length; i++) {
    outputElement.insertAdjacentHTML('beforeend', `
    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${ride[i].passengerDetails.first} ${ride[i].passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${ride[i].passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
          ${ride[i].numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${ride[i].pickupLocation.address}</p>
          <p>${ride[i].pickupLocation.city}, ${ride[i].pickupLocation.state} ${ride[i].pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${ride[i].dropoffLocation.address}</p>
          <p>${ride[i].dropoffLocation.city}, ${ride[i].dropoffLocation.state} ${ride[i].dropoffLocation.zip}</p>
        </div>
      </div>
    </div>`
    )
  }
}
  
async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
  
  for (let m = 0; m < json.length; m++) {
    renderRide(json[m])
  }

}

window.addEventListener('DOMContentLoaded', pageLoaded)