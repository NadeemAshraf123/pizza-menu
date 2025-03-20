import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Alert } from 'bootstrap';

const ApiCalling = () => {

    const [data, setData] = useState([]);
    const [input1, setInput1] = useState("");
    const [editid, setEditId] = useState(null);



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

    const handleEdit = () => {
        setEditId(id);
        setInput1();                   
        
    }
    
    const handleDelete = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);

    }

    return (
        <div className='container-fluid text-center bg-light mb-4'>
            <h3 className='fw-bold'> Fetch Data from API </h3>
            <Table >
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Title  </th>
                        <th> Status </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.completed ? "Completed" : "Pending"}</td>
                                <td>
                                    <Button  variant="primary" size="sm" classname="me-2" 
                                    onClick={() => handleEdit(item.id)}>
                                        Edit
                                    </Button>

                                    <Button 
                                        variant="danger" 
                                        size="sm" 
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    )
}
export default ApiCalling

