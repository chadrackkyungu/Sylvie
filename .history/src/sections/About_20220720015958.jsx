import React from 'react'
import { Row, Col, CardBody, Card, Alert } from "reactstrap"
import MetaTags from 'react-meta-tags';
import './About.css'

function About() {
    const [read, setRead] = React.useState(false);
    const readMore = () => setRead(!read)

    return (
        <section id="About">
            <MetaTags>
                <title>About Sylvie Holding (LTD)</title>
            </MetaTags>

            <h2>About Us</h2>

            <div className="row">
                <div className="about-content">
                    <p>
                        SYLVIE HOLDINGS  (PTY) LTD (SH) is a fairly experienced Level 3 BBBEE Company in the business of Transport, Clothing, Event Management, Entertainment and other projects with ambitions to be one of the leading companies in these sectors. With the experience from the mother company Dalom Music which was formed by Daniel Tshanda in 1999, SH gives the classic impression of a company ready to take a substantial step towards being a major contributor in the field of its business. The company was formed by the incumbent Directors in 2019 just to add some services, it has taken over Dalom Music and has in cooperated its services with that of Dalom Music in order to create opportunities for youth with visions.
                    </p>

                    {
                        read ? <p>
                            SH delivers excellence in its products, services and solutions that ensure customer value and contribute to their success. We strive to be recognized by our employees, customers and community and stakeholders as a responsible organization that conducts our business in professional and safe working environments. Our commitment to quality is reflected through programs focused on continual improvement and reasonable compliance with: applicable regulations, industry standards and best practices, contractual requirements and corporate initiatives. Planned, integrated and consistent efforts involving every element of our organization create these results.
                            SH is committed to providing its valued customers with quality services at all times. To help achieve this SH has appointed dedicated employees who possess considerable experience in every department.
                        </p> : null
                    }

                    <button className="btn btn-info  p-2 text-white" onClick={readMore}>Read more </button>

                </div>
            </div>
        </section>
    )
}

export default About