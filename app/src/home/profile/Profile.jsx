import React from 'react';
import Title from '../components/title/Title';
import Description from './description/Description';

function Profile() {
  return (
    <section className="container-fluid section" id="profile">
      <div className="row justify-content-center">
        <div className="card bg-dark text-center col-lg-6 col-sm-9 col-11">
          <div className="card-body">
            <div className="card-title">
              <Title text="Fullstack Web Developer" />
            </div>
            <Description text="Avionics Engineer with a passion for programming and world changing ideas 
                               with 3 years of experience in software development
                               ranging from IOS mobile apps to cutting edge websites built with many
                               different capabilities. Proven ability to learn a wide spectrum of essential
                               technologies to bring ideas to life at scale. Currently working towards an 
                               AWS certification to bring more stability, performance, and security to applications
                               on the cloud"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
