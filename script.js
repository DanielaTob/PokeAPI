const poke_container = document.getElementById('poke_container');
const pokemons_number = 200;
const colors = {
	fire: '#CB4335',
	grass: '#F1C40F',
	electric: '#ABB2B9 ',
	water: '#ABB2B9',
	ground: '#884EA0',
	rock: '#d5d5d4',
	fairy: '#FADBD8',
	poison: '#2ECC71',
	bug: '#F1948A',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#AED6F1',
	fighting: '#E6E0D4',
	normal: '#D35400 '
};
const main_types = Object.keys(colors);

const pintar_Pokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const respuesta = await fetch(url);
	const pokemon = await respuesta.json();
	createPokemonCard(pokemon);
};

function createPokemonCard(pokemon) {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');

	const poke_types = pokemon.types.map(type => type.type.name);
	const type = main_types.find(type => poke_types.indexOf(type) > -1);
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const color = colors[type];
	
	pokemonEl.style.backgroundColor = color;

	const pokeInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png" alt="" />
        </div>
        <div class="info">
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;

	pokemonEl.innerHTML = pokeInnerHTML;

	poke_container.appendChild(pokemonEl);
}

pintar_Pokemons();

