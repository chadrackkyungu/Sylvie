import React from 'react'
import { Row, Col, CardBody, Card } from "reactstrap"
import MetaTags from 'react-meta-tags';
import { FcComboChart } from 'react-icons/fc'
import './About.css'

function Who() {


    return (
        <Card id="Who" data-aos="fade-up" className="bg-black">
            <CardBody>
                <MetaTags>
                    <title>Who we are Sylvie Holding (LTD)</title>
                </MetaTags>

                <h2 data-aos="fade-right" className='text-center mb-5'>Who we are </h2>

                <Row className="row mt-5 mt-5">
                    <Col md={6} data-aos="fade-right">
                        <Card className="bg-black">
                            <CardBody>
                                <FcComboChart size={60} /> <h3>Our Mission</h3>
                                <p>Our mission is to provide clients across South Africa with accredited and structured services and delivery with a highly skilled professional team working together, using common sense and practical experience to add value to our customers by increasing the competence of their staff.</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} data-aos="fade-left">
                        <CardBody>
                            <h3>Our Vision</h3>
                            <p>
                                To be the leading black owned company in the world which runs various projects such as Transport, Event Management, Entertainment, Clothing and many other projects aimed at developing youth, business sector that we are involved with.
                            </p>
                        </CardBody>
                    </Col>
                </Row>
                <Row className="row mt-5 mt-5">
                    <Col md={6} data-aos="fade-right">
                        <Card className="bg-black">
                            <CardBody>
                                <h3>Values</h3>
                                <p>Information is the cutting edge to our company hence we provide our clients with a structure to communicate their needs.</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} data-aos="fade-left">
                        <CardBody>
                            <h3>Objective</h3>
                            <p>
                                To provide a platform for clients to express their needs
                            </p>
                        </CardBody>
                    </Col>
                </Row>
                <Row className="row mt-5 mt-5">
                    <Col md={6} data-aos="fade-right">
                        <Card className="bg-black">
                            <CardBody>
                                <h3>Upliftment</h3>
                                <p>We intend growing a base for graduates to participate in projects and to discover virgin talents, develop and improve it to the point where it will be marketed locally and internationally when it comes to entertainment sector.</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} data-aos="fade-left">
                        <CardBody>
                            <h3>Procurement</h3>
                            <p>
                                We will strive to do business with small and large businesses that provide the ground for our services through their operations.
                            </p>
                        </CardBody>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default Who