import React from 'react'
import {ImRadioChecked, ImRadioUnchecked} from 'react-icons/im'
import { TodoIcon } from './TodoIcon'


// function CompleteIcon ({done, onClick}) {
//   const iconSelected = done? <ImRadioChecked/> : <ImRadioUnchecked/>
//   return(
//     <span 
//           className= {done ? 'span-icon-done' : 'span-icon-uncompleted' } 
//           onClick={onClick}>
//           {iconSelected}
//     </span>

//   )
// }


function CompleteIcon () {
  return(
    <TodoIcon
    type = "check"
    color = "gray"
    />
  )
}

export {CompleteIcon};