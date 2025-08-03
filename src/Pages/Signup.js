
import Template from "../Components/Template";

export default function Signup(props) {
    let setisLoggedIn = props.setisLoggedIn;
   

    return (
        <div>
            <Template 
                title=" Join the millions learning to code with SlowMotion for free"
                desc1="Build skills for today, tomorrow, and beyond."
                desc2="Education to future-proof your career."
                formtype="signup"
                setisLoggedIn={setisLoggedIn}
            />
              
            </div>
    );
}