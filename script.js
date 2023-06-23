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


    details[0].addEventListener('click', function() {
        measureListOne.classList.toggle("show")
            if (meter.innerText === list[1].innerText) {
                list[1].classList.add("darken")
                listDarkedSelect(list, [2, 3, 4, 5])
            } else if (meter.innerText === list[2].innerText) {
                list[2].classList.add("darken")
                listDarkedSelect(list, [1, 3, 4, 5])
            } else if (meter.innerText === list[3].innerText) {
                list[3].classList.add("darken")
                listDarkedSelect(list, [1, 2, 4, 5])
            } else if (meter.innerText === list[4].innerText) {
                list[4].classList.add("darken")
                listDarkedSelect(list, [1, 2, 3, 5])
            } else {
                list[5].classList.add("darken")
                listDarkedSelect(list, [1, 2, 3, 4])
            }
    })



for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        if (list[i] === list[0]) {
            measureList[0].classList.toggle("show")
        } else {
            measureList[0].classList.toggle("show")
            let currentList = list[i].textContent   
            meter.innerHTML = `${currentList} <img src="./img/Vector.png" alt="triangle"/>`
        }
        if (list[i] === list[1]) { 
            /* list[1].classList.add("darken")
            listDarkedSelect(list, [2, 3, 4, 5]) */
            input.addEventListener('input', () => {
                if (meter.innerText === bottomSelect.innerText) {
                    console.log("kindly select a different measurement")
                    
                    calculate.textContent = "waiting..."
                } else if (bottomSelect.innerText === "Kilometer"){
                    conversionToKilometer(1000)
                    
                } else if (bottomSelect.innerText === "Centimeter") {
                    conversionToCentimeter(100)
                } else if (bottomSelect.innerText === "foot") {
                    conversionToFeet(3.281, 3)
                } else {
                    conversionToFeet(1.094, 3)
                }
            })
    
        
    } else if (list[i] === list[2]) {
        input.addEventListener('input', () => {
            if (meter.innerText === bottomSelect.innerText) {
                console.log("kindly select a different measurement")
                calculate.textContent = "waiting..."
            } else if (bottomSelect.innerText === "Meter"){
                conversionToCentimeter(1000)  //this is a function to convert kilometer to meter
            } else if (bottomSelect.innerText === "Centimeter") {
                conversionToCentimeter(100000)
            } else if (bottomSelect.innerText === "Foot") {
                conversionToFeet(328.1, 3) 
            } else {
                conversionToCentimeter(1094)  //converts km to yard, takes reused this function due to similar setup
            }
        })
        
    }  else if (list[i] === list[3]) {
        input.addEventListener('input', () => {
            if (meter.innerText === bottomSelect.innerText) {
                console.log("kindly select a different measurement")
                calculate.textContent = "waiting..."
            } else if (bottomSelect.innerText === "Meter"){
                conversionToKilometer(100) //conversion of cm to m, resuse this function
            } else if (bottomSelect.innerText === "Kilometer") {
                conversionToKilometer(100000) //conversion of cm to km, reused this function
            } else if (bottomSelect.innerText === "Foot") {
                convertCenToFoot(30.48, 3)  
            } else {
                convertCenToFoot(91.44, 3)// conversion fo cm to yard, reused this function
            }
        })
        
    } else if (list[i] === list[4]) {
        input.addEventListener('input', () => {
            if (meter.innerText === bottomSelect.innerText) {
                console.log("kindly select a different measurement")
                calculate.textContent = "waiting..."
            } else if (bottomSelect.innerText === "Meter"){
                convertCenToFoot(3.281, 3)  //conversion to Meter: reused function
            } else if (bottomSelect.innerText === "Kilometer") {
                convertCenToFoot(3281, 3) // convertion of ft to  km ; reused function
            } else if (bottomSelect.innerText === "Centimeter") {
                conversionToFeet(30.48, 3)
            } else {
                convertCenToFoot(3, 3)
            }
        })
        
    } else {
        input.addEventListener('input', () => {
            if (meter.innerText === bottomSelect.innerText) {
                console.log("kindly select a different measurement")
                calculate.textContent = "waiting..."
            } else if (bottomSelect.innerText === "Meter"){
                convertCenToFoot(1.094, 3) // yard to meter; reused function
            } else if (bottomSelect.innerText === "Kilometer") {
                convertCenToFoot(1094, 3) // yard to km ; reused function
            } else if (bottomSelect.innerText === "Centimeter") {
                conversionToFeet(91.44, 3) // yard to cm; reused function
            } else {
                conversionToCentimeter(3)  // yard to ft, reused function
            }
        })
    }
})
} 


const lowerList = document.getElementsByClassName("lower--list")
const bottomSelect = document.getElementById("bottom--select")

    details[1].addEventListener('click', function() {
        measureListTwo.classList.toggle("show")
            if (bottomSelect.innerText === lowerList[1].innerText) {
                lowerList[1].classList.add("darken")
                listDarkedSelect(lowerList, [2, 3, 4, 5])
            } else if (bottomSelect.innerText === lowerList[2].innerText) {
                lowerList[2].classList.add("darken")
                listDarkedSelect(lowerList, [1, 3, 4, 5])
            } else if (bottomSelect.innerText === lowerList[3].innerText) {
                lowerList[3].classList.add("darken")
                listDarkedSelect(lowerList, [1, 2, 4, 5])
            } else if (bottomSelect.innerText === lowerList[4].innerText) {
                lowerList[4].classList.add("darken")
                listDarkedSelect(lowerList, [1, 2, 3, 5])
            } else {
                lowerList[5].classList.add("darken")
                listDarkedSelect(lowerList, [1, 2, 3, 4])
            }
    })





//list darken function
function listDarkedSelect(listType, arr) {
    input.value = ''
    result.textContent = input.value
    calculate.textContent = 'calculation goes in here'
    let range = arr
    range.forEach(element => {
        listType[element].classList.remove("darken")
    })
}


