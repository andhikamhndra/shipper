import React from "react"
import { Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisH, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// import avatar from "../assets/img/avatar.jpeg"

class Card extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            maxItemsPerPage: 5,
            currentPage: 1,
        }

        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
    }

    nextPage(){
        this.setState({ currentPage: this.state.currentPage + 1 })
    }

    previousPage(){
        this.setState({ currentPage: this.state.currentPage - 1 })
    }

    render(){
        let paginate = "";
        if(this.props.search !== ''){
            const search = this.props.search
            const searchData = this.props.data.filter(function(item){
                return item.name.first === search || item.name.last === search
            });
            paginate = searchData
        }else{
            paginate = this.props.data.slice((this.state.currentPage * this.state.maxItemsPerPage) - this.state.maxItemsPerPage, this.state.currentPage * this.state.maxItemsPerPage);
        }

        return(
            <>
            <Row className="drivers-list-wrapper">
                { paginate.map((person, index) => 
                <Col md={4} key={index} className="drivers-details">
                    <div className="driver-card">
                        <div className="driver-id">
                            <span>Driver ID : <span className="id">{person.id.value === "" ? person.id.value : "No ID Identified"}</span> <FontAwesomeIcon icon={faEllipsisH}/></span>
                        </div>

                        <div className="driver-content">
                            <div className="driver-image">
                                <img src={person.picture.medium} alt="Driver" className="profile-image"/>
                            </div>

                            <div className="driver-name">
                                <label>Nama Driver</label>
                                <p>{person.name.first} {person.name.last}</p>
                            </div>

                            <div className="driver-phone">
                                <label>Telepon</label>
                                <p>{person.phone}</p>
                            </div>

                            <div className="driver-email">
                                <label>Email</label>
                                <p>{person.email}</p>
                            </div>
                            
                            <div className="driver-birthdate">
                                <label>Tanggal Lahir</label>
                                <p>{person.dob.date}</p>
                            </div>
                        </div>
                    </div>
                </Col>  
                )}
            </Row>

            <Row>
                <div className="card-pagination">
                    {this.state.currentPage > 1 ? <button className="prev" onClick={ this.previousPage }><FontAwesomeIcon icon={faChevronLeft}/> Previous Page</button> : <button className="prev disabled"><FontAwesomeIcon icon={faChevronLeft}/> Previous Page</button>}
                    {this.props.data.length - 1 > this.state.currentPage * this.state.maxItemsPerPage ? <button className="next" onClick={ this.nextPage }>Next Page <FontAwesomeIcon icon={faChevronRight}/></button> : <button className="next disabled">Next Page <FontAwesomeIcon icon={faChevronRight}/></button>}
                </div>
            </Row>

            </>
        )
    }
}

export default Card;