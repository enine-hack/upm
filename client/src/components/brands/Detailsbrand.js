import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


class Detailsbrand extends Component {
    state = {}

    // 
    componentDidMount(){
      this.getSingleBrand();
    }

    //
    getSingleBrand = () => {
        const { params } = this.props.match;
        console.log('param:', params)
        axios.get(`http://localhost:5000/api/brandslist/${params.id}`)
          .then( responseFromApi =>{
            const theBrand = responseFromApi.data;
            
            this.setState(theBrand);
            console.log(theBrand)
          })
          .catch((err)=>{
            console.log('Error while fetching brand', err)
          })
    }

    
    // deleteProject = () => {
    //   const { params } = this.props.match;
    //   axios.delete(`http://localhost:5000/api/projects/${params.id}`)
    //     .then(() =>{
    //         this.props.history.push('/projects'); // !!!         
    //     })
    //     .catch((err) => {
    //         console.log('Error while deleting project', err)
    //     })
    // }

    // renderAddTaskForm = () => {
    //   if(!this.state.title){
    //     this.getSingleProject();
    //   } else {     
    //             // pass the project and method getSingleProject() as a props down to AddTask component
    //     return <AddTask theProject={this.state} getTheProject={this.getSingleProject} />
    //   }
    // }
  
    render(){
    
        return(
            
            <div>
              <img  className="details-brand-logo"
              src={this.state.logoUrl}/>
              <br></br>
              <img  className="details-brand-cover"
                    src={this.state.coverImage}/>
                      
            <Container  >


                  <div  className="details-brand-div-menu ">
                  <Row>
                    <Col  xs={{ span: 10, offset: 0 }} sm={{ span: 12, offset: 0 }} md={{ span: 9, offset: 0 }}
                          className="details-brand-button-style">
                      <Link to={`${this.state.websiteUrl}`}  target="_blank">
                        BRAND HOUSE
                      </Link>
                    </Col>

                    <Col  xs={{ span: 1, offset: 0 }} sm={{ span: 1, offset: 0 }} md={{ span: 1, offset: 0 }}>
                      <a href={this.state.websiteUrl}  target="_blank">
                        <img  className="details-brand-arrow-right-style"
                              src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png"/>
                      </a>
                    </Col>
                  </Row>

                  <Row>
                    <Col  md={{ span: 9, offset: 0 }}
                          className="details-brand-button-style">
                      <Link to={`${this.state.websiteUrl}`}  target="_blank">
                        NEW IN
                      </Link>
                    </Col>

                    <Col md={{ span: 1, offset: 0 }}>
                      <Link to={`${this.state.websiteUrl}`}  target="_blank">
                        <img  className="details-brand-arrow-right-style"
                              src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png"/>
                      </Link>
                    </Col>
                  </Row>

                  <Row>
                    <Col  md={{ span: 9, offset: 0 }}
                          className="details-brand-button-style">
                      <Link to={`${this.state.websiteUrl}`}  target="_blank">
                      SALES AND EXCLUSIVITIES
                      </Link>
                    </Col>

                    <Col md={{ span: 1, offset: 0 }}>
                      <Link to={`${this.state.websiteUrl}`}  target="_blank">
                        <img  className="details-brand-arrow-right-style"
                              src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png"/>
                      </Link>
                    </Col>
                  </Row>
                     
                      
                        <Col>PRIVILEGE ACCOUNT</Col>
                        <Col></Col>
                     
                        <Col>SHOPPING HISTORY</Col>
                        <Col></Col>
                      
                        <Col>RETURNS AND WARRANTY</Col>
                        <Col></Col>
                      
                        <Col>E-GIFT CARD</Col>
                        <Col></Col>
                     
                        <Col>FEEDBACK</Col>
                        <Col></Col>
                  </div> 

            </Container>
            

            {/* APPARAIT SI LA MARQUE EST DANS LE PORTEMARQUE + DELETE DANS LE USERS ARRAY
            <button> Delete profil </button> */}
            </div>
       
           
        )
    }
}



export default Detailsbrand;