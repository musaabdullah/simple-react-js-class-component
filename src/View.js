import React, { Component } from 'react'

export class View extends Component {
    render( ) {
        return (
            <div style={{background: "black", width: "300px", color: "white", paddingBottom: "10px", margin: "10px",borderRadius: "20px"}}>
                            <img src={this.props.item.avatar} alt={this.props.item.first_name} style={{width: "100%",borderTopRightRadius: "20px", borderTopLeftRadius: "20px"}}/>
                            <h4 style={{paddingLeft: "20px"}}>{this.props.item.first_name} {this.props.item.last_name}</h4>
                            <h4 style={{paddingLeft: "20px"}}>{this.props.item.email}</h4>  
                              
            </div>
        )
    }
}

export default View
