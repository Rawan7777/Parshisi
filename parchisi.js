// Main Container coordinantes
let Main_Container = document.getElementById("Main-Container");
let Main_Container_cords = Main_Container.getBoundingClientRect();

// ovals coordinantes
let oval1 = document.getElementById("blue-oval1");
let oval2 = document.getElementById("blue-oval2");
let oval3 = document.getElementById("blue-oval3");
let oval4 = document.getElementById("blue-oval4");

let oval1_cords = oval1.getBoundingClientRect();
let oval2_cords = oval2.getBoundingClientRect();
let oval3_cords = oval3.getBoundingClientRect();
let oval4_cords = oval4.getBoundingClientRect();

// Pawns Containers Id's
let blue_one_container = document.getElementById("blue-one-container");
let blue_two_container = document.getElementById("blue-two-container");
let blue_three_container = document.getElementById("blue-three-container");
let blue_four_container = document.getElementById("blue-four-container");

// Sample pawn Container coordinantes
let pawn_container = document.getElementById("blue-one-container");
let pawn_container_cords = pawn_container.getBoundingClientRect();

// calculate the homes coordinantes
let close_cords = oval1_cords.x - Main_Container_cords.x + ((oval1_cords.width - pawn_container_cords.width)/2);
let far_cords = oval4_cords.x - Main_Container_cords.x + ((oval4_cords.width - blue_four_container.getBoundingClientRect().width)/2);

// blue homes coordinantes

blue_one_container.style.left = close_cords + "px";
blue_one_container.style.top = close_cords + "px";

blue_two_container.style.left = far_cords + "px";
blue_two_container.style.top = close_cords + "px";

blue_three_container.style.left = close_cords + "px";
blue_three_container.style.top =  far_cords + "px";

blue_four_container.style.left = far_cords + "px";
blue_four_container.style.top =  far_cords + "px";

// red homes coordinantes

let red_one_container = document.getElementById("red-one-container");
let red_two_container = document.getElementById("red-two-container");
let red_three_container = document.getElementById("red-three-container");
let red_four_container = document.getElementById("red-four-container");

red_one_container.style.right = close_cords + "px";
red_one_container.style.top = close_cords + "px";

red_two_container.style.right = far_cords + "px";
red_two_container.style.top = close_cords + "px";

red_three_container.style.right = close_cords + "px";
red_three_container.style.top =  far_cords + "px";

red_four_container.style.right = far_cords + "px";
red_four_container.style.top =  far_cords + "px";

//yellow homes coordinantes

let yellow_one_container = document.getElementById("yellow-one-container");
let yellow_two_container = document.getElementById("yellow-two-container");
let yellow_three_container = document.getElementById("yellow-three-container");
let yellow_four_container = document.getElementById("yellow-four-container");

yellow_one_container.style.left = close_cords + "px";
yellow_one_container.style.bottom = close_cords + "px";

yellow_two_container.style.left = far_cords + "px";
yellow_two_container.style.bottom = close_cords + "px";

yellow_three_container.style.left = close_cords + "px";
yellow_three_container.style.bottom =  far_cords + "px";

yellow_four_container.style.left = far_cords + "px";
yellow_four_container.style.bottom =  far_cords + "px";

// green homes coordinantes

let green_one_container = document.getElementById("green-one-container");
let green_two_container = document.getElementById("green-two-container");
let green_three_container = document.getElementById("green-three-container");
let green_four_container = document.getElementById("green-four-container");

green_one_container.style.right = close_cords + "px";
green_one_container.style.bottom = close_cords + "px";

green_two_container.style.right = far_cords + "px";
green_two_container.style.bottom = close_cords + "px";

green_three_container.style.right = close_cords + "px";
green_three_container.style.bottom =  far_cords + "px";

green_four_container.style.right = far_cords + "px";
green_four_container.style.bottom =  far_cords + "px";

//------------------------declare objects to store and calculate the divs id's, coordinantes and more------------------------

let divs = {}; // stores the spots id's
let cords = {}; // stores the spots coordinantes
let spots = {}; // stores the spots x and y coordinantes, where the pawns will set
let wide_center = {}; // stores the calculated coordinantes of the center of the wide spotes
let long_center = {}; // stores the calculated coordinantes of the center of the long spotes
let who_isin_spot = {}; // stores which pawn at which spot

// set the keys and value of the object from 1 to 96
for (let i = 1; i <= 96; i++) { 

    divs[`d${i}`] = document.getElementById(`d${i}`);

    cords[`d${i}_cords`] = divs[`d${i}`].getBoundingClientRect();

    spots[`d${i}_spot_x`] = cords[`d${i}_cords`].x - Main_Container_cords.x + ((cords[`d${i}_cords`].width - pawn_container_cords.width) / 2);
    spots[`d${i}_spot_y`] = cords[`d${i}_cords`].y - Main_Container_cords.y + ((cords[`d${i}_cords`].height - pawn_container_cords.height) / 2);

    wide_center[`d${i}_center_x`] = cords[`d${i}_cords`].x + ((cords[`d${i}_cords`].width - pawn_container_cords.width)/2);
    long_center[`d${i}_center_y`] = cords[`d${i}_cords`].y + ((cords[`d${i}_cords`].height - pawn_container_cords.height)/2);

    who_isin_spot[`who_isin_spot${i}`] = [];

};

