console.log("Hello wORLD")

const lenPokemon = (name) => { //creating a seperate function 
fetch(`https://pokeapi.co/api/v2/pokemon/${name}`) //${name} allows us to search for any pokemon dynamically, which you MUST use backticks
    .then((data) => data.json()) //we will grab the data from the fetched api (creating a promise)
    .then((response) => { //we will take the information from the promise
    
        //this is to add image
        let imgElement = document.createElement('img'); // we will create a new element tag, that will img
        imgElement.src = response.sprites.front_default;//then iwe will grab the img src from the fetched api and specify
        let container = document.getElementById("len");//then create a variable, that variable will be assigned the specified id / container
        container.appendChild(imgElement);//then append that container to the child
 
        //this is to add name to the pokemon
        let nameElement = document.createElement('p') //creates a new p tag
        nameElement = response.species.name //we will make the P tag contain the species name
        container.append(nameElement) //append it to the already existing container

        //adds a pokemon trainer by url
        // const imageUrl = 'https://image.cdn2.seaart.ai/2023-12-29/cm7l10le878c73dqlfh0/6d5664be1a8418788ea54b00a7271777dcf24095_low.webp';
        // let trainer = document.createElement('img')
        // trainer.src = imgElement
        // let trainerHeader = document.getElementById("len")
        // trainerHeader.appendChild(imgElement);
    });
}

for (let name of ['squirtle','miltank']){
    lenPokemon(name)
}


const momoPokemon = (name) => {
  //creating a seperate function
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`) 
    .then((data) => data.json()) 
    .then((response) => {
    //adds image
    let imgElement = document.createElement("img");
    imgElement.src = response.sprites.front_default;
    let container = document.getElementById("momo");
    container.appendChild(imgElement); //then append that container to the child

    //this is to add name
    let nameElement = document.createElement("p");
    nameElement = response.species.name;
    container.append(nameElement);
    });
};

for (let name of ["honchkrow", "pidgeotto"]) {
  momoPokemon(name);
}


const chrisPokemon = (name) => {
  //creating a seperate function
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((data) => data.json())
    .then((response) => {
      //adds image
      let imgElement = document.createElement("img");
      imgElement.src = response.sprites.front_default;
      let container = document.getElementById("chris");
      container.appendChild(imgElement); //then append that container to the child

      //this is to add name
      let nameElement = document.createElement("p");
      nameElement = response.species.name;
      container.append(nameElement);
    });
};

for (let name of ["snorlax", "jigglypuff"]) {
  chrisPokemon(name);
}

const connorPokemon = (name) => {
  //creating a seperate function
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((data) => data.json())
    .then((response) => {
      //adds image
      let imgElement = document.createElement("img");
      imgElement.src = response.sprites.front_default;
      let container = document.getElementById("connor");
      container.appendChild(imgElement); //then append that container to the child

      //this is to add name
      let nameElement = document.createElement("p");
      nameElement = response.species.name;
      container.append(nameElement);
    });
};

for (let name of ["jynx", "lopunny"]) {
  connorPokemon(name);
}

const danielPokemon = (name) => {
  //creating a seperate function
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((data) => data.json())
    .then((response) => {
      //adds image
      let imgElement = document.createElement("img");
      imgElement.src = response.sprites.front_default;
      let container = document.getElementById("daniel");
      container.appendChild(imgElement); //then append that container to the child

      //this is to add name
      let nameElement = document.createElement("p");
      nameElement = response.species.name;
      container.append(nameElement);
    });
};

for (let name of ["mewtwo", "rayquaza", "zekrom", "pikachu"]) {
  danielPokemon(name);
}