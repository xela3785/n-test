import axios from "axios";
import React, { Component } from "react";
import AddButton from "./AddButton.js";
import CardItem from "./CardItem";

class CardList extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: ''
        }
        this.handler = this.handler.bind(this)
    }

    componentDidMount() {
        axios.get('http://178.128.196.163:3000/api/records')
            .then(res => {
                this.setState({data: res.data})
                console.log(this.state.data)
            })
    }

    handler = (newData) => {
        this.setState({data: newData})
    }

    render() {
        let {data} = this.state
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
                    <CardItem data={data} handler={this.handler}/>
                </table>
                <AddButton handler={this.handler}/>
            </div>
        )
    }
}

export default CardList