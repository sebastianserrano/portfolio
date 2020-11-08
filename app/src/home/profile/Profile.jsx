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
            <Description text="Avionics Engineer and Full Stack Web Developer with a passion for programming and world changing ideas
                               with 3 years of experience in software development
                               ranging from IOS mobile apps to cutting edge websites built with many
                               different capabilities. Proven ability to learn a wide spectrum of essential
                               technologies to bring ideas to life at scale. Experienced with e-commerce and integration apps
                               with global clients such as Shopify, Rakuten, and Walmart"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
