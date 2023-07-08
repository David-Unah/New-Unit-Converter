
const button = document.getElementsByTagName("button")

//button color light control when clicked
function buttonColor(a, b) {
    for (let i = 0; i < button.length; i++) {
    button[i].classList.add("button-color")
    button[a].classList.remove("button-color")
    button[b].classList.remove("button-color")
    }
}    

function dynamicNav(topList, bottomList, option1, option2, option3) {
    document.getElementById("meter").innerHTML = `${topList} <img src="./img/Vector.png" alt="triangle"/>`
    document.getElementById("bottom--select").innerHTML = `${bottomList} <img src="./img/Vector.png" alt="triangle"/>`
    const list = document.getElementsByClassName("length-list")
    for (let j = 0; j < list.length; j++) {
          list[j].style.display = `${option1}`
    }
    const volumes = document.getElementsByClassName("volumes")
    for (let r = 0; r < volumes.length; r++) {
        volumes[r].style.display = `${option2}`
    }
    const masses = document.getElementsByClassName("masses")
    for (let k = 0; k < masses.length; k++) {
        masses[k].style.display = `${option3}`
    }
    for (let y = 0; y < input.length; y++) {
        input[y].value = '' 
    }
    for (let p = 0; p < result.length; p++) {
        result[p].textContent = 0
    }
    for (let t = 0; t < calculator.length; t++) {
        calculator[t].textContent = "Calculation goes in here"
    }
    meter.classList.remove("bounce")
    bottomSelect.classList.remove("bounce")
}

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        if (button[i] === button[0]) {
            buttonColor(1, 2)
            dynamicNav("Meter", "Foot", "flex", "none", "none")
        } else if (button[i] === button[1]) {
            buttonColor(0, 2)
            dynamicNav("Liter", "Milliliter", "none", "flex", "none")
        } else {
            buttonColor(0, 1)
            dynamicNav("Tonne", "Milligram", "none", "none", "flex")
        }
    })
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
    }
    meter.classList.remove("bounce")
    bottomSelect.classList.remove("bounce")
}


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
/* function listDarkedSelect(item, a, b, c, d) {
    item[a].classList.remove("darken")
    item[b].classList.remove("darken")
    item[c].classList.remove("darken")
    item[d].classList.remove("darken")
    
}
 */


details[0].addEventListener('click', function() {
    measureListOne.classList.toggle("show")
    /* if (meter.innerText === list[1].innerText) {
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
    } */
    
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
            for (let k = 0; k < input.length; k++) {
                input[k].value = ''
            }
            for (let j = 0; j < result.length; j++) {
                result[j].textContent = ''
            }
            for (let p = 0; p < calculator.length; p++) {
                calculator[p].textContent = "calculations goes in here"
            }
            meter.classList.remove("bounce")
            let currentList = list[i].textContent   
            meter.innerHTML = `${currentList} <img src="./img/Vector.png" alt="triangle"/>`
        }
})
} 


const lowerList = document.getElementsByClassName("lower--list")
const bottomSelect = document.getElementById("bottom--select")
details[1].addEventListener('click', function() {
        measureListTwo.classList.toggle("show")
        /* if (bottomSelect.innerText === lowerList[1].innerText) {
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
        } */
       
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
        for (let k = 0; k < input.length; k++) {
            input[k].value = ''
        }
        for (let j = 0; j < result.length; j++) {
            result[j].textContent = ''
        }
        for (let p = 0; p < calculator.length; p++) {
            calculator[p].textContent = "calculations goes in here"
        }
        
        bottomSelect.classList.remove("bounce")
        let currentList2 = lowerList[i].textContent
        bottomSelect.innerHTML = `${currentList2} <img src="./img/Vector.png" alt="triangle"/>`
        }
    })
}

const input = document.getElementsByClassName("input")


