const button = document.getElementsByTagName("button")
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        if (button[i] === button[0]) {
            buttonColor(1, 2)
        } else if (button[i] === button[1]) {
            buttonColor(0, 2)
        } else {
            buttonColor(0, 1)
        }
    })
}

//button color light control when clicked
function buttonColor(a, b) {
    for (let i = 0; i < button.length; i++) {
    button[i].classList.add("button-color")
    button[a].classList.remove("button-color")
    button[b].classList.remove("button-color")
    }
}    

const result = document.getElementsByClassName("con--result")
const calculator = document.getElementsByClassName("calculator")
const swapIcon = document.getElementById("swapIcon")
const topDetails = document.getElementById("Topdetails")
const bomDetails = document.getElementById("btm-details")
const initialDisplay = document.getElementsByClassName("initial-display")   
const swapDisplay = document.getElementsByClassName("swap-display") 

function swapFunctionality() {
    for (let i = 0; i < initialDisplay.length; i++) {
        if (initialDisplay[i].style.display === "none") {
            initialDisplay[i].style.display = "block"
        } else {
            initialDisplay[i].style.display = "none"
        }
    }
    for (let i = 0; i < swapDisplay.length; i++) {
        if (swapDisplay[i].style.display === "block") {
            swapDisplay[i].style.display = "none"
        } else {
            swapDisplay[i].style.display = "block"
        }
    }
    for (let y = 0; y < input.length; y++) {
        input[y].value = '' 
    }
    for (let p = 0; p < result.length; p++) {
        result[p].textContent = 0
    }
    for (let t = 0; t < calculator.length; t++) {
        calculator[t].textContent = "Calculation goes in here"
    }}


swapIcon.addEventListener('click', () => {
    topDetails.classList.toggle("swap")
    bomDetails.classList.toggle("swapp")
    swapFunctionality()
})



const details = document.getElementsByClassName("perferred--unit")
const measureListOne = document.getElementById("measure--listOne")
const measureListTwo = document.getElementById("measure--listTwo")
const measureList = document.getElementsByClassName("measure--list")
const list = document.getElementsByClassName("list")
const meter = document.getElementById("meter")

//list darken function
function listDarkedSelect(item, a, b, c, d) {
    item[a].classList.remove("darken")
    item[b].classList.remove("darken")
    item[c].classList.remove("darken")
    item[d].classList.remove("darken")
    for (let i = 0; i < calculator.length; i++) {
        calculator[i].textContent = 'calculation goes in here'
    }
}



details[0].addEventListener('click', function() {
    measureListOne.classList.toggle("show")
    if (meter.innerText === list[1].innerText) {
        list[1].classList.add("darken")
        listDarkedSelect(list, 2, 3, 4, 5)
    } else if (meter.innerText === list[2].innerText) {
        list[2].classList.add("darken")
        listDarkedSelect(list, 1, 3, 4, 5)
    } else if (meter.innerText === list[3].innerText) {
        list[3].classList.add("darken")
        listDarkedSelect(list, 1, 2, 4, 5)
    } else if (meter.innerText === list[4].innerText) {
        list[4].classList.add("darken")
        listDarkedSelect(list, 1, 2, 3, 5)
    } else {
        list[5].classList.add("darken")
        listDarkedSelect(list, 1, 2, 3, 4)
    }
})

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        if (list[i] === list[0]) {
            measureList[0].classList.toggle("show")
            topDetails.classList.toggle("swap")
            bomDetails.classList.toggle("swapp")
            swapFunctionality()
        } else {
            measureList[0].classList.toggle("show")
            let currentList = list[i].textContent   
            meter.innerHTML = `${currentList} <img src="./img/Vector.png" alt="triangle"/>`
        }
})
} 


const lowerList = document.getElementsByClassName("lower--list")
const bottomSelect = document.getElementById("bottom--select")
details[1].addEventListener('click', function() {
        measureListTwo.classList.toggle("show")
        if (bottomSelect.innerText === lowerList[1].innerText) {
            lowerList[1].classList.add("darken")
            listDarkedSelect(lowerList, 2, 3, 4, 5)
        } else if (bottomSelect.innerText === lowerList[2].innerText) {
            lowerList[2].classList.add("darken")
            listDarkedSelect(lowerList, 1, 3, 4, 5)
        } else if (bottomSelect.innerText === lowerList[3].innerText) {
            lowerList[3].classList.add("darken")
            listDarkedSelect(lowerList, 1, 2, 4, 5)
        } else if (bottomSelect.innerText === lowerList[4].innerText) {
            lowerList[4].classList.add("darken")
            listDarkedSelect(lowerList, 1, 2, 3, 5)
        } else if (bottomSelect.innerText === lowerList[5].innerText) {
            lowerList[5].classList.add("darken")
            listDarkedSelect(lowerList, 1, 2, 3, 4)
        }
})


for (let i = 0; i < lowerList.length; i++) {
    lowerList[i].addEventListener('click', function() {
        if (lowerList[i] === lowerList[0]) {
            measureListTwo.classList.toggle("show")
            topDetails.classList.toggle("swap")
            bomDetails.classList.toggle("swapp")
            swapFunctionality()
        } else {
        measureListTwo.classList.toggle("show")
        let currentList2 = lowerList[i].textContent
        bottomSelect.innerHTML = `${currentList2} <img src="./img/Vector.png" alt="triangle"/>`
        }
    })
}

const input = document.getElementsByClassName("input")

for (let i = 0; i < input.length; i++) {
input[i].addEventListener("input", function() {
    inputData = input[i].value
    convertToFeet()


})
}


//make the calculation function dynamic
/* function conversionToFeet(num, toFix) {
    const result = document.getElementById("result")
    const calculate = document.getElementById("calculate")

    const meterValue = num
    const convertToFeet = meterValue * input.value
    const meterToFeet = convertToFeet.toFixed(toFix)
    result.textContent = meterToFeet
    calculate.textContent = `${meterValue} x ${input.value} In`
}


function conversionToKilometer(num) {
    const result = document.getElementById("result")
    const calculate = document.getElementById("calculate")
    const meterValue = num
    const convertToKilometer = input.value / meterValue
    result.textContent = convertToKilometer
    calculate.textContent = `${input.value} / ${meterValue} In`
}

function conversionToCentimeter(num) {
    const result = document.getElementById("result")
    const calculate = document.getElementById("calculate")
    const meterValue = num
    const convertToCentimeter = input.value * meterValue
    result.textContent = convertToCentimeter
    calculate.textContent = `${input.value} x ${meterValue} In`
}
 */

//kilometer to meter function


function convertCenToFoot(num, tofix) {
    const meterValue = num
    for (let i = 0; i < input.length; i++) {
            const convertToKilometer = input[i].value / meterValue
            for (let j = 0; j < calculator.length; j++) {
                calculator[j].textContent = `${input[i].value} / ${meterValue} In`
            }
        for (let i = 0; i < result.length; i++) {
            result[i].textContent = convertToKilometer.toFixed(tofix)
        }
        
    }
}



/* this is the main input function calculation */
function convertToFeet() {
const meterValue = 12
    const convertToKilometer = inputData / meterValue
        for (let j = 0; j < result.length; j++) {
            result[j].textContent = convertToKilometer.toFixed(3)
                for (let p = 0; p < calculator.length; p++) {
                    calculator[p].textContent = `${inputData} / ${meterValue} In`
            }
        }
    }  
