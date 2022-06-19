import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App(props) {
    const DialogRender = () => <Dialogs state={props.appState.dialogsPage}/>;
    const ProfileRender = () => <Profile state={props.appState.profilePage}  addPost={props.addPost}/>;
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
            <Routes>
                <Route path="/dialogs" element={<DialogRender />} />
                <Route path="/profile" element={<ProfileRender />} />
            </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
