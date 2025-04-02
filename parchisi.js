// Main Container coordinantes
let Main_Container = document.getElementById("Main-Container");
let Main_Container_cords = Main_Container.getBoundingClientRect();

// blue ovals coordinantes
let blue_oval_one_cords = document.getElementById("blue_oval_one").getBoundingClientRect();
let blue_oval_two_cords = document.getElementById("blue_oval_two").getBoundingClientRect();
let blue_oval_three_cords = document.getElementById("blue_oval_three").getBoundingClientRect();
let blue_oval_four_cords = document.getElementById("blue_oval_four").getBoundingClientRect();

// red ovals coordinantes
let red_oval_one_cords = document.getElementById("red_oval_one").getBoundingClientRect();
let red_oval_two_cords = document.getElementById("red_oval_two").getBoundingClientRect();
let red_oval_three_cords = document.getElementById("red_oval_three").getBoundingClientRect();
let red_oval_four_cords = document.getElementById("red_oval_four").getBoundingClientRect();

// green ovals coordinantes
let green_oval_one_cords = document.getElementById("green_oval_one").getBoundingClientRect();
let green_oval_two_cords = document.getElementById("green_oval_two").getBoundingClientRect();
let green_oval_three_cords = document.getElementById("green_oval_three").getBoundingClientRect();
let green_oval_four_cords = document.getElementById("green_oval_four").getBoundingClientRect();

// yellow ovals coordinantes
let yellow_oval_one_cords = document.getElementById("yellow_oval_one").getBoundingClientRect();
let yellow_oval_two_cords = document.getElementById("yellow_oval_two").getBoundingClientRect();
let yellow_oval_three_cords = document.getElementById("yellow_oval_three").getBoundingClientRect();
let yellow_oval_four_cords = document.getElementById("yellow_oval_four").getBoundingClientRect();

// Pawns Containers Id's
let blue_one_container = document.getElementById("blue_one_container");
let blue_two_container = document.getElementById("blue_two_container");
let blue_three_container = document.getElementById("blue_three_container");
let blue_four_container = document.getElementById("blue_four_container");

// Sample pawn Container coordinantes
let pawn_container_cords = document.getElementById("blue_one_container").getBoundingClientRect();

// blue home coordinantes

blue_one_container.style.left = blue_oval_one_cords.x - Main_Container_cords.x + ((blue_oval_one_cords.width - pawn_container_cords.width)/2) + "px";
blue_one_container.style.top = blue_oval_one_cords.y - Main_Container_cords.y + ((blue_oval_one_cords.width - pawn_container_cords.width)/2) + "px";

blue_two_container.style.left = blue_oval_two_cords.x - Main_Container_cords.x + ((blue_oval_two_cords.width - pawn_container_cords.width)/2) + "px";
blue_two_container.style.top = blue_oval_two_cords.y - Main_Container_cords.y + ((blue_oval_two_cords.width - pawn_container_cords.width)/2) + "px";

blue_three_container.style.left = blue_oval_three_cords.x - Main_Container_cords.x + ((blue_oval_three_cords.width - pawn_container_cords.width)/2) + "px";
blue_three_container.style.top = blue_oval_three_cords.y - Main_Container_cords.y + ((blue_oval_three_cords.width - pawn_container_cords.width)/2) + "px";

blue_four_container.style.left = blue_oval_four_cords.x - Main_Container_cords.x + ((blue_oval_four_cords.width - pawn_container_cords.width)/2) + "px";
blue_four_container.style.top = blue_oval_four_cords.y - Main_Container_cords.y + ((blue_oval_four_cords.width - pawn_container_cords.width)/2) + "px";

// red home coordinantes

let red_one_container = document.getElementById("red_one_container");
let red_two_container = document.getElementById("red_two_container");
let red_three_container = document.getElementById("red_three_container");
let red_four_container = document.getElementById("red_four_container");

red_one_container.style.left = red_oval_one_cords.x - Main_Container_cords.x + ((red_oval_one_cords.width - pawn_container_cords.width)/2) + "px";
red_one_container.style.top = red_oval_one_cords.y - Main_Container_cords.y + ((red_oval_one_cords.width - pawn_container_cords.width)/2) + "px";

red_two_container.style.left = red_oval_two_cords.x - Main_Container_cords.x + ((red_oval_two_cords.width - pawn_container_cords.width)/2) + "px";
red_two_container.style.top = red_oval_two_cords.y - Main_Container_cords.y + ((red_oval_two_cords.width - pawn_container_cords.width)/2) + "px";

red_three_container.style.left = red_oval_three_cords.x - Main_Container_cords.x + ((red_oval_three_cords.width - pawn_container_cords.width)/2) + "px";
red_three_container.style.top = red_oval_three_cords.y - Main_Container_cords.y + ((red_oval_three_cords.width - pawn_container_cords.width)/2) + "px";

red_four_container.style.left = red_oval_four_cords.x - Main_Container_cords.x + ((red_oval_four_cords.width - pawn_container_cords.width)/2) + "px";
red_four_container.style.top = red_oval_four_cords.y - Main_Container_cords.y + ((red_oval_four_cords.width - pawn_container_cords.width)/2) + "px";

//yellow home coordinantes

let yellow_one_container = document.getElementById("yellow_one_container");
let yellow_two_container = document.getElementById("yellow_two_container");
let yellow_three_container = document.getElementById("yellow_three_container");
let yellow_four_container = document.getElementById("yellow_four_container");

yellow_one_container.style.left = yellow_oval_one_cords.x - Main_Container_cords.x + ((yellow_oval_one_cords.width - pawn_container_cords.width)/2) + "px";
yellow_one_container.style.top = yellow_oval_one_cords.y - Main_Container_cords.y + ((yellow_oval_one_cords.width - pawn_container_cords.width)/2) + "px";

yellow_two_container.style.left = yellow_oval_two_cords.x - Main_Container_cords.x + ((yellow_oval_two_cords.width - pawn_container_cords.width)/2) + "px";
yellow_two_container.style.top = yellow_oval_two_cords.y - Main_Container_cords.y + ((yellow_oval_two_cords.width - pawn_container_cords.width)/2) + "px";

yellow_three_container.style.left = yellow_oval_three_cords.x - Main_Container_cords.x + ((yellow_oval_three_cords.width - pawn_container_cords.width)/2) + "px";
yellow_three_container.style.top = yellow_oval_three_cords.y - Main_Container_cords.y + ((yellow_oval_three_cords.width - pawn_container_cords.width)/2) + "px";

yellow_four_container.style.left = yellow_oval_four_cords.x - Main_Container_cords.x + ((yellow_oval_four_cords.width - pawn_container_cords.width)/2) + "px";
yellow_four_container.style.top = yellow_oval_four_cords.y - Main_Container_cords.y + ((yellow_oval_four_cords.width - pawn_container_cords.width)/2) + "px";