let shows = {}; // stores the divs that show the dice numbers to play

// set the keys of the numbers to play containers
for (let i = 0; i <= 4; i++) {

    shows[`circle${i}`];
    shows[`left_half_circle${i}`];
    shows[`right_half_circle${i}`];
    shows[`full_circle${i}`]
    
};

//--------------------------------------------------dice roller buttons------------------------------------------------------

document.getElementById("blue-roll").addEventListener('click', function() {roll_dice("blue-roller-one-image", "blue-roller-two-image")});
document.getElementById("red-roll").addEventListener('click', function() {roll_dice("red-roller-one-image", "red-roller-two-image")});
document.getElementById("yellow-roll").addEventListener('click', function() {roll_dice("yellow-roller-one-image", "yellow-roller-two-image")});
document.getElementById("green-roll").addEventListener('click', function() {roll_dice("green-roller-one-image", "green-roller-two-image")});

//------------------------------------------declare object, arrays, and variables---------------------------------------------

// object of which one of the containers is home
let who_is_home = {

//  ▼nicknames▼     ▼actual id's name▼
    blue_one:       blue_one_container,
    blue_two:       blue_two_container,
    blue_three:     blue_three_container,
    blue_four:      blue_four_container

};

// a reference and an unchangeable copy of the previous object
let blue_containers = {

    blue_one:       blue_one_container,
    blue_two:       blue_two_container,
    blue_three:     blue_three_container,
    blue_four:      blue_four_container

};

// array to store the nicknames of the which one of the containers is out of home
let who_is_outof_home_indexes = [];

// array to store the nicknames of the which one of the containers is home
let who_is_home_indexes = ["blue_one", "blue_two", "blue_three", "blue_four"];

let is_dice_1_clicked = false; // indicates if the first dice number is played (true) or not (false)
let is_dice_2_clicked = false; // indicates if the second dice number is played (true) or not (false)
let time = 0; // to keep track and the correct wait time for the other setTimeout functions to complete 
let count = 0; // to count how many times the dice roll ed (used for debugging)

