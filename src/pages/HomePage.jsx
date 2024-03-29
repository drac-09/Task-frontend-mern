import "../styles/tailwind.css";
import addTasks from "../assets/addTasks.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex flex-col-reverse md:flex-row gap-10 h-[calc(100vh-139px)] items-center justify-center">
      <div className="flex md:w-1/2 flex-col items-center md:items-start justify-center md:px-10 animate-fade animate-once animate-ease-linear">
        <p className="text-justify md:text-2xl font-light">
          Welcome to our task management platform! We're excited to have you on
          board. With our tool, you can efficiently organize your daily tasks
          and maintain complete control over your projects.
        </p>
        {isAuthenticated ? (
          <div className="flex gap-2 justify-center md:justify-start mt-5 w-full">
            <Link
              to="/tasks"
              className="btn bg-fuchsia-700 md:text-xl px-5 pb-2 rounded-xl"
            >
              Tasks
            </Link>
          </div>
        ) : (
          <div className="flex gap-5 justify-center md:justify-start mt-5 w-full">
            <Link
              to="/login"
              className="btn bg-fuchsia-700 md:text-xl px-5 pb-2 rounded-xl"
            >
              Login
            </Link>
            <Link
              to="/Register"
              className="btn bg-fuchsia-700 md:text-xl px-5 pb-2 rounded-xl"
            >
              Register
            </Link>
          </div>
        )}
      </div>
      <div className="flex md:w-1/2 justify-center md:items-center animate-fade animate-once animate-ease-linear">
        {/* <img src={tasks} alt="Landing Page" className="md:w-[400px] md:mx-10" /> */}
        <img
          src={addTasks}
          alt="Landing Page"
          className="md:w-[620px] md:mx-10"
        />
      </div>
    </div>
  );
}

export default HomePage;
