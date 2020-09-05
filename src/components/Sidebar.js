import React from "react"
import { Nav } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

function Sidebar(){
    return(
        <div className="sidebar">
            <Nav defaultActiveKey="/beranda" className="flex-column">
                <Nav.Link eventKey="beranda" href="/beranda"><FontAwesomeIcon icon={faHome} className="menu-icon"/> Beranda</Nav.Link>
                <Nav.Link eventKey="driver-management" className="active"><FontAwesomeIcon icon={faUserCircle} className="menu-icon"/> Driver Management</Nav.Link>
                <Nav.Link eventKey="pickup"><FontAwesomeIcon icon={faCalendarAlt} className="menu-icon"/> Pickup</Nav.Link>
            </Nav>
        </div>
    )
}

export default Sidebar;