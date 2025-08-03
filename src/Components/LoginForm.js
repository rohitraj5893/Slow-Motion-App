import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router";
export default function LoginForm({ setisLoggedIn }) {

    const [formData, setFormData] = useState({ email: "", password: "", });
    const navigate = useNavigate("");

    function changeHandler(event) {

        const { name, value } = event.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault();
        setisLoggedIn(true);
        toast.success("Logged in");
        navigate("/dashboard")
        console.log(formData);

    }
    return (

        <form className=" flex flex-col" onSubmit={submitHandler}>
            {/* Enter Email */}
            <div className="flex flex-col gap-2 max-[840px]:items-start ">
                <label className="text-[0.9rem]">Email Address<span className="text-red-400 text-[0.8rem]">*</span></label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter your email"
                    className="w-full bg-[#161d29] p-3 rounded-lg border-b-1 border-[#5e5e5f]"
                />
            </div>

            {/*Enter Password */}
            <div className="flex flex-col gap-2 max-[840px]:items-start mt-4">
                <label className="text-[0.9rem]">Enter Password<span className="text-red-400 text-[0.8rem]">*</span></label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter password"
                    className="w-full bg-[#161d29] p-3 rounded-lg border-b-1 border-[#5e5e5f]"
                />
            </div>
            {/* Forget link */}
            
                <Link to="#">
                    <p className="w-full text-xs text-right text-blue-400">Forget Password</p>
                </Link>
           
            {/* Sign in button */}

            <button className="w-full bg-yellow-400 text-black text-center font-semibold p-3 rounded-md cursor-pointer mt-4"

            >Sign in</button>


        </form>



    );
}