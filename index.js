// Code your solution in this file
function findMatching(drivers, string){
var filteredDrivers = drivers.filter(function (driver) {
    return driver.toLowerCase() === string.toLowerCase();
});
return filteredDrivers;
}

function fuzzyMatch(drivers, string){
  var beginMatch;
  return beginMatch;
}

