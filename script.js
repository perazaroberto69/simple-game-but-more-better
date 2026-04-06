console.log("script started");

function start(){
    console.log("click");
    console.log(Math.random() * window.innerWidth);
    setTimeout(createCircle, 500, 1);
    setTimeout(createCircle, 1000, 2);
    setTimeout(createCircle, 1500, 3);
} 

function createCircle(num){
    //Create a div for the circles
    let circle = document.createElement("div");

    //Set text and styles
    circle.innerText = num;
    circle.style.width = "100px"
    circle.style.height = "100px"
    circle.style.backgroundColor = "rgb(34, 61, 112)"
    circle.style.borderRadius = "100px"
    circle.style.textAlign = "center"
    circle.style.alignContent = "center"
    //Positon circle randomly using absolute
    circle.style.position = "absolute";
    circle.style.left = getRandomX() + "px";
    circle.style.top = getRandomY() + "px";
    //Add to page
    document.body.appendChild(circle);

    //Make it clickable
    circle.addEventListener("click", checkForRemove)
}

function getRandomX(){
    let randX = Math.random() * (window.innerWidth - 100)
    return randX;
}

function getRandomY(){
    let randY = Math.random() * (window.innerHeight - 100)
    return randY;
}

//Checks for the right choice and removes it
function checkForRemove(event){
    let circle = event.target
    console.log(circle.innerText);
}