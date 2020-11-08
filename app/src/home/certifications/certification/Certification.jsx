import React from "react"

function Certification(props) {
  const { imageInfo: { src, alt }, link } = props

  return (
    <div>
      <img src={src}
           className="certification-margin certification-image rounded img-fluid img-thumbnail" alt={alt} />
      <h6 className="text-center certification-link">
        <a href={link}
           className="" target="_blank">Verify</a>
      </h6>
    </div>
  )
}

export default Certification