// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let blocks;
    if (someValue > 42) {
        blocks = someValue - 42;
    }
    else if (someValue <= 42) {
        blocks = 42 - someValue;
    }
    return blocks;
};

function distanceFromHqInFeet(someValue) {
    let feet = distanceFromHqInBlocks(someValue) * 264;
    return feet;

}

function distanceTravelledInFeet(start, destination) {
   let totalFeet;
    if (start <= destination) {
        totalFeet = (destination - start) * 264;
    }
    else if (start > destination) {
        totalFeet = (start - destination) *264;
    }
    return totalFeet;
};

function calculatesFarePrice(start, destination) {
        let greeting;
    if (distanceTravelledInFeet(start, destination) <= 400) {
        greeting = 0;
    }
    else if (distanceFromHqInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        greeting = (distanceTravelledInFeet(start, destination) - 400) * .02;
    }
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        greeting = 25;
    }
    else if (distanceTravelledInFeet(start, destination) > 2500) {
        greeting = "cannot travel that far";
    }
    //first 400 free
    //2 cents per foot up to inclusive of 2000 feet
    //over 2000 and under 2500 flat fare
    //returns "cannot travel that far" if over 2500
    return greeting;
};
