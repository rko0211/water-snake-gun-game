// Targeting various html element using their id
let water = document.getElementById("water");
let snake = document.getElementById("snake");
let gun = document.getElementById("gun");
let computer_image = document.getElementById("computerimg");
let user_img = document.getElementById("userimg");
let btnContainer = document.getElementById("btn-container");
let bg_col1 = document.querySelector(".bg-col1");
let bg_col2 = document.querySelector(".bg-col2");

// Produced an random number starting from 0 to 2 
// and the random number is stored in rand_number variable
let rand_number = Math.floor(Math.random() * 3);
//Here the number significants are
// water -->0
// snake --> 1
// Gun --> 2

// Take an variable for user choice;
let user_choice;
// When user click water button then this function will be executed
function waterchange() {
    // First change the image of user column to "water"
    user_img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20231106145046/water.jpg';
    // We add new class usinf classList method to hide the buttons which is used for user choice
    btnContainer.classList.add("btn2");
    // if user choice is 0
    user_choice = 0;
    // Produced random number is 1 that means computer select "Snake" option
    if (rand_number == 1) {
        // change the image of the Computer column to "snake"
        computer_image.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20231106144810/snake.jpg';
        // Display the message on the screen
        document.getElementById("demo").innerHTML = "<h3>Sorry! You Loss The Game, Try Again</h3>";
        bg_col1.innerText = "Winer";
        bg_col2.innerText = "Loser";

    }
    // Produced random number is 0 that means computer select "water" option
    else if (rand_number == 0) {
        // change the image of the Computer column to "water"
        computer_image.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20231106145046/water.jpg';
        // Display the message on the screen
        document.getElementById("demo").innerHTML = "<h3>OOPS! Match is Draw, Try Again</h3>";
        bg_col1.innerText = "Draw";
        bg_col2.innerText = "Draw";
    }
    // Produced random number is 0 that means computer select "water" option
    else if (rand_number == 2) {
        // change the image of the Computer column to "water"
        computer_image.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20231106145443/gun.jpg';
        // Display the message on the screen
        document.getElementById("demo").innerHTML = "<h3>Congratulations! You Win The Match, Play Again</h3>";
        bg_col1.innerText = "Loser";
        bg_col2.innerText = "Winer";
    }
}

// When user click "snake" option from the collection of buttons
// then the bellow function will be executed
function snakechange() {
    // Image of user column change to "snake"
    user_img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20231106144810/snake.jpg';
    // When we click any buttons then btn2 class is added in the button container
    btnContainer.classList.add("btn2");
    // if user choice is 1 that means user choose snake option
    user_choice = 1;
    // Produced random number is 1 that means computer select "snake" option
    if (rand_number == 1) {
        // change the image of the Computer column to "snake"
        computer_image.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20231106144810/snake.jpg';
        // Display the message on the screen
        document.getElementById("demo").innerHTML = "<h3>OOPS! Match is Draw, Try Again</h3>";
        bg_col1.innerText = "Draw";
        bg_col2.innerText = "Draw";
    }
    // Produced random number is 0 that means computer select "water" option
    else if (rand_number == 0) {
        // change the image of the Computer column to "water"
        computer_image.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20231106145046/water.jpg';
        // Display the message on the screen
        document.getElementById("demo").innerHTML = "<h3>Congratulations! You Win The Match, Play Again</h3>";
        bg_col1.innerText = "Loser";
        bg_col2.innerText = "Winer";
    }
    // Produced random number is 2 that means computer select "gun" option
    else if (rand_number == 2) {
        // change the image of the Computer column to "gun"
        computer_image.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20231106145443/gun.jpg';
        // Display the message on the screen
        document.getElementById("demo").innerHTML = "<h3>Sorry! You Loss The Game, Try Again</h3>";
        bg_col1.innerText = "Winer";
        bg_col2.innerText = "Loser";
    }
}
// When user click "Gun" option from the collection of buttons
// then the bellow function will be executed
function gunchange() {
    // change the image of the Computer column to "gun"
    user_img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20231106145443/gun.jpg';
    // When we click any buttons then btn2 class is added in the button container
    btnContainer.classList.add("btn2");
    // When user select "gun" option then user_choice value become 2
    user_choice = 2;
    // Produced random number is 1 that means computer select "snake" option
    if (rand_number == 1) {
        // change the image of the Computer column to "snake"
        computer_image.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20231106144810/snake.jpg';
        document.getElementById("demo").innerHTML = "<h3>Congratulations! You Win The Match, Play Again</h3>";
        bg_col1.innerText = "Loser";
        bg_col2.innerText = "Winer";
    }
    // Produced random number is 0 that means computer select "water" option
    else if (rand_number == 0) {
        // change the image of the Computer column to "water"
        computer_image.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20231106145046/water.jpg';
        document.getElementById("demo").innerHTML = "<h3>Sorry! You Loss The Game, Try Again</h3>";
        bg_col1.innerText = "Winer";
        bg_col2.innerText = "Loser";
    }
    // Produced random number is 0 that means computer select "gun" option
    else if (rand_number == 2) {
        // change the image of the Computer column to "gun"
        computer_image.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20231106145443/gun.jpg';
        document.getElementById("demo").innerHTML = "<h3>OOPS! Match is Draw, Try Again</h3>";
        bg_col1.innerText = "Draw";
        bg_col2.innerText = "Draw";
    }

}
// To restart the game we use this function
// to refresh the webpage
function refreshPage() {
    window.location.reload();
}

