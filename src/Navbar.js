import React, { Component } from 'react'
import View from './View';
import ViewOne from './ViewOne';

export class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            max : [],
            user: null,
            start: 0,
            end: 1,
        }            
    }
    changeChange() {
       
    }
    componentDidMount() {
        fetch("https://reqres.in/api/users")
        .then(res => res.json())
        .then(data => data.data)
        .then(userData => 
            {
                this.setState({ max:userData })
                console.log(userData);
                // console.log(JSON.stringify(userData, null, 2))
            })
        .catch(error => console.log(error));
    }
    // // setOneItem(item) {
    // //     this.setState({
    // //         user: item,
    // //     })
    // //     // console.log(item);
    // }

    increase () {
        if(this.state.max.length === this.state.end) return;
        this.setState({
            start : this.state.start + 1,
            end: this.state.end + 1,

        })
        console.log(this.state.start, this.state.end)
    }
    decrease () {
        if(this.state.start === 0) return;
        this.setState({
            end : this.state.end - 1,
            start: this.state.start - 1,
        })
        console.log(this.state.end, this.state.end);
    }



    render() {
        return (
            <div>
           {/* {this.state.user && <ViewOne item={this.state.user} /> } */}
            <div style={{width: "100%", height: "100vh", display: "flex", flexWrap: "wrap", justifyContent:"center"}}>
                    <button onClick={() => this.decrease() }>decrease</button>
                {
                    this.state.max.slice(this.state.start,this.state.end).map((item) => {
                        
                        return <div>
                            <View item={item}/>
                            {/* <button onClick={() => this.setOneItem(item)}>select one</button>   */}
                        </div>
                        
                    })
                }
                <button onClick = {() => this.increase() }>increase</button>
            </div>
            </div>
        )
    }
}

export default Navbar
