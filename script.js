// top buttons
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


const details = document.getElementsByClassName("perferred--unit")
const measureListOne = document.getElementById("measure--listOne")
const measureListTwo = document.getElementById("measure--listTwo")
const measureList = document.getElementsByClassName("measure--list")
const list = document.getElementsByClassName("list")
const meter = document.getElementById("meter")
const result = document.getElementById("result")
const calculate = document.getElementById("calculate")
 

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
        } else {
        measureListTwo.classList.toggle("show")
        let currentList2 = lowerList[i].textContent
        bottomSelect.innerHTML = `${currentList2} <img src="./img/Vector.png" alt="triangle"/>`
        }
    })
}






//list darken function
function listDarkedSelect(item, a, b, c, d) {
    input.value = ''
    result.textContent = input.value
    calculate.textContent = 'calculation goes in here'
    item[a].classList.remove("darken")
    item[b].classList.remove("darken")
    item[c].classList.remove("darken")
    item[d].classList.remove("darken")
}



//correspondng input

input.addEventListener("input", function() {
    if (meter.innerText === "Meter") {
        if (bottomSelect.innerText === "Kilometer") {
            conversionToKilometer(1000)
        } else if (bottomSelect.innerText === "Centimeter") {
            conversionToCentimeter(100)
        } else if (bottomSelect.innerText === "Foot") {
            conversionToFeet(3.281, 3)
        } else if (bottomSelect.innerText === "Yard") {
            conversionToFeet(1.094, 3)
        } else if (bottomSelect.innerText === "Meter") {
            console.log("kindly select a different measurement")
            calculate.textContent = "waiting..."
            bottomSelect.classList.add("bounce")
        }
    } else if (meter.innerText === "Kilometer") {
            if (bottomSelect.innerText === "Meter") {
                conversionToKilometer(100) //conversion of cm to m, resuse this function
        } else if (bottomSelect.innerText === "Centimeter") {
                conversionToCentimeter(100000)
        } else if (bottomSelect.innerText === "Foot") {
            conversionToFeet(328.1, 3) 
        } else if (bottomSelect.innerText === "Yard") {
            conversionToCentimeter(1094)
        } else if (bottomSelect.innerText === "Kilometer") {
            console.log("kindly select a different measurement")
            calculate.textContent = "waiting..."
            bottomSelect.classList.add("bounce")
        }
    } else if (meter.innerText === "Centimeter") {
        if (bottomSelect.innerText === "Meter") {
            conversionToKilometer(100) //conversion of cm to m, resuse this function
        } else if (bottomSelect.innerText === "Kilometer") {
            conversionToKilometer(100000) //conversion of cm to km, reused this function
        } else if (bottomSelect.innerText === "Foot") {
            convertCenToFoot(30.48, 3)
        } else if (bottomSelect.innerText === "Yard") {
            convertCenToFoot(91.44, 3)// conversion fo cm to yard, reused this function
        } else if (bottomSelect.innerText === "Centimeter") {
            console.log("kindly select a different measurement")
            calculate.textContent = "waiting..."
            bottomSelect.classList.add("bounce")
        }
    } else if (meter.innerText === "Foot") {
        if (bottomSelect.innerText === "Meter") {
            convertCenToFoot(3.281, 3)  //conversion to Meter: reused function
        } else if ( bottomSelect.innerText === "Kilometer") {
            convertCenToFoot(3281, 3) // convertion of ft to  km ; reused function
        } else if (bottomSelect.innerText === "Centimeter") {
            conversionToFeet(30.48, 3)
        } else if (bottomSelect.innerText === "Yard") {
            convertCenToFoot(3, 3)
        } else if (bottomSelect.innerText === "Foot") {
            console.log("kindly select a different measurement")
            calculate.textContent = "waiting..."
            bottomSelect.classList.add("bounce")
        }
    } else if (meter.innerText === "Yard") {
        if (bottomSelect.innerText === "Meter") {
            convertCenToFoot(1.094, 3) // yard to meter; reused function
        } else if (bottomSelect.innerText === "Kilometer") {
            convertCenToFoot(1094, 3) // yard to km ; reused function
        } else if (bottomSelect.innerText === "Centimeter") {
            conversionToFeet(91.44, 3) // yard to cm; reused function
        } else if (bottomSelect.innerText === "Foot") {
            conversionToCentimeter(3)  // yard to ft, reused function
        } else if (bottomSelect.innerText === "Yard") {
            console.log("kindly select a different measurement")
            calculate.textContent = "waiting..."
            bottomSelect.classList.add("bounce")
        }
    } else if (input.value === '') {
        calculate.textContent = "Kindly input unit"
    }
})

bottomSelect.addEventListener("click", () => {
    bottomSelect.classList.remove("bounce")
})


//make the calculation function dynamic
function conversionToFeet(num, toFix) {
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


//kilometer to meter function


function convertCenToFoot(num, tofix) {
    const result = document.getElementById("result")
    const calculate = document.getElementById("calculate")
    const meterValue = num
    const convertToKilometer = input.value / meterValue
    result.textContent = convertToKilometer.toFixed(tofix)
    calculate.textContent = `${input.value} / ${meterValue} In`
}

const swapIcon = document.getElementById("swapIcon")
const topDetails = document.getElementById("Topdetails")
const bomDetails = document.getElementById("btm-details")
swapIcon.addEventListener('click', () => {
    topDetails.classList.toggle("swap")
    bomDetails.classList.toggle("swapp")
})


