// getCurrentPosition()

// function curSuccess(pos) {
//   const coords = pos.coords;

//   console.log('Your current position is:');
//   console.log(`Latitude : ${coords.latitude}`);
//   console.log(`Longitude: ${coords.longitude}`);
//   console.log(`More or less ${coords.accuracy} meters.`);
// }

// function curError(err) {
//   console.log(`Error: ${err.code} - ${err.message}`);
// }

// const options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// navigator.geolocation.getCurrentPosition(curSuccess, curError, options);

// watchPosition()
const target = {
  latitude: 41.0387061,
  longitude: 28.9422548,
};

function watchSuccess(pos) {
  const coords = pos.coords;
  console.log(coords);

  //   console.log('Your current position is:');
  //   console.log(`Latitude : ${coords.latitude}`);
  //   console.log(`Longitude: ${coords.longitude}`);
  //   console.log(`More or less ${coords.accuracy} meters.`);

  if (
    target.latitude === coords.latitude &&
    target.longitude === coords.longitude
  ) {
    console.log('You have reached your destination.');
    navigator.geolocation.clearWatch(id);
  } else {
    console.log('You have not reached your final destination');
  }
}

function watchError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const watchOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const id = navigator.geolocation.watchPosition(
  watchSuccess,
  watchError,
  watchOptions,
);
