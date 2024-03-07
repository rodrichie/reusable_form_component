// // login and sign up page
// import {useCallback, useState} from 'react';
// import { useForm } from './form-hook';
// import React from 'react';
// import Input from './Input';

// const Auth = (props) => {
//     const [formState, inputHandler, useFormData] = useForm({
//         email: {value:''} , password:{value:''}
//     })

//     const [isLoginMode, setIsLoginMode] =useState(true);
//     console.log("first")

//     const switchModeHandler = () =>{
//         if(!isLoginMode) {
//             setFormData({
//                 name: undefined
               
//             })
//         }else {
//             setFormData({
//                 ...formState.inputs,
//                 name: {value: ''}
//             })
//         }
//         setIsLoginMode(prevMode => !prevMode);
//     }

//     const authSubmitHandler = event =>{

//     }

// //     const setFormData = useCallback((inputData) =>{
// //         dispatchEvent({type: 'SET_DATA', inputs: inputData})
// //     }, []);
// //     const submitHandler = (event) => {event.preventDefault();
// //     console.log(formState.inputs);
// // } 
// return(
//     <>
//      <form onSubmit={authSubmitHandler}>
//         {!isLoginMode && (
//             <Input element="input" id="name" type="text" label="Your name"
//              onInput={inputHandler} />
//         )}
//         <Input id="email" element="input" type="email" label="E-mail" 
//         onInput={inputHandler} />
//         <Input id="password" element="input" type="password" label="Password"
//                 onInput={inputHandler}
//             />
//         <button type="submit">{isLoginMode ? 'LOGIN' : 'SIGNUP'}</button>
//         <button type="button" onClick={switchModeHandler} 
//         >SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}</button>    
//      </form>
//     </>
// );

// }
// export default Auth;

// // Auth.js
// import React, { useState } from 'react';
// import { useForm } from './form-hook';
// import Input from './Input';

// const Auth = () => {
//     const [formState, inputHandler, setFormData] = useForm({
//         email: { value: '' },
//         password: { value: '' }
//     });

//     const [isLoginMode, setIsLoginMode] = useState(true);

//     const switchModeHandler = () => {
//         if (!isLoginMode) {
//             setFormData({
//                 name: { value: '' }
//             });
//         } else {
//             setFormData(prevState => ({
//                 ...prevState,
//                 name: { value: '' }
//             }));
//         }
//         setIsLoginMode(prevMode => !prevMode);
//     };

//     const authSubmitHandler = event => {
//         // Handle form submission
//     };

//     return (
//         <>
//             <form onSubmit={authSubmitHandler}>
//                 {!isLoginMode && (
//                     <Input
//                         element="input"
//                         id="name"
//                         type="text"
//                         label="Your name"
//                         onInput={inputHandler}
//                     />
//                 )}
//                 <Input
//                     id="email"
//                     element="input"
//                     type="email"
//                     label="E-mail"
//                     onInput={inputHandler}
//                 />
//                 <Input
//                     id="password"
//                     element="input"
//                     type="password"
//                     label="Password"
//                     onInput={inputHandler}
//                 />
//                 <button type="submit">{isLoginMode ? 'LOGIN' : 'SIGNUP'}</button>
//                 <button type="button" onClick={switchModeHandler}>
//                     SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
//                 </button>
//             </form>
//         </>
//     );
// };

// export default Auth;


// Auth.js
import React, { useState } from 'react';
import { useForm } from './form-hook';
import Input from './Input';

const Auth = () => {
    const [formState, inputHandler, setFormData] = useForm({
        email: { value: '' },
        password: { value: '' }
    });

    const [isLoginMode, setIsLoginMode] = useState(true);

    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData({
                name: { value: '' }
            });
        } else {
            setFormData(prevState => ({
                ...prevState,
                name: { value: '' }
            }));
        }
        setIsLoginMode(prevMode => !prevMode);
    };

    const authSubmitHandler = event => {
        // Handle form submission
    };

    return (
        <>
            <form onSubmit={authSubmitHandler}>
                {!isLoginMode && (
                    <Input
                        element="input"
                        id="name"
                        type="text"
                        label="Your name"
                        onInput={inputHandler}
                    />
                )}
                <Input
                    id="email"
                    element="input"
                    type="email"
                    label="E-mail"
                    onInput={inputHandler}
                />
                <Input
                    id="password"
                    element="input"
                    type="password"
                    label="Password"
                    onInput={inputHandler}
                />
                <button type="submit">{isLoginMode ? 'LOGIN' : 'SIGNUP'}</button>
                <button type="button" onClick={switchModeHandler}>
                    SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
                </button>
            </form>
        </>
    );
};

export default Auth;
