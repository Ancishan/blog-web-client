import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';


const Wishlist = () => {
    const { user } = useAuth();
    const [wish, setWish] = useState([]);

    useEffect(() => {
        const fetchWishList = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_APP_URL}/wish-find/${user?.uid}`);
                setWish(data);
            } catch (error) {
                console.error('Error fetching wish list:', error);
            }
        };

        if (user?.uid) {
            fetchWishList();
        }
    }, [user]);

    console.log(wish);

    return (
        <div className='pt-40'>
            <h2>Wish: {wish.length}</h2>
            
        </div>
    );
};

export default Wishlist;
