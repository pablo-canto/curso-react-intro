import React from 'react'
// import { ReactComponent as CheckSVG } from '/.check.svg'
// import { ReactComponent as DeleteSVG} from '/.delete.svg'
import { ImCheckmark } from "react-icons/im";
import { ImCross } from "react-icons/im";
import './TodoIcon.css';
//import {ImRadioChecked, ImRadioUnchecked} from 'react-icons/im'

const iconTypes = {
    "check": (color) => <ImCheckmark className="Icon-svg" fill={color}/>,
    "delete": (color) => <ImCross className="Icon-svg" fill={color} />,
}

function TodoIcon({type, color, onClick}){
    return (
        <span
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
           {iconTypes[type](color)}

        </span>
    )
}

export {TodoIcon};