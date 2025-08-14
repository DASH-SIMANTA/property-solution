import React from "react";

export default function CustomerReviews() {
  const customers = [
    { id: 1, name: "Esther Howard", role: "Content Creator", img: "https://randomuser.me/api/portraits/women/68.jpg", active: true },
    { id: 2, name: "Guy Hawkins", role: "Teacher", img: "https://randomuser.me/api/portraits/men/45.jpg" },
    { id: 3, name: "Robert Fox", role: "Influencer", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 4, name: "Lorem Pak", role: "Influencer", img: "https://randomuser.me/api/portraits/men/12.jpg" }
  ];

  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Our Customers Review</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in.
          Integer pretium egestas nisi, nunc, purus sit vitae nisi, etiam.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
        
        {/* Left: Customer List */}
        <div className="space-y-4">
          {customers.map((c) => (
            <div
              key={c.id}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                c.active ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
            >
              <img src={c.img} alt={c.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-semibold">{c.name}</p>
                <p className="text-sm text-gray-500">{c.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Middle: Review */}
        <div className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-2">It was a Great Experience!</h3>
          <div className="flex text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.18 3.64h3.828c.969 0 1.371 1.24.588 1.81l-3.095 2.246 1.18 3.64c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.095 2.246c-.784.57-1.838-.197-1.539-1.118l1.18-3.64L3.45 8.377c-.783-.57-.38-1.81.588-1.81h3.828l1.183-3.64z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet vitae vel id id porttitor ut in. Integer pretium egestas nisi,
            nunc, purus sit vitae nisi, etiam. Fermentum, fringilla nisl elementum, mattis amet, elementum, cras elementum morbi. Aliquet ut
            mus arcu, ornare nunc nisi, dignissim in.
          </p>
        </div>

        {/* Right: Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            alt="Room"
            className="w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
