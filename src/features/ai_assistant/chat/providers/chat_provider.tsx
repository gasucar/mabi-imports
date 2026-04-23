import { useState } from "react";
import { ChatContext } from "../hooks/chat_context";


export const ChatProvider = ({ children }: { children: React.ReactNode }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [initialMessage, setInitialMessage] = useState<string | null>(null);

  setTimeout(() => setIsVisible(true),500)

  return (
    <ChatContext.Provider value={{ isOpen, setIsOpen, isVisible, setIsVisible, initialMessage, setInitialMessage }}>
      {children}
    </ChatContext.Provider>
  );
};