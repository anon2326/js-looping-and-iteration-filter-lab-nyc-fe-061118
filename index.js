// Code your solution in this file
function findMatching(drivers, string){
var filteredDrivers = drivers.filter(function (driver) {
    return driver.toLowerCase() === string.toLowerCase();
});
return filteredDrivers;
}

function fuzzyMatch(drivers, string){
  var beginMatch = drivers.filter(function (driver){
    let firstDriver = driver.substring(0, 2);
    return firstDriver === string;
  });
  return beginMatch;
}

function matchName(drivers string){
var nameMatch = drivers.filter(function (driver){
  let nameDrive = driver.name;
  return nameDriver === string;
});
return nameMatch;
}

  
}