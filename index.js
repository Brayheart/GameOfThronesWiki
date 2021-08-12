var container = document.querySelector('#row')

fetch('https://www.anapioficeandfire.com/api')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const propertyNames = Object.keys(data);
    propertyNames.forEach(el => {
      var button = document.createElement('button')
      button.setAttribute('class','col')
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
      if(data[0].url.includes('books')){
        Books(data)
      } else if(data[0].url.includes('characters')){
        console.log('characters')
      } else if(data[0].url.includes('houses')){
        console.log('houses')
      }
    })
}

function Books(data) {
  container.innerHTML = ''
    data.forEach(el => {
    var div = document.createElement('div')
    div.setAttribute('class','col')
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
}



