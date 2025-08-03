import { FcGoogle } from "react-icons/fc";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";


export default function Template({ title, desc1, desc2, formtype, setisLoggedIn }) {

    return (
        <div className="min-h-[50vh] w-11/12 max-w-[1160px] flex justify-between py-12 gap-y-0 gap-x-12 mx-auto
         max-[840px]:flex-col max-[840px]:items-center  max-[840px]:text-center
         max-[840px]:w-[60vw]
         ">
            <div className="w-11/12 max-w-[460px] flex flex-col p-2 text-white items-center justify-center">
                <h2 className="text-3xl font-bold">
                    {title}
                </h2>
                <div className="flex flex-col mt-4">
                    <p className="text-[#cccfe6] text-xl">{desc1}</p>
                    <p className="text-[#66b0f58f] text-xl italic">{desc2}</p>
                </div>
            </div>

            <div className="w-11/12 max-w-[460px] flex flex-col gap-4 p-3">


                {
                        (formtype === "signup" ?
                        (<SignUpForm setisLoggedIn={setisLoggedIn} />) :
                        (<LoginForm setisLoggedIn={setisLoggedIn} />))
                }


                <div className="flex w-full items-center">
                    <div className="h-[1px] w-full bg-[#5e5e5f]"></div>
                    <p  className="text-[#5e5e5f] font-medium">OR</p>
                    <div  className="h-[1px] w-full bg-[#5e5e5f]"></div>
                      </div>

                <button className="w-full flex flex-row items-center justify-center gap-x-2
                 text-[#a9a9aa] font-semibold py-2 px-3 rounded-md border-1
                  border-[#5e5e5f] cursor-pointer">
                    <FcGoogle fontSize={"1.5rem"} />
                    <p className="cursor-pointer">Sign in with Google </p>
                </button>
            </div>

        </div>
    );
}