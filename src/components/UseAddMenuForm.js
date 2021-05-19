import {useState,useEffect} from 'react';


const UseAddMenuForm =() =>{

    const [values, setValues] =useState({

        menuItemType:'',
        menuItemName:'',
        unitPrice:'',
        description:'',
        discount:''
    }) 

    const [errors,setErrors] =useState ({})
    
    const addMenuItemHandleChange = e =>{
        const{name,value}=e.target
        setValues({
            ...values,
           [name] :value
        })
    }
    return {addMenuItemHandleChange,values}
}

export default UseAddMenuForm;