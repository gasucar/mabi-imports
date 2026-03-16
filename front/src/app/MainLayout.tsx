import { Outlet } from "react-router-dom";
import Navbar from "../shared/ui/navbar/navbar";
import TopSlider from "../shared/ui/sliders/top_slider";
import Footer from "../shared/ui/footer/footer";
import ChatWidget from "../features/ai_assistant/chat/components/chat_widget";
import ChatWindow from "../features/ai_assistant/chat/components/chat_window";
import { ChatProvider } from "../features/ai_assistant/chat/providers/chat_provider";

const MainLayout = () => {

  return (
    <ChatProvider>
      <div className="min-h-screen">
        <TopSlider />
        <Navbar />
        <div className="flex flex-1 min-h-0">
          <main className="flex-1 overflow-auto">
            <Outlet />
          </main>
        </div>
        <Footer />
        <ChatWidget />
        <ChatWindow />
      </div>
    </ChatProvider>

  );
};

export default MainLayout;