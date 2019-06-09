import React from 'react';
import Title from '../components/title/Title';
import Skillset from './skillset/Skillset';

function Skills() {
  return (
    <div className="container-fluid section">
      <div className="row justify-content-center">
        <div id="skills">
          <Title text="Skills" />
          <Skillset topic="Languages" skills={['Javascript', 'Python']} />
          <Skillset topic="Databases" skills={['Postgresql', 'MongoDB', 'Firebase']} />
          <Skillset topic="Frontend" skills={['ReactJS', 'Bootstrap', 'HTML', 'CSS']} />
          <Skillset topic="Backend" skills={['NodeJS', 'REST API']} />
          <Skillset topic="Cloud" skills={['Amazon Web Services']} />
          <Skillset topic="Devops" skills={['AWS Cloudformation', 'AWS CodeDeploy', 'AWS CodePipeline', 'Jenkins']} />
          <Skillset topic="Tools" skills={['Stripe', 'Twilio', 'ElasticSearch', 'Git/Github', 'Docker', 'Ansible']} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
