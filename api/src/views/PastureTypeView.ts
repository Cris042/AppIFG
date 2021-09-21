import PastureType from '../models/PastureType';

export default {
  render( PastureType : PastureType ) {
    return {
      id: PastureType.id,
      name:  PastureType.name,
      amountOffood: PastureType.amountOffood,
    };
  },

  renderMany( PastureType : PastureType[] ) 
  {
    return  PastureType.map(( PastureType ) => this.render( PastureType ));
  },
  
};