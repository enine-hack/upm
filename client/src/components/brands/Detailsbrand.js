import React, { Component } from 'react';
import axios from 'axios';


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
            <img src={this.state.coverImage}/>
            <h1>{this.state.brandname}</h1>
       
            </div>
        )
    }
}



export default Detailsbrand;