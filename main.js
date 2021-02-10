// Line Analyzer

// Add Event Listener
document.getElementById('analyze').addEventListener('click', analyzeLine);

// Event Function
function analyzeLine() {
    // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
    let pt1x = Number(document.getElementById('pt1x').value);
    let pt1y = Number(document.getElementById('pt1y').value);
    let pt2x = Number(document.getElementById('pt2x').value);
    let pt2y = Number(document.getElementById('pt2y').value);

    // Call Analyze Functions and Display results
    document.getElementById('length').innerHTML = getLength(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('slope').innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('description').innerHTML = getDescription(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('location-1').innerHTML = getPointLocation(pt1x, pt1y);
    document.getElementById('location-2').innerHTML = getPointLocation(pt2x, pt2y);
}


function getLength(x1, y1, x2, y2) {
    let rise = y2 - y1;
    let run = x2 - x1;
    return (rise ** 2 + run ** 2) ** 0.5
}

function getSlope (x1, y1, x2, y2) {
    let run = x1 - x2;
    let rise = y1 - y2;
    return (rise / run);
}

function getDescription (x1, y1, x2, y2) {
    if (x1 === x2) {
        if (y1 === y2){
            return ("Dot");
        } else {
            return ("Horizontal");
        }
    } else if (y1 === y2) {
        if (x1 === x2){
            return ("Dot");
        } else {
            return ("Vertical");
        }
    } else {
        if (y1 > y2) {
            return ("Increasing");
        } else {
            return ("Decreasing");
        }
    }
}

function getPointLocation (x, y) {
    if (x === 0) {
        if (y === 0) {
            return ("Origin");
        } else {
            return ("X-axis");
        }
    } else if (y === 0) {
        if (x === 0) {
            return ("Origin");
        } else {
            return ("Y-axis");
        }
    } else if (x > 0) {
        if (y > 0) {
            return ("Quadrant 1");
        } else {
            return ("Quadrant 4");
        }
    } else {
        if (y > 0) {
            return ("Quadrant 2");
        } else {
            return ("Quadrant 3");
        }
    }
}
