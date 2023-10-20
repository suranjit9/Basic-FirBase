import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Root/Firebase/Firebase.init";
import { useState } from "react";
const Login = () => {
    const [user, setUser] = useState([]);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
   
    const handlerClicjSinIn = () => {
        // console.log("click me AnyOne this time.Who click me");
        signInWithPopup(auth, provider)
        .then(result =>{
            const loginuser = result.user;
            console.log(loginuser);
            setUser(loginuser);
        })
        .catch(error =>{
            console.log('Error Page',error.message);
        })
    }
    return (
        <div className="text-center ">
            <button onClick={handlerClicjSinIn} className="btn bg-green-500 mb-5 text-white text-xl font-extrabold">Sin In</button>
            <button onClick={handlerClicjSinIn} className="btn btn-secondary mb-5 text-white text-xl font-extrabold">Sin Out</button>
           <hr />
            <div className="w-[50%] mx-auto shadow-lg mt-5 p-5 flex">
                <img className="rounded-2xl" src={user?.photoURL} alt="" />
                <div className="pl-5">
                <h1 className="text-3xl font-extrabold uppercase text-left">{user?.displayName}</h1>
                <hr />
                <h1 className="text-3xl font-extrabold ">{user?.email}</h1>
                </div>
            </div>
        </div>
    );
};

export default Login;