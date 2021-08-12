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
  container.innerHTML = ''
  var text = event.target.textContent
  if(text === 'characters'){
    Characters()
  } else {

    var url = "https://www.anapioficeandfire.com/api/" + text + "?page=1&pageSize=1000"
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if(data[0].url.includes('books')){
          Books(data)
        } else if(data[0].url.includes('houses')){
          console.log('houses')
        }
      })
  }

}

function Characters(){
  fetch('https://thronesapi.com/api/v2/Characters')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    data.forEach(el => {
      var div = document.createElement('div')
      div.setAttribute('class','col')
      div.innerHTML = `<div class="card" style="width: 18rem;">
      <img src="${el.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${el.fullName}</h5>
        <p class="card-text">Title: ${el.title}</p>
        <p class="card-text">House: ${el.family}</p>
      </div>
    </div>`
    container.appendChild(div)
    })
  })
}

function Books(data) {
    data.forEach(el => {
    var div = document.createElement('div')
    div.setAttribute('class','col')
    div.innerHTML = `<div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${el.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Publisher: ${el.publisher}</h6>
          <p class="card-text">Number of pages: ${el.numberOfPages}</p>
          <p class="card-text">Number of Characters: ${el.characters.length}</p>
          <p class="card-text">Released: ${el.released}</p>
        </div>
      </div>`
    container.appendChild(div)
  })
}



