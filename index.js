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
      document.querySelector('#container').innerHTML = ''
      data.forEach(el => {
        var div = document.createElement('div')
        div.innerHTML = `<div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">${el.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${el.publisher}</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>`
        container.appendChild(div)


      })
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
