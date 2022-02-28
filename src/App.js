import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import Stream from "./Stream";

function App() {
  return (
    <>
      <header className="bg-gradient-to-r from-green-500 via-yellow-500 to-pink-500 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
            <span className="ml-3 text-xl">YOOT</span>
          </a>
        </div>
      </header>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Cards />} />
            <Route path="/:id" element={<Stream />} />
          </Routes>
        </div>
      </Router>
      <footer className="bg-gradient-to-r from-green-500 via-yellow-500 to-pink-500 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-black" href="/">
            <span className="ml-3 text-xl">Yoot Platform</span>
          </a>
          <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2020 Yoot Platform —
            <a href="https:yogeshwaran01.github.io" className="text-black ml-1" target="_blank" rel="noopener noreferrer">@yogeshwaran01</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
