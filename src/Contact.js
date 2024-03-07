//creating the contact form and sigup/login component

import React from "react";
import Input from "./Input";
import { useForm } from "./form-hook";
const Contact = (props) =>{
    const [formState, inputHandler] = useForm({
        //name: {value: ''},
        title: {value:''},
        //email:{value: ''},
        description:{value: ''},
        address:{value: ''},
        //number: {value: ''}
    
    })

    const submitHandler = (event) =>{
        event.preventDefault();
        console.log(formState.inputs);
    }

    return(
        <form onSubmit={submitHandler}>
            {/* <Input id="name" element="input" type="text" label="Name" 
            onInput={inputHandler}/> */}
            {/* <Input id="email" element="input" type="e-mail" label="E-mail" 
            onInput={inputHandler} /> */}
            <Input id="title" element="input" type="text" label="Title" 
            onInput={inputHandler}/>
            <Input id="description" element="textarea"  label="Description" 
            onInput={inputHandler}/>
            {/* <Input id="address" element="input" type="text" label="Address" 
            onInput={inputHandler}/>
            <Input id="number" element="input" type="number" label="Number"
            onInput={inputHandler} /> */}
            <button type="submit"> SUBMIT</button>
        </form>
    )
}

export default Contact;