import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import WishCard from "./WishCard";

const Wishlist = () => {
    const { user } = useAuth();
    const [wishes, setWishes] = useState([]);

    useEffect(() => {
        const fetchWishList = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_APP_URL}/wish-find/${user?.email}`);
                setWishes(data);
            } catch (error) {
                console.error('Error fetching wish list:', error);
            }
        };

        if (user?.email) {
            fetchWishList();
        }
    }, [user]);

    const handleDelete = (deletedWishId) => {
        setWishes(prevWishes => prevWishes.filter(wish => wish._id !== deletedWishId));
    };

    return (
        <div className='pt-36'>
            <h2 className="text-3xl font-bold text-blue-500 text-center">My WishList : {wishes.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8 gap-6">
                {wishes.map(wish => (
                    <WishCard key={wish._id} wish={wish} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
