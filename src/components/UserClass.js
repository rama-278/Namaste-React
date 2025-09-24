import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "dummy",
                location: "default",
                avatar_url:"https/avatardummy",
            }
        }
        console.log("child constructor");
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/rama-278");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        })
        console.log("child component did mount");
    }
    componentDidUpdate(){
        console.log("component did update");
    }
componentWillUnmount(){
    console.log("component will unmount");
    }
    

    render() {
    const { name, location,avatar_url } = this.state.userInfo;
    console.log("child render");
        
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name:{ name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact:@Rama</h4>
            </div>
        );
    
        
    }
        
}
export default UserClass;