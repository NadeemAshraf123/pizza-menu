import React, { useState } from 'react'
import * as yup from 'yup'

const FormYup = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "" ,
        password: "",
    });
    const [errors, setErrors] = useState({});

    const userSchema = yup.object().shape({
       name:  yup.string().required("name will be required"),
      email:   yup.string().email("petter@gmail.com").required("email must be required"),
       password:  yup.string().min(4, "password must be atleast 4 digits"),
    });

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});

    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await userSchema.validate(formData, {abortEarly: false});
            console.log("Form is valid:", formData);
            setErrors({});
        }catch(error){
            const validationErrors = {};
            error.inner.forEach((error)=>{
                validationErrors[error.path] = error.message;
            });
            setErrors(validationErrors);
            console.log("validarion errors:", validationErrors);
        }
    }

    return (
        <div className='container-fluid bg-light text-center'>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name...'
                        onChange={handleChange}
                        value={formData.name}
                    />
                    {errors.name && <div style={{color: 'red'}}>{errors.name}</div>}
                </div>
                
                <div>
                    <input
                        type='email'
                        name='email'
                        placeholder='email@email.com'
                        onChange={handleChange}
                        value={formData.email}
                    />
                    {errors.email && <div style={{color: 'red'}}>{errors.email}</div>}
                </div>
                
                <div>
                    <input
                        type='password'
                        name='password'
                        placeholder='password123...'
                        onChange={handleChange}
                        value={formData.password}
                    />
                    {errors.password && <div style={{color: 'red'}}>{errors.password}</div>}
                </div>

                <input type='submit' value="Submit" />
            </form>
        </div>
    );
}

export default FormYup;
