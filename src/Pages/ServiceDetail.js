import React from 'react'

const ServiceDetail = (props) => {
 
  return (
    <div>
      <h4 className='fw-bold fs-2 text-center p-3 mb-5'>{props.match.params.name}</h4>
    </div>
  )
}
export default ServiceDetail
