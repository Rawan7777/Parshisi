// Main Container coordinantes
let Main_Container = document.getElementById("Main-Container")
let Main_Container_cords = Main_Container.getBoundingClientRect()

// ovals coordinantes
let oval1 = document.getElementById("blue-oval1")
let oval2 = document.getElementById("blue-oval2")
let oval3 = document.getElementById("blue-oval3")
let oval4 = document.getElementById("blue-oval4")

let oval1_cords = oval1.getBoundingClientRect()
let oval2_cords = oval2.getBoundingClientRect()
let oval3_cords = oval3.getBoundingClientRect()
let oval4_cords = oval4.getBoundingClientRect()

// Pawns Containers Id's
let blue_one_container = document.getElementById("blue-one-container")
let blue_two_container = document.getElementById("blue-two-container")
let blue_three_container = document.getElementById("blue-three-container")
let blue_four_container = document.getElementById("blue-four-container")

// Main pawns Container coordinantes
let pawn_container = blue_one_container.getBoundingClientRect()

// calculate the homes coordinantes
let close_cords = oval1_cords.x - Main_Container_cords.x + ((oval1_cords.width - pawn_container.width)/2);
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

let red_one_container = document.getElementById("red-one-container")
let red_two_container = document.getElementById("red-two-container")
let red_three_container = document.getElementById("red-three-container")
let red_four_container = document.getElementById("red-four-container")

red_one_container.style.right = close_cords + "px";
red_one_container.style.top = close_cords + "px";

red_two_container.style.right = far_cords + "px";
red_two_container.style.top = close_cords + "px";

red_three_container.style.right = close_cords + "px";
red_three_container.style.top =  far_cords + "px";

red_four_container.style.right = far_cords + "px";
red_four_container.style.top =  far_cords + "px";

//yellow homes coordinantes

let yellow_one_container = document.getElementById("yellow-one-container")
let yellow_two_container = document.getElementById("yellow-two-container")
let yellow_three_container = document.getElementById("yellow-three-container")
let yellow_four_container = document.getElementById("yellow-four-container")

yellow_one_container.style.left = close_cords + "px";
yellow_one_container.style.bottom = close_cords + "px";

yellow_two_container.style.left = far_cords + "px";
yellow_two_container.style.bottom = close_cords + "px";

yellow_three_container.style.left = close_cords + "px";
yellow_three_container.style.bottom =  far_cords + "px";

yellow_four_container.style.left = far_cords + "px";
yellow_four_container.style.bottom =  far_cords + "px";

// green homes coordinantes

let green_one_container = document.getElementById("green-one-container")
let green_two_container = document.getElementById("green-two-container")
let green_three_container = document.getElementById("green-three-container")
let green_four_container = document.getElementById("green-four-container")

green_one_container.style.right = close_cords + "px";
green_one_container.style.bottom = close_cords + "px";

green_two_container.style.right = far_cords + "px";
green_two_container.style.bottom = close_cords + "px";

green_three_container.style.right = close_cords + "px";
green_three_container.style.bottom =  far_cords + "px";

green_four_container.style.right = far_cords + "px";
green_four_container.style.bottom =  far_cords + "px";

//----------------------------calculate the new x, y coordinants relative to the Main Container---------------------------

let divs = {}
let cords = {}
let spots = {}

for (let i = 1; i <= 68; i++) {

    divs[`d${i}`] = document.getElementById(`d${i}`);
    cords[`d${i}_cords`] = divs[`d${i}`].getBoundingClientRect();

    spots[`d${i}_spot_x`] = cords[`d${i}_cords`].x - Main_Container_cords.x + ((cords[`d${i}_cords`].width - pawn_container.width) / 2);
    spots[`d${i}_spot_y`] = cords[`d${i}_cords`].y - Main_Container_cords.y + ((cords[`d${i}_cords`].height - pawn_container.height) / 2);
}

//---------------------------------------------------roll dice buttons-------------------------------------------------------

document.getElementById("blue-roll").addEventListener('click', function() {roll_dice("blue-roller-one-image", "blue-roller-two-image")});
document.getElementById("red-roll").addEventListener('click', function() {roll_dice("red-roller-one-image", "red-roller-two-image")});
document.getElementById("yellow-roll").addEventListener('click', function() {roll_dice("yellow-roller-one-image", "yellow-roller-two-image")});
document.getElementById("green-roll").addEventListener('click', function() {roll_dice("green-roller-one-image", "green-roller-two-image")});

