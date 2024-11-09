import React from 'react'

const ServiceCard = ({service}) => {
    const {title,img,price} = service
  return (
    <div>
        <img className=' aspect-square  mx-auto ' src={img} alt="" />
        <p className=' text-3xl font-PT'>
            {title}
        </p>
        <p>{price}</p>
    </div>
  )
}

export default ServiceCard