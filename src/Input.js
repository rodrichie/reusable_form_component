// import React, { useReducer, useEffect } from "react";
// //creating reusable input component

// const {id, onInput} = props;
//  const{value} = inputState;

//  useEffect(() =>{
//     onInput(id, value)
//  }, [id, onInput, value])

// const inputReducer = (state, action) => {
//     switch (action.type) {
//         case 'CHANGE':
//             return {...state, value: action.val };
//         default:
//             return state;    
//     }
// }

// const Input = (props) => {
//     const [inputState, dispatch] = useReducer(inputReducer, {value:''});
//     const {id, onInput} = props;
//     const {value} = inputState;

//     useEffect(() =>{ onInput(id , value), [id, onInput ,value]})

//     const changeHandler = event =>{dispatch({type: 'CHANGE', val: event.target.value});}
//     const element = props.element ==="input" ?(
//         <input name={props.name} type={props.type} placeholder={props.placeholder} value=""
//         />
//    ) : (
//        <textarea name={props.name} rows= "4" value=""/>
//    );

//     return(
//         <div>
//             <label htmlFor={props.id}> {props.label}</label>
//             {element}
//         </div>

//     );
// }









// export default Input;

// // Input.js
// import React, { useEffect, useReducer } from 'react';

// const inputReducer = (state, action) => {
//     switch (action.type) {
//         case 'CHANGE':
//             return { ...state, value: action.val };
//         default:
//             return state;
//     }
// };

// const Input = (props) => {
//     const [inputState, dispatch] = useReducer(inputReducer, { value: '' });
//     const { id, onInput } = props;
//     const { value } = inputState;

//     useEffect(() => {
//         onInput(id, value);
//     }, [id, onInput, value]);

//     const changeHandler = (event) => {
//         dispatch({ type: 'CHANGE', val: event.target.value });
//     };

//     const element = props.element === 'input' ? (
//         <input
//             name={props.name}
//             type={props.type}
//             placeholder={props.placeholder}
//             value={value} // Use value from inputState
//             onChange={changeHandler} // Attach changeHandler to onChange event
//         />
//     ) : (
//         <textarea
//             name={props.name}
//             rows="4"
//             value={value} // Use value from inputState
//             onChange={changeHandler} // Attach changeHandler to onChange event
//         />
//     );

//     return (
//         <div>
//             <label htmlFor={props.id}>{props.label}</label>
//             {element}
//         </div>
//     );
// };

// export default Input;



// Input.js
import React, { useEffect, useReducer } from 'react';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return { ...state, value: action.val };
        default:
            return state;
    }
};

const Input = (props) => {
    const [inputState, dispatch] = useReducer(inputReducer, { value: '' });
    const { id, onInput } = props;

    useEffect(() => {
        onInput(id, inputState.value);
    }, [id, inputState.value, onInput]);

    const changeHandler = (event) => {
        dispatch({ type: 'CHANGE', val: event.target.value });
    };

    const element = props.element === 'input' ? (
        <input
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            value={inputState.value} // Use value from inputState
            onChange={changeHandler} // Attach changeHandler to onChange event
        />
    ) : (
        <textarea
            name={props.name}
            rows="4"
            value={inputState.value} // Use value from inputState
            onChange={changeHandler} // Attach changeHandler to onChange event
        />
    );

    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
        </div>
    );
};

export default Input;
