import Header from "./Component/Shared/Header";
import Footer from "./Component/Shared/Footer";
import Home from "./Page/Home/Home";
import TopHeader from "./Component/Shared/TopHeader";

const App = () =>{
    return (
        <div className="flex-wrap">
            <TopHeader></TopHeader>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default App;