import React, { Component } from 'react'

export class ViewOne extends Component {
    render() {
        return (
            <div style={{width: "400px"}}>
                               <img src={this.props.item.avatar} style={{width: "100%",borderTopRightRadius: "20px", borderTopLeftRadius: "20px"}}/>
                            <h4 style={{paddingLeft: "20px"}}>{this.props.item.first_name} {this.props.item.last_name}</h4>
                            <h4 style={{paddingLeft: "20px"}}>{this.props.item.email}</h4>    
           
            </div>
        )
    }
}

export default ViewOne
