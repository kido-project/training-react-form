import React, { Component } from 'react';

import  Header from './components/Header'; 
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            description: '',
            gender: 1,
            language: 'vi',
            skills: [],
        }
    }
    onHandleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let type = target.type;
        if(type === 'checkbox') {
            // if(target.checked) {
            //     let array = this.state.[name];
            //     array.push(value);
            //     this.setState({
            //         [name]: array
            //     });
            // } else {
            //     let array = this.state[name];
            //     let index = array.indexOf(value);
            //     array.splice(index, 1);
            //     this.setState({
            //         [name]: array
            //     });  
            // }
            console.log(this.state);
        } else {
            this.setState({
                [name]: value
            });
        }
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render () {
        return (
            <div className="App container">
            <Header/>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="panel panel-primary">
                        <div className="panel-body">
                            Form
                            <form onSubmit={ this.onHandleSubmit }>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input 
                                        type="text"
                                        className="form-control" 
                                        name="userName" 
                                        onChange={ this.onHandleChange }
                                        value={ this.state.userName }
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="password" 
                                        onChange={ this.onHandleChange }
                                        value={ this.state.password }
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea 
                                        name="description"
                                        className="form-control" 
                                        rows="3" 
                                        onChange={ this.onHandleChange }
                                        value={ this.state.description }
                                    >
                                    </textarea>
                                </div>
                                <div className="form-group">
                                    <label>Gender</label>
                                    <select 
                                        name="gender"
                                        value={ this.state.gender }
                                        className="form-control" 
                                        onChange={ this.onHandleChange }
                                    >
                                        <option value={0}>Female</option>
                                        <option value={1}>Male</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Gender</label>
                                    <div className="radio">
                                        <label>
                                            <input 
                                                type="radio" 
                                                value={ 'vi' } 
                                                name="language"
                                                onChange={ this.onHandleChange }
                                                checked={ this.state.language === 'vi' }
                                            />
                                                Vietname
                                            </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                            <input 
                                                type="radio" 
                                                value={ 'en' } 
                                                name="language"
                                                onChange={ this.onHandleChange }
                                                checked={ this.state.language === 'en' }
                                            />
                                                English
                                            </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Skills</label>
                                    <div className="checkbox">
                                        <label>
                                            <input 
                                            type="checkbox" 
                                            value="php" 
                                            name="skills[]"
                                            onChange={ this.onHandleChange }
                                            />
                                            PHP
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input 
                                            type="checkbox" 
                                            value="react_js" 
                                            name="skills[]"
                                            onChange={ this.onHandleChange }
                                            />
                                            ReactJS
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <button type="reset" className="btn btn-default">Reset</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            </div>
            );
    };
}

export default App;
