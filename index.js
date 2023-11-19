// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string){
    const lowerCaseString = string.toLowerCase();
    return drivers.filter(driver => {
        const lowerCaseDriver = driver.toLowerCase();
        return lowerCaseDriver.includes(lowerCaseString);
    })
}
// Use the filter() method on the array of drivers' names. Inside the filter() callback function, check if each driver's name starts with the lowercase version of the provided string.In the comparison, convert the driver's name to lowercase using the toLowerCase() method as well. Then, use the startsWith() method to check if the lowercase driver's name starts with the lowercase string.Return the filtered array of drivers whose names begin with the provided letters.Here's an example implementation of the fuzzyMatch function:

function fuzzyMatch(drivers, string){
    const lowerCaseString = string.toLowerCase();
    return drivers.filter(driver => {
        const lowerCaseDriver = driver.toLowerCase();
        return lowerCaseDriver.startsWith(lowerCaseString);
    })
}

function matchName(drivers, string){
    const lowerCaseString = string.toLowerCase();
    return drivers.filter(driver => driver.name.toLowerCase() === lowerCaseString);
}