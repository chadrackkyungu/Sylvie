import React from "react";
import MetaTags from 'react-meta-tags';

function Metatags() {
    return (
        <MetaTags>
            <title>Sylvie Holdings (LTD) </title>
            <meta id="meta-description" name="Sylvie Holdings"
                content="SYLVIE HOLDINGS (PTY) LTD (SH) is a fairly experienced Level 3 BBBEE Company in the business of Transport, Clothing, Event Management, Entertainment and other projects with ambitions to be one of the leading companies in these sectors" />
            <meta id="og-title" property="og:title" content="Sylvie Holdings" />
            <meta id="og-image" property="og:image" content="path/to/image.jpg" />
        </MetaTags>
    )
}

export default Metatags