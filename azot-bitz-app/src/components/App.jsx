import {Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import ChatsPage from "../pages/ChatsPage";
import NotFoundPage from "../pages/NotFoundPage";
import TodosPage from "../pages/TodosPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AddContactPage from "../pages/AddContactPage";
import ProtectedRoutes from "./ProtectedRoutes";
import ViewPage from "../pages/ViewPage";
import AboutPage from "../pages/AboutPage";


function SomeNestedChild(){
    return (
        <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path={'/registration'} element={<RegisterPage/>}/>
            <Route path={'/add/:id'} element={<ProtectedRoutes>
                <AddContactPage />
            </ProtectedRoutes>}/>
            <Route path={'/update/:id'} element={<ProtectedRoutes>
                <AddContactPage />
            </ProtectedRoutes>}/>
            <Route path={'view/:id'} element={<ProtectedRoutes>
                <ViewPage />
            </ProtectedRoutes>}/>
            <Route path={'/chats'} element={<ChatsPage/>}/>
            <Route path={'/chats/:id'} element={<ChatsPage/>}/>
            <Route path={'/todos'} element={<TodosPage/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'/about'} element={<AboutPage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>
        </Routes>
    );
}

export default SomeNestedChild;
