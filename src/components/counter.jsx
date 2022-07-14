import React from 'react'

const counter = ({ id, name, value, onDelete, onChangeValue }) => {
    const formatValue = () => {
        return value === 0 ? "empty" : value
    }
    const getBageClasses = () => {
        let classes = "badge m-2 "
        classes += value === 0 ? "bg-warning" : "bg-primary"
        return classes
    }
    return (
        <div>
            <span>{name}</span>
            <span className={getBageClasses()}>{formatValue()}</span>
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={() => onChangeValue(id, ++value)}
            >+</button>
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={() => onChangeValue(id, --value)}
            >-</button>
            <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => onDelete(id)}
            >Delete</button>
        </div>
    )
}

export default counter
