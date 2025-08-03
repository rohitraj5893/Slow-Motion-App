
import Template from "../Components/Template";

export default function Login({setisLoggedIn}){
    return(
        // <div className="min-h-[50vh] flex justify-between gap-10 mt-11">
        //     <div className="w-[35vw] flex flex-col p-2 text-white items-center justify-center">
        //         <h2 className="text-3xl font-bold">
        //           Welcome Back
        //         </h2>

        //         <div className="flex flex-col mt-4">
        //             <p className="text-[#cccfe6] text-xl"></p>
        //             <p className="text-[#66b0f58f] text-xl italic"></p>
        //         </div>

                

        //     </div>

        //     
        // </div>
        <div className="max-[780px]:items-center max-[780px]:justify-center">
            <Template
            title="Welcome Back"
            desc1="Build skills for today, tomorrow, and beyond."
            desc2="Education to future-proof your career."
            formtype="login"
            setisLoggedIn={setisLoggedIn}
            />
        </div>
    );
}