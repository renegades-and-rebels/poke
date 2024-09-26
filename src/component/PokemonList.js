import React, { useEffect, useState } from 'react';
import { fetchPokemons } from './Api';
import PokemonCard from './PokemonCard';
import Loading from './Loading';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPokemons = async () => {
            try {
                const data = await fetchPokemons();
                setPokemons(data);
            } catch (error) {
                console.error('Error fetching Pokémon data:', error);
            } finally {
                setLoading(false);
            }
        };

        getPokemons();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="pokemon-list">
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default PokemonList;
