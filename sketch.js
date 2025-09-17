function setup() {
  createCanvas(2050, 2050);
}

function draw() {
    background(243, 173, 156);

// for (start; condition; upddate) {
// code repeat }
// start - where the loop begins (let i = 0)
// conditon - how long it should keep going (stop at 5)
// update - how the counter changes each time (add 1 each time)

    // Main Sqaures 
    for (let i = 0; i < 10; i++) {
    fill(75, 9, 11)
    square(50 + i * 200, 50, 150);
    square(50 + i * 200, 250, 150);
    square(50 + i * 200, 450, 150);
    square(50 + i * 200, 650, 150);
    square(50 + i * 200, 850, 150);
    square(50 + i * 200, 1050, 150);
    square(50 + i * 200, 1250, 150);
    square(50 + i * 200, 1450, 150);
    square(50 + i * 200, 1650, 150);
    square(50 + i * 200, 1850, 150);
}


    // X Main Squares 
    for (let i = 0; i < 11; i++) {
    rect(0 + i * 200, 75, 50, 100);
    rect(0 + i * 200, 275, 50, 100);
    rect(0 + i * 200, 475, 50, 100);
    rect(0 + i * 200, 675, 50, 100);
    rect(0 + i * 200, 875, 50, 100);
    rect(0 + i * 200, 1075, 50, 100);
    rect(0 + i * 200, 1275, 50, 100);
    rect(0 + i * 200, 1475, 50, 100);
    rect(0 + i * 200, 1675, 50, 100);
    rect(0 + i * 200, 1875, 50, 100);

    // Y Main Squares 
    rect(75 + i * 200, 0, 100, 50);
    rect(75 + i * 200, 200, 100, 50);
    rect(75 + i * 200, 400, 100, 50);
    rect(75 + i * 200, 600, 100, 50);
    rect(75 + i * 200, 800, 100, 50);
    rect(75 + i * 200, 1000, 100, 50);
    rect(75 + i * 200, 1200, 100, 50);
    rect(75 + i * 200, 1400, 100, 50);
    rect(75 + i * 200, 1600, 100, 50);
    rect(75 + i * 200, 1800, 100, 50);
    rect(75 + i * 200, 2000, 100, 50);
}


    //Mini Pink Squares  
    for (let i = 0; i < 11; i++) {
    fill(237, 128, 128)
    square(0 + i * 200, 0, 50);
    square(0 + i * 200, 200, 50);
    square(0 + i * 200, 400, 50);
    square(0 + i * 200, 600, 50);
    square(0 + i * 200, 800, 50);
    square(0 + i * 200, 1000, 50);
    square(0 + i * 200, 1200, 50);
    square(0 + i * 200, 1400, 50);
    square(0 + i * 200, 1600, 50);
    square(0 + i * 200, 1800, 50);
    square(0 + i * 200, 2000, 50);
}


    //Y Pink Rectangles 
    for (let i = 0; i < 10; i++) {
    fill(191, 57, 97)
    rect(100 + i * 200, 50, 50, 150);
    rect(100 + i * 200, 250, 50, 150);
    rect(100 + i * 200, 450, 50, 150);
    rect(100 + i * 200, 650, 50, 150);
    rect(100 + i * 200, 850, 50, 150);
    rect(100 + i * 200, 1050, 50, 150);
    rect(100 + i * 200, 1250, 50, 150);
    rect(100 + i * 200, 1450, 50, 150);
    rect(100 + i * 200, 1650, 50, 150);
    rect(100 + i * 200, 1850, 50, 150);

    //X Pink Rectangles 
    rect(50 + i * 200, 100, 150, 50);
    rect(50 + i * 200, 300, 150, 50);
    rect(50 + i * 200, 500, 150, 50);
    rect(50 + i * 200, 700, 150, 50);
    rect(50 + i * 200, 900, 150, 50);
    rect(50 + i * 200, 1100, 150, 50);
    rect(50 + i * 200, 1300, 150, 50);
    rect(50 + i * 200, 1500, 150, 50);
    rect(50 + i * 200, 1700, 150, 50);
    rect(50 + i * 200, 1900, 150, 50);
}


    //Cream Square 
    for (let i = 0; i < 10; i++) {
    fill(254, 247, 210)
    square(100 + i * 200, 100, 50);
    square(100 + i * 200, 300, 50);
    square(100 + i * 200, 500, 50);
    square(100 + i * 200, 700, 50);
    square(100 + i * 200, 900, 50);
    square(100 + i * 200, 1100, 50);
    square(100 + i * 200, 1300, 50);
    square(100 + i * 200, 1500, 50);
    square(100 + i * 200, 1700, 50);
    square(100 + i * 200, 1900, 50);
}


}