//---------------------------------------------------roll dice function------------------------------------------------------
function roll_dice(roller_one_image, roller_two_image){

    // set the is_dice_1_clicked and is_dice_2_clicked to false every time roll dice function is called 
    is_dice_1_clicked = false;
    is_dice_2_clicked = false;

    // a function fo set the dices value as desired for debugging (Temporary)
    let dice_1;
    let dice_2;

    function dicy(){
        if(count == 0){
            dice_1 = 5;
            dice_2 = 5;
            count++;
        }else if(count < 9){
            dice_1 = 5;
            dice_2 = 6;
            count++
        }else if(count == 9){
            dice_1 = 5;
            dice_2 = 1;
            count++
        }else if(count == 10){
            dice_1 = 5;
            dice_2 = 6;
            count++
        }else{
            dice_1 = 5;
            dice_2 = 1;
            count++
        }
    };

    dicy();

    // set the dices
    // let dice_1 = Math.floor(Math.random() * 6) + 1;
    // let dice_2 = Math.floor(Math.random() * 6) + 1;

    // display the dice number one (first dice, left dice)
    let roller_1_image = document.getElementById(roller_one_image);

    switch(dice_1){
        case 1:
            roller_1_image.src = "dice_one.png";
            break;
        case 2:
            roller_1_image.src = "dice_two.png";
            break;
        case 3:
            roller_1_image.src = "dice_three.png";
            break;
        case 4:
            roller_1_image.src = "dice_four.png";
            break;
        case 5:
            roller_1_image.src = "dice_five.png";
            break;
        case 6:
            roller_1_image.src = "dice_six.png";
            break;
    }

    // display the dice number two (second dice, right dice)
    let roller_2_image = document.getElementById(roller_two_image);

    switch(dice_2){
        case 1:
            roller_2_image.src = "dice_one.png";
            break;
        case 2:
            roller_2_image.src = "dice_two.png";
            break;
        case 3:
            roller_2_image.src = "dice_three.png";
            break;
        case 4:
            roller_2_image.src = "dice_four.png";
            break;
        case 5:
            roller_2_image.src = "dice_five.png";
            break;
        case 6:
            roller_2_image.src = "dice_six.png";
            break;
    }

    // enter the pawns to the path (5 & 5 Scenarios)
    if(dice_1 == 5 && dice_2 == 5){

        // check if the spot 52 is COMPLETELY empty, to enter TWO pawns to it
        if(!( 
        ( ((cords.d52_cords.x - 5) < blue_one_container.getBoundingClientRect().x && blue_one_container.getBoundingClientRect().x < cords.d52_cords.x + d52.getBoundingClientRect().width) &&
          ((cords.d52_cords.y - 5) < blue_one_container.getBoundingClientRect().y && blue_one_container.getBoundingClientRect().y < cords.d52_cords.y + d52.getBoundingClientRect().height) ) 
          ||
        ( ((cords.d52_cords.x - 5) < blue_two_container.getBoundingClientRect().x && blue_two_container.getBoundingClientRect().x < cords.d52_cords.x + d52.getBoundingClientRect().width) && 
          ((cords.d52_cords.y - 5) < blue_two_container.getBoundingClientRect().y && blue_two_container.getBoundingClientRect().y < cords.d52_cords.y + d52.getBoundingClientRect().height) ) 
          ||
        ( ((cords.d52_cords.x - 5) < blue_three_container.getBoundingClientRect().x && blue_three_container.getBoundingClientRect().x < cords.d52_cords.x + d52.getBoundingClientRect().width) &&
          ((cords.d52_cords.y - 5) < blue_three_container.getBoundingClientRect().y && blue_three_container.getBoundingClientRect().y < cords.d52_cords.y + d52.getBoundingClientRect().height) ) 
          ||
        ( ((cords.d52_cords.x - 5) < blue_four_container.getBoundingClientRect().x && blue_four_container.getBoundingClientRect().x < cords.d52_cords.x + d52.getBoundingClientRect().width) &&
          ((cords.d52_cords.y - 5) < blue_four_container.getBoundingClientRect().y && blue_four_container.getBoundingClientRect().y < cords.d52_cords.y + d52.getBoundingClientRect().height) )

            ))
        {
            // check if there is at least 2 pawns in home to enter
            if(Object.keys(who_is_home).length > 1)
            {

                who_is_home[who_is_home_indexes[0]].style.left = spots.d52_spot_x - 15 + "px";
                who_is_home[who_is_home_indexes[0]].style.top = spots.d52_spot_y + "px";
                who_is_outof_home_indexes.push(who_is_home_indexes[0]);
                who_isin_spot.who_isin_spot52.push(blue_containers[who_is_home_indexes[0]]);
                delete who_is_home[who_is_home_indexes[0]];
                who_is_home_indexes = who_is_home_indexes.filter(container => container != who_is_home_indexes[0]);

                who_is_home[who_is_home_indexes[0]].style.left = spots.d52_spot_x + 15 + "px";
                who_is_home[who_is_home_indexes[0]].style.top = spots.d52_spot_y + "px";
                who_is_outof_home_indexes.push(who_is_home_indexes[0]);
                who_isin_spot.who_isin_spot52.push(blue_containers[who_is_home_indexes[0]]);
                delete who_is_home[who_is_home_indexes[0]];
                who_is_home_indexes = who_is_home_indexes.filter(container => container != who_is_home_indexes[0]);

                is_dice_1_clicked = true;
                is_dice_2_clicked = true;
                roller_deactivater();

            }

        // check if the spot 52 is occupied with only one pawn, to enter only one pawn to spot 52
        }else if(who_isin_spot.who_isin_spot52.length == 1){

            who_isin_spot.who_isin_spot52[0].style.left = spots.d52_spot_x + 15 + "px";
            who_isin_spot.who_isin_spot52[0].style.top = spots.d52_spot_y + "px";

            who_is_home[who_is_home_indexes[0]].style.left = spots.d52_spot_x - 15 + "px";
            who_is_home[who_is_home_indexes[0]].style.top = spots.d52_spot_y + "px";

            who_is_outof_home_indexes.push(who_is_home_indexes[0]);
            who_isin_spot.who_isin_spot52.push(blue_containers[who_is_home_indexes[0]]);
            delete who_is_home[who_is_home_indexes[0]];
            who_is_home_indexes = who_is_home_indexes.filter(container => container != who_is_home_indexes[0]);
            
            if(dice_1 == 5){ dice_1 = 0; } // set dice_1 to zero because it is already played
            else if(dice_2 == 5){ dice_2 = 0; } // set dice_2 to zero because it is already played

            time = 400; // set the waiting time
            number_sail(dice_1, dice_2); // to add the remaining dice number above the pawns

            roller_deactivater(); // to deactivate the dice roller till the next round

        // check if the spot 52 is full with two pawns, to show a floating numbers box above it
        }else if(who_isin_spot.who_isin_spot52.length == 2){

            number_sail(dice_1, dice_2);
        }
    }

    // enter the pawns to the path (5 or 5 Scenarios)
    else if(dice_1 == 5 || dice_2 == 5 || dice_1 + dice_2 == 5){

        // check if pawn one is in home, and the spot 52 is not completely full, to enter it to the path
        if(who_is_home_indexes.includes("blue_one") && who_isin_spot.who_isin_spot52.length <= 1){

            roller_deactivater(); // to deactivate the dice roller till the next round

            blue_one_container.style.left = spots.d52_spot_x + "px";
            blue_one_container.style.top = spots.d52_spot_y + "px";
            who_isin_spot.who_isin_spot52.push(blue_containers["blue_one"]);
            who_is_outof_home_indexes.push("blue_one");
            delete who_is_home[who_is_home_indexes[0]];
            who_is_home_indexes = who_is_home_indexes.filter(container => container != "blue_one");

            if(who_is_home_indexes.length == 3){

                if(dice_1 == 5){

                    setTimeout(() => { after_home(dice_2, blue_containers["blue_one"]) }, 200);
                    dice = dice_2;
                    is_dice_2_clicked = true;

                }else if(dice_2 == 5){

                    setTimeout(() => { after_home(dice_1, blue_containers["blue_one"]) }, 200);
                    dice = dice_1;
                    is_dice_1_clicked = true;

                }else if(dice_1 + dice_2 == 5){

                    dice = 0;
                    is_dice_1_clicked = true;
                    is_dice_2_clicked = true;
                }
            }

            if(dice_1 == 5){ dice_1 = 0; is_dice_1_clicked = true; dice = dice_1} // set dice_1 to zero because it is already played
            else if(dice_2 == 5){ dice_2 = 0; is_dice_2_clicked = true; dice = dice_2} // set dice_2 to zero because it is already played

            parallel_check(52); // to check if two pawn are over each other

            if(!(who_is_home_indexes.length >= 3)){

                time = 400;
                number_sail(dice_1, dice_2);
            }

            setTimeout(() => {

                roller_deactivater(); // to deactivate the dice roller till the next round
            }, dice * 250 + 400);
            

        // check if pawn two is in home, and the spot 52 is not completely full, to enter it to the path
        }else if(who_is_home_indexes.includes("blue_two") && who_isin_spot.who_isin_spot52.length <= 1){

            roller_deactivater(); // to deactivate the dice roller till the next round

            blue_two_container.style.left = spots.d52_spot_x + "px";
            blue_two_container.style.top = spots.d52_spot_y + "px";
            who_isin_spot.who_isin_spot52.push(blue_containers["blue_two"]);
            who_is_outof_home_indexes.push("blue_two");
            delete who_is_home[who_is_home_indexes[0]];
            who_is_home_indexes = who_is_home_indexes.filter(container => container != "blue_two");

            if(who_is_home_indexes.length == 3){

                if(dice_1 == 5){

                    setTimeout(() => { after_home(dice_2, blue_containers["blue_two"]) }, 100);
                    dice = dice_2;
                    is_dice_2_clicked = true;

                }else if(dice_2 == 5){

                    setTimeout(() => { after_home(dice_1, blue_containers["blue_two"]) }, 100);
                    dice = dice_1;
                    is_dice_1_clicked = true;

                }else if(dice_1 + dice_2 == 5){

                    dice = 0;
                    is_dice_1_clicked = true;
                    is_dice_2_clicked = true;
                }
            }
            
            
            if(dice_1 == 5){ dice_1 = 0; is_dice_1_clicked = true; dice = dice_1} // set dice_1 to zero because it is already played
            else if(dice_2 == 5){ dice_2 = 0; is_dice_2_clicked = true; dice = dice_2} // set dice_2 to zero because it is already played
            
            parallel_check(52); // to check if two pawn are over each other

            if(!(who_is_home_indexes.length >= 3)){

                time = 400;
                number_sail(dice_1, dice_2);
            }

            setTimeout(() => {

                roller_deactivater(); // to deactivate the dice roller till the next round
            }, dice * 250 + 400);

        // check if pawn three is in home, and the spot 52 is not completely full, to enter it to the path
        }else if(who_is_home_indexes.includes("blue_three") && who_isin_spot.who_isin_spot52.length <= 1){

            roller_deactivater(); // to deactivate the dice roller till the next round

            blue_three_container.style.left = spots.d52_spot_x + "px";
            blue_three_container.style.top = spots.d52_spot_y + "px";
            who_isin_spot.who_isin_spot52.push(blue_containers["blue_three"]);
            who_is_outof_home_indexes.push("blue_three");
            delete who_is_home[who_is_home_indexes[0]];
            who_is_home_indexes = who_is_home_indexes.filter(container => container != "blue_three");

            if(who_is_home_indexes.length == 3){

                if(dice_1 == 5){

                    setTimeout(() => { after_home(dice_2, blue_containers["blue_three"]) }, 100);
                    dice = dice_2;
                    is_dice_2_clicked = true;

                }else if(dice_2 == 5){

                    setTimeout(() => { after_home(dice_1, blue_containers["blue_three"]) }, 100);
                    dice = dice_1;
                    is_dice_1_clicked = true;

                }else if(dice_1 + dice_2 == 5){

                    dice = 0;
                    is_dice_1_clicked = true;
                    is_dice_2_clicked = true;
                }
            }

            if(dice_1 == 5){ dice_1 = 0; is_dice_1_clicked = true; dice = dice_1} // set dice_1 to zero because it is already played
            else if(dice_2 == 5){ dice_2 = 0; is_dice_2_clicked = true; dice = dice_2} // set dice_2 to zero because it is already played

            parallel_check(52); // to check if two pawn are over each other

            if(!(who_is_home_indexes.length >= 3)){

                time = 400;
                number_sail(dice_1, dice_2);
            }

            setTimeout(() => {

                roller_deactivater(); // to deactivate the dice roller till the next round
            }, dice * 250 + 400);

        // check if pawn four is in home, and the spot 52 is not completely full, to enter it to the path
        }else if(who_is_home_indexes.includes("blue_four") && who_isin_spot.who_isin_spot52.length <= 1){

            roller_deactivater(); // to deactivate the dice roller till the next round

            blue_four_container.style.left = spots.d52_spot_x + "px";
            blue_four_container.style.top = spots.d52_spot_y + "px";
            who_isin_spot.who_isin_spot52.push(blue_containers["blue_four"]);
            who_is_outof_home_indexes.push("blue_four");
            delete who_is_home[who_is_home_indexes[0]];
            who_is_home_indexes = who_is_home_indexes.filter(container => container != "blue_four");

            if(who_is_home_indexes.length >= 3){

                if(dice_1 == 5){

                    setTimeout(() => { after_home(dice_2, blue_containers["blue_four"]) }, 100);
                    dice = dice_2;
                    is_dice_2_clicked = true;

                }else if(dice_2 == 5){

                    setTimeout(() => { after_home(dice_1, blue_containers["blue_four"]) }, 100);
                    dice = dice_1;
                    is_dice_1_clicked = true;

                }else if(dice_1 + dice_2 == 5){

                    dice = 0;
                    is_dice_1_clicked = true;
                    is_dice_2_clicked = true;
                }
            }

            if(dice_1 == 5){ dice_1 = 0; is_dice_1_clicked = true; dice = dice_1} // set dice_1 to zero because it is already played
            else if(dice_2 == 5){ dice_2 = 0; is_dice_2_clicked = true; dice = dice_2} // set dice_2 to zero because it is already played

            if(!(who_is_home_indexes.length >= 3)){

                time = 400;
                number_sail(dice_1, dice_2);
            }

            parallel_check(52); // to check if two pawn are over each other
            
            setTimeout(() => {

                roller_deactivater(); // to deactivate the dice roller till the next round
            }, dice * 250 + 400);

        // check if the spot 52 is not completely full, to show a floating numbers box above it
        }else if(who_isin_spot.who_isin_spot52.length == 2 && who_is_home_indexes.length <= 2){
            
            roller_deactivater(); // to deactivate the dice roller till the next round
            time = 0
            number_sail(dice_1, dice_2);

        }else if(who_is_home_indexes == 0){

            time = 0;
            number_sail(dice_1, dice_2);
        }
    }else {

        if(who_is_outof_home_indexes > 0){

            time = 0;
            number_sail(dice_1, dice_2);
        }
    }
};

