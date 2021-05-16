import React, { useState} from "react";

import a from "../images/photo3.jpg";
import b from  "../images/photo2.jpg";
import c from  "../images/photo1.jpeg";
import {Carousel} from "react-bootstrap";



const CarouselPage = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={a}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={b}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={c}
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselPage;