//Question No. 1
function describeValue(data) {
    const type = typeof data;
    let tof;
    if (data) {
        tof = "truthy";
    } else {
        tof = "falsy";
    }
    return `${type} | ${tof}`;
}



//Question No. 2
function getDayType(day) {
    switch (true) {
    case    day === "Friday" || 
            day === "FRIDAY" || 
            day === "friday" ||
            day === "Saturday" || 
            day === "SATURDAY" || 
            day === "saturday":
    return "Weekend";

    case    day === "Sunday" || 
            day === "SUNDAY" || 
            day === "sunday" ||
            day === "Monday" || 
            day === "MONDAY" || 
            day === "monday" ||
            day === "Tuesday" || 
            day === "TUESDAY" || 
            day === "tuesday" ||
            day === "Wednesday" || 
            day === "WEDNESDAY" || 
            day === "wednesday" ||
            day === "Thursday" || 
            day === "THURSDAY" || 
            day === "thursday":
    return "Working Day";

    default:
    return "Invalid day";
    }
}



//Question No. 3
function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    }
    else if (username.includes(" ")) {
        return "No Space Allowed";
    }
    else if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }
    else {
        return "Available";
    }
}



//Question No. 4
function getCngFare(distance, isNight=false, waitingMinutes=0) {
    const minimumFare = 50;
    let regularFare = 0;
    let distanceCost = 0;
    let waitingCost = 0;

    if (distance <= 2) {
        regularFare = minimumFare;
    } else {
        regularFare = minimumFare + (distance - 2) * 15;
    }
    waitingCost = waitingMinutes * 2;
    if (isNight) {
        distanceCost = (regularFare + waitingCost) * 0.2;
    }
    const totalFare = regularFare + distanceCost + waitingCost;
    return totalFare;
}



//Question No. 5
const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;
    if (runsNeeded <= 0) {
        return "Won";
    }
    if (ballsLeft <= 0) {
        return "Lost";
    }
    const requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict = "";
    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
