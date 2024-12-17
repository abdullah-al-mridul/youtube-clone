import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import { SidebarProvider } from "./contexts/SidebarContext";
import "./style.scss";
export default function App() {
  return (
    <Router>
      <SidebarProvider>
        <div className="min-h-screen ">
          <div className="inner"></div>
          <Header />
          <div className="flex pt-16">
            <Sidebar />
            <main className="flex-1 md:ml-64 max-w-[2560px] 8k:mx-auto">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/watch/:videoId" element={<VideoPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </Router>
  );
}
