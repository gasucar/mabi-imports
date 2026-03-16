import { useContext } from "react";
import { ChatContext } from "./chat_context";

export const useChat = () => {

  const ctx = useContext(ChatContext);

  if (!ctx) throw new Error("ChatProvider missing");

  return ctx;
};