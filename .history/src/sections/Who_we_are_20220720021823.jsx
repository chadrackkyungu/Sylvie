import React from 'react'
import { Row, Col, CardBody, Card } from "reactstrap"
import MetaTags from 'react-meta-tags';
import './About.css'

function Who() {


    return (
        <Card id="Who" data-aos="fade-up" className="bg-black">
            <CardBody>
                <MetaTags>
                    <title>Who we are Sylvie Holding (LTD)</title>
                </MetaTags>

                <h2 data-aos="fade-right">Who we are </h2>

                <Row className="row" data-aos="fade-left">
                    <Col md={6}>

                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default Who