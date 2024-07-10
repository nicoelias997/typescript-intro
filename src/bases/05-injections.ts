import { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface';
import { HttpAdapter, PokeApiAdapter, PokeApiPatchAdapter } from '../api/pokeApi.adapter';

// Inyectamos una dependencia para evitar que una clase tenga toda la funcionalidad interna. 
export class Pokemon {

  get imageUrl(): string {
    return `https://pokemon.com/${ this.id }.jpg`;
  }

  constructor(
    public id: number, 
    public name: string, 
    public age: number,
    private readonly http: HttpAdapter  
  ) {}

  scream() {
    console.log(`${ this.name.toLocaleUpperCase() }!!!`)
  }
  
  speak() {
    console.log(`${ this.name }, ${ this.name }`)
  }

  // En un futuro, seria mejor eliminar las librerias de tercero por si cambian 
  async getMoves(): Promise<Move[]> {
    // const moves = 10;
    const  data = await this.http.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4');
    return data.moves;
  }
}
const pokeApiAxios = new PokeApiAdapter()
const pokeApiFetch = new PokeApiPatchAdapter()

export const charmanderAxios = new Pokemon(1,"Charmander", 23, pokeApiAxios)
export const charmanderFetch = new Pokemon(1,"Charmander", 23, pokeApiFetch)

console.log(charmanderAxios.getMoves())
console.log(charmanderFetch.getMoves())
