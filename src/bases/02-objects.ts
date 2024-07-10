// export const pokemonsIds = [1, 20, 35, 55];

//En typescript podemos obligar a que un objeto siga la estructura de datos con interface
// export const pokemon = {
//   id: 1,
//   name: 'Bolbasor',
//   age: 23
// }

interface Pokemon {
  id: number;
  name: string;
  age?: number;
}

export const bulbasaur: Pokemon = {
  id: 1,
  name: 'Bulbasaur',
  age: 23
}

export const charmander: Pokemon = {
  id: 2,
  name: 'Charmander'
}

export const pokemons: Pokemon[] = [];

pokemons.push( charmander, bulbasaur )

console.log(pokemons)
