// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  //Store data for passenger name
  let passengerFirstName=ride.passengerDetails.first
  let passengerLastName=ride.passengerDetails.last
  //Store data for passenger phone
  let passengerPhone=ride.passengerDetails.phoneNumber
  //Store data for pickup location. Should include stored objects for each variable in location including: street address, city, state, and zip
  let PickupStreet=ride.pickupLocation.address
  let PickupCity=ride.pickupLocation.city
  let PickupState=ride.pickupLocation.state
  let PickupZip=ride.pickupLocation.zip
  //Store data for dropoff location. Should include stored objects for each variable in location including: street address, city, state, and zip
  let DropoffStreet=ride.dropoffLocation.address
  let DropoffCity=ride.dropoffLocation.city
  let DropoffState=ride.dropoffLocation.state
  let DropoffZip=ride.dropoffLocation.zip
  //Store data for # of passengers
  let passengerCount=ride.numberOfPassengers
  //Store data for luxury option
  let luxuryRequest=ride.purpleRequested

  //Create object specifying service level
  let serviceLevel

  //if purple requested, return Noober Purple. If purple not requested and more than 3 passengers, return Noober XL. Return Noober X for all other cases. FIgure out which ride is requested and store it in memory.

  if (luxuryRequest == true) {
    serviceLevel=`Noober Purple`
  } else if (passengerCount > 3) {
    serviceLevel=`Noober XL`
  } else {serviceLevel=`Noober X`}
 
  //Write a human-readable sentence to the console with the parsed data, displaying the passenger information and requested service type 
  console.log(`${serviceLevel} passenger: ${passengerFirstName} ${passengerLastName} - phone number:${passengerPhone}. Pickup at ${PickupStreet}, ${PickupCity}, ${PickupState} ${PickupZip}. Dropoff at ${DropoffStreet}, ${DropoffCity}, ${DropoffState} ${DropoffZip}. `)
  

  // 🔥 YOUR CODE ENDS HERE 🔥
})
