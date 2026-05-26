let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let calcBtn = document.querySelector("#Calculate");
let inputDiv = document.querySelector(".inputSection");

let BMIMessage = document.querySelectorAll(".your_BMI div");
let BMIHeading = document.querySelector(".your_BMI h2");
let BMIResult = document.querySelector(".BMI_Result");
let reset = document.querySelector(".resetBtn");

let BMISummery = document.querySelectorAll(".BMI_Summery div");

console.log(BMIMessage)
console.log(BMISummery)
console.log("Hello!!");

reset.addEventListener("click", ()=>{
    window.location.reload();
})

calcBtn.addEventListener("click", () =>{
    const BMI_Is = weight.value / (height.value*height.value);
    BMIResult.innerText = BMI_Is.toFixed(2);
    BMIHeading.classList.add("block")
    BMIHeading.classList.remove("hidden")
    reset.classList.remove("hidden")
    reset.classList.add("block")
if(BMI_Is < 18.5){
BMIMessage[0].classList.remove("hidden");
BMIMessage[0].classList.add("block");
BMISummery[0].classList.remove("hidden")
BMISummery[0].classList.add("block")
}
else if(BMI_Is >= 18.5 && BMI_Is <=24.9){
BMIMessage[1].classList.remove("hidden");
BMIMessage[1].classList.add("block");
BMISummery[1].classList.remove("hidden")
BMISummery[1].classList.add("block")
}
else if(BMI_Is >= 25 && BMI_Is <= 29.9){
    BMIMessage[2].classList.remove("hidden");
BMIMessage[2].classList.add("block");
BMISummery[2].classList.remove("hidden")
BMISummery[2].classList.add("block")
}
else if(BMI_Is >= 30){
    BMIMessage[3].classList.remove("hidden");
BMIMessage[3].classList.add("block");
BMISummery[3].classList.remove("hidden")
BMISummery[3].classList.add("block")

}else{
    alert("Not a Vallid Number")
}

inputDiv.classList.add("hidden")
});


