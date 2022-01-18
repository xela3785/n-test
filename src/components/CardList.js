import React from "react";
import AddButton from "./AddButton.js";
import CardItem from "./CardItem";

const CardList = () => {
    return (
        <div className="container page">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th className="text-center">Name</th>
                        <th className="text-center">Surname</th>
                        <th className="text-center">Telephone</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <CardItem />
            </table>
            <AddButton />
        </div>
    )
}

export default CardList