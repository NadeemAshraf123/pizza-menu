import React from 'react';

const Services = () => {
  const serviceList = [
    { id: 1, name: 'Web Development', description: 'Building responsive and dynamic websites.' },
    { id: 2, name: 'Mobile App Development', description: 'Creating user-friendly mobile applications.' },
    { id: 3, name: 'Digital Marketing', description: 'Boosting online presence with effective strategies.' },
  ];

  return (
    <div>
      <h1>Services</h1>
      <ul>
        {serviceList.map((service) => (
          <li key={service.id}>
            <strong>{service.name}</strong>: {service.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
