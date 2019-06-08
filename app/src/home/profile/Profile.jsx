import React from 'react';
import Title from './title/Title';
import Description from './description/Description';

function Profile() {
  return (
    <div className="container-fluid section">
      <div className="row justify-content-center">
        <div id="profile">
          <Title />
          <Description text="Avionics Engineer with 3 years of experience in software development
                             ranging from IOS mobile apps to cutting edge websites built with many
                             different capabilities. Proven ability to learn a wide spectrum of essential
                             technologies to bring ideas to life at scale"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
