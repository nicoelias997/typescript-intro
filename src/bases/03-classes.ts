// Forma larga para crear una clase con su constructor
export class PokemonBack {
  public id: number;
  public name: string;
  public age: number;
  constructor (
    id: number, 
    name: string, 
    age: number ){
      this.id = id;
      this.name = name;
      this.age = age;
  }
} 

// Forma corta para definir una clase
export class Pokemon {
  constructor(public id: number, public name: string, public age: number, public imageUrl: string) {}
}
// public readonly id: number; Me permite solamente leer y no modificar la variable

export const charmanderBack = new PokemonBack(1, "Dodot", 23)

export const charmander = new Pokemon(1, "Charmander", 23, `https://pokemon.com/4`)
