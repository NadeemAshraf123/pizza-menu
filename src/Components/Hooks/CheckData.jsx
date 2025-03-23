import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ApiCalling = () => {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false); 
    const [editId, setEditId] = useState(null); 
    const [inputTitle, setInputTitle] = useState(""); 
    const [inputStatus, setInputStatus] = useState(""); 

    // Fetch data from API
    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEdit = (id, currentTitle, currentStatus) => {
        setEditId(id); 
        setInputTitle(currentTitle); 
        setInputStatus(currentStatus ? "Completed" : "Pending"); 
        setShowModal(true); 
    };

    const handleSave = () => {
        const updatedData = data.map((item) =>
            item.id === editId
                ? { ...item, title: inputTitle, completed: inputStatus === "Completed" }
                : item
        );
        setData(updatedData); // Updates table data
        setShowModal(false); // Closes the modal
        setEditId(null); // Resets the row being edited
        setInputTitle(""); // Clears title input
        setInputStatus(""); // Clears status input
    };

    return (
        <div className="container-fluid text-center bg-light mb-4">
            <h3 className="fw-bold">Fetch Data from API</h3>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.completed ? "Completed" : "Pending"}</td>
                            <td>
                                <Button
                                    variant="primary"
                                    size="sm"
                                    onClick={() =>
                                        handleEdit(item.id, item.title, item.completed)
                                    }
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => setData(data.filter((d) => d.id !== item.id))}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal Popup */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Title Input */}
                    <label>Title:</label>
                    <input
                        type="text"
                        value={inputTitle}
                        onChange={(e) => setInputTitle(e.target.value)}
                        className="form-control mb-3"
                    />

                    {/* Status Input */}
                    <label>Status:</label>
                    <select
                        value={inputStatus}
                        onChange={(e) => setInputStatus(e.target.value)}
                        className="form-control mb-3"
                    >
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ApiCalling;
