import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            <User name ={"Pallav From Function"} location = {"Siwan"} contact = {"iampallav698@gmail.com"}/>
            <UserClass name = {"Pallav From Class"} location = {"Siwan"} contact = {"iampallav698@gmail.com"}></UserClass>
        </div>
    )
}

export default About;