//--------------------------------after home function----to automate movement if neccessary----------------------------------

function after_home(dice, container){

    if(who_is_home_indexes.length <= 3){

        for(let i = 1; i <= dice; i++){

            time =  i * 250;
            setTimeout(() => {

                container.style.top = spots[`d${52 + i}_spot_y`] + "px";
                container.style.left = spots[`d${52 + i}_spot_x`] + "px";
            }, i * 250);
        }

        who_isin_spot[`who_isin_spot${52 + dice}`].push(container);
        who_isin_spot.who_isin_spot52 = who_isin_spot.who_isin_spot52.filter(containers => containers != container);

    }
};

//------------------------------------------movements function----to move the pawns----------------------------------------

let counter;
let blue_finishers = []; // to store the pawns that finished

function movements(dice, container, spot_number, dice_1, dice_2){

    counter = 0; // reset the counter

    for(let i = 1; i <= dice; i++){

        // if the next final spot-number will not be greater than 68
        if(spot_number + i <= 68){

            // if the the pawn is blue and in the spot-number 47, so the next spot should be the winning path (blue path)
            if((spot_number + i - 1 == 47) &&
               (container.id == "blue-one-container" || "blue-two-container" ||
                              "blue-three-container" || "blue-four-container"))
            {

                colored_dice = dice - i + 1;
                
                for(let j = 69; j < colored_dice + 69; j++){

                    who_isin_spot[`who_isin_spot${spot_number}`] = who_isin_spot[`who_isin_spot${spot_number}`].filter(containers => containers != container);
                    
                    setTimeout(() => {

                        container.style.top = spots[`d${j}_spot_y`] + "px";
                        container.style.left = spots[`d${j}_spot_x`] + "px";
                        counter++;

                        if(!(who_isin_spot[`who_isin_spot${colored_dice + 68}`].includes(container)) && counter == dice){

                            who_isin_spot[`who_isin_spot${colored_dice + 68}`].push(container);
                            parallel_check(colored_dice + 68);
                        }

                    },(i * 250) + ((j - 69) * 250) - 250);
                }

                break;

            // else if the next spot shouldn't be the winning path (normal move)
            }else{

                who_isin_spot[`who_isin_spot${spot_number}`] = who_isin_spot[`who_isin_spot${spot_number}`].filter(containers => containers != container);

                setTimeout(() => {
        
                    container.style.top = spots[`d${spot_number + i}_spot_y`] + "px";
                    container.style.left = spots[`d${spot_number + i}_spot_x`] + "px";
                    counter++;

                    if(!(who_isin_spot[`who_isin_spot${spot_number + dice}`].includes(container)) && counter == dice){

                        who_isin_spot[`who_isin_spot${spot_number + dice}`].push(container);
                        parallel_check(spot_number + dice);
                    }
                    
                }, (i - 1) * 250);
            }

        // if the current spot-number is greater than 68, indicating that it is already in the winning path
        }else if(spot_number > 68){

            for(let j = 1; j <= dice; j++){

                // the next final spot-number shouldn't be the finish triangle
                if(!(spot_number + j >= 76)){

                    who_isin_spot[`who_isin_spot${spot_number}`] = who_isin_spot[`who_isin_spot${spot_number}`].filter(containers => containers != container);

                    setTimeout(() => {
            
                        container.style.top = spots[`d${spot_number + j}_spot_y`] + "px";
                        container.style.left = spots[`d${spot_number + j}_spot_x`] + "px";
                        counter++;
                        
                        if(!(who_isin_spot[`who_isin_spot${spot_number + dice}`].includes(container)) && counter == dice && !(spot_number + dice > 75)){
    
                            who_isin_spot[`who_isin_spot${spot_number + dice}`].push(container);
                            parallel_check(spot_number + dice);
                        }

                    }, (j - 1) * 250);


                // the next final spot-number will be the finish triangle
                }else if(spot_number + dice == 76){

                    let first_spot_x = 201 + 2; // triangle_x + little bit of marging
                    let first_spot_y = 201 + 73 - 13; // triangle_y + half triangle height - half pawn height

                    let second_spot_x = first_spot_x + 26 + 2; // first_spot_x + pawn width + marging
                    let second_spot_y = first_spot_y; 

                    let third_spot_x = first_spot_x;
                    let third_spot_y = first_spot_y - 26 - 2; // first_spot_y - pawn height - marging

                    let fourth_spot_x = first_spot_x; 
                    let fourth_spot_y = first_spot_y + 26 + 2; // first_spot_y + pawn height + marging

                    who_isin_spot[`who_isin_spot${spot_number}`] = who_isin_spot[`who_isin_spot${spot_number}`].filter(containers => containers != container);
                    
                    setTimeout(() => {
                        
                        if(!(blue_finishers.includes(container))){
    
                            blue_finishers.push(container);
                        }

                        if(blue_finishers.length == 1){

                            container.style.left = first_spot_y + "px";
                            container.style.top = first_spot_x + "px";
                            counter++;

                        }else if(blue_finishers.length == 2){

                            container.style.left = second_spot_y + "px";
                            container.style.top = second_spot_x + "px";
                            counter++;

                        }else if(blue_finishers.length == 3){

                            container.style.left = third_spot_y + "px";
                            container.style.top = third_spot_x + "px";
                            counter++;

                        }else if(blue_finishers.length == 4){

                            container.style.left = fourth_spot_y + "px";
                            container.style.top = fourth_spot_x + "px";
                            counter++;
                        }

                    }, (j - 1) * 250);
                }
            }

        // if the next spot-number will be greater than 68, to start counting back from 1
        }else if(spot_number + i > 68){

            new_dice = dice - i + 1;

            for(let j = 1; j <= new_dice; j++){

                who_isin_spot[`who_isin_spot${spot_number}`] = who_isin_spot[`who_isin_spot${spot_number}`].filter(containers => containers != container);
                
                setTimeout(() => {

                    container.style.top = spots[`d${j}_spot_y`] + "px";
                    container.style.left = spots[`d${j}_spot_x`] + "px";
                    counter++;
                    
                    if(!(who_isin_spot[`who_isin_spot${(spot_number + dice) - 68}`].includes(container)) && counter == dice){
        
                        who_isin_spot[`who_isin_spot${(spot_number + dice) - 68}`].push(container);
                        parallel_check((spot_number + dice) - 68);
                    }

                },((i - 1) * 250) +  ((j - 1) * 250));
            }

            break;
        }
    }

    center_check(who_isin_spot[`who_isin_spot${spot_number}`], spot_number);

    if(is_dice_1_clicked == true && is_dice_2_clicked != true){

        dice_1 = 0;
        time = (dice + 1) * 250;
        number_sail(dice_1, dice_2);
        
    }else if(is_dice_2_clicked == true && is_dice_1_clicked != true){
        
        dice_2 = 0;
        time = (dice + 1) * 250;
        number_sail(dice_1, dice_2);

    }

    if(is_dice_1_clicked == true && is_dice_2_clicked == true){

        number_sail_destroyer();
    } 

};

