import React from 'react';

const ListMyCity = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Side - Text */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-8">
                        Why Book Through <br /> ListMyCity?
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">
                                01. Save Money
                            </h3>
                            <p className="text-gray-500">
                                No Airbnb or Vrbo service fees
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">
                                02. More Direct
                            </h3>
                            <p className="text-gray-500">
                                Talk directly with property owners
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">
                                03. Curated by Locals
                            </h3>
                            <p className="text-gray-500">
                                Every stay is hand-picked by our team
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Images */}
                <div className="flex justify-center relative">
                    <div className="relative w-[350px] h-[400px]">
                        {/* Left Card */}
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                            alt="House 1"
                            className="absolute top-0 left-0 w-72 h-96 object-cover rounded-3xl shadow-lg transform -rotate-3"
                        />
                        {/* Middle Card */}
                        <img
                            src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353"
                            alt="House 2"
                            className="absolute top-0 left-16 w-72 h-96 object-cover rounded-3xl shadow-xl z-10"
                        />
                        {/* Right Card */}
                        <img
                            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
                            alt="House 3"
                            className="absolute top-0 left-32 w-72 h-96 object-cover rounded-3xl shadow-lg transform rotate-3"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ListMyCity;