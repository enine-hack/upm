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
            <div className="details_brand_public">
                <div className="details_brand_public__l1">
                    <div>
                        <img  className="details_brand_public__cover"
                              src={this.state.coverImage}/>
                    </div>      
                
                    <div  className="details_brand_public__l2">
                        <img  className="details_brand_public__logo"
                              src={this.state.logoUrl}/>
                        
                        <div className="details_brand_public__l3">
                            <div className="details_brand_public__l4">
                                <div>
                                  <Link to={`${this.state.websiteUrl}`}  target="_blank">
                                    BRAND HOUSE
                                  </Link>
                                </div>
                                <div>
                                  <a href={this.state.websiteUrl}  target="_blank">
                                      <img  className="details_brand_public__arrow_right"
                                            src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png"/>
                                  </a>
                                </div>
                            </div>

                            <div className="details_brand_public__l4">
                              
                                  <Link to={`${this.state.websiteUrl}`}  target="_blank">
                                  NEW IN
                                  </Link>
                              
                                  <a href={this.state.websiteUrl}  target="_blank">
                                      <img  className="details_brand_public__arrow_right"
                                            src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png"/>
                                  </a>
                              
                            </div>

                            <div className="details_brand_public__l4">
                              <div>
                                  <Link to={`${this.state.websiteUrl}`}  target="_blank">
                                  SALES AND EXCLUSIVITIES
                                  </Link>
                              </div>
                              <div>
                                  <a href={this.state.websiteUrl}  target="_blank">
                                      <img  className="details_brand_public__arrow_right"
                                            src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png"/>
                                  </a>
                              </div>
                            </div>

                            <div className="details_brand_public__l4">
                              <div>
                                  <Link to={`${this.state.websiteUrl}`}  target="_blank">
                                  PRIVILEGE ACCOUNT
                                  </Link>
                              </div>
                              <div>
                                  <a href={this.state.websiteUrl}  target="_blank">
                                      <img  className="details_brand_public__arrow_right"
                                            src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png"/>
                                  </a>
                              </div>
                            </div>

                            <div className="details_brand_public__l4">
                              <div>
                                  <Link to={`${this.state.websiteUrl}`}  target="_blank">
                                  SHOPPING HISTORY
                                  </Link>
                              </div>
                              <div>
                                  <a href={this.state.websiteUrl}  target="_blank">
                                      <img  className="details_brand_public__arrow_right"
                                            src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png"/>
                                  </a>
                              </div>
                            </div>

                            <div className="details_brand_public__l4">
                              <div>
                                  <Link to={`${this.state.websiteUrl}`}  target="_blank">
                                  RETURNS AND WARRANTY
                                  </Link>
                              </div>
                              <div>
                                  <a href={this.state.websiteUrl}  target="_blank">
                                      <img  className="details_brand_public__arrow_right"
                                            src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png"/>
                                  </a>
                              </div>
                            </div>

                            <div className="details_brand_public__l4">
                              <div>
                                  <Link to={`${this.state.websiteUrl}`}  target="_blank">
                                  E-GIFT CARD
                                  </Link>
                              </div>
                              <div>
                                  <a href={this.state.websiteUrl}  target="_blank">
                                      <img  className="details_brand_public__arrow_right"
                                            src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png"/>
                                  </a>
                              </div>
                            </div>

                            <div className="details_brand_public__l4">
                              <div>
                                  <Link to={`${this.state.websiteUrl}`}  target="_blank">
                                  FEEDBACK
                                  </Link>
                              </div>
                              <div>
                                  <a href={this.state.websiteUrl}  target="_blank">
                                      <img  className="details_brand_public__arrow_right"
                                            src="https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png"/>
                                  </a>
                              </div>
                            </div>

                        </div>  
                       
                    </div>          
                </div> 
            </div>
       
           
        )
    }
}



export default Detailsbrand;