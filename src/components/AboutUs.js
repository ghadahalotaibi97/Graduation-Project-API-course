import React from 'react';
import logo from "../images/logo2.png"

function AboutUs() {
    return (

        <>
            <br />
            <div className="container twoside">
                <div className="row">
                    <div className="col s12 m4 offset-m2 sideone">
                        < br />
                        <h2><b>About Us:</b></h2>
                        <p>The mission of our website is to facilitate and arrange media content,and provide features that users find interesting about films and series like information, poster, trailers, and more. It is our Graduation Project in API course with General Assembly and Misk Academy, We used React and many other tools. <br /><b> And We would like to thank those in charge of the program and the Instructors.</b></p>
                    </div>
                    <div className="col s12 m4 offset-m2">
                        <img src={logo} alt="logo" style={{ maxWidth: "520px" }} />
                    </div></div>
            </div>
            <br />
        </>
    );
}


export default AboutUs