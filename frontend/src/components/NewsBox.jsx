import React from 'react'


const NewsBox = () => {
    const onSubmitHandler = async(e) =>{
        e.preventDefault();
        const email = e.target.email.value.trim();

    if (!email) {
        alert("Please enter a valid email.");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/api/user/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error("Error subscribing:", error);
        alert("Something went wrong. Please try again later.");
    }
    }
  return (
    <div className='text-center'>
        <p className='text-xl to-gray-800'>Subscripe & get 25% off on your first order.</p>
        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form onSubmit={onSubmitHandler}
         className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 border-gray-600' >
            <input type="email" name="email" id="email" placeholder='Enter email ...'
            className='w-full sm:flex-1 outline-none' />
            <button type='submit' className='bg-yellow-500 px-10 hover:bg-yellow-600  text-white p-1 '>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsBox