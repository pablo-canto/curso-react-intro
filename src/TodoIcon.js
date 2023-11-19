import React from 'react'
// import { ReactComponent as CheckSVG } from '/.check.svg'
// import { ReactComponent as DeleteSVG} from '/.delete.svg'
import { ImCheckmark } from "react-icons/im";
import { ImCross } from "react-icons/im";
//import {ImRadioChecked, ImRadioUnchecked} from 'react-icons/im'

const iconTypes = {
    "check": <ImCheckmark />,
    "delete": <ImCross />
}

function TodoIcon({type}){
    return (
        <span
            className={`Icon Icon-svg Icon-${type}`}
        >
           {iconTypes[type]}

        </span>
    )
}

export {TodoIcon};