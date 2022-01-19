import axios from "axios";
import React, { useState } from "react";

const DeleteButton = (props) => {
    let currentId = props.id

    const handleDelete = (event) => {
        event.preventDefault()
        axios.delete('http://178.128.196.163:3000/api/records/' + currentId)
        setTimeout(() => {
            axios.get('http://178.128.196.163:3000/api/records')
            .then(res => {
                let newData = res.data
                props.handler(newData)
            })
        }, 200);
    }

    return (
        <div className="container">
            <button type="button" className="btn btn-secondary" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeleteButton