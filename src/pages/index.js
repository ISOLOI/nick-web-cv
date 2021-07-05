import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I am experienced in NodeJS/JavaScript frameworks for over 9 years using AWS services for multi-scale solutions. Success with both small and large teams created a versitile skill set for working independenly and taking ownership with production code.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Cloud API Engineer: NodeJS</h3>
              <div className="subheading mb-3">Asurion</div>
              <p>
              Work on data-driven platform that produces custom workflows to handle insurance claims based on cellular carrier. Our team balances both NodeJS and AWS based requirements and the constant attention to security and PII that any API is in contact with.
              <hr />
              Requested for special projects including a major SMS-integration upgrade, rewriting an obsolete robocall vendor to integrate into new serverless ecosystem, having a direct impact on freeing up resources to grow our team.
              <hr />
              Displayed leadership for demonstrating new “standards”, including graphql training, updating processes for documentation, introducing universal code guidelines that instantly provided results, tech-debt, training to name a few.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineer</h3>
              <div className="subheading mb-3">Tech Uncensored</div>
              <p>
              NodeJS (ExpressJS) / JavaScript Engineer responsible for design, API dev, and handling data from multiple endpoints and making sure results display without errors.
              <hr />
              Introduced many modern practices to tools that created value to companies “bottom line” regarding performance including: reusable components, “Mobile/Responsive” UI’s, and embracing CI/CD to team.
              <hr />
              Created reusable ReactJS Component Library that had direct impact to client deadlines.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2011 - 2013</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">ReactJS Developer</h3>
              <div className="subheading mb-3">WorkXpress</div>
              <p>
              ReactJS / JavaScript Engineer responsible for redesign of entire platform, creating all new reusable components and libraries.
              <hr />
              Ownership over requirements from design team to implement UI from scratch.
              <hr />
              Introduced React Drag n Drop solution for the platforms WYSIWYG interface.
              <hr />
              Responsible for replacing previous subscriptions with open-source variants which directly affected the team budget.
              <hr />
              Trained service reps on workflows and documentation related to the code used to execute the logic.
              <hr />
              Provided company-wide knowledge on modern practices to tools that created value to companies “bottom line” regarding performance including: reusable components, “Mobile/Responsive” UI’s, and embracing CI/CD to team.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2013 - 2015</span>
            </div>
          </div>

       
        </div>
      </section>

      {/* <hr className="m-0" /> */}

      {/* <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Other</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Colorado Boulder</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science - Web Development Track</div>
              <p>GPA: 3.23</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2006 - May 2010</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">James Buchanan High School</h3>
              <div className="subheading mb-3">Technology Magnet Program</div>
              <p>GPA: 3.56</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2002 - May 2006</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" /> */}

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-aws"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-git"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-docker"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-mysql"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Full Stack NodeJS/ExpressJS/ReactJS
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              AWS Cloud Services
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              SQL Database Management
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            I enjoy adventure. Any spare time goes to new experiences such as sky diving, road trips, and making sure my family experiences life. My spark for building side businesses always puts me in uncomfortable conditions, opening up new challenges like launching products, public speaking, and paying it forward always. My empathy makes donating time to help at non-profits an important part of my self awareness.
          </p>
          <p className="mb-0">
            I'm also a big comedy fan! I love laughing and telling "dad jokes" that everyone hates. I try to attend a stand-up concert once a year.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              AWS Certifications: Solutions Architect
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              AWS Certifications: Cloud Architect
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
