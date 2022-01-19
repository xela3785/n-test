import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const CardItem = (props) => {
    let data = Array.from(props.data)
    return (
        <tbody>
            {data.map(item => (
                <tr key={item._id}>
                    <td className="text-center">{item.data.name}</td>
                    <td className="text-center">{item.data.surname}</td>
                    <td className="text-center">{item.data.telephone}</td>
                    <td className="text-center">
                        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                            <DeleteButton id={item._id} handler={props.handler} />
                            <EditButton id={item._id} handler={props.handler}/>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}

export default CardItem