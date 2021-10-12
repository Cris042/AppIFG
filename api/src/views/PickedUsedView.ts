import PickedUsed from '../models/PicketUsed';

export default {
  render( PickedUsed : PickedUsed ) {
    return {
        dateEntryPicket: PickedUsed.dateEntryPicket,
        dateExitPicket: PickedUsed.dateExitPicket,
        picketID : PickedUsed.picketID,
        cattleID : PickedUsed.cattleID,
    };
  },

  renderMany( pickedUsed : PickedUsed[] ) 
  {
    return  pickedUsed.map(( pickedUsed ) => this.render( pickedUsed ));
  },
  
};