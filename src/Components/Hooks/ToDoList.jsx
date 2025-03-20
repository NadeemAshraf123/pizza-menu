import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ToDoList = () => {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false); // Tracks whether the modal is visible
    const [editId, setEditId] = useState(null); // Tracks the row being edited
    const [inputDate, setInputDate] = useState(""); // Tracks the user's input (date)

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

    const handleEdit = (id) => {
        setEditId(id); // Sets the row ID being edited
        setShowModal(true); // Opens the modal popup
    };

    const handleSave = () => {
        const updatedData = data.map((item) =>
            item.id === editId ? { ...item, date: inputDate } : item // Updates the row with the new date
        );
        setData(updatedData); // Updates the table data
        setShowModal(false); // Closes the modal
        setEditId(null); // Resets the edit ID
        setInputDate(""); // Clears the input field
    };

    const handleInputChange = (e) => {
        setInputDate(e.target.value); // Updates the input field value
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
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.completed ? "Completed" : "Pending"}</td>
                            <td>{item.date || "N/A"}</td>
                            <td>
                                <Button
                                    variant="primary"
                                    size="sm"
                                    onClick={() => handleEdit(item.id)}
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
                    <Modal.Title>Edit Date</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="date"
                        value={inputDate}
                        onChange={handleInputChange}
                        className="form-control"
                    />
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

export default ToDoList;
