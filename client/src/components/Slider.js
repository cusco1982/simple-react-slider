import React, { useState } from 'react';
import "./Slider.scss";
import ImgComp from "./ImgComp";
import i1 from "../pics/ductwork1.jpg";
import i2 from "../pics/fantasy.jpg";
import i3 from "../pics/fantasy2.jpeg";
import i4 from "../pics/fantasy3.jpeg";
import i5 from "../pics/fantasy4.jpeg";







function Slider() {

    let sliderArr = [<ImgComp src={i1}/>, <ImgComp src={i2}/>, <ImgComp src={i3}/>, <ImgComp src={i4}/>, <ImgComp src={i5}/>];
    const [x, setX] = useState(0);
    const goLeft = () => {
        // console.log(x);
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        // console.log(x);
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)
    };


    return (
        <div className="slider">
            {sliderArr.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="slide"
                        style={{ transform: `translateX(${x}%)` }}>
                        {item}
                    </div>
                );
            })}
            <button id="goLeft" onClick={goLeft}>
                <i class="fas fa-chevron-left"></i>
            </button>
            <button id="goRight" onClick={goRight}>
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    );
}

export default Slider;