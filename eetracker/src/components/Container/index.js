import React, { Component } from "react";
import Nav from "../Nav";
import Table from "../Table";
import API from "../../utils/api";

class Container extends Component {
    //we can use state!  Best for information
    // we can't return directly we must use a render method
    // we can use Component did mount to run functions
    state = {
        users: [{}]
    }
    componentDidMount(){
        API.getUsers().then(results =>{
            this.setState({
                users: results.data.results
            })
        })
    }
    handleSearchChange = event=>{
        console.log(event.target.value)
        //require a function to search our users
    }
    render() {
        return (
            <main >
                <Nav
                handleSearchChange={this.handleSearchChange}
                />
                <Table 
                users={this.state.users}
                />
            </main>

        );

    }
}

export default Container;