import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./Pages/Layout"
import Collections from "./Pages/Collections"
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import About from "./Pages/About"
import Contact from "./Pages/Contact"


function App() {
  
  return (
    <main>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Collections />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

          </Route>
        
      </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App
