import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Features/posts/postsSlice';

const InstantBooking = () => {
    const { posts, isLoading, isError, error } = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());

    }, [dispatch]);


    // decide what to render
    let content;

    if (isLoading) {
        content = <h1> Loading posts...</h1>
    } else if (isError) {
        content = <h1>Error: {error}</h1>
    } else if (posts.length === 0) {
        content = <h1>No properties available</h1>
    } else {
        content = (
            <div className='bg-slate-50 p-6 rounded-lg px-5'>
              
                {/* Header */}
                <h1 className="text-3xl font-bold text-center mb-8">
                    Instant Booking Properties
                </h1>
                <p className="text-sm text-slate-300 font-bold text-center mb-8">Book your stay in minutes with properties that guarantee fast responses or direct booking options.</p>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 w-10/12 ml-36 mr-36">
                    {posts.map((post) => (
                        <div key={post.id} className="card bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-48 w-full object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{post.title}</h2>
                                <p className="text-sm text-gray-500">Code: {post.code}</p>
                                <p className="text-gray-600">{post.address}</p>

                                <div className="flex flex-wrap gap-4 text-sm">
                                    <span>🛏 {post.bedrooms} bedrooms</span>
                                    <span>🛁 {post.baths} baths</span>
                                    <span>👥 {post.guests} guests</span>
                                </div>

                                <div className="card-actions justify-between items-center mt-4">
                                    <span className="font-bold text-lg">${post.price}</span>
                                    <button className="btn btn-sm rounded-xl">View Full Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        );
    }

    // const { id, title, code, address, bedrooms, baths, price, rating, guests, image} 




    return (
        <div>

            {content}
        </div>
    );
};

export default InstantBooking;