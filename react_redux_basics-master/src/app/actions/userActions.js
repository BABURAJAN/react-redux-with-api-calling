export function setName(name){
    return {
        type: "SET_NAME",
        payload: name
    };
}

export function setAge(age){
    return {
        type: "SET_AGE",
        payload: age
    };
}

/*export function setUserList(url){
    fetch(url)
           .then(res => res.json())
           .then(
            (result) => {
              console.log(result);
              this.setState({
                items: result
              });
            }
          )

    return {
        type: "SET_USERLIST",
        payload: this.state.items
    };
} */

export function setUserList(url){
	return async (dispatch) => {
        const response = await fetch(url); // 'http://localhost:8081/listUsers'
        const json = await response.json();
                        dispatch({
									 type: "SET_USERLIST",
										payload: json
 })  
}
}