//----------------Parallel check function----prevent two pawns to overlap on each other if they are in the same spot-----------

function parallel_check(spot_number){

    if(who_isin_spot[`who_isin_spot${spot_number}`].length == 2){

        if((39 <= spot_number && spot_number <= 55) || (5 <= spot_number && spot_number <= 21) ||
           (69 <= spot_number && spot_number <= 75) || (90 <= spot_number && spot_number <= 96))
        {

            who_isin_spot[`who_isin_spot${spot_number}`][0].style.left = spots[`d${spot_number}_spot_x`] + 15 + "px";
            who_isin_spot[`who_isin_spot${spot_number}`][1].style.left = spots[`d${spot_number}_spot_x`] - 15 + "px";

        }else{

            who_isin_spot[`who_isin_spot${spot_number}`][0].style.top = spots[`d${spot_number}_spot_y`] + 15 + "px";
            who_isin_spot[`who_isin_spot${spot_number}`][1].style.top = spots[`d${spot_number}_spot_y`] - 15 + "px";
        }
    }
};
    
//---------------------------center check function----if a pawn is alone in the spot, but not centerd-----------------------

function center_check(who_isin_spot, spot_number){

    
    if(who_isin_spot.length == 1){
        
        if((39 <= spot_number && spot_number <= 55) || (5 <= spot_number && spot_number <= 21) ||
        (69 <= spot_number && spot_number <= 75) || (90 <= spot_number && spot_number <= 96))
        {

            if(wide_center[`d${spot_number}_center_x`] != who_isin_spot[0].getBoundingClientRect().x){
    
                who_isin_spot[0].style.left = spots[`d${spot_number}_spot_x`] + "px";
            }

        }else{

            if(long_center[`d${spot_number}_center_y`] != who_isin_spot[0].getBoundingClientRect().y){
    
                who_isin_spot[0].style.left = spots[`d${spot_number}_spot_x`] + "px";
                who_isin_spot[0].style.top = spots[`d${spot_number}_spot_y`] + "px";
            }
        }
    }
};

