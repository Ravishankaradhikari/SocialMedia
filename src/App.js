import "./App.css";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/home/Home";
import Auth from "./pages/Auth/Auth";
function App() {
  const isLogin = true;
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0rem" }}></div>
      <div className="blur" style={{ top: "36%", left: "-2rem" }}></div>
      <Home />
      {/* <Profile /> */}
      {/* {isLogin ? <Auth /> : <Profile />} */}
      {/* <Auth /> */}
    </div>
  );
}

export default App;
