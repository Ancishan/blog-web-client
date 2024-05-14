import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaGooglePlusG } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../hooks/useAuth";
import regis from '../../assets/regis.png';
import axios from "axios";

const Login = () => {
  const { signIn, signInWithGoogle, SignInWithGithub } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const handleLogin = async e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });
    try {
      const result = await signIn(email, password);
      await axios.post(`${import.meta.env.VITE_APP_URL}/jwt`, { email: result?. user?.email}, { withCredentials: true });
      navigate(location?.state || '/');
      toast.success('Signed in successfully'); // Show toast notification on successful login
    } catch (err) {
      console.error(err);
      toast.error(err?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      await axios.post(`${import.meta.env.VITE_APP_URL}/jwt`, { email: result?.user?.email }, { withCredentials: true });
      navigate(location?.state || '/');
      toast.success('Signed in successfully'); // Show toast notification on successful sign in with Google
    } catch (err) {
      console.error(err);
      toast.error(err?.message);
    }
  };

  const handleGithubsignIn = () => {
    SignInWithGithub()
      .then(() => {
        // console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="mt-20">
      <ToastContainer />

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img src={regis} alt="" />
        </div>
        <div className="w-[350px] lg:w-[550px] pt-10 md:pt-0 mx-auto pb-6 rounded-lg">
          <h2 className="text-3xl pt-10 font-bold text-center text-gray-400">Login your account</h2>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-400">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <div className="relative w-full">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-full"
                  required />
                <span className="absolute top-3 right-1 pr-1 text-gray-400" onClick={() => setShowPass(!showPass)}>
                  {
                    showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                  }
                </span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-gray-400">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-1">
              <button className="btn bg-orange-200 full-width text-gray-400 text-xl">Login</button>
            </div>
            <p className="text-gray-400">Dont’t Have An Account ? <Link to="/registration" className="text-gray-400 font-bold">Registration </Link> </p>
          </form>
          <div className="text-center">
            <p className="text-gray-400 mx-auto text-lg">------ Or sign in with ------</p>
            <div className="flex justify-center mt-2">
              <div className="flex ml-5 items-center">
                <p className="text-lg inline-flex gap-2 items-center">
                  <Link onClick={handleGoogleSignIn} className="text-gray-400 text-3xl items-center">
                    <FaGooglePlusG />
                  </Link>
                </p>
                <p className="inline-flex text-lg items-center pl-3">
                  & <Link onClick={handleGithubsignIn} className="text-gray-400 text-xl items-center pl-3">
                    <FiGithub />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