// green home coordinantes

let green_one_container = document.getElementById("green_one_container");
let green_two_container = document.getElementById("green_two_container");
let green_three_container = document.getElementById("green_three_container");
let green_four_container = document.getElementById("green_four_container");

green_one_container.style.left = green_oval_one_cords.x - Main_Container_cords.x + ((green_oval_one_cords.width - pawn_container_cords.width)/2) + "px";
green_one_container.style.top = green_oval_one_cords.y - Main_Container_cords.y + ((green_oval_one_cords.width - pawn_container_cords.width)/2) + "px";

green_two_container.style.left = green_oval_two_cords.x - Main_Container_cords.x + ((green_oval_two_cords.width - pawn_container_cords.width)/2) + "px";
green_two_container.style.top = green_oval_two_cords.y - Main_Container_cords.y + ((green_oval_two_cords.width - pawn_container_cords.width)/2) + "px";

green_three_container.style.left = green_oval_three_cords.x - Main_Container_cords.x + ((green_oval_three_cords.width - pawn_container_cords.width)/2) + "px";
green_three_container.style.top = green_oval_three_cords.y - Main_Container_cords.y + ((green_oval_three_cords.width - pawn_container_cords.width)/2) + "px";

green_four_container.style.left = green_oval_four_cords.x - Main_Container_cords.x + ((green_oval_four_cords.width - pawn_container_cords.width)/2) + "px";
green_four_container.style.top = green_oval_four_cords.y - Main_Container_cords.y + ((green_oval_four_cords.width - pawn_container_cords.width)/2) + "px";

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

//------------------------------------------------declare blue objects, arrays-----------------------------------------------

// object of which one of the blue pawns are home
let blue_who_is_home = {

//  ▼nicknames▼     ▼actual id's name▼
    blue_one:       blue_one_container,
    blue_two:       blue_two_container,
    blue_three:     blue_three_container,
    blue_four:      blue_four_container

};

// a reference and an unchangeable copy of the previous object
let blue_containers = {
    
//  ▼nicknames▼     ▼actual id's name▼
    blue_one:       blue_one_container,
    blue_two:       blue_two_container,
    blue_three:     blue_three_container,
    blue_four:      blue_four_container

};

// array to store the nicknames of which one of the blue pawns are home
let blue_who_is_home_nicknames = ["blue_one", "blue_two", "blue_three", "blue_four"];

// array to store the nicknames of which one of the blue pawns are out of home
let blue_who_is_outof_home_nicknames = [];

//------------------------------------------------declare red objects, arrays-----------------------------------------------

// object of which one of the red pawns are home
let red_who_is_home = {

//  ▼nicknames▼     ▼actual id's name▼
    red_one:       red_one_container,
    red_two:       red_two_container,
    red_three:     red_three_container,
    red_four:      red_four_container

};

// a reference and an unchangeable copy of the previous object
let red_containers = {
    
//  ▼nicknames▼     ▼actual id's name▼
    red_one:       red_one_container,
    red_two:       red_two_container,
    red_three:     red_three_container,
    red_four:      red_four_container

};

// array to store the nicknames of which one of the red pawns are home
let red_who_is_home_nicknames = ["red_one", "red_two", "red_three", "red_four"];

// array to store the nicknames of which one of the red pawns are out of home
let red_who_is_outof_home_nicknames = [];

//------------------------------------------------declare green objects, arrays-----------------------------------------------

// object of which one of the green pawns are home
let green_who_is_home = {

//  ▼nicknames▼     ▼actual id's name▼
    green_one:       green_one_container,
    green_two:       green_two_container,
    green_three:     green_three_container,
    green_four:      green_four_container

};

// a reference and an unchangeable copy of the previous object
let green_containers = {
    
//  ▼nicknames▼     ▼actual id's name▼
    green_one:       green_one_container,
    green_two:       green_two_container,
    green_three:     green_three_container,
    green_four:      green_four_container

};

// array to store the nicknames of which one of the green pawns are home
let green_who_is_home_nicknames = ["green_one", "green_two", "green_three", "green_four"];

// array to store the nicknames of which one of the green pawns are out of home
let green_who_is_outof_home_nicknames = [];

//------------------------------------------------declare yellow objects, arrays-----------------------------------------------

// object of which one of the yellow pawns are home
let yellow_who_is_home = {

//  ▼nicknames▼     ▼actual id's name▼
    yellow_one:       yellow_one_container,
    yellow_two:       yellow_two_container,
    yellow_three:     yellow_three_container,
    yellow_four:      yellow_four_container

};

// a reference and an unchangeable copy of the previous object
let yellow_containers = {
    
//  ▼nicknames▼     ▼actual id's name▼
    yellow_one:       yellow_one_container,
    yellow_two:       yellow_two_container,
    yellow_three:     yellow_three_container,
    yellow_four:      yellow_four_container

};

// array to store the nicknames of which one of the yellow pawns are home
let yellow_who_is_home_nicknames = ["yellow_one", "yellow_two", "yellow_three", "yellow_four"];

// array to store the nicknames of which one of the yellow pawns are out of home
let yellow_who_is_outof_home_nicknames = [];

//------------------------------------------set the initial state of the dice rollers-----------------------------------------

blue_roll = document.getElementById("blue-roll");
red_roll = document.getElementById("red-roll");
green_roll = document.getElementById("green-roll");
yellow_roll = document.getElementById("yellow-roll");

red_roll.style.pointerEvents =  "none"; 
red_roll.style.opacity = 0.5;

green_roll.style.pointerEvents =  "none"; 
green_roll.style.opacity = 0.5;

//-----------------------------------the round selector function to cycle through the rounds----------------------------------

let round = 3; // to indicate the round (starts with blue)

function round_selector(){

    if(round == 1){

        blue_roll.style.pointerEvents = "visible"; 
        blue_roll.style.opacity = 1;

        yellow_roll.style.pointerEvents =  "none"; 
        yellow_roll.style.opacity = 0.5;
        // round++;

    }else if(round == 2){

        red_roll.style.pointerEvents = "visible"; 
        red_roll.style.opacity = 1;

        blue_roll.style.pointerEvents =  "none"; 
        blue_roll.style.opacity = 0.5;
        // round++;

    }else if(round == 3){

        green_roll.style.pointerEvents = "visible"; 
        green_roll.style.opacity = 1;

        red_roll.style.pointerEvents =  "none"; 
        red_roll.style.opacity = 0.5;
        // round++;

    }else if(round == 4){

        yellow_roll.style.pointerEvents = "visible"; 
        yellow_roll.style.opacity = 1;

        green_roll.style.pointerEvents =  "none"; 
        green_roll.style.opacity = 0.5;
        // round++;
    }

    // start over from 1 when the round finishes
    if(round == 5){

        round = 1;
    }
}

