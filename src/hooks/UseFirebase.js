import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged,signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import FirebaseInitialize from '../Firebase/Firebase.init';
FirebaseInitialize()
const UseFirebase = () => {
    const [name, setName]=useState('')
    const [password,setPassword]=useState('')
    const [email, setEmail] = useState('')
    const [user, setUser] = useState({});
    const [error, setError] = useState();
    const Googleprovider = new GoogleAuthProvider();
    const auth = getAuth();
    const sininWithgoogle = () =>{
        signInWithPopup(auth, Googleprovider)
        .then(result =>{
            setUser(result.user)
        })
        .catch(error => {
       setError(error)
        })
    }
    const Logout = ()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if (user) {
                setUser(user)
              } 
        })
    },[])
    const EmailChange = e =>{
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        setPassword(e.target.value)
    }
    const HandleReg = e =>{
        setError('')
        e.preventDefault();
        if(password.length < 6){
          setError('This password must be 6 charecter long')
       return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential =>{
          const user = userCredential.user
          setError('')
          setuserName();
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage)
        });
      }
      const HandleSingin = e =>{
        setError('')
        e.preventDefault();
        if(password.length < 6){
          setError('This password must be 6 charecter long')
       return;
        }
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user =result.user
          console.log(user)
         
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage)
        });
      }
      const handlechangeName = e =>{
        setName(e.target.value)
    }
    const setuserName = () =>{
        updateProfile(auth.currentUser, {displayName: name})
        .then(result =>{
            console.log(result.user)
        })
    }

     //obserb wether user auth state changed or not
     useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
          });
    },[])
    return {
        Logout,
        user,
        sininWithgoogle,
        error,
        EmailChange,
        handlePassword,
        HandleReg,
        HandleSingin,
        handlechangeName
    };
};

export default UseFirebase;