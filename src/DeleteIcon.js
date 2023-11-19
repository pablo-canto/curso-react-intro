import React from 'react'
import { TodoIcon } from './TodoIcon';

// function DeleteIcon ({onClick}) {
//   return(
//     <span className='span-icon-close'
//       onClick={onClick}
//     >
//       <RxCross1/>
//     </span>
//   )
// }


function DeleteIcon () {
  return(
    <TodoIcon
    type="delete"
    color="red"
    /> 
  );
}


export {DeleteIcon};
