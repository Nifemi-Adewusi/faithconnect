// import Registration from "./Sections/Component/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Plans from "./Sections/Plans";
import IndividualPlan from "./Sections/IndividualPlan";
import GroupPlan from "./Sections/Component/GroupPlan";
import Login from "./Sections/Component/Login";
import ForgotPassword from "./Sections/Component/ForgotPassword";
import ResetPassword from "./Sections/Component/ResetPassword";
// import LandingPage from "./Sections/LandingPage";
import Validation from "./Sections/Component/Validation";
import SucessfulVerification from "./Sections/Component/SucessfulVerification";
import EmailInstruction from "./Sections/Component/EmailInstruction";
import LoggedInUserScreen from "./Sections/Component/LoggedInUserScreen";
import UserProfile from "./Sections/Component/UserProfile";
import "./App.css";
import Search from "./Sections/Component/Search";
import Devotional from "./Sections/Component/Devotional";
import LandingPage1 from "./Sections/LandingPage1";
import Reels from "./Sections/Component/Reels";
import Posts from "./Sections/Component/Posts";
import EditProfile from "./Sections/Component/EditProfile";
import Denomination from "./Sections/Component/Denomination";
import Chat from "./Sections/Component/Chat";
// import { MyProvider } from "./GlobalVariables";
// import Plans from "../../Sections/Plans.jsx";
// import Plans from "./Sections/Plans";
// import './App.css'

function App() {
  return (
    <>
      {/* <Plans /> */}

      <Router>
        <Routes>
          {/* <Route path="/" element={<LandingPage></LandingPage>} /> */}
          <Route path="/" element={<LandingPage1 />} />
          <Route path="/plans" element={<Plans></Plans>}></Route>
          <Route
            path="/individual-registration"
            element={<IndividualPlan></IndividualPlan>}
          ></Route>
          <Route path="/group-registration" element={<GroupPlan></GroupPlan>} />
          <Route path="/Login" element={<Login></Login>} />
          <Route
            path="/forgot-password"
            element={<ForgotPassword></ForgotPassword>}
          />
          <Route
            path="/reset-password"
            element={<ResetPassword></ResetPassword>}
          />
          <Route
            path="/email-verification"
            element={<Validation></Validation>}
          />
          <Route
            path="/verified"
            element={<SucessfulVerification></SucessfulVerification>}
          ></Route>
          <Route path="/LoggedIn" element={<LoggedInUserScreen />} />
          <Route
            path="/email-popup"
            element={<EmailInstruction></EmailInstruction>}
          />
          <Route path="/user-profile" element={<UserProfile></UserProfile>} />
          <Route path="/search" element={<Search></Search>} />
          <Route path="/devotional" element={<Devotional></Devotional>} />
          <Route path="/reels" element={<Reels></Reels>} />
          <Route path="/post" element={<Posts></Posts>} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/denomination" element={<Denomination></Denomination>} />
          {/* <Route path = "/devotional" element = {} /> */}
          {/* <Route path /> */}
          <Route path="/chats" element={<Chat></Chat>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
