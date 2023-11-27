import {CompleteIcon} from '../TodoIcon/CompleteIcon'
import {DeleteIcon} from '../TodoIcon/DeleteIcon'
import './TodoItem.css';



/*{ <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.
        completed && "Icon-check--active"}`}
        onClick={props.onComplete}
        >
        V
      </span>
      <p className={`TodoItem-p ${props.
        completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
        >
        X
      </span>
    </li>}
     */

   


// function TodoItem({props, done, onComplete, onDelete}) {
//   return (
//     <li className="TodoItem">
//       <CompleteIcon
//         completed={props.completed}
//         //onComplete={props.onComplete}
//       />
//      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
//         {props.text}
//       </p>
      
//       <DeleteIcon     
//         onDelete={props.onDelete}
//         />
//     </li>
    
//   );
// }

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}


export { TodoItem };