round_selector(); // call the function

//--------------------------------------------------dice roller buttons------------------------------------------------------

document.getElementById("blue-roll").addEventListener('click', function() {roll_dice("blue-roller-one-image", "blue-roller-two-image", blue_containers, blue_who_is_home, blue_who_is_home_nicknames, blue_who_is_outof_home_nicknames, "blue", 52)});
document.getElementById("red-roll").addEventListener('click', function() {roll_dice("red-roller-one-image", "red-roller-two-image", red_containers, red_who_is_home, red_who_is_home_nicknames, red_who_is_outof_home_nicknames, "red", 35)});
document.getElementById("green-roll").addEventListener('click', function() {roll_dice("green-roller-one-image", "green-roller-two-image", green_containers, green_who_is_home, green_who_is_home_nicknames, green_who_is_outof_home_nicknames, "green", 18)});
document.getElementById("yellow-roll").addEventListener('click', function() {roll_dice("yellow-roller-one-image", "yellow-roller-two-image", yellow_containers, yellow_who_is_home, yellow_who_is_home_nicknames, yellow_who_is_outof_home_nicknames, "yellow", 1)});

//---------------------------------------------------declare variables-----------------------------------------------------

let double = 0; // to keep track of how many times, the dices values doubled

let is_dice_1_clicked = false; // indicates if the first dice number is played (true) or not (false)
let is_dice_2_clicked = false; // indicates if the second dice number is played (true) or not (false)
let time = 0; // to keep track and the correct wait time for the other setTimeout functions to complete 
let count = 0; // to count how many times the dice rolled (used for debugging)
let original_dice_1; // to store the original dice_1 value
let original_dice_2; // to store the original dice_2 value

//---------------------------------------------------roll dice function------------------------------------------------------

