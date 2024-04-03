// Code your solution here
function findMatching(drivers, name) {
    
    const lowercaseName = name.toLowerCase();
  
    return drivers.filter(driver => driver.toLowerCase().includes(lowercaseName));
  }
  
  function fuzzyMatch(drivers, partialName) {
    const lowercasePartialName = partialName.toLowerCase();
  
    return drivers.filter(driver => driver.toLowerCase().startsWith(lowercasePartialName));
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name); 
  }
  

