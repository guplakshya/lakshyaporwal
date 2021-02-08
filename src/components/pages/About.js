import React from "react";
import "../../App.css";

export default function About() {
  return (
    <>
      <div className="common">
        <div className="about">
          <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
              <div className="column left">
                <img src="assets/profile.jpg" alt="profile"></img>
              </div>
              <div className="column right">
                <div className="text">I'm Lakshya Porwal</div>
                <p>
                  I am a hardworking engineering undergraduate currently
                  specializing in electronics and instrumentation engineering in
                  VIT University with an overall CGPA of 9.12. Along with my
                  degree I have completed various online courses which helped me
                  a lot to develop my academic projects. Recently I got a MERIT
                  Scholarship for securing 5th rank in my department which is
                  something I am proud of. Speaking of my skills I am good at
                  problem solving and I have a strong base in statistics and I
                  want to implement as well as advance those skills to solve
                  real world problems.
                </p>
                <p>
                  My hobbies are sketching, reading, travelling and I am a
                  guitar player.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="common">
        <div className="education">
          <div className="max-width">
            <h2 className="title">Education</h2>
            <div className="education-content">
              <div className="column right">
                <h3>July 2017 - Present </h3>
              </div>
              <div className="column left">
                <h2>Vellore Institute of Technology</h2>
                <h3>Bachelor of Technology</h3>
                <div>Electronics and Instrumentation Engineering</div>
                <div>
                  Score:<span className="score"> 9.12 CGPA</span>
                </div>
              </div>
              <br />
              <div className="column right">
                <h3>June 2016 - May 2017 </h3>
              </div>
              <div className="column left">
                <h2>M.R Scindia Higher Secondary School</h2>
                <h3>Higher Secondary Certificate</h3>
                <div>Mathematics</div>
                <div>
                  Score:<span className="score"> 90.6 %</span>
                </div>
              </div>
              <br />
              <div className="column right">
                <h3>June 2014 - May 2015 </h3>
              </div>
              <div className="column left">
                <h2>Kendriya Vidyalaya Sangathan</h2>
                <h3>Secondary School Certificate</h3>
                <div>Science and Mathematics</div>
                <div>
                  Score:<span className="score"> 9.8 CGPA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="common">
        <div className="skills">
          <div className="max-width">
            <h2 className="title">My skills</h2>
            <div className="skills-content">
              <div className="column left">
                <div className="text">Technical Skills</div>
                <ul class="list-inline dev-icons">
                  <li class="list-inline-item">
                    <i class="fab fa-java"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="fab fa-html5"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="fab fa-css3-alt"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="fab fa-js"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="fab fa-react"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="fab fa-node-js"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="fab fa-git"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="fab fa-github"></i>
                  </li>
                </ul>
                <br />
                <ul className="tech-skills">
                  <li>Data Structures</li>
                  <li>MATLAB</li>
                  <li>OrCAD</li>
                  <li>LabVIEW</li>
                  <li>MS Excel</li>
                  <li>MS Word</li>
                  <li>Research</li>
                </ul>
              </div>
              <div className="column right">
                <div className="text">Core Skills</div>
                <div className="bars">
                  <div className="info">
                    <span>Electronics</span>
                    <span>90%</span>
                  </div>
                  <div className="line html"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>Control Systems</span>
                    <span>85%</span>
                  </div>
                  <div className="line control-systems"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>Digital Signal Processing</span>
                    <span>80%</span>
                  </div>
                  <div className="line digital-signal-processing"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>Microcontroller</span>
                    <span>80%</span>
                  </div>
                  <div className="line microcontroller"></div>
                </div>
                <div className="bars">
                  <div className="info">
                    <span>Circuit Design</span>
                    <span>90%</span>
                  </div>
                  <div className="line circuit-design"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="common">
        <div className="achievements">
          <div className="max-width">
            <h2 className="title">Achievements</h2>
            <div className="achievement-content">
              <ul className="fa-ul">
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning"></i>
                  </span>
                  5<sup>th </sup>
                  Place - MERIT Scholarship - Electronics and Instrumentation
                  Department - (2019-20)
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning"></i>
                  </span>
                  2<sup>nd </sup>
                  Place - G.D Naidu Young Scientist Award - (2019)
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning"></i>
                  </span>
                  7<sup>th </sup>
                  Place - MERIT Scholarship - Electronics and Instrumentation
                  Department - (2018-19)
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning"></i>
                  </span>
                  5 Stars in JAVA - HackerRank
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="common">
        <div className="certification">
          <div className="max-width">
            <h2 className="title">Certifications</h2>
            <div className="certification-content">
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-certificate"></i>
                    </span>
                    HTML and CSS - Build a Website
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-certificate"></i>
                    </span>
                    AWS Fundamentals: Going Cloud Native
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-certificate"></i>
                    </span>
                    Carrer Edge Knockdown the Lockdown
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-certificate"></i>
                    </span>
                    Machine Learning
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-certificate"></i>
                    </span>
                    Deep Learning and Neural Networks
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-certificate"></i>
                    </span>
                    Electronics
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-certificate"></i>
                    </span>
                    Digital Signal Processing
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-certificate"></i>
                    </span>
                    LabVIEW Core
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-certificate"></i>
                    </span>
                    Intelligent Machining
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
