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
console.log(describeValue(0));
console.log(describeValue(NaN));
console.log(describeValue(null));



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
console.log(getDayType("Friday"));
console.log(getDayType("friday"));
console.log(getDayType("SUNDAY"));
console.log(getDayType("Bandarban"));



//Question No. 3
function validateUsername(username) {
    if (username.includes(" ")) {
        return "No Space Allowed";
    }
    else if (username.length < 4) {
        return "Too Short";
    }
    else if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }
    else {
        return "Available";
    }
}
console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));



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
console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));
console.log(getCngFare(5, true, 10));



//Question No. 5
const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;
    // step 2
    if (runsNeeded <= 0) {
        return "Won";
    }
    // step 3
    if (ballsLeft <= 0) {
        return "Lost";
    }
    // step 4
    const requiredRate = (runsNeeded / ballsLeft) * 6;
    // step 5
    let verdict = "";
    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }
    // step 6 with template string
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));
console.log(getChaseVerdict(150, 111, 1));