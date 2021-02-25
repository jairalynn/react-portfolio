/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './style.css';

function About() {
    return (
        <div>
              <main className="container">
                <div className="row">
                  <div className="col-md-8">
                    <div className="box">
                    <h1>About me</h1>
                    <hr/>
                    <div className="info">
                    <p>Jaira Lynn Arcilla | arcilla.jaira@gmail.com | 425-791-8004</p>
                  </div>
                    <div className="files">
                      <a href="https://www.linkedin.com/in/jairarcilla/" target="_blank">LinkedIn</a>
                      <a href="https://github.com/jairalynn" target="_blank">Github</a>
                      <a href="JairaResume.pdf" target="_blank">Resume</a>
                    </div>
                    
                    <hr/>
                        <img className="img-fluid" id="profile-picture" src="./assets/images/cannonbeach.jpeg" alt="picture" />
                      <p>
                        Hi, I'm Jaira Arcilla. I was born and raised here in Washington and my parents are from the Philippines.
                        I graduated from Mountlake Terrace High School in 2015 and have actually been going
                        to college on and off for Business Management. During that time, I came across coding and since then 
                        I have decided to pursue the career and now I am going through UW's Coding Bootcamp to change career paths.
                        I currently work as a Lead Food Server at a retirement home in Seattle. I love my job
                        and the people I work with, but I think it's time for something new and for me to grow.
                      </p>
                      <hr/>
                      <p>
                        So far my experience with coding bootcamp have been great and I've learned a lot.
                        I am actually fully engaged rather than being bored. It's very hands on and that's
                        one of the things that I love about this program. I can't wait to learn more and 
                        see what the future holds with me and coding!
                      </p>
                    </div>
                  </div>
                  </div>
                </main>
        </div>
    )
}

export default About;