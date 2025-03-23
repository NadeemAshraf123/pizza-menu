import React from 'react'
import * as yup from ' Yup';


const YupResolver = () => {
    const Schema = yup.object().shape ({
        name: yup.string().required("must be required"),
        email: yup.string().required("must be email required"),
    });
    
  return (
    <form>
        <input {...register("name")} placeholder='name' />
        <p>{error.name?.message}</p>

        <input {...register("email")} placeholder='email' />
        <p>{error.email?.message}</p>

<button type='submit'>submit</button>
    </form>
  )
}

export default YupResolver
