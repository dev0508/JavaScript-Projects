const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdown = document.querySelectorAll(".dropdown select")
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

const updateExchnageRate = async ()  => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal == "" || amtVal <= 0){
        amtVal = 1;
        amount.value = "1";
    }
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let keys = Object.values(data);
    let arr = keys[1];
    let rate = arr[toCurr.value.toLowerCase()];
    let finalAmount = amtVal * rate;
    finalAmount = finalAmount.toFixed(2);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

for(let select of dropdown){
    for(code in countryList){
        let newoption = document.createElement("option");
        newoption.innerText = code;
        newoption.value = code;
        select.append(newoption);
        if(select.name == "from" && code == "USD")
            newoption.selected = true;
        else if(select.name == "to" && code == "INR")
            newoption.selected = true;
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) =>{
    let code = element.value;
    let country_code = countryList[code];
    let new_img_src = `https://flagsapi.com/${country_code}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = new_img_src;
};

btn.addEventListener("click",(evt) => {
    evt.preventDefault();
    updateExchnageRate();
})


window.addEventListener("load" , () => {
    updateExchnageRate();
})