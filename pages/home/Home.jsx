import React from 'react'
import "./home.scss"


function Home() {
    return (
        <div className='home'>
            <div className="left">
                <p>Feel Great. <br />
                    Body and Mind.  </p>
                    <h4>Choose from hundreds of workouts, healthy <br />  recipes, relaxing meditations, and expert <br />  articles, for a whole body and mind <br />  approach to feeling great.</h4>
                <div className="btn">JOIN US</div>
            </div>
            <div className="right">
                <img src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/03/h1-slider2-img-1.png" alt="" />
            </div>
        </div>
    )
}

export default Home