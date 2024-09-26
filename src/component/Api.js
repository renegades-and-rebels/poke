import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemons = async (limit = 20) => {
    const response = await axios.get(`${BASE_URL}?limit=${limit}`);
    const pokemonPromises = response.data.results.map(async (pokemon) => {
        const pokemonDetail = await axios.get(pokemon.url);
        return {
            name: pokemon.name,
            image: pokemonDetail.data.sprites.front_default,
        };
    });
    return Promise.all(pokemonPromises);
};