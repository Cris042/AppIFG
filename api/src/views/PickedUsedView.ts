import PickedUsed from '../models/PicketUsed';

export default {
  render( PickedUsed : PickedUsed ) {
    return {
        id: PickedUsed.id,
        dateEntryPicket: PickedUsed.dateEntryPicket,
        dateExitPicket: PickedUsed.dateExitPicket,
        picketID : PickedUsed.picketID,
        cattleID : PickedUsed.cattleID,
        occupancyRate : PickedUsed.occupancyRate,
    };
  },

  renderMany( pickedUsed : PickedUsed[] ) 
  {
    return  pickedUsed.map(( pickedUsed ) => this.render( pickedUsed ));
  },
  
};