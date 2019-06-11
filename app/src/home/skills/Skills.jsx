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
          <Skillset topic="Languages" skills={['Javascript', 'Python']} />
          <Skillset topic="Databases" skills={['Postgresql', 'MongoDB', 'Firebase']} />
          <Skillset topic="Frontend" skills={['ReactJS', 'Bootstrap', 'HTML', 'CSS']} />
          <Skillset topic="Backend" skills={['NodeJS', 'REST API']} />
          <Skillset topic="Cloud" skills={['Amazon Web Services']} />
          <Skillset topic="Devops" skills={['AWS Cloudformation', 'AWS CodeDeploy', 'AWS CodePipeline', 'Jenkins']} />
          <Skillset topic="Tools" skills={['Stripe', 'Twilio', 'ElasticSearch', 'Git/Github', 'Docker', 'Ansible']} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
