import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {

    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            password: ''
        }
    }

    onChangeUserName = e => {
        this.setState({ name: e.target.value });
    }

    onChangeUserPassword(e) {
        this.setState({ password: e.target.value })
    }
    
    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            code: this.state.name,
            password: this.state.password
        };

        axios.post('http://localhost:8000/api/v1/teacher-login', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ name: '', password: '' })
    }

    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Code</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" value={this.state.password} onChange={this.onChangeUserPassword} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}