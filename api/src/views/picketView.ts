import Picket from '../models/Picket';

export default {
  render( picket : Picket ) {
    return {
      id: picket.id,
      name:  picket.name,
      countFood:  picket.countFood, 
      type:  picket.type,
      size:  picket.size, 
      latitude:  picket.latitude,
      longitude:  picket.longitude,
      status: picket.status,
      
    };
  },

  renderMany( picket: Picket[] ) {
    return  picket.map(( picket ) => this.render(  picket ));
  },
};