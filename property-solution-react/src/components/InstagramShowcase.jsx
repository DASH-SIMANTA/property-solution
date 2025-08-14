import React from "react";

const InstagramShowcase = () => {
  const accounts = [
    {
      id: 1,
      name: "listmycity",
      avatar: "https://png.pngtree.com/png-clipart/20230813/original/pngtree-location-route-map-icon-vector-picture-image_10509034.png",
      color: "bg-sky-200",
      
      posts: 47,
      followers: "34.6k",
      following: 174,
      images: [
        "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=500",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=500",
      ],
    },
    {
      id: 2,
      name: "listmyflorida",
      avatar: "https://img.icons8.com/color/600w/place-marker.png",
      color: "bg-pink-200",
      posts: 68,
      followers: "17.6k",
      following: 30,
      images: [
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500",
        "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=500",
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-4">
        {accounts.map((account) => (
          <div key={account.id} className="flex flex-col items-center">
            {/* Profile Info */}
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${account.color}`}
              >
                <img
                  src={account.avatar}
                  alt={account.name}
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{account.name}</h3>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span>{account.posts} Posts</span>
                  <span>{account.followers} Followers</span>
                  <span>{account.following} Following</span>
                </div>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-6 h-6 ml-auto"
              />
            </div>

            {/* Images */}
            <div className="flex gap-4 mb-6">
              {account.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Post ${idx + 1}`}
                  className="rounded-xl w-48 h-64 object-cover"
                />
              ))}
            </div>

            {/* Button */}
            <button className="btn btn-outline rounded-full px-6">
              Seen on Instagram
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramShowcase;