//---------------------------------------------------roll dice function------------------------------------------------------

function roll_dice(roller_one_image, roller_two_image){

    // set the dices
    let dice_1 = Math.floor(Math.random() * 6) + 1;
    let dice_2 = Math.floor(Math.random() * 6) + 1;

    // display the dices
    let roller_1_image = document.getElementById(roller_one_image)  
    switch(dice_1){
        case 1:
            roller_1_image.src = "dice_one.png"
            break;
        case 2:
            roller_1_image.src = "dice_two.png"
            break;
        case 3:
            roller_1_image.src = "dice_three.png"
            break;
        case 4:
            roller_1_image.src = "dice_four.png"
            break;
        case 5:
            roller_1_image.src = "dice_five.png"
            break;
        case 6:
            roller_1_image.src = "dice_six.png"
            break;

    }

    let roller_2_image = document.getElementById(roller_two_image) 
    switch(dice_2){
        case 1:
            roller_2_image.src = "dice_one.png"
            break;
        case 2:
            roller_2_image.src = "dice_two.png"
            break;
        case 3:
            roller_2_image.src = "dice_three.png"
            break;
        case 4:
            roller_2_image.src = "dice_four.png"
            break;
        case 5:
            roller_2_image.src = "dice_five.png"
            break;
        case 6:
            roller_2_image.src = "dice_six.png"
            break;
    }

    // enter the pawns to the path
    if(dice_1 == 5 || dice_2 == 5 || dice_1 + dice_2 == 5){

        if( oval1_cords.x < blue_one_container.getBoundingClientRect().x < oval1_cords.x + oval1_cords.width){

            blue_one_container.style.left = spots.d52_spot_x + "px";
            blue_one_container.style.top = spots.d52_spot_y + "px";

            if(dice_1 == 5){
                setTimeout(() => { after_home(dice_2) }, 100)
            }else if(dice_2 == 5){
                setTimeout(() => { after_home(dice_1) }, 100)
            }
        }
    }
}

//--------------------------------after home function----to automate movement if neccessary----------------------------------

function after_home(dice){

    // set the height and the width
    spot_height_66 = divs.d1.getBoundingClientRect().height
    spot_width_26 = divs.d1.getBoundingClientRect().width
    offsite = 1.5 // a little offsite

    if((cords.d52_cords.y - 5) < blue_one_container.getBoundingClientRect().y < cords.d52_cords.y + d52.getBoundingClientRect().height &&
     oval2_cords.x < blue_two_container.getBoundingClientRect().x < oval2_cords.x + oval2_cords.width &&
      oval2_cords.y < blue_two_container.getBoundingClientRect().y < oval2_cords.y + oval2_cords.height &&
       oval3_cords.x < blue_three_container.getBoundingClientRect().x < oval3_cords.x + oval3_cords.width &&
        oval3_cords.y < blue_three_container.getBoundingClientRect().y < oval3_cords.y + oval3_cords.height &&
         oval4_cords.x < blue_four_container.getBoundingClientRect().x < oval4_cords.x + oval4_cords.width &&
          oval4_cords.y < blue_four_container.getBoundingClientRect().y < oval4_cords.y + oval4_cords.height){

        if(dice <= 3){

            for(let i = 1; i <= dice; i++){
                setTimeout(() => {
                    blue_one_container.style.top = spots.d52_spot_y + (i * spot_width_26) - offsite + "px";
                }, i * 250);
            }

        }else if(dice > 3){

            for(let i = 1; i <= 3; i++){
                setTimeout(() => {
                    blue_one_container.style.top = spots.d52_spot_y + (i * spot_width_26) - offsite + "px";
                }, i * 250);
            }
            
            new_dice = dice - 4

            setTimeout(() => {
                blue_one_container.style.top = spots.d56_spot_y + "px";
                blue_one_container.style.left = spots.d56_spot_x + "px";
            }, 3 * 250 + 250);

            for(let i = 1; i <= new_dice; i++){
                setTimeout(() => {
                    blue_one_container.style.left = spots.d56_spot_x - (i * spot_width_26) + offsite + "px";
                },3 * 250 + i * 250);
            }
        }
    }
}