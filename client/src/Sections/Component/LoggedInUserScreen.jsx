/* eslint-disable react/prop-types */
import HomePage from "./LoggedInScreenImages/HomePage.png";
import Account from "./LoggedInScreenImages/Account.png";
import Menu from "./LoggedInScreenImages/Menu.png";
import Pray from "./Registration-Images/Pray-white.png";
import Search from "./LoggedInScreenImages/Search.png";
import Reels from "./LoggedInScreenImages/Reels.png";
import Notification from "./LoggedInScreenImages/Notification.png";
import DM from "./LoggedInScreenImages/DM.png";
import VideoImg from "./LoggedInScreenImages/video.png";
import userImg1 from "./LoggedInScreenImages/1.png";
import userImg2 from "./LoggedInScreenImages/2.png";
import userImg3 from "./LoggedInScreenImages/3.png";
import userImg4 from "./LoggedInScreenImages/4.png";
import userImg5 from "./LoggedInScreenImages/5.png";
import userImg6 from "./LoggedInScreenImages/6.png";
import main from "./LoggedInScreenImages/main.png";
import like from "./LoggedInScreenImages/like.png";
import comment from "./LoggedInScreenImages/comment.png";
import person1 from "./LoggedInScreenImages/person1.png";
import person2 from "./LoggedInScreenImages/person2.png";
import postImg1 from "./LoggedInScreenImages/postImg1.png";
import postImg2 from "./LoggedInScreenImages/postImg2.png";
import save from "./LoggedInScreenImages/save.png";
import union from "./LoggedInScreenImages/Union.png";
import dots from "./LoggedInScreenImages/dots.png";
import img1 from "./PeopleImages/1.png";
import img2 from "./PeopleImages/2.png";
import img3 from "./PeopleImages/3.png";
import img4 from "./PeopleImages/4.png";
import img5 from "./PeopleImages/5.png";
import img6 from "./PeopleImages/6.png";
import img7 from "./PeopleImages/7.png";
import img8 from "./PeopleImages/8.png";
import img9 from "./PeopleImages/9.png";
import Logo from "./LoggedInScreenImages/Logo.png";
import notify from "./LoggedInScreenImages/notify.png";
import chat from "./LoggedInScreenImages/chat.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../GlobalVariables";
const LoggedInUserScreen = () => {
  const navigate = useNavigate();
  const { photoUrl, userName } = useContext(MyContext);
  const imgSrc = photoUrl || main;
  return (
    <div className="grid grid-cols-[115.02px_1fr_352px] max-[1023px]:grid-cols-[100.02px_1fr_300px] max-[836px]:grid-cols-1 relative">
      <div className="hidden max-[836px]:flex max-[836px]:justify-between px-3 mb-3 items-center mt-3">
        <img className="w-[40px] cursor-pointer" src={Logo} alt="" />
        <div className="flex">
          <img className="w-[35px] cursor-pointer" src={notify} alt="" />
          <img
            className="w-[31px] cursor-pointer"
            src={chat}
            onClick={() => navigate("/chats")}
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#180f48] flex flex-col justify-between h-[823px] max-[836px]:flex-row max-[836px]:h-[45px] max-[836px]:absolute max-[836px]:bottom-0 max-[836px]:mt-8 max-[836px]:bg-[#ff6132] max-[836px]:items-center max-[836px]:w-[100%]">
        <img
          className="w-[46.95px] mx-auto h-[45px] cursor-pointer"
          src={HomePage}
          alt=""
        />
        <img
          className="mx-auto w-[46.95px] h-[45px] cursor-pointer"
          src={Search}
          alt=""
        />
        <img
          className="mx-auto w-[52px] h-[52.7px] cursor-pointer"
          src={Pray}
          alt=""
        />
        <img
          className="mx-auto w-[46.95px] h-[45px] cursor-pointer"
          src={Reels}
          alt=""
        />
        <img
          className="mx-auto w-[46.95px] h-[45px] cursor-pointer max-[836px]:hidden"
          src={DM}
          alt=""
        />
        <img
          className="mx-auto w-[46.95px] h-[90px] cursor-pointer max-[836px]:hidden"
          src={Notification}
          alt=""
        />
        <img
          className="mx-auto w-[41px] h-[28.38px] cursor-pointer"
          src={VideoImg}
          alt=""
        />
        <img
          className="mx-auto w-[46.95px] h-[45px] cursor-pointer"
          src={Account}
          alt=""
        />
        <img
          className="mx-auto h-[45px] w-[46.95px] cursor-pointer max-[836px]:hidden"
          src={Menu}
          alt=""
        />
      </div>
      <div className="ml-6">
        <div className="flex gap-4 overflow-x-scroll">
          <StoriesComponent
            navigateTo={"/user-profile"}
            rounded={true}
            imgSrc={imgSrc}
            personName={userName}
          />
          <StoriesComponent imgSrc={userImg1} personName="Wade Warren" />
          <StoriesComponent imgSrc={userImg2} personName="Jenny Wilson" />
          <StoriesComponent imgSrc={userImg3} personName={"Bessie Cooper"} />
          <StoriesComponent
            imgSrc={userImg4}
            personName={"Darlene Robertson"}
          />
          <StoriesComponent imgSrc={userImg5} personName={"Devon Lane"} />
          <StoriesComponent imgSrc={userImg6} personName={"P & G"} />
        </div>
        <PostsComponent
          userImg={person1}
          postImg={postImg1}
          userName={"Eleanor Pena"}
        />
        <PostsComponent
          userImg={person2}
          postImg={postImg2}
          userName={"Cameron Williamson"}
        />
      </div>
      <div className="max-[836px]:hidden">
        <div className="flex justify-between items-center px-4 mt-6 mb-3 ">
          <h1 className="font-bold text-lg">Suggested For You</h1>
          <p>See All</p>
        </div>
        {/* <div></div> */}
        <SuggestedFollows userName={"Wade Warren"} imgSrc={img1} />
        <SuggestedFollows imgSrc={img2} userName={"Esther Howard"} />
        <SuggestedFollows imgSrc={img3} userName={"Brooklyn Simmons"} />
        <SuggestedFollows imgSrc={img4} userName={"Guy Hawkins"} />
        <SuggestedFollows imgSrc={img5} userName={"Savannah Nguyen"} />
        <SuggestedFollows imgSrc={img6} userName={"Floyd Miles"} />
        <SuggestedFollows imgSrc={img7} userName={"Ronald Richards"} />
        <SuggestedFollows imgSrc={img8} userName={"Cameron Williamson"} />
        <SuggestedFollows imgSrc={img9} userName={"Jerome Bell"} />
        <div className="flex justify-between items-center mt-6 mb-2 px-4">
          <h2 className="font-bold text-lg">Prayer Groups</h2>
          <p>See All</p>
        </div>
        <SuggestedFollows imgSrc={img1} userName={"Wade Warren"} />
        <SuggestedFollows imgSrc={img2} userName={"Esther Howard"} />
        <SuggestedFollows imgSrc={img3} userName={"Brooklyn Simmons"} />
      </div>
    </div>
  );
};
export default LoggedInUserScreen;