function roll_dice(roller_one_image, roller_two_image, colored_containers, who_is_home, who_is_home_nicknames, who_is_outof_home_nicknames, color, spot_number){

    // set the is_dice_1_clicked and is_dice_2_clicked to false every time the roll dice function is called 
    is_dice_1_clicked = false;
    is_dice_2_clicked = false;

    // a function fo set the dices values as desired for debugging (Temporary)
    let dice_1;
    let dice_2;

    function dicy(){
        if(count <= 2){
            dice_1 = 5;
            dice_2 = 6;
            count++;
        }else if(count <= 42 || count <= 5 || count == 9 || count == 12){
            dice_1 = 6;
            dice_2 = 6;
            count++
        }else if(count == 2 || count == 6 || count == 10 ){
            dice_1 = 6;
            dice_2 = 3;
            count++
        }else if(count == 3 || count == 7){
            dice_1 = 1;
            dice_2 = 2;
            count++
        }else if(count == 13){
            dice_1 = 5;
            dice_2 = 4;
            count++
        }else if(count == 14){
            dice_1 = 1;
            dice_2 = 1;
            count++
        }else if(count <= 16){
            dice_1 = 5;
            dice_2 = 5;
            count++
        }else if(count == 17){
            dice_1 = 3;
            dice_2 = 3;
            count++
        }else if(count == 18){
            dice_1 = 1;
            dice_2 = 2;
            count++
        }
    };

    dicy();

    // set the dices
    // let dice_1 = Math.floor(Math.random() * 6) + 1;
    // let dice_2 = Math.floor(Math.random() * 6) + 1;

    original_dice_1 = dice_1;
    original_dice_2 = dice_2;
    
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

    // assign the home spot coordinates, and the enter spot array based on the color 

    let d$$_spot_x;
    let d$$_spot_y;
    let who_isin_spot$$;

    if(color == "blue"){

        d$$_spot_x = spots.d52_spot_x;
        d$$_spot_y = spots.d52_spot_y;
        who_isin_spot$$ = who_isin_spot.who_isin_spot52;

    }else if(color == "red"){

        d$$_spot_x = spots.d35_spot_x;
        d$$_spot_y = spots.d35_spot_y;
        who_isin_spot$$ = who_isin_spot.who_isin_spot35;
        
    }else if(color == "green"){

        d$$_spot_x = spots.d18_spot_x;
        d$$_spot_y = spots.d18_spot_y;
        who_isin_spot$$ = who_isin_spot.who_isin_spot18;

    }else if(color == "yellow"){

        d$$_spot_x = spots.d1_spot_x;
        d$$_spot_y = spots.d1_spot_y;
        who_isin_spot$$ = who_isin_spot.who_isin_spot1;
    }

    // enter the pawns to the path if both of the dices are equel to 5
    if(dice_1 == 5 && dice_2 == 5){

        double++;

        // check if the enter spot (52, 35, 18, or 1) is COMPLETELY empty, to enter TWO pawns to it
        if(who_isin_spot$$.length == 0){

            // check if there is at least 2 pawns in home to enter
            if(who_is_home_nicknames.length >= 2){

                if(color == "green" || color == "blue"){
                    
                    who_is_home[who_is_home_nicknames[0]].style.left = d$$_spot_x - 15 + "px";
                    who_is_home[who_is_home_nicknames[0]].style.top = d$$_spot_y + "px";

                    who_is_home[who_is_home_nicknames[1]].style.left = d$$_spot_x + 15 + "px";
                    who_is_home[who_is_home_nicknames[1]].style.top = d$$_spot_y + "px";

                }else if(color == "red" || color == "yellow"){
                    
                    who_is_home[who_is_home_nicknames[0]].style.left = d$$_spot_x + "px";
                    who_is_home[who_is_home_nicknames[0]].style.top = d$$_spot_y + 15 + "px";

                    who_is_home[who_is_home_nicknames[1]].style.left = d$$_spot_x + "px";
                    who_is_home[who_is_home_nicknames[1]].style.top = d$$_spot_y - 15 + "px";
                }

                who_is_outof_home_nicknames.push(who_is_home_nicknames[0]);
                who_isin_spot$$.push(colored_containers[who_is_home_nicknames[0]]);
                delete who_is_home[who_is_home_nicknames[0]];
                who_is_home_nicknames.splice(0, 1);

                who_is_outof_home_nicknames.push(who_is_home_nicknames[0]);
                who_isin_spot$$.push(colored_containers[who_is_home_nicknames[0]]);
                delete who_is_home[who_is_home_nicknames[0]];
                who_is_home_nicknames.splice(0, 1);

                is_dice_1_clicked = true; // indicating that dice_1 is clicked and played
                is_dice_2_clicked = true; // indicating that dice_2 is clicked and played

                // roller_switcher(color); // to deactivate the dice roller till the next round

                // check if the dices were the same for the third time in a row
                if(double == 3){

                    go_back_home(color, colored_containers, who_is_outof_home_nicknames, who_is_home_nicknames);
                }

            // check if there is only one pawn in home to enter
            }else if(who_is_home_nicknames.length == 1){

                who_is_home[who_is_home_nicknames[0]].style.left = d$$_spot_x + "px";
                who_is_home[who_is_home_nicknames[0]].style.top = d$$_spot_y + "px";
                who_is_outof_home_nicknames.push(who_is_home_nicknames[0]);
                who_isin_spot$$.push(colored_containers[who_is_home_nicknames[0]]);
                delete who_is_home[who_is_home_nicknames[0]];
                who_is_home_nicknames.splice(0, 1);

                dice_1 = 0; // set dice_1 to zero because it is already played
                is_dice_1_clicked = true; 

                if(double != 3){

                    time = 400;
                    number_sail(dice_1, dice_2, colored_containers, who_is_outof_home_nicknames, color, who_is_home_nicknames);

                }else if(double == 3){

                    go_back_home(color, colored_containers, who_is_outof_home_nicknames, who_is_home_nicknames);
                }
                // roller_switcher(color);
                
            // check if there is no pawn in home to enter
            }else if(who_is_home_nicknames.length == 0){
                
                if(double != 3){

                    time = 0;
                    number_sail(dice_1, dice_2, colored_containers, who_is_outof_home_nicknames, color, who_is_home_nicknames);

                }else if(double == 3){

                    go_back_home(color, colored_containers, who_is_outof_home_nicknames, who_is_home_nicknames);
                }
            }

        // check if the enter spot (52, 35, 18, or 1) is occupied with only one pawn, to enter only one pawn
        }else if(who_isin_spot$$.length == 1){

            // check if there is at least 1 pawn in home to enter
            if(who_is_home_nicknames.length >= 1){

                if(color == "green" || color == "blue"){
                    
                    who_isin_spot$$[0].style.left = d$$_spot_x + 15 + "px";
                    who_isin_spot$$[0].style.top = d$$_spot_y + "px";
        
                    who_is_home[who_is_home_nicknames[0]].style.left = d$$_spot_x - 15 + "px";
                    who_is_home[who_is_home_nicknames[0]].style.top = d$$_spot_y + "px";

                }else if(color == "red" || color == "yellow"){
                    
                    who_isin_spot$$[0].style.left = d$$_spot_x + "px";
                    who_isin_spot$$[0].style.top = d$$_spot_y + 15  + "px";
        
                    who_is_home[who_is_home_nicknames[0]].style.left = d$$_spot_x + "px";
                    who_is_home[who_is_home_nicknames[0]].style.top = d$$_spot_y - 15 + "px";
                
                }

                who_is_outof_home_nicknames.push(who_is_home_nicknames[0]);
                who_isin_spot$$.push(colored_containers[who_is_home_nicknames[0]]);
                delete who_is_home[who_is_home_nicknames[0]];
                who_is_home_nicknames.splice(0, 1);
                
                dice_1 = 0;
                is_dice_1_clicked = true;
    
                if(double != 3){

                    time = 400;
                    number_sail(dice_1, dice_2, colored_containers, who_is_outof_home_nicknames, color, who_is_home_nicknames);

                }else if(double == 3){

                    go_back_home(color, colored_containers, who_is_outof_home_nicknames, who_is_home_nicknames);
                }
    
                // roller_switcher(color);

            // check if there is no pawn in home to enter
            }else if(who_is_home_nicknames.length == 0){

                if(double != 3){

                    time = 0;
                    number_sail(dice_1, dice_2, colored_containers, who_is_outof_home_nicknames, color, who_is_home_nicknames);

                }else if(double == 3){

                    go_back_home(color, colored_containers, who_is_outof_home_nicknames, who_is_home_nicknames);
                }
            }

        // check if the enter spot (52, 35, 18, or 1) is full with two pawns
        }else if(who_isin_spot$$.length == 2){

            // roller_switcher(color);
            time = 0;
            number_sail(dice_1, dice_2, colored_containers, who_is_outof_home_nicknames, color, who_is_home_nicknames);
        }
    }

    // enter the pawns to the path if at least one of the dices or the sum of the both of them is equel to 5
    else if(dice_1 == 5 || dice_2 == 5 || dice_1 + dice_2 == 5){

        // check if there is at least one pawn in home, and if the enter spot (52, 35, 18, or 1) is not completely full
        if(who_is_home_nicknames.length >= 1 && who_isin_spot$$.length <= 1){

            // roller_switcher(color);  // to reactivate the dice roller

            who_is_home[who_is_home_nicknames[0]].style.left = d$$_spot_x + "px";
            who_is_home[who_is_home_nicknames[0]].style.top = d$$_spot_y + "px";
            who_isin_spot$$.push(who_is_home[who_is_home_nicknames[0]]);
            who_is_outof_home_nicknames.push(who_is_home_nicknames[0]);
            delete who_is_home[who_is_home_nicknames[0]];
            who_is_home_nicknames.splice(0, 1);

            // check if only one pawn is out of home
            if(who_is_home_nicknames.length == 3){

                // check if dice_1 is responsible for entering the pawn
                if(dice_1 == 5){

                    setTimeout(() => {

                        // to move the pawn by the remaining dice automatically
                        movements(dice_2, colored_containers[who_is_outof_home_nicknames[0]], spot_number, dice_1, dice_2, color, who_is_outof_home_nicknames);

                    }, 250);

                    dice = dice_2; // set the dice value (used later to set the waiting time)
                    is_dice_2_clicked = true;

                // check if dice_2 is responsible for entering the pawn
                }else if(dice_2 == 5){

                    setTimeout(() => {

                        movements(dice_1, colored_containers[who_is_outof_home_nicknames[0]], spot_number, dice_1, dice_2, color, who_is_outof_home_nicknames);

                    }, 250);

                    dice = dice_1; 
                    is_dice_1_clicked = true;

                // check if dice_1 + dice_2 are responsible for entering the pawn
                }else if(dice_1 + dice_2 == 5){

                    dice = 0;
                    is_dice_1_clicked = true;
                    is_dice_2_clicked = true;
                }
            }

            if(dice_1 == 5){

                dice_1 = 0; // set dice_1 to zero indicating that it is already played
                is_dice_1_clicked = true;
                dice = dice_1; 

            }else if(dice_2 == 5){

                dice_2 = 0; 
                is_dice_2_clicked = true;
                dice = dice_2;

            }else if(dice_1 + dice_2 == 5){

                dice_1 = 0;
                is_dice_1_clicked = true;
                dice_2 = 0;
                is_dice_2_clicked = true;
                dice = dice_1 + dice_2;
                round_selector();
            } 

            parallel_check(spot_number); // to check if two pawn are over each other

            // check if there is more than one pawn out of home
            if(who_is_outof_home_nicknames.length > 1){

                time = 400;
                number_sail(dice_1, dice_2, colored_containers, who_is_outof_home_nicknames, color, who_is_home_nicknames);
            }

            setTimeout(() => {

                // roller_switcher(color);

            }, dice * 250 + 400);

        // check if none pf the pawns are home
        }else if(who_is_home_nicknames.length == 0 || who_isin_spot$$.length == 2){
            
            // roller_switcher(color);
            time = 0;
            number_sail(dice_1, dice_2, colored_containers, who_is_outof_home_nicknames, color, who_is_home_nicknames);
        }

    // If neither of the dices nor their sum is equal to 5
    }else{

        // check if the both, dice_1 and dice_2 are the same
        if(original_dice_1 == original_dice_2){
            
            // double++;
        }

        // check if the both, dice_1 and dice_2 are the same for the third time in a row
        if(original_dice_1 == original_dice_2 && double == 3){

            go_back_home(color, colored_containers, who_is_outof_home_nicknames, who_is_home_nicknames);
        }

        // check if there is at least one pawn out of home
        else if(who_is_outof_home_nicknames.length > 0){
            
            // roller_switcher(color);
            time = 0;
            number_sail(dice_1, dice_2, colored_containers, who_is_outof_home_nicknames, color, who_is_home_nicknames);

        // if all the pawn are in home
        }else if(who_is_outof_home_nicknames.length == 0){

            // check if the dices are not the same
            if(original_dice_1 != original_dice_2){
                
                double = 0;
                round_selector();
            }
        }
    }

    // check if the both, dice_1 and dice_2 are the same for the third time in a row (for 5 & 5)
    if(original_dice_1 == original_dice_2 == 5 && double == 3){

        go_back_home(color, colored_containers, who_is_outof_home_nicknames, who_is_home_nicknames);
    }
};

