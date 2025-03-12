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

// Sample pawn Container coordinantes
let pawn_container = document.getElementById("blue-one-container")
let pawn_container_cords = pawn_container.getBoundingClientRect()

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
let wide_center = {}
let who_isin_spot = {}

for (let i = 1; i <= 68; i++) {

    divs[`d${i}`] = document.getElementById(`d${i}`);
    cords[`d${i}_cords`] = divs[`d${i}`].getBoundingClientRect();

    spots[`d${i}_spot_x`] = cords[`d${i}_cords`].x - Main_Container_cords.x + ((cords[`d${i}_cords`].width - pawn_container_cords.width) / 2);
    spots[`d${i}_spot_y`] = cords[`d${i}_cords`].y - Main_Container_cords.y + ((cords[`d${i}_cords`].height - pawn_container_cords.height) / 2);

    wide_center[`d${i}_center_x`] = cords[`d${i}_cords`].x + ((cords[`d${i}_cords`].width - pawn_container_cords.width)/2)

    who_isin_spot[`who_isin_spot${i}`] = [];
}

//---------------------------------------------------roll dice buttons-------------------------------------------------------

document.getElementById("blue-roll").addEventListener('click', function() {roll_dice("blue-roller-one-image", "blue-roller-two-image")});
document.getElementById("red-roll").addEventListener('click', function() {roll_dice("red-roller-one-image", "red-roller-two-image")});
document.getElementById("yellow-roll").addEventListener('click', function() {roll_dice("yellow-roller-one-image", "yellow-roller-two-image")});
document.getElementById("green-roll").addEventListener('click', function() {roll_dice("green-roller-one-image", "green-roller-two-image")});

//---------------------------------------------------roll dice function------------------------------------------------------

let who_is_home = {
    blue_one: blue_one_container,
    blue_two: blue_two_container,
    blue_three: blue_three_container,
    blue_four: blue_four_container
}
let blue_containers = {
    blue_one: blue_one_container,
    blue_two: blue_two_container,
    blue_three: blue_three_container,
    blue_four: blue_four_container
}

let who_is_home_indexes = ["blue_one", "blue_two", "blue_three", "blue_four"]

let count = 0;
var clicked1 = false;
var clicked2 = false;

function roll_dice(roller_one_image, roller_two_image){

    let dice_1;
    let dice_2;

    function dicy(){
        if(count == 0){
            dice_1 = 5;
            dice_2 = 5;
            count++;
        }else if(count == 1){
            dice_1 = 5;
            dice_2 = 4;
        }
    }
    dicy();

    // set the dices
    // let dice_1 = Math.floor(Math.random() * 6) + 1;
    // let dice_2 = Math.floor(Math.random() * 6) + 1;

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
    if(dice_1 == 5 && dice_2 == 5){

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

            if(Object.keys(who_is_home).length > 1)
            {
                index0 = who_is_home_indexes[0]
                index1 = who_is_home_indexes[1]

                who_is_home[`${index0}`].style.left = spots.d52_spot_x - 15 + "px";
                who_is_home[`${index0}`].style.top = spots.d52_spot_y + "px";
                delete who_is_home[`${index0}`]
                who_is_home_indexes = who_is_home_indexes.filter(container => container != who_is_home_indexes[0])
                who_isin_spot.who_isin_spot52.push(blue_containers[`${index0}`])

                who_is_home[`${index1}`].style.left = spots.d52_spot_x + 15 + "px";
                who_is_home[`${index1}`].style.top = spots.d52_spot_y + "px";
                delete who_is_home[`${index1}`]
                who_is_home_indexes = who_is_home_indexes.filter(container => container != who_is_home_indexes[0])
                who_isin_spot.who_isin_spot52.push(blue_containers[`${index1}`])
            }
        }else if(who_isin_spot.who_isin_spot52.length == 2){
            
            let float = document.getElementById("numbers-container")
            let number_one = document.getElementById("number-one")
            let number_two = document.getElementById("number-two")
            
            float.style.left = cords.d52_cords.x + 3 + "px";
            float.style.top = spots.d52_spot_y + 35 + "px";
            float.style.visibility = "visible";
            number_one.textContent = dice_1;
            number_two.textContent = dice_2;
            number_one.addEventListener('click', () => {movements(dice_1, blue_containers[`${index0}`], 52); number_one.style.pointerEvents = "none"; number_one.style.opacity = 0.5})
            number_two.addEventListener('click', () => {movements(dice_2)})

            
        }
    }

    else if(dice_1 == 5 || dice_2 == 5 || dice_1 + dice_2 == 5){

        if(who_is_home_indexes.includes("blue_one") && who_isin_spot.who_isin_spot52.length <= 1){


            blue_one_container.style.left = spots.d52_spot_x + "px";
            blue_one_container.style.top = spots.d52_spot_y + "px";
            who_isin_spot.who_isin_spot52.push(who_is_home_indexes[0]);
            who_is_home_indexes = who_is_home_indexes.filter(container => container != "blue_one");

            if(who_isin_spot.who_isin_spot52.length == 1){
                if(dice_1 == 5){
                    setTimeout(() => { after_home(dice_2) }, 100)
                }else if(dice_2 == 5){
                    setTimeout(() => { after_home(dice_1) }, 100)
                }
            }

        }else if(who_is_home_indexes.includes("blue_two") && who_isin_spot.who_isin_spot52.length <= 1){

            blue_two_container.style.left = spots.d52_spot_x + "px";
            blue_two_container.style.top = spots.d52_spot_y + "px";
            who_isin_spot.who_isin_spot52.push("blue_two");
            who_is_home_indexes = who_is_home_indexes.filter(container => container != "blue_two");

            if(who_isin_spot.who_isin_spot52.length == 1){
                if(dice_1 == 5){
                    setTimeout(() => { after_home(dice_2) }, 100)
                }else if(dice_2 == 5){
                    setTimeout(() => { after_home(dice_1) }, 100)
                }
            }
        }else if(who_is_home_indexes.includes("blue_three") && who_isin_spot.who_isin_spot52.length <= 1){

            blue_three_container.style.left = spots.d52_spot_x + "px";
            blue_three_container.style.top = spots.d52_spot_y + "px";
            who_isin_spot.who_isin_spot52.push("blue_three");
            who_is_home_indexes = who_is_home_indexes.filter(container => container != "blue_three");

            if(who_isin_spot.who_isin_spot52.length == 1){
                if(dice_1 == 5){
                    setTimeout(() => { after_home(dice_2) }, 100)
                }else if(dice_2 == 5){
                    setTimeout(() => { after_home(dice_1) }, 100)
                }
            }
        }else if(who_is_home_indexes.includes("blue_four") && who_isin_spot.who_isin_spot52.length <= 1){

            blue_four_container.style.left = spots.d52_spot_x + "px";
            blue_four_container.style.top = spots.d52_spot_y + "px";
            who_isin_spot.who_isin_spot52.push("blue_four");
            who_is_home_indexes = who_is_home_indexes.filter(container => container != "blue_four");

            if(who_isin_spot.who_isin_spot52.length == 1){
                if(dice_1 == 5){
                    setTimeout(() => { after_home(dice_2) }, 100)
                }else if(dice_2 == 5){
                    setTimeout(() => { after_home(dice_1) }, 100)
                }
            }
        }else if(who_isin_spot.who_isin_spot52.length == 2){
            
            let float = document.getElementById("numbers-container")
            let number_one = document.getElementById("number-one")
            let number_two = document.getElementById("number-two")
            
            float.style.left = who_isin_spot.who_isin_spot52[0].getBoundingClientRect().x + "px";
            float.style.top = who_isin_spot.who_isin_spot52[0].getBoundingClientRect().y - 35 + "px";
            float.style.visibility = "visible";
            number_one.textContent = dice_1;
            number_two.textContent = dice_2;
            number_one.addEventListener('click', () => {clicked1 = true;movements(dice_1, blue_containers[`${index0}`], 52); number_one.style.pointerEvents = "none"; number_one.style.opacity = 0.5})
            number_two.addEventListener('click', () => {clicked2 = true;movements(dice_2, blue_containers[`${index1}`], 52); number_two.style.pointerEvents = "none"; number_two.style.opacity = 0.5})

        }
    }
}

