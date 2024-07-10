
class NewPokemon {
  constructor(
    public id: number, 
    public name: string
  ) {}

  scream() {
    console.log(`NO QUIERO!!!`)
  }
  
  speak() {
    console.log(`NO QUIERO HABLAR!!`)
  }
}

const MyDecorator = () => {
  return (target: Function) => {
    console.log(target);
    return NewPokemon;
  }
}

@MyDecorator()
export class Pokemon {
  constructor(
    public id: number, 
    public name: string
  ) {}

  scream() {
    console.log(`${ this.name.toLocaleUpperCase() }!!!`)
  }
  
  speak() {
    console.log(`${ this.name }, ${ this.name }`)
  }
}

export const blaze = new Pokemon(4, 'Blaze')
blaze.scream()
blaze.speak()