function StoriesComponent({ imgSrc, personName, navigateTo, rounded = false }) {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src={imgSrc}
        // style={{  borderRadius: "50%" }}
        style={{
          borderRadius: rounded ? "50%" : "",
          width: rounded ? "75px" : "",
        }}
        onClick={() => navigate(navigateTo)}
        className="cursor-pointer"
        alt=""
      />
      <p className="text-[10px] font-[400]">{personName}</p>
    </div>
  );
}
function PostsComponent({ userImg, postImg, userName }) {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-4 mb-3">
        <img src={userImg} alt="" />
        <p>{userName}</p>
        <div className="cursor-pointer ml-20">
          <img src={dots} alt="" />
          <img src={dots} alt="" />
          <img src={dots} alt="" />
        </div>
      </div>
      <img src={postImg} alt="" />
      <div className="flex mt-4 gap-2">
        <img src={like} alt="" className="cursor-pointer  " />
        <img className="cursor-pointer " src={comment} alt="" />
        <img className="cursor-pointer " src={union} alt="" />
        <img className="ml-52 cursor-pointer" src={save} alt="" />
      </div>
    </div>
  );
}

function SuggestedFollows({ imgSrc, userName }) {
  return (
    <div className="flex items-center mb-4">
      <img src={imgSrc} alt="" />
      <div className="ml-2">
        <p>{userName}</p>
        <p className="text-[#A0A0A0] max-[1023px]:text-base">
          Kashaf Khan | Graphic Designer
        </p>
      </div>
      <button className="bg-[#ff6132] rounded-[4px] w-[68px] ml-2 mt-6 text-white ">
        Follow
      </button>
    </div>
  );
}
