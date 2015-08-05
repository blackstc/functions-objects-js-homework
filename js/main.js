// add scripts
var child = {
  height: 3,
  name: "Julian",
  age: 3
};

var ride = {
  minHeight: 3,
  maxHeight: 7
};

var car = {
  milesPerGallon: 20,
  gallonsInTank: 3
};

var route = {
  miles: 200,
  destination: "Boulder",
  location: "Fancy Land"
};

function tallEnough (childObj, rideObj) {
  if (childObj.height >= rideObj.minHeight && childObj.height <= rideObj.maxHeight) {
    return true;
  } else {
    return false;
  }
}

function enoughGas (car, route) {
  var totalMiles = car.milesPerGallon * car.gallonsInTank;
  if (totalMiles > route.miles) {
    return true;
  } else {
    return false;
  }
}


console.log(tallEnough(child, ride));
console.log(enoughGas(car, route));
