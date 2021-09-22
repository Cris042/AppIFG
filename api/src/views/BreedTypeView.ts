import Breed from '../models/Breed';

export default {
  render( breed : Breed ) {
    return {
      id: breed.id,
      name:  breed.name,
      consumption: breed.consumption,
    };
  },

  renderMany( breeds : Breed[] ) 
  {
    return breeds.map(( breeds ) => this.render( breeds ));
  },
  
};