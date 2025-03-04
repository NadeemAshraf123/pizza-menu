import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogoPage = () => {
    const navigate = useNavigate();

    function gotopage(x) {
        navigate(x);

    }
    return (
        <div>
            <h1> Logo page </h1>

            <button onClick={() => gotopage(-1)} style={{ margin: '20px', backgroundColor: 'lightblue' }} > go back to previous page</button>
            <button onClick={() => gotopage(1)}  style={{margin:'20px' , backgroundColor:'lightblue'}}   > go forward next page  </button>

        </div>
    )
}

export default LogoPage
