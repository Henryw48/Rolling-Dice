function rollDice()
{
    var roll = [];
    const num = document.getElementById("dicenum").value;
    const count = document.getElementById("rollcount").value;
    for (let i = 0; i < count; i++) {
    let rollResult = 0;
    for (let j = 0; j < num; j++) {
    rollResult += Math.floor(Math.random() * 6) + 1;
    }
    roll.push(rollResult);
  }
    mean(roll);
    median(roll);
    mode(roll);
    frequency(roll);
    doubles(roll);
    triples(roll);
}

function mean(roll) {
    let sum = 0;
    let total = 0;
    let average = 0;
    for (let z = 0; z < roll.length; z++) {
        sum += roll[z];
        total++;
    }
    average = sum / total;
    console.log(average);
}

function median(roll) {
    roll.sort();
    if ((roll.length % 2) != 0) {
        console.log(roll[roll.length / 2]);
    }
    else {
        console.log((roll[Math.floor((roll.length -1)/2)] + roll[roll.length / 2]) / 2);
    }
}

function mode(roll) {
    let mode = roll[0];
    count = 0;
    maxIndex = 0;

    for(let c = 0; c < roll.length; c++) {
        let l = roll[c];
        if(count > maxIndex) {
            mode = l;
            maxIndex = count;
        }
        if(l == mode) {
            count++;
        } else {
            count = 1;
        }
    }
    console.log(mode);
}

function frequency(roll) {
let ones = 0;
let twos = 0;
let threes = 0;
let fours = 0;
let fives = 0;
let sixes = 0;

for(let x = 0; x < roll.length; x++) {
    if(roll[x] = 1) {
        ones++;
    }
    else if(roll[x] = 2) {
        twos++;
    }
    else if(roll[x] = 3) {
        threes++;
    }
    else if(roll[x] = 4) {
        fours++;
    }
    else if(roll[x] = 5) {
        fives++;
    }
    else {
        six++;
    }
}
    document.getElementById("count1").innerHTML = ones;
    document.getElementById("count2").innerHTML = twos;
    document.getElementById("count3").innerHTML = threes;
    document.getElementById("count4").innerHTML = fours;
    document.getElementById("count5").innerHTML = fives;
    document.getElementById("count6").innerHTML = sixes;
}

function doubles(roll) {
    const counts = {};
    const doublesArray = [];
    for (let i = 0; i < roll.length; i++) {
        const currentCount = counts[roll[i]] || 0;
        counts[roll[i]] = currentCount + 1;
        if (currentCount + 1 === 2) {
            doublesArray.push(roll[i]);
        }
    }
    if (doublesArray.length > 0) {
        console.log(doublesArray.join(', '));
    } else {
        console.log("No doubles found.");
    }
}

function triples(roll) {
    const counts = {};
    const triplesArray = [];
    for (let i = 0; i < roll.length; i++) {
        const currentCount = counts[roll[i]] || 0;
        counts[roll[i]] = currentCount + 1;
        if (currentCount + 1 === 3) {
            triplesArray.push(roll[i]);
        }
    }
    if (triplesArray.length > 0) {
        console.log(triplesArray.join(', '));
    } else {
        console.log("No triples found.");
    }
}

function clear() {
    document.getElementById("dicenum").value = "";
    document.getElementById("rollcount").value = "";
    document.getElementById("count1").innerHTML = "";
    document.getElementById("count2").innerHTML = "";
    document.getElementById("count3").innerHTML = "";
    document.getElementById("count4").innerHTML = "";
    document.getElementById("count5").innerHTML = "";
    document.getElementById("count6").innerHTML = "";
}


