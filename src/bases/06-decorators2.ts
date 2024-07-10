
const Deprecated = (deprecationReason: string) => {
  return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
    console.log({target})
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
          //! Llamar la función propiamente con sus argumentos
          propertyDescriptor.value.apply(this, args); 
        }
        return wrapperFn;
      }
    }
  }   
}

class NewPokemon {
  constructor(
    public id: number, 
    public name: string
  ) {}

  scream() {
    console.log(`NO QUIERO!!!`)
  }

  @Deprecated("Most use speak2 method instead!")
  speak() {
    console.log(`NO QUIERO HABLAR!!`)
  }
  speak2() {
    console.log(`${this.name}, ${this.name}`)
  }
}

export const blaze = new NewPokemon(4, 'Blaze')
blaze.scream()
blaze.speak()
blaze.speak2()
