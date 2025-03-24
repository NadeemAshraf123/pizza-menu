import React from "react";

const Simple2 = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-blue-800 text-white p-6">
        <div className="text-center text-2xl font-bold mb-6">Company Title</div>
        <nav className="space-y-4">
          <a href="#" className="block px-4 py-2 hover:bg-blue-700">Home</a>
          <a href="#" className="block px-4 py-2 bg-blue-700 rounded">About Us</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-700">Services</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-700">Clients</a>
          <a href="#" className="block px-4 py-2 hover:bg-blue-700">Contact</a>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 bg-white p-8 rounded-lg shadow-lg m-6">
        <h1 className="text-blue-800 text-4xl font-bold">Tagline about your company</h1>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold">About the Company</h2>
          <p className="mt-2 text-gray-700">
            Armada Holdings Limited, formerly known as SCMP Group Limited, was founded in 1903 and initially operated in the publishing industry. Over time, the company significantly expanded its specialization, and by 2016, it had transformed into a multi-faceted investment firm providing wealth management and investment advisory services to clients in Hong Kong, Singapore, and China.
          </p>
        </section>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold">Our Areas of Expertise</h2>
          <p className="mt-2 text-gray-700">
            Armada Holdings Limited specialized in asset management, investment consulting, and the development and implementation of trading strategies for both private and corporate clients. We actively leveraged advanced financial technologies and algorithmic trading, offering not only traditional investment products but also trading signals that helped our clients navigate stock and forex markets effectively.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Simple2;