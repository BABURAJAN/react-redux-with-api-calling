import React from 'react';
import {connect} from "react-redux";

import { User } from "../components/User";
import { Main } from "../components/Main";
import {setName, setUserList} from "../actions/userActions";



class App extends React.Component {
    constructor(props) {
        super(props);
        
      }
 
    
    render() {
      
        return (
            <div className="container">
                <Main changeUsername ={() => this.props.setName("BABURAJAN")}/>
                <User username={this.props.user.name}/>
        
                  <button onClick={() => this.props.setUserList('http://localhost:8081/listUsers')}>
                    Click here to call API
                  </button>
        
                  <ul>
                    {this.props.user.items.map((users) =>{
                    return(
                      <li>{users.name}</li>
                    );
                    }
                     
                    )}
                  </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
	return {
		user: state.user,
    math: state.math
	};
};

const mapDispathToProps = (dispatch) =>{
	return {
		setName : (name) => {
			dispatch(setName(name))
    },
    setUserList : (url) => {
			dispatch(setUserList(url))
    }
	};
};

export default connect(mapStateToProps, mapDispathToProps)(App)
