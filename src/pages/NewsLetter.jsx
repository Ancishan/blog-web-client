
import { Banner, Button, Label, TextInput } from "flowbite-react";
import { HiX } from "react-icons/hi";
import Swal from 'sweetalert2';
import { useState } from 'react';

const NewsLetter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Your email sending logic goes here
        
        Swal.fire({
            icon: 'success',
            title: 'Email sent successfully!',
            text: `Email address: ${email}`
        });

        // Reset email input after submission
        setEmail('');
    };

    return (
        <Banner>
            <div className="flex w-full pt-20 pb-24 items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
                <div className="mx-auto flex w-full shrink-0 items-center sm:w-auto">
                    <form onSubmit={handleSubmit} className="flex w-full flex-col items-center md:flex-row md:gap-x-3">
                        <Label
                            htmlFor="email"
                            className="mb-2 mr-auto pl-28  shrink-0 text-3xl font-bold text-gray-500 dark:text-gray-400 md:m-0 md:mb-0"
                        >
                            Sign up for our newsletter
                        </Label>
                        <TextInput 
                            className="text-blue-300 p-2"
                            id="email" 
                            placeholder="Enter your email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <Button className="text-xl px-12" type="submit">Subscribe</Button>
                    </form>
                </div>
               
            </div>
        </Banner>
    );
};

export default NewsLetter;
