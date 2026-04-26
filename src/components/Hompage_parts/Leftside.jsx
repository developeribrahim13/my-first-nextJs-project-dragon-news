import React from 'react';

const Leftside = ({Categories}) => {
    return (
        <div className='bg-green-50 col-span-3'>
            <h1 className='text-lg text-gray-500 font-bold'>All Category</h1>
            {Categories.map(el=>(
                <div className='bg-gray-400 font-medium text-white mt-4 text-center p-3 rounded-lg' key={el.category_id}>
                    {el.category_name}
                </div>
            ))}
        </div>
    );
};

export default Leftside;