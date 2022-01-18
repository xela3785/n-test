import axios from "axios";
import React from "react";

const DeleteButton = (props) => {
    const currentId = props.id

    const handleDelete = () => {
        axios.delete('http://178.128.196.163:3000/api/records/' + currentId)
    }

    return (
        <div className="container">
            <button type="button" className="btn btn-secondary" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeleteButton