import { Route, Routes } from "react-router"
import About from "../pages/About";
import Nicat from "../pages/Nicat";
import Home from "../pages/Home";
import News from "../pages/News";
import CounterWithReducer from "../components/CounterWithReducer";

const WebRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/news' element={<News />} />
            <Route path='/nicat' element={<Nicat />} />
            <Route path='/counter-reducer' element={<CounterWithReducer />} />
        </Routes>
    )
}
export default WebRouter;
