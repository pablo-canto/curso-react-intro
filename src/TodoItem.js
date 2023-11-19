import './TodoItem.css';
import {CompleteIcon} from './CompleteIcon'
import {DeleteIcon} from './DeleteIcon'


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

    // function TodoItem({text, done, onComplete, onDelete}) {
      //   return (
      //     <li className="TodoItem">
      //       <CompleteIcon
      //       done={done}
      //       onClick={onComplete}
      //       />
      //       <p className={done ? 'todoItem-p--completed' : ''}>{text}</p>
      //       <DeleteIcon 
      //         onClick={onDelete}
      //       />
      //     </li>
          
      //   );
      // }


function TodoItem({text, done, onComplete, onDelete}) {
  return (
    <li className="TodoItem">
      <CompleteIcon
    
      />
      <p className={done ? 'todoItem-p--completed' : ''}>{text}</p>
      <DeleteIcon     
      />
    </li>
    
  );
}




export { TodoItem };