import React from 'react'

const CardItem = (props) => {
  return (
    <div className='col-lg-4'>
        <div className="card">
            <img src={props.image} alt="" />
            <div className="card-body  ">
                <h5 className="card-title">{props.title}</h5>
                <p>{props.price} Azn</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  )
}

export default CardItem