//--------------------------number sail function---------to display the remaining dice number on each pawn-----------------

let hovered = []

function number_sail(dice_1, dice_2){

    if((is_dice_1_clicked == false && is_dice_2_clicked != false) || 
    (is_dice_1_clicked != false && is_dice_2_clicked == false) || 
    (is_dice_1_clicked == false && is_dice_2_clicked == false))
    { 

        for(let i = 1 ; i <= who_is_outof_home_indexes.length; i++){
            
        shows[`circle${i}`] = document.createElement("div");
        shows[`circle${i}`].id = `c${i}`;
        shows[`circle${i}`].classList.add("circle");
        document.body.appendChild(shows[`circle${i}`]);
                
        setTimeout(() => {
            
            shows[`circle${i}`].style.left = blue_containers[who_is_outof_home_indexes[i - 1]].getBoundingClientRect().x - 6 + "px";
            shows[`circle${i}`].style.top = blue_containers[who_is_outof_home_indexes[i - 1]].getBoundingClientRect().y - 6 + "px";

            let spot_number;

            for (let j = 1; j <= 96; j++) {

                div_in_spot = who_isin_spot[`who_isin_spot${j}`];

                if(div_in_spot[0] == blue_containers[who_is_outof_home_indexes[i - 1]] || div_in_spot[1] == blue_containers[who_is_outof_home_indexes[i - 1]]){

                    spot_number = j;
                    break;
                }  
            }

            if(dice_1 == 0 && (spot_number + dice_2 < 76)){

                shows[`circle${i}`].style.visibility = "visible";
                shows[`circle${i}`].textContent = `${dice_2}`;
                shows[`circle${i}`].addEventListener('click', function(){
                    
                    is_dice_2_clicked = true;
                    movements(dice_2, blue_containers[who_is_outof_home_indexes[i - 1]], spot_number, dice_1, dice_2);
                    roller_deactivater();
                    number_sail_destroyer()
                });
                
            }else if(dice_2 == 0 && (spot_number + dice_1 < 76)){

                shows[`circle${i}`].style.visibility = "visible";
                shows[`circle${i}`].textContent = `${dice_1}`;
                shows[`circle${i}`].addEventListener('click', function(){

                    is_dice_1_clicked = true;
                    movements(dice_1, blue_containers[who_is_outof_home_indexes[i - 1]], spot_number, dice_1, dice_2);
                    roller_deactivater();
                    number_sail_destroyer()
                    
                });
            
            }else if(dice_1 != 0 && dice_2 !== 0){

                function left_half(){

                    shows[`left_half_circle${i}`] = document.createElement("div"); // create the left_half_circle
                    shows[`left_half_circle${i}`].id = `left-half-circle${i}`;
                    shows[`left_half_circle${i}`].classList.add("left-half-circle");
                    document.body.appendChild(shows[`left_half_circle${i}`]);
                    shows[`left_half_circle${i}`].style.visibility = "visible";
                    shows[`left_half_circle${i}`].style.left = blue_containers[who_is_outof_home_indexes[i - 1]].getBoundingClientRect().x - 6 + "px";
                    shows[`left_half_circle${i}`].style.top = blue_containers[who_is_outof_home_indexes[i - 1]].getBoundingClientRect().y - 6 + "px";
    
                    shows[`left_half_circle${i}`].textContent = `${dice_1}`;
                    shows[`left_half_circle${i}`].addEventListener('click', function(){
    
                        is_dice_1_clicked = true;
                        movements(dice_1, blue_containers[who_is_outof_home_indexes[i - 1]], spot_number, dice_1, dice_2);
                        roller_deactivater();
                        number_sail_destroyer()
    
                    });
                }

                function right_half(){

                    shows[`right_half_circle${i}`] = document.createElement("div"); // create the right_half_circle
                    shows[`right_half_circle${i}`].id = `right-half-circle${i}`;
                    shows[`right_half_circle${i}`].classList.add("right-half-circle");
                    document.body.appendChild(shows[`right_half_circle${i}`]);
                    shows[`right_half_circle${i}`].style.visibility = "visible";
                    shows[`right_half_circle${i}`].style.left = blue_containers[who_is_outof_home_indexes[i - 1]].getBoundingClientRect().x - 6 + 20 + "px";
                    shows[`right_half_circle${i}`].style.top = blue_containers[who_is_outof_home_indexes[i - 1]].getBoundingClientRect().y - 6 + "px";
    
                    shows[`right_half_circle${i}`].textContent = `${dice_2}`;
                    shows[`right_half_circle${i}`].addEventListener('click', function(){
    
                        is_dice_2_clicked = true;
                        movements(dice_2, blue_containers[who_is_outof_home_indexes[i - 1]], spot_number, dice_1, dice_2);
                        roller_deactivater();
                        number_sail_destroyer()
    
                    });
                }

                function full_circle(){

                    shows[`full_circle${i}`] = document.createElement("div"); // create the full_circle
                    shows[`full_circle${i}`].id = `full-circle${i}`;
                    shows[`full_circle${i}`].classList.add("circle");
                    document.body.appendChild(shows[`full_circle${i}`]);
                    shows[`full_circle${i}`].style.visibility = "visible";
                    shows[`full_circle${i}`].style.left = blue_containers[who_is_outof_home_indexes[i - 1]].getBoundingClientRect().x - 6 + "px";
                    shows[`full_circle${i}`].style.top = blue_containers[who_is_outof_home_indexes[i - 1]].getBoundingClientRect().y - 6 + "px";
    
                }

                if((spot_number + dice_1 <= 76) && (spot_number + dice_2 <= 76)){

                    left_half();
                    right_half();

                }else if(spot_number + dice_1 <= 76){

                    full_circle();

                    shows[`full_circle${i}`].textContent = `${dice_1}`;
                    shows[`full_circle${i}`].addEventListener('click', function(){
    
                        is_dice_1_clicked = true;
                        movements(dice_1, blue_containers[who_is_outof_home_indexes[i - 1]], spot_number, dice_1, dice_2);
                        roller_deactivater();
                        number_sail_destroyer()
    
                    });

                }else if(spot_number + dice_2 <= 76){

                    full_circle();

                    shows[`full_circle${i}`].textContent = `${dice_2}`;
                    shows[`full_circle${i}`].addEventListener('click', function(){
    
                        is_dice_2_clicked = true;
                        movements(dice_2, blue_containers[who_is_outof_home_indexes[i - 1]], spot_number, dice_1, dice_2);
                        roller_deactivater();
                        number_sail_destroyer()
    
                    });
                }

            }
        }, time);
        }
    }
};

