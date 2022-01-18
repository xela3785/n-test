import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const CardItem = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://178.128.196.163:3000/api/records')
        .then(res => {
            setData(res.data)
        })
    }, [])

    return (
        <tbody>
            {data.map(item => (
                <tr key={item._id}>
                    <td className="text-center">{item.data.name}</td>
                    <td className="text-center">{item.data.surname}</td>
                    <td className="text-center">{item.data.telephone}</td>
                    <td className="text-center">
                        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                            <DeleteButton id={item._id} />
                            <EditButton id={item._id}/>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}

export default CardItem