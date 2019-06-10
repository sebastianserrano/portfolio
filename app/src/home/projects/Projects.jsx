import React from 'react';
import Title from '../components/title/Title';
import CreateProjects from './project/projectFactory/CreateProjects';
import projectsJson from './projects.json';

function Projects() {
  const projects = CreateProjects(projectsJson);
  return (
    <section className="container-fluid section">
      <div className="row justify-content-center">
        <div id="projects">
          <Title text="Projects" />
          {projects}
        </div>
      </div>
    </section>
  );
}

export default Projects;
