import React from 'react';
import Title from '../components/title/Title';
import Email from './email/Email';
import Github from './github/Github';

function Profile() {
  return (
    <footer className="container-fluid section">
      <div className="row justify-content-center" id="footer">
        <div className="col">
          <Title text="Contact" />
        </div>
        <div className="col">
          <Email text="sebastianjuan1994@gmail.com" />
        </div>
        <div className="col">
          <Github text="Sebastian Serrano" />
        </div>
      </div>
    </footer>
  );
}

export default Profile;
