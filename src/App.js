import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./pages/loading";
import Home from "./pages/Home";
import Token from "./pages/token";
import AboutUs from "./pages/aboutus";
import Intelligence from "./pages/Intelligence";
import { Helmet } from "react-helmet";
// import { preview } from "./assets/images/preview.png";
import Preview from "./assets/images/preview.png";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>DJI</title>
        <meta property="og:title" content="DJI" />
        <meta property="og:description" content="Degen Jpegs Incorporated" />
        <meta property="og:image" content={Preview} />
        <meta property="og:url" content="https://example.com/your-page" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://example.com/path/to/your/image.jpg"
        />
      </Helmet>
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/token" element={<Token />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
