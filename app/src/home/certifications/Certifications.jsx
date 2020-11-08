import React from "react"
import Title from "../components/title/Title"
import Certification from "./certification/Certification"
import certifications_json from "./certifications-json.json"

function Certifications() {
  return (
    <section className='container-fluid section' id='certifications'>
      <div className='row justify-content-center'>
        <div className='col-lg-8 col-md-10 col-sm-10 col-11'>
          <Title text='Certifications' />
          <hr />
          <section className='container-fluid section'>
            <div className='d-flex row justify-content-center'>
              {
                certifications_json.certifications.map(certification => {
                  const link = certification.link
                  const imageInfo = certification.imageInfo

                  return <Certification imageInfo={imageInfo} link={link} />
                })
              }
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Certifications