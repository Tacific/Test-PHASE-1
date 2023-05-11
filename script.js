//Assign fetch to variable
const fetchAPI = () => {
    fetch("http://localhost:3000/mountains")
    .then(response => response.json())
    .then(places => addPlaces(places))
    }
    //Have to call function
    fetchAPI()

////////////////////////////////////////////////////////////////////////////////////////////////

//Stop Reload addEventListner
const form = document.querySelector("form")
form.addEventListener("submit",(e) =>{
    e.preventDefault(),
    console.log(e)})

////////////////////////////////////////////////////////////////////////////////////////////////

//Create function to append with addEventListner
const addPlaces = (dataArray) => {

//getElementById and assign to variable
const mountContainer = document.getElementById("mount-container")

//create forEach to Loop
dataArray.forEach(element => {
const img = document.createElement('img')
img.src = element.img

//add Event Listner to click on img
img.addEventListener("click", (e) => {
const pTag = document.getElementById("p-Tag")
const pTitle = document.createElement("p")
pTitle.textContent = element.title
pTag.append(pTitle)

const pName = document.createElement("li")
pName.textContent = element.name
pTag.append(pName)

const pCost = document.createElement("li")
pCost.textContent = element.cost
pTag.appendChild(pCost)
})

//append img
mountContainer.appendChild(img)});
};














