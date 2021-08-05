fetch('https://www.anapioficeandfire.com/api')
  .then(response => response.json())
  .then(data => console.log(data));
