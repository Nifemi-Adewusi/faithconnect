/* eslint-disable react/prop-types */
import Pray from "../Plans-Images/Pray.png";
// import VisualImg from "./VisualImg";
import Vector from "./Registration-Images/Vector.png";
import closeIcon from "./Registration-Images/icon.png";
import Rect1 from "../Plans-Images/Rectangle-6.png";
import Rect2 from "../Plans-Images/Rectangle-7.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import googleImg from "./Registration-Images/google.png";
import { useContext, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./Firebase";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../GlobalVariables";
function Registration({ text }) {
  const [phone, setPhone] = useState("+234");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const { setUserName, setPhotoUrl, setUserHandle } = useContext(MyContext);
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const displayName = user.displayName;
      // const email = user.email;
      const photoUrl = user.photoURL;
      console.log(displayName);
      const firstWord = displayName.split(" ");
      // console.log(firstWord);
      setUserName(displayName);
      setUserHandle(firstWord[0]);
      setPhotoUrl(photoUrl);
      // console.log("User Info:", result.user);
      console.log(photoUrl);
      navigate("/LoggedIn");
    } catch (error) {
      console.error("Error during sign-in", error);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="flex mx-auto container font-poppins">
      <div className="h-[823px] w-[600px] flex flex-col justify-center items-center relative max-planSmallScreen:hidden">
        <img src={Pray} />
        <h1 className="text-[#FF6132] text-[36px]">Faith Connect</h1>
        <p className="font-bold text-3xl mt-60">Build a Bond with God</p>
        {/* <VisualImg /> */}
        <div className="flex absolute bottom-2 left-1">
          <img src={Rect1} className="w-[100px] h-[120px]" alt="" />
          <img src={Rect2} className="w-[100px] h-[60px] mt-14" alt="" />
        </div>
      </div>
      <div className="bg-[#FF6132] w-[650px] max-planSmallScreen:bg-white max-planSmallScreen:h-[900px] ">
        <div className="flex justify-between mt-4 px-3 max-landingPageScreenFourthBreakPoint:hidden">
          <img src={Vector} alt="" />
          <img src={closeIcon} alt="" />
        </div>
        <div className="w-[365.72px] h-[630px] mx-auto text-white mt-4 max-planSmallScreen:text-black">
          <div className="text-center">
            <p className="font-bold text-2xl mb-3 capitalize">{text}</p>
            <p>Fill in the information to continue.</p>
          </div>

          <div className="flex mt-4 gap-36">
            <label className="text-center">First Name</label>
            <label className="text-center ml-[-5px]">Last Name</label>
          </div>
          <div className="flex justify-between gap-8 mt-1">
            <input
              type="text"
              placeholder="First Name"
              className="w-[165.39px] border-[#FF6132] h-[48.59px] rounded-[11.85px] border-[0.85px] pt-[15.79px] pr-[15px] pb-[15.79px] pl-[15px] text-black"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-[162.83px] h-[48.59px] rounded-[11.85px] border-[0.85px] pt-[15.79px] pr-[12px] pb-[15.79px] pl-[12px] text-black border-[#FF6132]"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <label className="mb-4">Phone Number</label>
            {/* <input
              type="text"
              placeholder="Phone Number"
              className="w-[360.11px] h-[48.17px] rounded-[11.85px] pt-[15.79px] pr-[11px] pb-[15.79px] pl-[11px] "
            /> */}
            {/* <Phone */}
            <PhoneInput
              country={"ng"}
              value={phone}
              onChange={(value) => setPhone(value)}
              inputStyle={{
                width: "300.11px",
                height: "48.17px",
                borderRadius: "11.85px",
                border: "0.85px",
                paddingTop: "15.79px",
                paddingRight: "11px",
                paddingBottom: "15.79px",
                paddingLeft: "11px",
                color: "black",
                marginLeft: "50px",
                borderColor: "#FF6132",
              }}
            />
          </div>
          <div className="mt-6">
            <label className="mb-4">Username</label>
            <input
              type="text"
              className="w-[360.11px] h-[48.17px] rounded-[11.85px] border-[0.85px] pt-[15.79px] pr-[15px] pb-[15.79px] pl-[15px] text-black border-[#FF6132]"
              placeholder="Business or Host Name"
            />
          </div>
          <div className="mt-6">
            <label className="mb-4">Email</label>
            <input
              type="email"
              className="w-[360.11px] h-[48.17px] rounded-[11.85px] border-[0.85px] pt-[15.79px] pr-[15px] pb-[15.79px] pl-[15px] text-black border-[#FF6132] "
              placeholder="Email Address "
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>
          <p className="text-sm mt-2">
            By creating an account, you agree to our{" "}
            <a className="text-black max-planSmallScreen:text-mainTheme cursor-pointer">
              Terms and Conditions
            </a>
          </p>
          <button
            className="text-center w-[357.74px] h-[50.54px] rounded-[11.85px] pt-[15.79px] pr-[47.38px] pb-[15.79px] pl-[47.38px] text-black bg-white mt-6 border-[#FF6132] border-[0.79px]"
            onClick={() => navigate("/email-verification")}
          >
            Create Account
          </button>
          {/* <div className="flex">
            <hr className="border border-[#aaa]" />
            <p>OR</p>
            <hr></hr>
          </div> */}
          <div className="flex items-center gap-2 mt-8">
            <hr className="flex-grow border-t border-[black]" />
            <p className="text-black font-bold">OR</p>
            <hr className="flex-grow border-t border-[black]" />
          </div>
          <button
            className="text-black bg-white w-[354.65px] rounded-[13.43px] border-[0.79px] pt-[13.26px] pr-[66.29px] pb-[13.26px] pl-[66.29px] flex justify-center gap-2 mt-6 border-[#FF6132] "
            onClick={handleGoogleSignIn}
          >
            <img src={googleImg} />
            Sign up with google
          </button>
          <p className="text-center mt-2">
            Already have an account?{" "}
            <a
              onClick={() => navigate("/Login")}
              className="text-black cursor-pointer max-planSmallScreen:text-[#ff6132]"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
