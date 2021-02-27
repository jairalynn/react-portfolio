/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import projectimage from '../images/project.png';
import portfolioscreenshot from '../images/portfolioscreenshot.png';
import readme from '../images/readme.png';
import workout from '../images/workout.png';
import workday from '../images/workday.png';
import pandammit from '../images/pan-dammit.png';

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
              <p>HIKE LOCAL<p></p>
                <a href="https://snelson-seattle.github.io/HikeLocal/" target="_blank">Deployed Link</a><p></p>
                <a href="https://github.com/snelson-seattle/HikeLocal" target="_blank">GitHub Page</a>
              </p>
            </div>
            <div className="col-sm-6 col-md-12 col-lg-6">
              <img className="img-fluid portfolio-pictures" src={portfolioscreenshot} alt="Portfolio"/>
              <p>Portfolio<p></p>
                <a href="https://jairalynn.github.io/responsive-porfolio/" target="_blank">Deployed Link</a> <p></p>
                <a href="https://github.com/jairalynn/responsive-porfolio" target="_blank">GitHub Page</a>
              </p>
            </div>
            <div className="col-sm-6 col-md-12 col-lg-6">
              <img className="img-fluid portfolio-pictures" src={readme} alt="README"/>
              <p>README Generator<p></p>
                <a href="https://github.com/jairalynn/readme-generator" target="_blank">GitHub Page</a><p></p>
              </p>
            </div>
              <div className="col-sm-6 col-md-12 col-lg-6">
                <img className="img-fluid portfolio-pictures" src={pandammit} alt="Pan-dammit"/>
                <p>Pan-dammit<p></p>
                  <a href="http://pan-dammit.herokuapp.com" target="_blank">Deployed Link</a><p></p>
                  <a href="https://github.com/graciela23garcia/Pan-dammit" target="_blank">GitHub Page</a>
                </p>
              </div>
              <div className="col-sm-6 col-md-12 col-lg-6">
              <img className="img-fluid portfolio-pictures" src={workout} alt="Workout"/>
              <p>Workout Tracker<p></p>
                <a href="https://jairasworkout.herokuapp.com/" target="_blank">Deployed Link</a> <p></p>
                <a href="https://github.com/jairalynn/workout-tracker" target="_blank">GitHub Page</a>
              </p>
            </div>
            <div className="col-sm-6 col-md-12 col-lg-6">
              <img className="img-fluid portfolio-pictures" src={workday} alt="Workday"/>
              <p>Work Day Scheduler<p></p>
                <a href="https://jairalynn.github.io/workday-scheduler/" target="_blank">Deployed Link</a> <p></p>
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