import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import users from '../assets/user.png';


const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success('Logged out successfully');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className='navbar align-middle bg-gray-200 text-blue-600 shadow-sm container -mt-6 py-6 mx-auto fixed top-0 left-0 right-0 z-50'>
      <div className='flex-1 pt-6'>
        <div className='flex gap-2 items-center'>
          {/* <img className='w-auto h-7 pt-16 rounded-full' src={logo} alt='' /> */}
          <span className='font-extrabold text-2xl pl-0 md:pl-3'>Blog SPhere</span>
        </div>
      </div>
      <div className='flex-none '>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link className='pt-8 text-2xl font-bold' to='/'>Home</Link>
          </li>
          {!user && (
            <li>
              <Link className='pt-8 text-2xl font-bold' to='/login'>Login</Link>
            </li>
          )}
        </ul>
        {user ? (
          <div className='dropdown pt-7 dropdown-end z-50'>
            <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
              <div title={user.displayName} className='w-10 rounded-full'>
                <img referrerPolicy='no-referrer' alt='User Profile Photo' src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-200 rounded-box w-52'
            >
              <li>
                <Link  to='/add-blog' className='justify-between text-xl font-bold'>
                  Add blog
                </Link>
              </li>
              <li>
                <Link className='text-xl font-bold' to='/all-blogs'>All blogs</Link>
              </li>
              <li>
                <Link className=' text-xl font-bold' to='/wishlist'>Wishlist</Link>
              </li>
              <li>
                <Link className=' text-xl font-bold' to='/featured'>Featured Blogs</Link>
              </li>
              <li className='mt-2'>
                <button onClick={handleLogout} className='bg-gray-200 block text-center text-xl font-bold'>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <img className='w-12 h-12 bg-gray-200 mt-6 text-orange-600 rounded-full' src={users} alt='Default User Profile' />
        )}
      </div>
    </div>
  );
};

export default Navbar;
