var container = document.querySelector('#row')


var nav = document.querySelector('#myTab')
nav.addEventListener('click', apiCall)


function apiCall(event){
  container.innerHTML = ''
  var text = event.target.textContent
  if(text === 'Home'){
    return
  }
  var url = "https://www.anapioficeandfire.com/api/" + text + "?page=1&pageSize=1000"
  console.log(url)
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if(data[0].url.includes('books')){
        Books(data)
      } else if(data[0].url.includes('characters')){
        Characters(data)
      } else if(data[0].url.includes('houses')){
        Houses(data)
      } else {
        console.log("here")
      }
    })
}

function Houses(data){
  data.forEach(el => {
    var div = document.createElement('div')
    div.setAttribute('class','col')
    div.innerHTML = `<div class="card" style="width: 18rem">
        <div class="card-body">
          <h6 class="card-title">${el.name}</h6>
        </div>
      </div>`
    container.appendChild(div)
  })
}

function Characters(data){

  var characters = data.filter(el => el.name != '')
  console.log(characters)

    characters.forEach(el => {
    var div = document.createElement('div')
    div.setAttribute('class','col')
    div.innerHTML = `<div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${el.name}</h5>
        </div>
      </div>`
    container.appendChild(div)
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



