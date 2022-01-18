import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal/lib/components/Modal";

const AddButton = () => {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [telephone, setTelephone] = useState('')
    const handleClose = () => setOpen(false)
    const handleShow = () => setOpen(true)

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.put('http://178.128.196.163:3000/api/records', {
            data: {name, surname, telephone}
        })
        handleClose()
    }

    return(
        <div className="container">
            <button className="btn btn-lg btn-primary pull-xs-right" onClick={handleShow}>Add</button>

            <Modal 
                className='modal-dialog'
                isOpen={open}
                ariaHideApp={false}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add User</h5>
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
                                <button className="btn btn-danger pull-xs-right" type="button" onClick={handleClose}>Cancel</button>
                                <button className="btn btn-success pull-xs-right" type='submit'>Add</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default AddButton