const fetchPokemon = async (pokemon) => {
  console.log("Tô no fetch");
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(async (data) => {
      return await data.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

fetch("../extern.html")
  .then((res) => res.text())
  .then((data) => {
    console.log("Tô no script ");
    document.body.innerHTML = data;
  })
  .then(() => {
    const pokemonName = document.querySelector(".pokemon__name");
    const pokemonNumber = document.querySelector(".pokemon__number");
    const pokemonImage = document.querySelector(".pokemon__image");

    const form = document.querySelector(".form");
    const input = document.querySelector(".input__search");
    const buttonPrev = document.querySelector(".btn-prev");
    const buttonNext = document.querySelector(".btn-next");

    let searchPokemon = 1;

    const renderPokemon = async (pokemon) => {
      pokemonName.innerHTML = "Loading...";
      pokemonNumber.innerHTML = "";

      const data = await fetchPokemon(pokemon);

      if (data) {
        pokemonImage.style.display = "block";
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src =
          data["sprites"]["versions"]["generation-v"]["black-white"][
            "animated"
          ]["front_default"];
        input.value = "";
        searchPokemon = data.id;
      } else {
        pokemonImage.style.display = "none";
        pokemonName.innerHTML = "Not found :c";
        pokemonNumber.innerHTML = "";
      }
    };

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      renderPokemon(input.value.toLowerCase());
    });

    buttonPrev.addEventListener("click", () => {
      if (searchPokemon > 1) {
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
      }
    });

    buttonNext.addEventListener("click", () => {
      searchPokemon += 1;
      renderPokemon(searchPokemon);
    });

    renderPokemon(searchPokemon);
  });

function Darkness() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