//-------------------roller deactivater function---------to prevent the player from cliking the dice roller-----------------

function roller_deactivater(){

    blue_roll = document.getElementById("blue-roll");
    
    if(!(is_dice_1_clicked == true && is_dice_2_clicked == true)){ // c1=0, c2=1 // c1=1, c2=0 // c1=0, c2=0 

        blue_roll.style.pointerEvents = "none"; 
        blue_roll.style.opacity = 0.5;

    }else{
        
        blue_roll.style.pointerEvents = "visible"; 
        blue_roll.style.opacity = 1;
        is_dice_1_clicked = false;
        is_dice_2_clicked = false;
    }
};

//----------------number sail destroyer function---------to destroy the number sail circles if they are used-----------------

function number_sail_destroyer() {

    for (let i = 1; i <= 4; i++) {

        let circle = document.getElementById(`c${i}`);
        let left_half_circle = document.getElementById(`left-half-circle${i}`);
        let right_half_circle = document.getElementById(`right-half-circle${i}`);
        let full_circle = document.getElementById(`full-circle${i}`);

        if (circle) { circle.remove(); }
        if (left_half_circle) { left_half_circle.remove(); }
        if (right_half_circle) { right_half_circle.remove(); }
        if (full_circle) { full_circle.remove(); }
    }
};