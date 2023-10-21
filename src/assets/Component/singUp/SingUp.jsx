import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Root/Firebase/Firebase.init";
import { useState } from "react";


const SingUp = () => {
    const [user, setUser]= useState('');
    const fromHandler = e => {
        e.preventDefault()
        console.log('hello bal');
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const name1 =e.target.name.value;
        // console.log(email,password);
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const usearId =result.user;
            setUser(usearId);
            console.log(usearId);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className="w-3/4 mx-auto border shadow-inner">
            <h1 className="text-center text-5xl font-bold m-4">Sing Up</h1>
           <div className="w-3/4 mx-auto  text-center">
           <form onSubmit={fromHandler}>
           {/* <input type="text" placeholder="Name" name='name' className="input input-bordered w-full max-w-xs mb-3" /> */}
                <br />
           <input type="email" placeholder="E-mail here" name='email' className="input input-bordered w-full max-w-xs mb-3" />
                <br />
                
                <input type="password" placeholder="Password here" name='password' className="input input-bordered w-full max-w-xs" />
                <br />
                
                <button className="btn btn-primary m-3">
                    Submit
                </button>
            </form>
           </div>
           <div>
            <h1>{user?.displayName}</h1>
            <p>{user?.email}</p>
           </div>
        </div>
    );
};

export default SingUp;