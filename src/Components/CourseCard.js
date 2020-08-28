import React from 'react';
import { useState } from 'react';
import './CourseCard.css';
import fakeData from "./fakeData/Fakedata";
import CourseData from './CourseData';
import Cart from './Cart';

const CourseCard = () => {
    const [courses,setCourses] = useState(fakeData);
    const [cart,setCart] = useState([]);
    const handleAddCourse = (course)=>{
        console.log("Course Added");
        const newCart = [...cart,course];
        setCart(newCart);
    }
    return (
        <div className='container'>
            <h3><strong id="title">Explore our schools to find your perfect program</strong></h3>
            <div>
                {
                    courses.map(cs => <CourseData name={cs.name} image={cs.image} text={cs.text} price={cs.price} level={cs.level} time={cs.time} handleAddCourse = {handleAddCourse}></CourseData>)
                }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            

        </div>

         
    );
};

export default CourseCard;