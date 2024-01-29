import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userinfo : {
                name : 'default',
                location:'default',

            }
        }

        console.log("Child Constructor");

    };

    async componentDidMount(){
        const response = await fetch("https://api.github.com/users/PallavPushparaj");
        const data = await response.json();

        this.setState({
            userinfo:data,
        });
        console.log(data);
    }

    componentDidUpdate(){
        console.log("Child componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("Child componentWillUnmount");
    }

    render() {
        const {name, location, avatar_url } = this.state.userinfo;
        console.log("Child render");
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {this.props.count}</h4>
            </div>
        );
    }
};

export default UserClass;