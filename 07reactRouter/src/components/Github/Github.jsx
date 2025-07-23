import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState(null); // Start with null

    useEffect(() => {
        fetch('https://api.github.com/users/ayushkhopatkar')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    if (!data) {
        return (
            <div className='text-center bg-gray-600 text-white p-4 text-3xl'>
                Loading...
            </div>
        );
    }

    return (
        <div className='text-center bg-gray-600 text-white p-4 text-3xl'>
            Github Followers: {data.followers}
            <img className='w-20 h-20 rounded-full mx-auto mt-4' src={data.avatar_url} alt="avatar" />
        </div>
    );
}

export default Github;