input[0].addEventListener("input", function() {
    inputData = input[0].value
    if (meter.innerText === "Meter") {
        if (bottomSelect.innerText === "Kilometer") {
            convertToKilometer(1000); //m to km - reuse function
        } else if (bottomSelect.innerText === "Centimeter") {
            convertToCentimeter(100); 
        } else if (bottomSelect.innerText === "Foot") {
            convertToFeet(3.281);  // m to ft - reused function
        } else if (bottomSelect.innerText === "Yard") {
            convertToFeet(1.094); // m to yd - reused function
        } else if (bottomSelect.innerText === "Meter") {
            similarText();
        }
    } else if (meter.innerText === "Kilometer") {
            if (bottomSelect.innerText === "Meter") {
                convertToCentimeter(1000) //km to M - reused function
        } else if (bottomSelect.innerText === "Centimeter") {
                convertToCentimeter(100000) // km to cm - reused function
        } else if (bottomSelect.innerText === "Foot") {
                convertToCentimeter(3281) // km to ft - reused fucntion
        } else if (bottomSelect.innerText === "Yard") {
                convertToCentimeter(1094)
        } else if (bottomSelect.innerText === "Kilometer") {
            similarText()
        }
    } else if (meter.innerText === "Centimeter") {
        if (bottomSelect.innerText === "Meter") {
            convertToKilometer(100) //cm to m - reused fucntion
        } else if (bottomSelect.innerText === "Kilometer") {
            convertToKilometer(1000000) //cm to km - reused fucntion
        } else if (bottomSelect.innerText === "Foot") {
            convertToKilometer(30.48) // cm to ft - reused function
        } else if (bottomSelect.innerText === "Yard") {
            convertToKilometer(91.44)// cm to yd - reused function
        } else if (bottomSelect.innerText === "Centimeter") {
            similarText()
        }
    } else if (meter.innerText === "Foot") {
        if (bottomSelect.innerText === "Meter") {
            convertToKilometer(3.281)  // ft to m - reused function
        } else if ( bottomSelect.innerText === "Kilometer") {
            convertToKilometer(3281) // ft to km - reused function
        } else if (bottomSelect.innerText === "Centimeter") {
            convertToCentimeter(30.48) // ft to cm - reused function
        } else if (bottomSelect.innerText === "Yard") {
            convertToKilometer(3) // foot to yd - reused function
        } else if (bottomSelect.innerText === "Foot") {
            similarText()
        }
    } else if (meter.innerText === "Yard") {
        if (bottomSelect.innerText === "Meter") {
            convertToKilometer(1.094) // yard to meter; reused function
        } else if (bottomSelect.innerText === "Kilometer") {
            convertToKilometer(1094) // yard to km ; reused function
        } else if (bottomSelect.innerText === "Centimeter") {
            convertToFeet(91.44) // yard to cm; reused function
        } else if (bottomSelect.innerText === "Foot") {
            convertToCentimeter(3)  // yard to ft, reused function
        } else if (bottomSelect.innerText === "Yard") {
            similarText()
        }
    } else if (meter.innerText === "Tonne") {
        if (bottomSelect.innerText === "Kilogram") {
            convertToCentimeter(1000) // tne to kilogram - reused function
        } else if (bottomSelect.innerText === "Gram") {
            convertToCentimeter(1000000) // tonne to gram - reused function
        } else if (bottomSelect.innerText === "Milligram") {
            convertToCentimeter(1000000000)
        } else if (bottomSelect.innerText === "Tonne") {
            similarText()
        }
    } else if (meter.innerText === "Kilogram") {
        if (bottomSelect.innerText === "Tonne") {
            convertToKilometer(1000)
        } else if (bottomSelect.innerText === "Gram") {
            convertToCentimeter(1000)
        } else if (bottomSelect.innerText === "Milligram") {
            convertToCentimeter(1000000)
        } else if (bottomSelect.innerText === "Kilogram") {
            similarText()
        }
    } else if (meter.innerText === "Gram") {
        if (bottomSelect.innerText === "Tonne") {
            convertToKilometer(1000000)
        } else if (bottomSelect.innerText === "Kilogram") {
            convertToKilometer(1000)
        } else if (bottomSelect.innerText === "Milligram") {
            convertToCentimeter(1000)
        } else if (bottomSelect.innerText === "Gram") {
            similarText()
        }
    } else if (meter.innerText === "Milligram") {
        if (bottomSelect.innerText === "Tonne") {
            convertToKilometer(1000000000)
        } else if (bottomSelect.innerText === "Kilogram") {
            convertToKilometer(1000000)
        } else if (bottomSelect.innerText === "Gram") {
            convertToKilometer(1000)
        } else if (bottomSelect.innerText === "Milligram") {
            similarText()
        }
    } else if (meter.innerText === "Liter") {
        if (bottomSelect.innerText === "Milliliter") {
            convertToCentimeter(1000)
        } else if (bottomSelect.innerText === "Liter") {
            similarText()
        }
    } else if (meter.innerText === "Milliliter") {
        if (bottomSelect.innerText === "Liter") {
            convertToKilometer(1000)
        } else if (bottomSelect.innerText === "Milliliter") {
            similarText()
        }
    }

})










