import React, { Component } from "react";
// import API from "../utils/API";
import Wrapper from "../components/Wrapper";
// import Container from "../components/Container";
// import Col from "../components/Col";
import Row from "../components/Row";

import Gallery from "../components/Gallery";

// import Slider from "../components/Slider";
// import ImgGrid from "../components/ImgGrid";


class Projects2 extends Component {

    render() {
        return (
            <div>
                <Wrapper>

                    <Row>

                        <Gallery />

                    </Row>

                </Wrapper>
            </div>
        )
    }
}

export default Projects2;