import React from 'react';
import Project from '../Project';

function createProjects(projects) {
  return projects.projects.map((project) => {
    return <Project imageInfo={project.imageInfo} description={project.description} key={project.description.name} />;
  });
}

export default createProjects;
