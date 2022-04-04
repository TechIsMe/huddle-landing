    import React from "react";
import Footer from "../Footer/Footer";
    function Main() {


    return (
        <div>
        <div className="main">
        <img
            src={process.env.PUBLIC_URL + "/images/illustration-mockups.svg"}
            alt="illustration-mockups.svg"
        />
         </div>
        <div className="build">
            <h1> Build The Community Your Fans Will Love </h1>
            <p>
            Huddle re-imagines the way we build communities. You have a voice, but
            so does your audience. Create connections with your users as you
            engage in genuine discussion.
            </p> 
            <button > Register</button>
            <Footer/>
        </div>
        </div>
    );
    }

    export default Main;
