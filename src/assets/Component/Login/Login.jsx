import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Root/Firebase/Firebase.init";
const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handlerClicjSinIn = () => {
        console.log("click me AnyOne this time.Who click me");
        signInWithPopup(auth, provider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log(error.messeng);
        })
    }
    return (
        <div className="text-center">
            <button onClick={handlerClicjSinIn} className="btn btn-secondary text-white text-xl font-extrabold">Sin In</button>
        </div>
    );
};

export default Login;