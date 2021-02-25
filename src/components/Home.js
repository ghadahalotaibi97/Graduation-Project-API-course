import React from 'react';
import "../App.css";
import video from "../video.mp4";
import App2 from "./App2";
import App3 from "./App3";
function Home() {
    return (
        <div style={{ backgroundColor: "rgb(161, 158, 158) " }} >
            <div className="ved">
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src={video} type="video/mp4" />
                </video>
                <div class="container1 h-100">
                    <div class="d-flex h-100 text-center align-items-center">
                        <div class="w-100 text-white">
                            <h1 class="display-3">Movies & TV Shows</h1>
                            <p class="lead mb-0">Stories, trailers, images and more!</p>
                        </div>
                    </div>
                </div>
            </div >
            <div>
            </div>
            <App3 />
            <br /><br /><br />
            <App2 />
            <br />
        </div >

    );
}
export default Home