//------------------------------------------movements function----to move the pawns----------------------------------------

let counter; // set a counter

// object of arrays to store the pawns that finished the race
let finishers_map = {

    blue: [],
    red: [],
    green: [],
    yellow: []

};

function movements(dice, container, spot_number, dice_1, dice_2, color, colored_containers, who_is_outof_home_nicknames, who_is_home_nicknames){

    counter = 0; // reset the counter

    for(let i = 1; i <= dice; i++){

        let first_winning_path;
        let winning_spot;

        if(color == "blue"){

            first_winning_path = 69;
            winning_spot = 76;

        }else if(color == "red"){

            first_winning_path = 76;
            winning_spot = 83;
            
        }else if(color == "green"){

            first_winning_path = 83;
            winning_spot = 90;
            
        }else if(color == "yellow"){

            first_winning_path = 90;
            winning_spot = 97;
            
        }

        // if the next final spot-number will not be greater than 68
        if(spot_number + i <= 68){

            // if the current spot is the last spot, before jumping to the first spot in the winning path
            if( ((spot_number + i - 1 == 47) && color == "blue") || ((spot_number + i - 1 == 30) && color == "red") || 
               ((spot_number + i - 1 == 13) && color == "green") || ((spot_number + i - 1 == 64) && color == "yellow") )
            {

                colored_dice = dice - i + 1;
                
                for(let j = first_winning_path; j < colored_dice + first_winning_path; j++){

                    who_isin_spot[`who_isin_spot${spot_number}`].splice(0, 1);
                    
                    setTimeout(() => {

                        container.style.top = spots[`d${j}_spot_y`] + "px";
                        container.style.left = spots[`d${j}_spot_x`] + "px";
                        counter++;

                        if(!(who_isin_spot[`who_isin_spot${colored_dice + first_winning_path - 1}`].includes(container)) && counter == dice){

                            who_isin_spot[`who_isin_spot${colored_dice + first_winning_path - 1}`].push(container);
                            parallel_check(colored_dice + first_winning_path - 1);
                        }

                    },(i * 250) + ((j - first_winning_path) * 250) - 250);
                }

                break;

            // else if the next spot shouldn't be the winning path (normal move)
            }else{

                if(who_isin_spot[`who_isin_spot${spot_number}`].includes(container)){

                    let index = who_isin_spot[`who_isin_spot${spot_number}`].indexOf(container);
                    who_isin_spot[`who_isin_spot${spot_number}`].splice(index, 1);
                }

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
                if(!(spot_number + j >= winning_spot)){

                    if(who_isin_spot[`who_isin_spot${spot_number}`].includes(container)){

                        let index = who_isin_spot[`who_isin_spot${spot_number}`].indexOf(container);
                        who_isin_spot[`who_isin_spot${spot_number}`].splice(index, 1);
                    }

                    setTimeout(() => {
            
                        container.style.top = spots[`d${spot_number + j}_spot_y`] + "px";
                        container.style.left = spots[`d${spot_number + j}_spot_x`] + "px";
                        counter++;
                        
                        if(!(who_isin_spot[`who_isin_spot${spot_number + dice}`].includes(container)) && counter == dice && !(spot_number + dice > winning_spot - 1)){
    
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

                    if(who_isin_spot[`who_isin_spot${spot_number}`].includes(container)){

                        let index = who_isin_spot[`who_isin_spot${spot_number}`].indexOf(container);
                        who_isin_spot[`who_isin_spot${spot_number}`].splice(index, 1);
                    }
                    
                    setTimeout(() => {
                        
                        if(!(finishers_map[color].includes(container))){
    
                            finishers_map[color].push(container);
                        }

                        if(finishers_map[color].length == 1){

                            container.style.left = first_spot_y + "px";
                            container.style.top = first_spot_x + "px";
                            counter++;

                        }else if(finishers_map[color].length == 2){

                            container.style.left = second_spot_y + "px";
                            container.style.top = second_spot_x + "px";
                            counter++;

                        }else if(finishers_map[color].length == 3){

                            container.style.left = third_spot_y + "px";
                            container.style.top = third_spot_x + "px";
                            counter++;

                        }else if(finishers_map[color].length == 4){

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

                if(who_isin_spot[`who_isin_spot${spot_number}`].includes(container)){

                    let index = who_isin_spot[`who_isin_spot${spot_number}`].indexOf(container);
                    who_isin_spot[`who_isin_spot${spot_number}`].splice(index, 1);
                }
                
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

    center_check(who_isin_spot[`who_isin_spot${spot_number}`], spot_number); // check if a pawn not centered

    // check if only dice_1 is played and consumed
    if(is_dice_1_clicked == true && is_dice_2_clicked != true){
        
        dice_1 = 0;
        time = (dice + 1) * 250;
        number_sail(dice_1, dice_2, colored_containers, who_is_outof_home_nicknames, color, who_is_home_nicknames);
        
    // check if only dice_2 is played and consumed
    }else if(is_dice_2_clicked == true && is_dice_1_clicked != true){
        
        dice_2 = 0;
        time = (dice + 1) * 250;
        number_sail(dice_1, dice_2, colored_containers, who_is_outof_home_nicknames, color, who_is_home_nicknames);
    }

    // check if both dice_1 and dice_2 are played and consumed
    if(is_dice_1_clicked == true && is_dice_2_clicked == true){

        number_sail_destroyer();

        if(original_dice_1 != original_dice_2){

            round_selector();

        // check if the both, dice_1 and dice_2 are the same for the third time in a row
        }else if((original_dice_1 == original_dice_2) && (double == 3)){

            go_back_home(color, colored_containers, who_is_outof_home_nicknames, who_is_home_nicknames);
        }
    } 

};

//----------------Parallel check function----prevent two pawns to overlap on each other if they are in the same spot-----------

function parallel_check(spot_number){

    // check if there is two pawns in one spot
    if(who_isin_spot[`who_isin_spot${spot_number}`].length == 2){

        // check if the spot is wide
        if((39 <= spot_number && spot_number <= 55) || (5 <= spot_number && spot_number <= 21) ||
           (69 <= spot_number && spot_number <= 75) || (90 <= spot_number && spot_number <= 96))
        {

            who_isin_spot[`who_isin_spot${spot_number}`][0].style.left = spots[`d${spot_number}_spot_x`] + 15 + "px";
            who_isin_spot[`who_isin_spot${spot_number}`][1].style.left = spots[`d${spot_number}_spot_x`] - 15 + "px";

        // check if the spot is long
        }else{

            who_isin_spot[`who_isin_spot${spot_number}`][0].style.top = spots[`d${spot_number}_spot_y`] + 15 + "px";
            who_isin_spot[`who_isin_spot${spot_number}`][1].style.top = spots[`d${spot_number}_spot_y`] - 15 + "px";
        }
    }
};
    
//---------------------------center check function----if a pawn is alone in the spot, but not centerd-----------------------

function center_check(who_isin_spot, spot_number){

    // check if there is only one pawn in spot
    if(who_isin_spot.length == 1){
        
        // check if the spot is wide
        if((39 <= spot_number && spot_number <= 55) || (5 <= spot_number && spot_number <= 21) ||
           (69 <= spot_number && spot_number <= 75) || (90 <= spot_number && spot_number <= 96))
        {

            // Check if the x-coordinates do not match
            if(wide_center[`d${spot_number}_center_x`] != who_isin_spot[0].getBoundingClientRect().x){
    
                who_isin_spot[0].style.left = spots[`d${spot_number}_spot_x`] + "px";
            }

        // check if the spot is long
        }else{

            // Check if the y-coordinates do not match
            if(long_center[`d${spot_number}_center_y`] != who_isin_spot[0].getBoundingClientRect().y){
    
                who_isin_spot[0].style.left = spots[`d${spot_number}_spot_x`] + "px";
                who_isin_spot[0].style.top = spots[`d${spot_number}_spot_y`] + "px";
            }
        }
    }
};

//--------------------------number sail function---------to display the remaining dice number on each pawn-----------------

let hovered = []; // to store the hoverd pawns (the cure of the headache)

// object of arrays to store the pawns that cannot be played, due to a blockade for example
let incompetents_map = {

    blue: [],
    red: [],
    green: [],
    yellow: []

};

function number_sail(dice_1, dice_2, colored_containers, who_is_outof_home_nicknames, color, who_is_home_nicknames){

    // check if at least one dice is not played
    if((is_dice_1_clicked == false && is_dice_2_clicked != false) || 
       (is_dice_1_clicked != false && is_dice_2_clicked == false) || 
       (is_dice_1_clicked == false && is_dice_2_clicked == false))
    { 
        let winning_spot;

        if(color == "blue"){

            winning_spot = 76;

        }else if(color == "red"){

            winning_spot = 83; 

        }else if(color == "green"){

            winning_spot = 90; 
            
        }else if(color == "yellow"){

            winning_spot = 97; 
            
        }

        let incompetents = incompetents_map[color]; // apply changes only to the specified color's incompetents

        for(let i = 1 ; i <= who_is_outof_home_nicknames.length; i++){
            
        shows[`circle${i}`] = document.createElement("div");
        shows[`circle${i}`].id = `c${i}`;
        shows[`circle${i}`].classList.add("circle");
        document.body.appendChild(shows[`circle${i}`]);
                
        setTimeout(() => {
            
            shows[`circle${i}`].style.left = colored_containers[who_is_outof_home_nicknames[i - 1]].getBoundingClientRect().x - 6 + "px";
            shows[`circle${i}`].style.top = colored_containers[who_is_outof_home_nicknames[i - 1]].getBoundingClientRect().y - 6 + "px";

            let spot_number;

            // to extract the number of each spot that contains a pawn
            for(let j = 1; j <= 96; j++) {

                div_in_spot = who_isin_spot[`who_isin_spot${j}`]; // store the array 'who_isin_spot$$'

                // check if the spot contains one or two pawns
                if(div_in_spot[0] == colored_containers[who_is_outof_home_nicknames[i - 1]] || div_in_spot[1] == colored_containers[who_is_outof_home_nicknames[i - 1]]){

                    spot_number = j;
                    break;
                }  
            }

            // Declare booleans to indicate if there is a blockade in the upcoming dice range spots
            let is_blockade1 = false;
            let is_blockade2 = false;

            // make copies of the spot_number, to leave the original as it is
            let spot_number_copy1 = spot_number;
            let spot_number_copy2 = spot_number;

            // to loop through the dice_1 spots range
            for(let j = 1; j <= dice_1; j++){

                // check if the spot_number exceeds 68, to start counting over
                if(spot_number_copy1 + j > 68){

                    spot_number_copy1 = spot_number_copy1 - 68;
                }

                // check if the spot contains two pawns (blockade)
                if((color == "blue" && !((spot_number_copy1 >= 42 && 47 >= spot_number_copy1) && spot_number_copy1 + j > 47))){

                    if(who_isin_spot[`who_isin_spot${spot_number_copy1 + j}`].length == 2){
    
                        is_blockade1 = true; // indicate that there is a blockade
                        break;
                    }

                }else if(color == "blue" && ((spot_number_copy1 >= 42 && 47 >= spot_number_copy1) && spot_number_copy1 + j > 47)){
                    
                    if(who_isin_spot[`who_isin_spot${spot_number_copy1 + j + 21}`].length == 2){
        
                            is_blockade1 = true; // indicate that there is a blockade
                            break;
                    }
                }
            }

            // to loop through the dice_2 spots range
            for(let j = 1; j <= dice_2; j++){

                // check if the spot_number exceeds 68, to start counting over
                if(spot_number_copy2 + j > 68){

                    spot_number_copy2 = spot_number_copy2 - 68;
                }

                // check if the spot contains two pawns (blockade)
                if((color == "blue" && !((spot_number_copy2 >= 42 && 47 >= spot_number_copy2) && spot_number_copy2 + j > 47))){

                    if(who_isin_spot[`who_isin_spot${spot_number_copy2 + j}`].length == 2){
    
                        is_blockade2 = true; // indicate that there is a blockade
                        break;
                    }

                }else if(color == "blue" && ((spot_number_copy2 >= 42 && 47 >= spot_number_copy2) && spot_number_copy2 + j > 47)){
                    
                    if(who_isin_spot[`who_isin_spot${spot_number_copy2 + j + 21}`].length == 2){
        
                            is_blockade2 = true; // indicate that there is a blockade
                            break;
                    }
                }
            }

            // check if no pawn is able to move
            if((is_blockade1 == true && is_blockade2 == true) || (is_blockade1 == true && is_dice_2_clicked == true) || (is_blockade2 == true && is_dice_1_clicked == true)){

                incompetents.push(colored_containers[who_is_outof_home_nicknames[i - 1]]);
            }

            // if dice_1 is already played and, dice_2 + spot_number will not exceed 76, and there is no blockade
            if(dice_1 == 0 && (spot_number + dice_2 <= winning_spot) && is_blockade2 != true && dice_2 != 0){
                
                shows[`circle${i}`].style.visibility = "visible";
                shows[`circle${i}`].textContent = `${dice_2}`;
                shows[`circle${i}`].addEventListener('click', function(){
                    
                    is_dice_2_clicked = true;
                    movements(dice_2, colored_containers[who_is_outof_home_nicknames[i - 1]], spot_number, dice_1, dice_2, color, colored_containers, who_is_outof_home_nicknames, who_is_home_nicknames);
                    // roller_switcher(color);
                    number_sail_destroyer();
                });
                
            // if dice_2 is already played, and dice_1 + spot_number will not exceed 76, and there is no blockade
            }else if(dice_2 == 0 && (spot_number + dice_1 <= winning_spot) && is_blockade1 != true && dice_1 != 0){

                shows[`circle${i}`].style.visibility = "visible";
                shows[`circle${i}`].textContent = `${dice_1}`;
                shows[`circle${i}`].addEventListener('click', function(){

                    is_dice_1_clicked = true;
                    movements(dice_1, colored_containers[who_is_outof_home_nicknames[i - 1]], spot_number, dice_1, dice_2, color, colored_containers, who_is_outof_home_nicknames, who_is_home_nicknames);
                    // roller_switcher(color);
                    number_sail_destroyer();
                    
                });
            
            // if none of the dices are played
            }else if(dice_1 != 0 && dice_2 !== 0){

                // to create the left_half_circle
                function left_half(){

                    shows[`left_half_circle${i}`] = document.createElement("div");
                    shows[`left_half_circle${i}`].id = `left-half-circle${i}`;
                    shows[`left_half_circle${i}`].classList.add("left-half-circle");
                    document.body.appendChild(shows[`left_half_circle${i}`]);
                    shows[`left_half_circle${i}`].style.visibility = "visible";
                    shows[`left_half_circle${i}`].style.left = colored_containers[who_is_outof_home_nicknames[i - 1]].getBoundingClientRect().x - 6 + "px";
                    shows[`left_half_circle${i}`].style.top = colored_containers[who_is_outof_home_nicknames[i - 1]].getBoundingClientRect().y - 6 + "px";
    
                    shows[`left_half_circle${i}`].textContent = `${dice_1}`;
                    shows[`left_half_circle${i}`].addEventListener('click', function(){
    
                        is_dice_1_clicked = true;
                        movements(dice_1, colored_containers[who_is_outof_home_nicknames[i - 1]], spot_number, dice_1, dice_2, color, colored_containers, who_is_outof_home_nicknames, who_is_home_nicknames);
                        // roller_switcher(color);
                        number_sail_destroyer();
    
                    });
                }

                // to create the right_half_circle
                function right_half(){

                    shows[`right_half_circle${i}`] = document.createElement("div");
                    shows[`right_half_circle${i}`].id = `right-half-circle${i}`;
                    shows[`right_half_circle${i}`].classList.add("right-half-circle");
                    document.body.appendChild(shows[`right_half_circle${i}`]);
                    shows[`right_half_circle${i}`].style.visibility = "visible";
                    shows[`right_half_circle${i}`].style.left = colored_containers[who_is_outof_home_nicknames[i - 1]].getBoundingClientRect().x - 6 + 20 + "px";
                    shows[`right_half_circle${i}`].style.top = colored_containers[who_is_outof_home_nicknames[i - 1]].getBoundingClientRect().y - 6 + "px";
    
                    shows[`right_half_circle${i}`].textContent = `${dice_2}`;
                    shows[`right_half_circle${i}`].addEventListener('click', function(){
    
                        is_dice_2_clicked = true;
                        movements(dice_2, colored_containers[who_is_outof_home_nicknames[i - 1]], spot_number, dice_1, dice_2, color, colored_containers, who_is_outof_home_nicknames, who_is_home_nicknames);
                        // roller_switcher(color);
                        number_sail_destroyer();
    
                    });
                }

                // to create the full_circle
                function full_circle(){

                    shows[`full_circle${i}`] = document.createElement("div");
                    shows[`full_circle${i}`].id = `full-circle${i}`;
                    shows[`full_circle${i}`].classList.add("circle");
                    document.body.appendChild(shows[`full_circle${i}`]);
                    shows[`full_circle${i}`].style.visibility = "visible";
                    shows[`full_circle${i}`].style.left = colored_containers[who_is_outof_home_nicknames[i - 1]].getBoundingClientRect().x - 6 + "px";
                    shows[`full_circle${i}`].style.top = colored_containers[who_is_outof_home_nicknames[i - 1]].getBoundingClientRect().y - 6 + "px";
    
                }

                // if both of the dices + spot_number will not exceed the winning_spot, and there is no blockade
                if((spot_number + dice_1 <= winning_spot) && (spot_number + dice_2 <= winning_spot) && is_blockade1 != true && is_blockade2 != true){

                    left_half();
                    right_half();

                // if just the dice_1 + spot_number will not exceed the winning_spot, and there is no blockade
                }else if(spot_number + dice_1 <= winning_spot && is_blockade1 != true){

                    full_circle();

                    shows[`full_circle${i}`].textContent = `${dice_1}`;
                    shows[`full_circle${i}`].addEventListener('click', function(){
    
                        is_dice_1_clicked = true;
                        movements(dice_1, colored_containers[who_is_outof_home_nicknames[i - 1]], spot_number, dice_1, dice_2, color, colored_containers, who_is_outof_home_nicknames, who_is_home_nicknames);
                        // roller_switcher(color);
                        number_sail_destroyer();
    
                    });

                // if just the dice_2 + spot_number will not exceed the winning_spot, and there is no blockade
                }else if(spot_number + dice_2 <= winning_spot && is_blockade2 != true){

                    full_circle();

                    shows[`full_circle${i}`].textContent = `${dice_2}`;
                    shows[`full_circle${i}`].addEventListener('click', function(){
    
                        is_dice_2_clicked = true;
                        movements(dice_2, colored_containers[who_is_outof_home_nicknames[i - 1]], spot_number, dice_1, dice_2, color, colored_containers, who_is_outof_home_nicknames, who_is_home_nicknames);
                        // roller_switcher(color);
                        number_sail_destroyer();
    
                    });

                // if at least one of the dices + spot_number will exceed the winning_spot
                }else if(spot_number + dice_1 > winning_spot || spot_number + dice_2 > winning_spot){

                    if(!(incompetents.includes(colored_containers[who_is_outof_home_nicknames[i - 1]]))){

                        incompetents.push(colored_containers[who_is_outof_home_nicknames[i - 1]]);
                    }

                }

            // if one of the remaining dices + spot_number will exceed the winning_spot
            }else if(spot_number + dice_1 > winning_spot || spot_number + dice_2 > winning_spot){

                if(!(incompetents.includes(colored_containers[who_is_outof_home_nicknames[i - 1]]))){

                    incompetents.push(colored_containers[who_is_outof_home_nicknames[i - 1]]);
                }
            }

            // check if all the four pawns are incompetent to be played, to skip the round
            if(incompetents.length + finishers_map[color].length + who_is_home_nicknames.length == 4){

                // act like the dice_1 is played
                dice_1 = 0;
                is_dice_1_clicked = true;
                
                // act like the dice_1 is played
                dice_2 = 0;
                is_dice_2_clicked = true;

                // roller_switcher(color);
                // round_selector();
            }
        }, time);
        }
    }
};

//-------------------roller switcher function---------to prevent the player from cliking the dice roller-----------------

function roller_switcher(color){

    let colored_roll;

    if(color == "blue"){

        colored_roll = document.getElementById("blue-roll");

    }else if(color == "red"){

        colored_roll = document.getElementById("red-roll");

    }else if(color == "green"){

        colored_roll = document.getElementById("green-roll");

    }else if(color == "yellow"){

        colored_roll = document.getElementById("yellow-roll");
    }
    
    // check if at least one of the dices is not played
    if(!(is_dice_1_clicked == true && is_dice_2_clicked == true)){ 

        colored_roll.style.pointerEvents = "none"; 
        colored_roll.style.opacity = 0.5;

    }
    // check if both of the dices are played
    // else{
        
    //     colored_roll.style.pointerEvents = "visible"; 
    //     colored_roll.style.opacity = 1;
    //     is_dice_1_clicked = false;
    //     is_dice_2_clicked = false;
    // }
};

//----------------number sail destroyer function---------to destroy the number sail circles if they are used-----------------

function number_sail_destroyer() {

    for (let i = 1; i <= 4; i++) {

        let circle = document.getElementById(`c${i}`);
        if (circle) { circle.remove(); }

        let left_half_circle = document.getElementById(`left-half-circle${i}`);
        if (left_half_circle) { left_half_circle.remove(); }

        let right_half_circle = document.getElementById(`right-half-circle${i}`);
        if (right_half_circle) { right_half_circle.remove(); }

        let full_circle = document.getElementById(`full-circle${i}`);
        if (full_circle) { full_circle.remove(); }
    }
};

//---------------------go back home function----to send back the furthest pawn from home, back to home-----------------------

function go_back_home(color, colored_containers, who_is_outof_home_nicknames, who_is_home_nicknames){

    let spot_numbers = [];
    let original_spot_numbers = [];

    for(let j = 1; j <= 68; j++) {

        if(who_isin_spot[`who_isin_spot${j}`].length > 0){

            div_in_spot = who_isin_spot[`who_isin_spot${j}`]; // store the array 'who_isin_spot$$'

            for(let i = 0; i < who_is_outof_home_nicknames.length; i++){

                // check if the spot contains one or two pawns
                if(div_in_spot[0] == colored_containers[who_is_outof_home_nicknames[i]]){
                    
                    if(52 <= j && j <= 68){
                        
                        index = j - 68
                    }

                    index = j;
                    
                    spot_numbers.push(index);
                    original_spot_numbers.push(j);
                }
            }
        }
    }

    let spot = who_isin_spot[`who_isin_spot${Math.max(...spot_numbers)}`];
    let pawn = spot[0];
    let original_index = spot_numbers.indexOf(Math.max(...spot_numbers));

    let number = pawn.id.split("_")[1]; 

    window[`${color}_${number}_container`] = document.getElementById(`${color}_${number}_container`);
    let colored_pawn = window[`${color}_${number}_container`];

    window[`${color}_oval_${number}_cords`] = document.getElementById(`${color}_oval_${number}`);
    let oval_cords = window[`${color}_oval_${number}_cords`];

    if(pawn.id == colored_pawn.id) { 

        colored_pawn.style.left = oval_cords.getBoundingClientRect().x - Main_Container_cords.x + ((oval_cords.getBoundingClientRect().width - pawn_container_cords.width) / 2) + "px";
        colored_pawn.style.top = oval_cords.getBoundingClientRect().y - Main_Container_cords.y + ((oval_cords.getBoundingClientRect().width - pawn_container_cords.width) / 2) + "px";
    }

    let nickname = who_is_outof_home_nicknames.indexOf(`${color}_${number}`);
    who_is_outof_home_nicknames.splice(nickname, 1);

    who_is_home_nicknames.splice(0, 0, `${color}_${number}`);

    who_isin_spot[`who_isin_spot${original_spot_numbers[original_index]}`].splice(0, 1);

    center_check(who_isin_spot[`who_isin_spot${original_spot_numbers[original_index]}`], original_spot_numbers[original_index]); // check if a pawn not centered

    if(color == "blue"){
        
        let entries = Object.entries(blue_who_is_home); // convert object to an array of key-value pairs
        entries.unshift([`${color}_${number}`, document.getElementById(`${color}_${number}_container`)]); // insert the new key-value pair at the first index
        blue_who_is_home = Object.fromEntries(entries); // convert the array back to an object

    }else if(color == "red"){
        
        let entries = Object.entries(red_who_is_home);
        entries.unshift([`${color}_${number}`, document.getElementById(`${color}_${number}_container`)]);
        red_who_is_home = Object.fromEntries(entries);

    }else if(color == "green"){
        
        let entries = Object.entries(green_who_is_home);
        entries.unshift([`${color}_${number}`, document.getElementById(`${color}_${number}_container`)]);
        green_who_is_home = Object.fromEntries(entries);

    }else if(color == "yellow"){
        
        let entries = Object.entries(yellow_who_is_home);
        entries.unshift([`${color}_${number}`, document.getElementById(`${color}_${number}_container`)]);
        yellow_who_is_home = Object.fromEntries(entries);

    }

    round_selector();
}