import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import axios from "axios";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import Jobs from "./components/Job/Jobs";
import JobDetails from "./components/Job/JobDetails";
import Application from "./components/Application/Application";
import MyApplications from "./components/Application/MyApplication";
import PostJob from "./components/Job/PostJob";
import NotFound from "./components/NotFound/NotFound";
import MyJobs from "./components/Job/MyJobs";
import { useEffect, useContext } from "react";
import { Context } from "./main";
import { useToast } from "./components/ui/use-toast";
import { Button } from "./components/ui/button";
import { Toaster } from "sonner";
import { toast } from "sonner";
function App() {
  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const responce = axios.get("", { withCredentials: true });
        setUser(responce.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }

      fetchUser();
    };
  }, [isAuthorized]);

  console.log(isAuthorized);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/job/getall" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/application/:id" element={<Application />} />
          <Route path="/applications/me" element={<MyApplications />} />
          <Route path="/job/post" element={<PostJob />} />
          <Route path="/job/me" element={<MyJobs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster className="invert" />
      </BrowserRouter>
      <Button onClick={() => toast("hello")}>Hello</Button>
    </>
  );
}

export default App;
