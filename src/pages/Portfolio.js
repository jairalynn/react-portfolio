/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Nav from '../components/Nav'
import projectimage from '../images/project.png'

function Portfolio() {
    return(
    <div className="container">
    <main className="row">
      <div className="col-md-8">
        <div className="box">
          <h1>Portfolio</h1>
          <hr />
          <div className="row">
            <div className="col-sm-6 col-md-12 col-lg-6">
              <img className="img-fluid portfolio-pictures" src={projectimage} alt="Hike Local"/>
              <p>HIKE LOCAL
                <a href="https://snelson-seattle.github.io/HikeLocal/" target="_blank">Deployed Link</a>
                <a href="https://github.com/snelson-seattle/HikeLocal" target="_blank">GitHub Page</a>
              </p>
            </div>
            <div className="col-sm-6 col-md-12 col-lg-6">
              <img className="img-fluid portfolio-pictures" src="./assets/images/portfolioscreenshot.png" alt="Portfolio"/>
              <p>Portfolio
                <a href="https://jairalynn.github.io/responsive-porfolio/" target="_blank">Deployed Link</a> 
                <a href="https://github.com/jairalynn/responsive-porfolio" target="_blank">GitHub Page</a>
              </p>
            </div>
            <div className="col-sm-6 col-md-12 col-lg-6">
              <img className="img-fluid portfolio-pictures" src="./assets/images/readme.png" alt="README"/>
              <p>README Generator
                <a href="https://github.com/jairalynn/readme-generator" target="_blank">GitHub Page</a>
              </p>
            </div>
              <div className="col-sm-6 col-md-12 col-lg-6">
                <img className="img-fluid portfolio-pictures" src="./assets/images/pan-dammit.png" alt="Pan-dammit"/>
                <p>Pan-dammit
                  <a href="http://pan-dammit.herokuapp.com" target="_blank">Deployed Link</a>
                  <a href="https://github.com/graciela23garcia/Pan-dammit" target="_blank">GitHub Page</a>
                </p>
              </div>
              <div className="col-sm-6 col-md-12 col-lg-6">
              <img className="img-fluid portfolio-pictures" src="./assets/images/workout.png" alt="Workout"/>
              <p>Workout Tracker
                <a href="https://jairasworkout.herokuapp.com/" target="_blank">Deployed Link</a> 
                <a href="https://github.com/jairalynn/workout-tracker" target="_blank">GitHub Page</a>
              </p>
            </div>
            <div className="col-sm-6 col-md-12 col-lg-6">
              <img className="img-fluid portfolio-pictures" src="./assets/images/workday.png" alt="Workday"/>
              <p>Work Day Scheduler
                <a href="https://jairalynn.github.io/workday-scheduler/" target="_blank">Deployed Link</a> 
                <a href="https://github.com/jairalynn/workday-scheduler" target="_blank">GitHub Page</a>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  </div>
    );
}
export default Portfolio;