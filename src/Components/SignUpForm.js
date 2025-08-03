import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function SignUpForm({ setisLoggedIn }) {
    const [button, setButton] = useState(true)
    const [showPassword, setshowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        createPassword: "",
        confirmPassword: "",
    });
    const navigate = useNavigate("");
    function buttonHandler() {
        (button) ? setButton(false) : setButton(true);
    }
    function changeHandler(event) {

        const { name, value } = event.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    }

    // console.log(formData);
    function submitForm(e) {
        e.preventDefault();
        if (formData.createPassword !== formData.confirmPassword) {
            toast.error("Password do not match!");
            return;
        }
        setisLoggedIn(true);
        toast.success("Account Created");
        navigate('/dashboard');
        console.log(formData);

    }

    return (
        <form className="flex flex-col gap-4"
            onSubmit={submitForm}>

            <div className="flex max-[840px]:justify-center ">
                <div className="unset w-[14.2rem] flex flex-row   max-[780px]:justify-center items-center gap-2 bg-[#161d29] p-1 rounded-full mt-6 text-[#cccfe6] border-b-1 border-[#5e5e5f] ">

                    <button className={` px-5 py-2  rounded-full cursor-pointer  transition-all duration-200
                         ${button ? "bg-[#000814] text-white" : ""} `}
                        onClick={buttonHandler}>
                        Student
                    </button>

                    <button className={` px-5 py-2  rounded-full cursor-pointer  transition-all duration-200
                         ${button ? "" : "bg-[#000814] text-white"} `}
                        onClick={buttonHandler}>
                        Instructer
                    </button>

                </div>
            </div>



            <div className="flex flex-row gap-2  max-[840px]:flex-col">
                <div className="flex flex-col gap-2 max-[840px]:items-start">
                    <label className="text-[0.9rem]">First Name <span className="text-red-400 text-[0.8rem]">*</span> </label>
                    <input
                        required
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={changeHandler}
                        placeholder="Enter first name"
                        className=" w-full bg-[#161d29] p-3 rounded-lg border-b-1 border-[#5e5e5f]"
                    />
                </div>
                <div className=" flex flex-col gap-2 max-[840px]:items-start">
                    <label className="text-[0.9rem]">Last Name<span className="text-red-400 text-[0.8rem]">*</span></label>
                    <input
                        required

                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={changeHandler}
                        placeholder="Enter last name"
                        className=" w-full bg-[#161d29] p-3 rounded-lg border-b-1 border-[#5e5e5f]"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2 max-[840px]:items-start">
                <label className="text-[0.9rem]">Email Address<span className="text-red-400 text-[0.8rem]">*</span></label>
                <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter your email"
                    className=" w-full bg-[#161d29] p-3 rounded-lg border-b-1 border-[#5e5e5f]"
                />
            </div>

            <div className="flex flex-row gap-2 max-[840px]:flex-col">
                <div className="flex flex-col gap-2 max-[840px]:items-start">
                    <label className="text-[0.9rem]">Create Password<span className="text-red-400 text-[0.8rem]">*</span></label>
                    <input
                        required
                        // type={(showPassword) ? "text" : "password"}
                        type="password"
                        name="createPassword"
                        value={formData.createPassword}
                        onChange={changeHandler}
                        placeholder="Enter password"
                        className=" w-full bg-[#161d29] p-3 rounded-lg border-b-1 border-[#5e5e5f]"
                    />
                    {/* <span onClick={() => setshowPassword((prev) => !prev)}>
                            {
                             (showPassword) ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                            }
                        </span> */}
                </div>
                <div className="flex flex-col gap-2 max-[840px]:items-start">
                    <label className="text-[0.9rem]">Confirm Password<span className="text-red-400 text-[0.8rem]">*</span></label>
                    <input
                        required
                        // type={(showPassword) ? ("text") : ("password")}
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={changeHandler}
                        placeholder="Re-Enter password"
                        className=" w-full bg-[#161d29] p-3 rounded-lg border-b-1 border-[#5e5e5f]"
                    />
                    {/* <span  onClick={() => setshowPassword((prev) => !prev)}>
                            {
                             (showPassword) ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
                            }
                        </span> */}
                </div>


            </div>


            <button className="w-[100%] bg-yellow-400 text-black text-center font-semibold py-2 rounded-md cursor-pointer"

            >Create Account</button>



        </form>
    );
}