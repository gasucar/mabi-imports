import { createContext } from "react";

export type ChatContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
};

export const ChatContext = createContext<ChatContextType | null>(null);