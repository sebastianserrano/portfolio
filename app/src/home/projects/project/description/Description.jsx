import React from 'react';
import PropTypes from 'prop-types';
import Name from './name/Name';
import Info from './info/Info';
import CreateToolItems from './tool/toolsItemsFactory/CreateToolsItems';

function Description(props) {
  const { description } = props;
  const { name, link, descriptionText, tools } = description;
  const toolsList = CreateToolItems(tools);

  return (
    <div className="col-lg-5 col-md-6 col-sm-6 col-10 project-description">
      <article>
        <Name text={name} link={link} />
        <Info text={descriptionText} />
        <div className="container-fluid skillset">
          <div className="row">
            {toolsList}
          </div>
        </div>
      </article>
    </div>
  );
}

Description.propTypes = {
  description: PropTypes.object.isRequired,
};

export default Description;
