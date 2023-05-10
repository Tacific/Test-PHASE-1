console.log("Checking if You want this Money")

const addPlaces = (dataArray) => {
// console.log(dataArray)
const mountContainer = document.getElementById("mount-container")
// console.log(mountContainer)
dataArray.forEach(element => {
// console.log(element.img)
const img = document.createElement('img')
img.src = element.img
// console.log(img)
mountContainer.appendChild(img) 
});

};



fetch("http://localhost:3000/mountains")
.then(response => response.json())
.then(places => addPlaces(places))