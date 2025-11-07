import {Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";
import ThemeSwitcher from "./components/ThemeSwitcher.jsx";


const App = () => {
  return (
    <div className="relative h-full w-full">
      <ThemeSwitcher />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App