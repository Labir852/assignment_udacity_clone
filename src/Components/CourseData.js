import React from 'react';
import './CourseData.css'

const CourseData = (props) => {
    const {name,image,time,text,price,level} = props;
    return (
        <div id="courses-list">
          <div className="card cardStyle">
            <img className="card-img-top" src={image} alt="Card image cap"/>
            <div className="card-body">
    <h5 className="card-title"><strong>{name}</strong></h5>
    <p className="card-text">{text}</p>
    <br/>
    <button onClick={()=>props.handleAddCourse(props)} className="btn btn-info">Enroll Now</button>
    <p style={{float: 'right'}}><strong>Level: {level}</strong></p>
    <p><strong>Price: ${price}</strong></p>

<p><strong>Duration: {time}</strong></p>
            </div>
          </div>
          </div>
    );
};

export default CourseData;