//--------------------------------after home function----to automate movement if neccessary----------------------------------

function after_home(dice){

    if(cords.d52_cords.y - 5 < blue_one_container.getBoundingClientRect().y &&
        blue_one_container.getBoundingClientRect().y < cords.d52_cords.y + d52.getBoundingClientRect().height &&
         who_is_home.length > 3 )
    {

        for(let i = 1; i <= dice; i++){
            setTimeout(() => {

                blue_one_container.style.top = spots[`d${52 + i}_spot_y`] + "px";
                blue_one_container.style.left = spots[`d${52 + i}_spot_x`] + "px";
                
            }, i * 250);
        }

        who_isin_spot[`who_isin_spot${52 + dice}`].push(blue_containers[`${index0}`])
        who_isin_spot.who_isin_spot52 = who_isin_spot.who_isin_spot52.filter(container => container != blue_containers[`${index0}`])

        center_check(spots.d52_spot_x, who_isin_spot.who_isin_spot52, 52)
    }
}

//------------------------------------------movements function----to move the pawns----------------------------------------

function movements(dice, container, div_number){

    for(let i = 1; i <= dice; i++){
        setTimeout(() => {

            container.style.top = spots[`d${52 + i}_spot_y`] + "px";
            container.style.left = spots[`d${52 + i}_spot_x`] + "px";
            
        }, i * 250);
    }

    who_isin_spot[`who_isin_spot${52 + dice}`].push(blue_containers[`${index0}`])
    who_isin_spot.who_isin_spot52 = who_isin_spot.who_isin_spot52.filter(container => container != blue_containers[`${index0}`])

    center_check(spots.d52_spot_x, who_isin_spot.who_isin_spot52, 52)

}

//--------------------------------Parallel check function----if two pawns are in the same spot------------------------------

function parallel_check(left_container, right_container){
    
    if(left_container.getBoundingClientRect().x == right_container.getBoundingClientRect().x && right_container.getBoundingClientRect().y == left_container.getBoundingClientRect().y)
        {
            left_container.style.left = (left_container.getBoundingClientRect().left - 15) - (Main_Container_cords.x) + "px";
            right_container.style.left = (right_container.getBoundingClientRect().left + 15) - (Main_Container_cords.x) + "px";
            
        }
    }
    
//---------------------------center check function----if a pawn is alone in the spot, but not centerd-----------------------

function center_check(spot_x, who_isin_spot, number){

    if(who_isin_spot.length == 1 && 
        wide_center[`d${number}_center_x`] != blue_two_container.getBoundingClientRect().x)
    {
         setTimeout(() => {
             blue_two_container.style.left = spot_x + "px";
         }, 350);
    }
}