let dp = document.querySelector(".display");
let [l,t,a,v,w,ti] = ["Length","Temperature","Area","Volume","Weight","Time"];
function a1(){
    dp.innerHTML = `${l}`
}
function a2(){
    dp.innerHTML = `${t}`
}
function a3(){
    dp.innerHTML = `${a}`
}
function a4(){
    dp.innerHTML = `${v}`
}
function a5(){
    dp.innerHTML = `${w}`
}
function a6(){
    dp.innerHTML = `${ti}`
}
const selector = document.querySelectorAll(".select");
const displayBoxes = document.querySelectorAll(".display-box");
let selectedType = "length";
selector.forEach(selector =>{
    selector.addEventListener("click",() => {
        displayBoxes.forEach(target => {
            target.style.display = 'none';
        });
        const displayBoxId = selector.getAttribute('data-target');
        document.getElementById(displayBoxId).style.display = 'flex';
        selectedType = displayBoxId;
        inputValue.value = "";
        outputValue.value = "";
    });
});

const unitConvert = () => {
    const value = parseFloat(inputValue.value);
    if(value === 0 && selectedType != "temp"){
        outputValue.value = 0;
        return;
    }
    else if(fromOption != null || toOption != null || !isNaN(value) || value != ""){
        outputValue.value = converter(selectedType,value, fromOption, toOption);
    }else{
        outputValue.value = "";
        return;
    }
}

const inputValue = document.getElementById("from-value");
const outputValue = document.getElementById("to-value");
let fromOption = null, toOption = null;
displayBoxes.forEach( displayBox => {
    const from = displayBox.querySelector('.from select');
    const to = displayBox.querySelector('.to select');

    from.addEventListener('change', () => {
        fromOption = from.options[from.selectedIndex].value;
        unitConvert();
    });

    to.addEventListener('change', () => {
        toOption = to.options[to.selectedIndex].value;
        unitConvert();
    });
} );
inputValue.addEventListener('input',() => {
    unitConvert();
});