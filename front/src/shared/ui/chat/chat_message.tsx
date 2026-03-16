import { motion } from "framer-motion";

type Props = {
  sender: "ai" | "user";
  children: React.ReactNode;
};

const ChatMessage = ({ sender, children }: Props) => {

  const isUser = sender === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} w-full`}
    >

      <div
        className={`
        max-w-[75%]
        px-4 py-3
        rounded-xl
        text-sm
        leading-relaxed
        shadow-md

        ${
          isUser
            ? "bg-white text-black rounded-br-sm"
            : "bg-pink-400 text-neutral-200 rounded-bl-sm"
        }
        `}
      >
        {children}
      </div>

    </motion.div>
  );
};

export default ChatMessage;