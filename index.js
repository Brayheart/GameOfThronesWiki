var container = document.querySelector('#row')


var nav = document.querySelector('#myTab')
nav.addEventListener('click', apiCall)


function apiCall(event){
  container.innerHTML = ''
  var text = event.target.textContent
  if(text === 'Home'){
    Home()
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

function Home(){
  var div = document.createElement('div')
  div.innerHTML = `  <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Game Of Thrones</h1>
        <p class="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates optio aperiam iusto reprehenderit quo, neque provident. Temporibus, magni. Beatae, consequatur.</p>
        <button class="btn btn-primary btn-lg" type="button">On Going Projects</button>
      </div>
      <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Lore</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe excepturi aspernatur fugit porro numquam enim veritatis expedita aliquam suscipit doloremque!</p>
          <button class="btn btn-outline-light" type="button">Where are we now?</button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h2>History</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptas quam nemo! Delectus reprehenderit id aliquam. Minima cumque labore provident blanditiis cupiditate nihil animi fugiat sed repellendus, praesentium quidem molestias!</p>
          <button class="btn btn-outline-secondary" type="button">Hisotry of Westeros</button>
        </div>
      </div>
    </div>
    </div>`
    container.appendChild(div)
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
        <div class="card-body bg-light">
          <h5 class="card-title px-3">${el.name}</h5>        
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Aliases: ${el.aliases[0]} </li>
            <li class="list-group-item">Played by: ${el.playedBy[0]}</li>
            <li class="list-group-item">Seasons: ${el.tvSeries.join(', ')}</li>
            </ul>
        </div>
      </div>`
    container.appendChild(div)
    })
}



function Books(data) {

    data.forEach(el => {

      let date = new Date(el.released + '.000Z');

      date = date.toString().slice(0,15)

    var div = document.createElement('div')
    div.setAttribute('class','col mb-4')
    div.innerHTML = `<div class="card bg-light" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title px-3">${el.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted px-3">${el.publisher}</h6>
            <ul class="list-group">
            <li class="list-group-item list-group-item-action list-group-item-secondary">Pages: ${el.numberOfPages}</li>
            <li class="list-group-item list-group-item-action list-group-item-secondary">Number of Characters: ${el.characters.length}</li>
            <li class="list-group-item list-group-item-action list-group-item-secondary">Released: ${date}</li>
            </ul>
        </div>
      </div>`
    container.appendChild(div)
  })
}



