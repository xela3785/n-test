import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal/lib/components/Modal";

const EditButton = (props) => {

    const currentId = props.id
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [telephone, setTelephone] = useState('')
    const handleClose = () => setOpen(false)
    const handleShow = () => setOpen(true)

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://178.128.196.163:3000/api/records/' + currentId, {
            data: {name, surname, telephone}
        })
        handleClose();
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
            <button type="button" className="btn btn-secondary" onClick={handleShow}>Edit</button>

            <Modal 
                    className='modal-dialog'
                    isOpen={open}
                    ariaHideApp={false}
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Редактировать</h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <fieldset>
                                    <fieldset className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Name"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                        />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Surname"
                                            value={surname}
                                            onChange={e => setSurname(e.target.value)}
                                        />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Telephone"
                                            value={telephone}
                                            onChange={e => setTelephone(e.target.value)}
                                        />
                                    </fieldset>
                                    <button className="btn btn-danger pull-xs-right" type="button" onClick={handleClose}>Отмена</button>
                                    <button className="btn btn-success pull-xs-right" type='submit'>Изменить</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </Modal>
        </div>
    )
}

export default EditButton