

import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ApiCalling = () => {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false); // Modal visibility
    const [editId, setEditId] = useState(null); // Row being edited
    const [inputTitle, setInputTitle] = useState(""); // User's title input
    const [inputStatus, setInputStatus] = useState(""); // User's status input
    const [inputDate, setInputDate] = useState(""); // User's date input

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

    const handleEdit = (id, currentTitle, currentStatus, currentDate) => {
        setEditId(id); // Tracks which row is being edited
        setInputTitle(currentTitle); // Pre-fills the title input
        setInputStatus(currentStatus ? "Completed" : "Pending"); // Pre-fills the status input
        setInputDate(currentDate || ""); // Pre-fills the date input if available
        setShowModal(true); // Opens the modal
    };

    const handleSave = () => {
        const updatedData = data.map((item) =>
            item.id === editId
                ? { ...item, title: inputTitle, completed: inputStatus === "Completed", date: inputDate }
                : item
        );
        setData(updatedData); // Updates table data
        setShowModal(false); // Closes the modal
        setEditId(null); // Resets the row being edited
        setInputTitle(""); // Clears title input
        setInputStatus(""); // Clears status input
        setInputDate(""); // Clears date input
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
                                    onClick={() =>
                                        handleEdit(item.id, item.title, item.completed, item.date)
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

                    {/* Date Input */}
                    <label>Date:</label>
                    <input
                        type="date"
                        value={inputDate}
                        onChange={(e) => setInputDate(e.target.value)}
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

export default ApiCalling;




// import React, { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';

// const CheckData = () => {
//     const [data, setData] = useState([]);
//     const [editId, setEditId] = useState(null); // Track the row being edited
//     const [inputValue, setInputValue] = useState(""); // Track the user's input

//     const fetchData = async () => {
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//             const result = await response.json();
//             setData(result);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const handleEdit = (id, currentTitle) => {
//         setEditId(id); // Set the current row to be editable
//         setInputValue(currentTitle); // Populate the input field with the existing title
//     };

//     const handleSave = (id) => {
//         const updatedData = data.map((item) =>
//             item.id === id ? { ...item, title: inputValue } : item
//         );
//         setData(updatedData); // Update the data with the edited title
//         setEditId(null); // Exit edit mode
//     };

//     const handleInputChange = (e) => {
//         setInputValue(e.target.value); // Update the input field value
//     };

//     const handleDelete = (id) => {
//         const updatedData = data.filter((item) => item.id !== id);
//         setData(updatedData);
//     };

//     return (
//         <div className='container-fluid text-center bg-light mb-4'>
//             <h3 className='fw-bold'>Fetch Data from API</h3>
//             <Table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Title</th>
//                         <th>Status</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item) => (
//                         <tr key={item.id}>
//                             <td>{item.id}</td>
//                             <td>
//                                 {editId === item.id ? (
//                                     <input
//                                         type="text"
//                                         value={inputValue}
//                                         onChange={handleInputChange}
//                                     />
//                                 ) : (
//                                     item.title
//                                 )}
//                             </td>
//                             <td>{item.completed ? "Completed" : "Pending"}</td>
//                             <td>
//                                 {editId === item.id ? (
//                                     <Button
//                                         variant="success"
//                                         size="sm"
//                                         onClick={() => handleSave(item.id)}
//                                     >
//                                         Save
//                                     </Button>
//                                 ) : (
//                                     <Button
//                                         variant="primary"
//                                         size="sm"
//                                         onClick={() => handleEdit(item.id, item.title)}
//                                     >
//                                         Edit
//                                     </Button>
//                                 )}
//                                 <Button
//                                     variant="danger"
//                                     size="sm"
//                                     onClick={() => handleDelete(item.id)}
//                                 >
//                                     Delete
//                                 </Button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </div>
//     );
// };

// export default CheckData;
