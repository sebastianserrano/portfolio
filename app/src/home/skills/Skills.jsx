import React from 'react';
import Title from '../components/title/Title';
import Skillset from './skillset/Skillset';

function Skills() {
  return (
    <section className="container-fluid section" id="skills">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-10 col-11">
          <Title text="Skills" />
          <hr />
          <Skillset topic="Languages" skills={['Javascript', 'Python', 'Swift']} />
          <Skillset topic="Databases" skills={['PostgreSQL', 'MongoDB', 'Firebase']} />
          <Skillset topic="Frontend" skills={['React JS', 'Redux', 'Bootstrap', 'HTML', 'CSS']} />
          <Skillset topic="Backend" skills={['NodeJS', 'REST API']} />
          <Skillset topic="Cloud" skills={['Amazon Web Services', 'Google Cloud Platform']} />
          <Skillset topic="Tools" skills={['Stripe', 'Twilio', 'Plaid', 'ElasticSearch', 'Git/Github', 'Docker', 'Ansible']} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
