import React, { Component } from 'react';

class Searchbrand extends Component {
    render() {
        return (
            < >
                <div className="searchbrand">
                    <input className="searchbrand__input"
                            type="text" value = {this.props.query} onChange={this.props.search} placeholder="SEARCH " />
                </div>
            </>
        );
    }
}

export default Searchbrand; 