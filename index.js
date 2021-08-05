var container = document.querySelector('#container')

fetch('https://www.anapioficeandfire.com/api')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const propertyNames = Object.keys(data);
    propertyNames.forEach(el => {
      var button = document.createElement('button')
      button.textContent = el
      button.addEventListener('click', apiCall)
      container.appendChild(button)
    })

  });

var apiCall = function(event){
  var text = event.target.textContent
  var url = "https://www.anapioficeandfire.com/api/" + text + "?page=1&pageSize=1000"
  console.log(url)
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
}






// fetch('https://www.anapioficeandfire.com/api/books')
//   .then(response => response.json())
//   .then(data => console.log(data));
// fetch('https://www.anapioficeandfire.com/api/characters')
//   .then(response => response.json())
//   .then(data => console.log(data));
// fetch('https://www.anapioficeandfire.com/api/houses')
//   .then(response => response.json())
//   .then(data => console.log(data));
