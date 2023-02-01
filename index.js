function distanceFromHqInBlocks (location) {
    return Math.abs(location-42);
};

function distanceFromHqInFeet (feetLocale) {
    return distanceFromHqInBlocks(feetLocale)*264;
};

function distanceTravelledInFeet (starting, destination) {
    return Math.abs(starting-destination)*264;
};

function calculatesFarePrice (starting, destination) {
    const footTravel = distanceTravelledInFeet (starting, destination);
    if (footTravel < 400) 
        return 0;
    if (footTravel <= 2000) 
        return (footTravel-400)*.02
    if (footTravel <= 2500) 
        return 25
    if (footTravel > 2500) 
        return 'cannot travel that far' 
};

// function calculatesFarePrice (starting, destination) {
    
//     let footTravel = distanceTravelledInFeet (starting, destination);
//     if (footTravel < 400) {
//         return 0;
//     } else if (footTravel <= 2000) {
//         return (footTravel-400)*.02;
//     } else if (footTravel <= 2500) {
//         return  25;
//     } else {
//         return 'cannot travel that far';
//     }
// };