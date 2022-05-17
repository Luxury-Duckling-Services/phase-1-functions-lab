function distanceFromHqInBlocks(block){
    return Math.abs(block - 42);
}

function distanceFromHqInFeet(block){
    return 264 * distanceFromHqInBlocks(block);
}

function distanceTravelledInFeet(start, dest){
    const dist = Math.abs(start - dest);
    return 264 * dist;
}

function calculatesFarePrice(start, dest){
    let dist = distanceTravelledInFeet(start, dest);
    switch (true){
        //first 400 feet are free
        case (dist <= 400):
            return 0;
            break;
        //400-2000 feet = $0.02/foot
        case (dist <= 2000):
            const fullFare = dist * 0.02;
            const fare = fullFare - 8;
            const truncatedFare = fare.toFixed(2);
            const parsedFare = parseFloat(truncatedFare);
            return parsedFare;
            break;
        //2000-2500 feet = flat fare - how much?
        case (dist <= 2500):
            return 25;
            break;
        //>2500 feet returns "cannot travel that far"
        case (dist > 2500):
            return `cannot travel that far`;
            break;
    }
}