input[1].addEventListener("input", function() {
    inputData = input[1].value
     if (bottomSelect.innerText === "Meter") {
        if (meter.innerText === "Kilometer") {
            convertToKilometer(1000) //m to km - reuse function
        } else if (meter.innerText === "Centimeter") {
            convertToCentimeter(100) 
        } else if (meter.innerText === "Foot") {
            convertToFeet(3.281)  // m to ft - reused function
        } else if (meter.innerText === "Yard") {
            convertToFeet(1.094) // m to yd - reused function
        } else if (meter.innerText === "Meter") {
            similarTextSecond()
        }
    } else if (bottomSelect.innerText === "Kilometer") {
        if (meter.innerText === "Meter") {
            console.log("the convert to meter should run")
            convertToCentimeter(1000) //km to M - reused function
        } else if (meter.innerText === "Centimeter") {
                convertToCentimeter(100000) // km to cm - reused function
        } else if (meter.innerText === "Foot") {
                convertToCentimeter(3281) // km to ft - reused fucntion
        } else if (meter.innerText === "Yard") {
                convertToCentimeter(1094)
        } else if (meter.innerText === "Kilometer") {
            similarTextSecond()
        }
    } else if (bottomSelect.innerText === "Centimeter") {
        if (meter.innerText === "Meter") {
            convertToKilometer(100) //cm to m - reused fucntion
        } else if (meter.innerText === "Kilometer") {
            convertToKilometer(1000000) //cm to km - reused fucntion
        } else if (meter.innerText === "Foot") {
            convertToKilometer(30.48) // cm to ft - reused function
        } else if (meter.innerText === "Yard") {
            convertToKilometer(91.44)// cm to yd - reused function
        } else if (meter.innerText === "Centimeter") {
            similarTextSecond()
        }
    } else if (bottomSelect.innerText === "Foot") {
        if (meter.innerText === "Meter") {
            convertToKilometer(3.281)  // ft to m - reused function
        } else if ( meter.innerText === "Kilometer") {
            convertToKilometer(3281) // ft to km - reused function
        } else if (meter.innerText === "Centimeter") {
            convertToCentimeter(30.48) // ft to cm - reused function
        } else if (meter.innerText === "Yard") {
            convertToKilometer(3) // foot to yd - reused function
        } else if (meter.innerText === "Foot") {
            similarTextSecond()
        }
    } else if (bottomSelect.innerText === "Yard") {
        if (meter.innerText === "Meter") {
            convertToKilometer(1.094) // yard to meter; reused function
        } else if (meter.innerText === "Kilometer") {
            convertToKilometer(1094) // yard to km ; reused function
        } else if (meter.innerText === "Centimeter") {
            convertToFeet(91.44) // yard to cm; reused function
        } else if (meter.innerText === "Foot") {
            convertToCentimeter(3)  // yard to ft, reused function
        } else if (meter.innerText === "Yard") {
            similarTextSecond()
        }
    } else if (bottomSelect.innerText === "Tonne") {
        if (meter.innerText === "Kilogram") {
            convertToCentimeter(1000) // tne to kilogram - reused function
        } else if (meter.innerText === "Gram") {
            convertToCentimeter(1000000) // tonne to gram - reused function
        } else if (meter.innerText === "Milligram") {
            convertToCentimeter(1000000000)
        } else if (meter.innerText === "Tonne") {
            similarText()
        }
    } else if (bottomSelect.innerText === "Kilogram") {
        if (meter.innerText === "Tonne") {
            convertToKilometer(1000)
        } else if (meter.innerText === "Gram") {
            convertToCentimeter(1000)
        } else if (meter.innerText === "Milligram") {
            convertToCentimeter(1000000)
        } else if (meter.innerText === "Kilogram") {
            similarText()
        }
    } else if (bottomSelect.innerText === "Gram") {
        if (meter.innerText === "Tonne") {
            convertToKilometer(1000000)
        } else if (meter.innerText === "Kilogram") {
            convertToKilometer(1000)
        } else if (meter.innerText === "Milligram") {
            convertToCentimeter(1000)
        } else if (meter.innerText === "Gram") {
            similarText()
        }
    } else if (bottomSelect.innerText === "Milligram") {
        if (meter.innerText === "Tonne") {
            convertToKilometer(1000000000)
        } else if (meter.innerText === "Kilogram") {
            convertToKilometer(1000000)
        } else if (meter.innerText === "Gram") {
            convertToKilometer(1000)
        } else if (meter.innerText === "Milligram") {
            similarText()
        }
    } else if (bottomSelect.innerText === "Liter") {
        if (meter.innerText === "Milliliter") {
            convertToCentimeter(1000)
        } else if (meter.innerText === "Liter") {
            similarText()
        }
    } else if (bottomSelect.innerText === "Milliliter") {
        if (meter.innerText === "Liter") {
            convertToKilometer(1000)
        } else if (meter.innerText === "Milliliter") {
            similarText()
        }
    }


})







function similarText() {
    calculator[1].textContent = "waiting..."
    bottomSelect.classList.add("bounce")
}

function similarTextSecond() {
    calculator[0].textContent = "waiting..."
    meter.classList.add("bounce")
}


/* this is the main input function calculation */

//this function can used for (m to km), 
function convertToKilometer(num) {
const meterValue = num
    const convertToKilometer = inputData / meterValue
        for (let j = 0; j < result.length; j++) {
            result[j].textContent = convertToKilometer.toFixed(3)
                for (let p = 0; p < calculator.length; p++) {
                    calculator[p].textContent = `${inputData} / ${meterValue} In`
            }
        }
    }  


function convertToCentimeter(num) {
    const meterValue = num
        const convertToCentimeter = inputData * meterValue
            for (let j = 0; j < result.length; j++) {
                result[j].textContent = convertToCentimeter
                    for (let p = 0; p < calculator.length; p++) {
                        calculator[p].textContent = `${inputData} x ${meterValue} In`
                }
            }
        }  

//this function multiplies and gets approximated values
function convertToFeet(num) {
    const meterValue = num
        const convertToFeet = inputData * meterValue
            for (let j = 0; j < result.length; j++) {
                result[j].textContent = convertToFeet.toFixed(3)
                    for (let p = 0; p < calculator.length; p++) {
                        calculator[p].textContent = `${inputData} x ${meterValue} In`
                }
            }
        }  



