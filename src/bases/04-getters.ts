import axios from 'axios'
import { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {

  get imageUrl(): string {
    return `https://pokemon.com/${ this.id }.jpg`;
  }

  constructor(public id: number, public name: string, public age: number) {}

  scream() {
    console.log(`${ this.name.toLocaleUpperCase() }!!!`)
  }
  
  speak() {
    console.log(`${ this.name }, ${ this.name }`)
  }

  // En un futuro, seria mejor eliminar las librerias de tercero por si cambian 
  async getMoves(): Promise<Move[]> {
    // const moves = 10;
    const { data } = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4');
    console.log(data.moves.length)
    const moves = data.moves;
    return moves;
  }
}
export const charmander = new Pokemon(1,"Charmander", 23)

console.log(charmander.getMoves())
charmander.speak()
charmander.scream()
