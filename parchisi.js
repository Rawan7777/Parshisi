let Main_Container = document.getElementById("Main-Container")
let Main_Container_cords = Main_Container.getBoundingClientRect()

let oval1 = document.getElementById("blue-oval1")
let oval4 = document.getElementById("blue-oval4")

let oval1_cords = oval1.getBoundingClientRect()
let oval4_cords = oval4.getBoundingClientRect()

let blue_one_container = document.getElementById("blue-one-container")
let blue_two_container = document.getElementById("blue-two-container")
let blue_three_container = document.getElementById("blue-three-container")
let blue_four_container = document.getElementById("blue-four-container")

let blue_one_container_cords = blue_one_container.getBoundingClientRect()
let blue_two_container_cords = blue_two_container.getBoundingClientRect()
let blue_three_container_cords = blue_three_container.getBoundingClientRect()
let blue_four_container_cords = blue_four_container.getBoundingClientRect()

// calculate the homes coordinantes

let close_cords = oval1_cords.x - Main_Container_cords.x + ((oval1_cords.width - blue_one_container_cords.width)/2);
let far_cords = oval4_cords.x - Main_Container_cords.x + ((oval4_cords.width - blue_four_container_cords.width)/2);

// blue

blue_one_container.style.left = close_cords + "px";
blue_one_container.style.top = close_cords + "px";

blue_two_container.style.left = far_cords + "px";
blue_two_container.style.top = close_cords + "px";

blue_three_container.style.left = close_cords + "px";
blue_three_container.style.top =  far_cords + "px";

blue_four_container.style.left = far_cords + "px";
blue_four_container.style.top =  far_cords + "px";

// red

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

//yellow

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

// green

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

//---------------------------------------------------roll dice button-------------------------------------------------------

document.getElementById("blue-roll").addEventListener('click', function() {roll_dice("blue-roller-one-image", "blue-roller-two-image")});
document.getElementById("red-roll").addEventListener('click', function() {roll_dice("red-roller-one-image", "red-roller-two-image")});
document.getElementById("yellow-roll").addEventListener('click', function() {roll_dice("yellow-roller-one-image", "yellow-roller-two-image")});
document.getElementById("green-roll").addEventListener('click', function() {roll_dice("green-roller-one-image", "green-roller-two-image")});


function roll_dice(roller_one_image, roller_two_image){

    let dice_1 = Math.floor(Math.random() * 6) + 1;
    let dice_2 = Math.floor(Math.random() * 6) + 1;

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
}