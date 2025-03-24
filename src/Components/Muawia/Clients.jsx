import react from 'react'

const Clients = () => {
    const clientList = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
      { id: 3, name: 'Alice Brown', email: 'alice.brown@example.com' },
    ];
  
    return (
      <div>
        <h1>Clients</h1>
        <ul>
          {clientList.map((client) => (
            <li key={client.id}>
              <strong>{client.name}</strong> - {client.email}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Clients;
  