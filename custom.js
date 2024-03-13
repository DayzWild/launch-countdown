let i = 10;
let output = document.getElementById("output");

while (i >= 0) {

    if (i === 10) {
        output = "Countdown 10";
    } else if (i === 0) {
        output = "Blast off!";
    } else {
        output = i;
    }

    console.log(output);

    i--;

}
