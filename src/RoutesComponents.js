import { BrowserRouter, Routes, Route } from "react-router-dom"
import Transport from "./sous-components/Transport";
import Home from "./components/Home";
import CreateEmploi from "./sous-components/CreateEmploi";
import PostulerTransport from "./sous-components/PostulerTransport";
import Commander from "./sous-components/Commander";

const RoutesComponents = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/transport" element={<Transport />} />
                <Route path="/transport/create-emploi" element={<CreateEmploi />} />
                <Route path="/transport/create-emploi/postuler" element={<PostulerTransport />} />
                <Route path="/commander-transport" element={<Commander />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponents;