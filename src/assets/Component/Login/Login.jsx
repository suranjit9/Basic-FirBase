import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

import { useState } from "react";
import swal from 'sweetalert';
import auth from "../../Root/Firebase/Firebase.init";

const Login = () => {
    const [user, setUser] = useState([]);
    // const auth = getAuth(app);
    const googleprovider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
   
    const handlerGoogleSinIn = () => {
        // console.log("click me AnyOne this time.Who click me");
        signInWithPopup(auth, googleprovider)
        .then(result =>{
            const loginuser = result.user;
            console.log(loginuser);
            setUser(loginuser);
            swal("Good job!", "You clicked the button!", "success");
        })
        .catch(error =>{
            console.log('Error Page',error.message);
        })
    }
    const handleGithublogIn =()=>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const loginuser = result.user;
            setUser(loginuser);
            swal("Good job!", "You clicked the button!", "success");
            console.log(loginuser);
        })
    }
    const handlerClicjSiOut =() => {
        signOut(auth)
        .then(() =>{

              setUser(null);
            
            
        })
        .catch(() =>{
            swal("OoPs!!", "You clicked the button!", "Error");
        })
        
    }
    return (
        <div className="text-center ">
            {
                user ? <button onClick={handlerClicjSiOut} className="btn btn-secondary mb-5 text-white text-xl font-extrabold">Sin Out</button> :
                <div className="">
                <button onClick={handlerGoogleSinIn} className="btn bg-green-500 mb-5 text-white text-xl font-extrabold m-4">Google With Sing In</button>
                <button onClick={handleGithublogIn} className="btn bg-black mb-5 text-white text-xl font-extrabold">GitHub With Sin In</button>
                </div>
            }
           <hr />
            { user ?
                <div>
                    <div className="w-[50%] mx-auto shadow-lg mt-5 p-5 flex">
                <img className="rounded-2xl" src={user?.photoURL} alt="" />
                <div className="pl-5">
                <h1 className="text-3xl font-extrabold uppercase text-left">{user?.displayName}</h1>
                <hr />
                <h1 className="text-3xl font-extrabold ">{user?.email}</h1>
                </div>
            </div>
                </div>:''
            }
        </div>
    );
};

export default Login;