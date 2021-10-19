import Cattle from '../models/Cattle';

export default {
  render( cattle : Cattle ) {
    return {
      id: cattle.id,
      name:  cattle.name,
      sexo:  cattle.sexo,
      breed:  cattle.breed,
      status:  cattle.status,
      initialWeight:  cattle.initialWeight,
      Weight:  cattle.Weight,
      purchaseValue:  cattle.purchaseValue,
      datePurchase:  cattle.datePurchase,
      dateOfBirth:  cattle.dateOfBirth      
    };
  },

  renderMany( cattle: Cattle[] ) 
  {
    return  cattle.map(( cattle ) => this.render( cattle ));
  },
};