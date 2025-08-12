import React, { useEffect, useState } from 'react';
import PropertyCategory from './PropertyCategory';

const PropertyCategories = () => {
    const [propertyCat, setPropertyCat] = useState([]);
    

    useEffect(() => {

        fetch('../../public/property-info.json')
            .then(response => response.json())
            .then(data => setPropertyCat(data))
            .catch(error => console.error('Error fetching property:', error));
    }, []);

    return (
        <div className="bg-slate-50 p-6 rounded-lg px-5">
            
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">

                {
                    propertyCat.map(property => <PropertyCategory p={property} key={property.id}></PropertyCategory>)
                }
            </div>
            <div className='card-actions justify-center'>
                <button className='btn'>View all property</button>
            </div>
        </div>
    );
};

export default PropertyCategories;