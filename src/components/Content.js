import React from "react"
import { Col, Form, InputGroup, FormControl, Button} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'

import Card from "./Card"

class Sidebar extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            drivers: [],
            search: ""
        }
    }


    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=30`)
          .then(res => {
            const persons = res.data.results;
            this.setState({ drivers: persons });
        })
    }

    searchData(e){
        const keyword = e.target.value;
        
        this.setState({
            search: keyword
        })
    }
    
    render(){
        return(
            <Col>
                <div className="content">
                    <div className="page-title-wrapper">
                        <div className="page-title">
                            <h1>Driver Management</h1>
                            <span>Data driver yang bekerja dengan Anda.</span>
                        </div>
    
                        <div className="form-title">
                            <Form.Row className="align-items-center">
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text><FontAwesomeIcon icon={faSearch}/></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl onChange={(e)=>this.searchData(e)} placeholder="Cari Driver" />
                                    <InputGroup.Append>
                                    <Button className="mb-2">
                                        Tambah Driver <FontAwesomeIcon icon={faPlus}/>
                                    </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form.Row>
                        </div>
                    </div>
    
                    <Card data={this.state.drivers} search={this.state.search}/>
                </div>
            </Col>
        )
    }
}

export default Sidebar;