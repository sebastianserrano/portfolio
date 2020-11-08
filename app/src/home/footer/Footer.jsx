import React from 'react';
import Title from '../components/title/Title';
import Email from './email/Email';
import Github from './github/Github';
import Linkedin from './linkedin/Linkedin';

function Profile() {
  return (
    <footer className="container-fluid section" id="contact">
      <div className="row justify-content-center" id="footer">
        <div className="col-lg-2 col-md-12 col-sm-12 col-12">
          <Title text="Contact" />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
          <Email text="ocean.frameworks@gmail.com" />
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
          <Linkedin text="Sebastian Serrano" />
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
          <Github text="Sebastian Serrano" />
        </div>
      </div>
    </footer>
  );
}

export default Profile;
