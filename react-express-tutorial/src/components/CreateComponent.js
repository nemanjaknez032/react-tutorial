import React, {Component} from "react";
import axios from "axios";

export default class CreateComponent extends Component{
    constructor(props){
        super(props);
        this.onChangeHostName = this.onChangeHostName.bind(this);
        this.onChangeServerPort = this.onChangeServerPort.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            port: ''
        }
    }

    onChangeHostName(e){        
        this.setState({
            name: e.target.value
        });
        console.log(`Name is ${this.state.name}`);
    }

    onChangeServerPort(e){
        this.setState({
            port: e.target.value
        });
        console.log(`Port is ${this.state.port}`);
    }

    onSubmit(e){
        e.preventDefault();
        const serverport = {
            name: this.state.name,
            port: this.state.port
        }
        console.log(`name is ${this.state.name} and port is ${this.state.port}`);
        axios.post('http://localhost:1411/serverport/add', serverport)
            .then(res => console.log(res.data));
        this.setState({
            name: '',
            port: ''
        });
    }


    render(){
        return (
            <div style={{marginTop: 50}}>
                <h3>Add Server</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Host Name:</label>
                        <input type="text" className="form-control" value={this.state.name} 
                        onChange={this.onChangeHostName}/>
                    </div>
                    <div className="form-group">
                        <label>Add Server Port:</label>
                        <input type="text" className="form-control" value={this.state.port}
                        onChange={this.onChangeServerPort}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Node server" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}