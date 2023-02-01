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
    if (distanceTravelledInFeet (starting, destination) < 400) {
        return 0;}
    if (distanceTravelledInFeet (starting, destination) <= 2000) {
        return (distanceTravelledInFeet (starting, destination)-400)*.02}
    if (distanceTravelledInFeet (starting, destination) <= 2500) {
        return 25}
    if (distanceTravelledInFeet (starting, destination) > 2500) {
        return 'cannot travel that far'} 
};