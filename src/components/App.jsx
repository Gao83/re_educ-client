import AppRoutes from "../routes/AppRoutes";
import './App.css'
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";
import CategoryNavbar from "./CategoryNavbar/CategoryNavbar";

const App = () => {

    return (
        <>
            <Navigation />
            <CategoryNavbar />
            <AppRoutes />
            <Footer/>
        </>
    )
}

export default App