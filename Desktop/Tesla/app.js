let car = {
    carName: "Tesla T61",
    model: "T007",
    price: "1.2 Million$",
}

let car2 = {
    carName: "Tesla TW1",
    model: "T91W",
    price: "2.2 Million$",
}

let car3 = {
    carName: "Tesla",
    model: "TMK7",
    price: "6.2 Million$",
}

const btn1 = document.getElementById("button1");
const car1InfoDiv = document.getElementById("car1Info");
const hideCar1InnerText = document.getElementById("car1InnerText");
const car1Body = document.getElementById("car1");
const carContainerForBackgroundChange = document.getElementById("car-container");
const backBtn = document.getElementById("backBtn");
const carDetails = document.getElementById("carDetails");

btn1.addEventListener("click", function () {
    car1InfoDiv.innerHTML = `Brand Name: <b>${car.carName}</b><br>Model: <b>${car.model}</b><br> Price: <b>${car.price}</b>`;
    car1InfoDiv.style.color = "rgba(255, 0, 0, 0.8)";
    btn1.style.display = "none";
    hideCar1InnerText.style.display = "none";
    car1Body.style.display = "none";
    car2Body.style.display = "none";
    car3Body.style.display = "none";
    car1Body.style.backgroundSize = "100% 100%";
    carContainerForBackgroundChange.style.backgroundImage = "url('Teslacar1.jpg')";
    carContainerForBackgroundChange.style.backgroundSize = "100% 100%";
    car1Body.style.borderRadius = "10px";
    carDetails.innerHTML = `Brand Name: <b>${car.carName}</b>Model: <b>${car.model}</b> Price: <b>${car.price}</b>`;
    carDetails.style.display = "block";
    carContainerForBackgroundChange.style.color = "hsl(110, 100.00%, 38.40%)";
    carContainerForBackgroundChange.style.fontSize = "2.5rem";
    carContainerForBackgroundChange.style.paddingTop = "9rem";
    window.scrollTo({
        top: 300,
        behavior: "smooth"
      });
    backBtn.style.display = "inline-block";
});

const btn2 = document.getElementById("button2");
const car2InfoDiv = document.getElementById("car2Info");
const hideCar2InnerText = document.getElementById("car2InnerText");
const car2Body = document.getElementById("car2");

btn2.addEventListener("click", function () {
    car2InfoDiv.innerHTML = `Brand Name: <b>${car2.carName}</b><br>Model: <b>${car2.model}</b><br> Price: <b>${car2.price}</b>`;
    car2InfoDiv.style.color = "rgb(64, 245, 9)";
    btn2.style.display = "none";
    hideCar2InnerText.style.display = "none";
    car1Body.style.display = "none";
    car2Body.style.display = "none";
    car3Body.style.display = "none";
    car2Body.style.backgroundImage = "url('Teslacar2.jpg')";
    car2Body.style.backgroundSize = "100% 100%";
    car2Body.style.borderRadius = "10px";
    carContainerForBackgroundChange.style.backgroundImage = "url('Teslacar2.jpg')";
    carContainerForBackgroundChange.style.backgroundSize = "100% 100%";
    carDetails.innerHTML = `Brand Name: <b>${car2.carName}</b>Model: <b>${car2.model}</b> Price: <b>${car2.price}</b>`;
    carDetails.style.display = "block";
    carContainerForBackgroundChange.style.color = "hsl(110, 100.00%, 38.40%)";
    carContainerForBackgroundChange.style.fontSize = "2.5rem";
    carContainerForBackgroundChange.style.paddingTop = "25rem";
    window.scrollTo({
        top: 500,
        behavior: "smooth"
      });
    backBtn.style.display = "inline-block";
});

const btn3 = document.getElementById("button3");
const car3InfoDiv = document.getElementById("car3Info");
const hideCar3InnerText = document.getElementById("car3InnerText");
const car3Body = document.getElementById("car3");

btn3.addEventListener("click", function () {
    car3InfoDiv.innerHTML = `Brand Name: <b>${car3.carName}</b><br>Model: <b>${car3.model}</b><br> Price: <b>${car3.price}</b>`;
    car3InfoDiv.style.color = "rgb(231, 68, 68)";
    btn3.style.display = "none";
    hideCar3InnerText.style.display = "none";
    car1Body.style.display = "none";
    car2Body.style.display = "none";
    car3Body.style.display = "none";
    car3Body.style.backgroundImage = "url('Teslacar3.jpg')";
    car3Body.style.backgroundSize = "100% 100%";
    car3Body.style.borderRadius = "10px";
    carContainerForBackgroundChange.style.backgroundImage = "url('Teslacar3.jpg')";
    carContainerForBackgroundChange.style.backgroundSize = "100% 100%";
    carDetails.innerHTML = `Brand Name: <b>${car.carName}</b>Model: <b>${car.model}</b> Price: <b>${car.price}</b>`;
    carDetails.style.display = "block";
    carContainerForBackgroundChange.style.color = "black"
    carContainerForBackgroundChange.style.fontSize = "2.5rem";
    carContainerForBackgroundChange.style.paddingTop = "19rem";
    window.scrollTo({
        top: 300,
        behavior: "smooth"
      });
    backBtn.style.display = "inline-block";
});

backBtn.addEventListener("click", function () {
    
    carDetails.style.display = "none";

    // Just reset background and styles — don't remove all content
    carContainerForBackgroundChange.style.backgroundImage = "none";
    carContainerForBackgroundChange.style.backgroundSize = "initial";
    carContainerForBackgroundChange.style.paddingTop = "0";
    carContainerForBackgroundChange.style.color = "initial";
    carContainerForBackgroundChange.style.fontSize = "initial";

    // Restore the main car cards
    car1Body.style.display = "block";
    car2Body.style.display = "block";
    car3Body.style.display = "block";

    // Restore the buttons
    btn1.style.display = "inline-block";
    btn2.style.display = "inline-block";
    btn3.style.display = "inline-block";

    // Show the text descriptions again
    hideCar1InnerText.style.display = "block";
    hideCar2InnerText.style.display = "block";
    hideCar3InnerText.style.display = "block";

    // Hide the back button
    backBtn.style.display = "none";

    // Scroll to top smoothly
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});