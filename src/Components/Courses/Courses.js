import React from 'react';
import './Courses.css';

const Courses = (props) => {
    const {picture, name, price} = props.course;
    return (
        <div className = 'course-data'>
            <img style = {{height: '120px', width: 'auto'}} className = 'img-thumbnail m-3'  src={picture} alt=""/>
            <h3 className = "course-name">{name}</h3>
            <hr/>
            <h2>Price: ${price}</h2>
            <button onClick = { () => props.handleAddClick(props.course)} className = 'btn btn-primary'>Enroll Now</button>
        </div>
    );
};

export default Courses;