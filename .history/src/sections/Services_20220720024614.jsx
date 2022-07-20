import React from 'react'
import { Row, Col, CardBody, Card } from "reactstrap"
import MetaTags from 'react-meta-tags';
import { FcComboChart, FcLineChart } from 'react-icons/fc'
import { MdAddChart } from 'react-icons/md'
import { GiFlagObjective, GiWeightLiftingUp } from 'react-icons/gi'

import './About.css'

function Services() {


    return (
        <Card id="Services" data-aos="fade-up" className="bg-section m-3">
            <CardBody>
                <MetaTags>
                    <title>Services Sylvie Holding (LTD)</title>
                </MetaTags>

                <h2 data-aos="fade-right" className='text-center mb-5'>Our Services </h2>

                <Row className="row mt-5 mt-5">
                    <Col md={6} data-aos="fade-right">
                        <Card className="bg-black">
                            <CardBody>
                                <h3> <FcComboChart size={60} className="me-4 icons" />  Our Mission</h3>
                                <p>Our mission is to provide clients across South Africa with accredited and structured services and delivery with a highly skilled professional team working together, using common sense and practical experience to add value to our customers by increasing the competence of their staff.</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} data-aos="fade-left">
                        <CardBody>
                            <h3> <FcLineChart size={60} className="me-4 icons" /> Our Vision</h3>
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
                                <h3><MdAddChart size={60} className="me-4 icons" /> Values</h3>
                                <p>Information is the cutting edge to our company hence we provide our clients with a structure to communicate their needs.</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} data-aos="fade-left">
                        <CardBody>
                            <h3> <GiFlagObjective size={60} className="me-4 icons" /> Objective</h3>
                            <p>
                                To provide a platform for clients to express their needs
                            </p>
                        </CardBody>
                    </Col>
                </Row>

            </CardBody>
        </Card>
    )
}

export default Services