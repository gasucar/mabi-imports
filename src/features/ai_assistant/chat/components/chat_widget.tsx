import { motion } from "framer-motion";
import perfuminaIcon from "../../../../assets/icons/perfumina_icon.png";
import { useChat } from "../hooks/use_chat";

const ChatWidget = () => {

  const { isOpen, setIsOpen, isVisible } = useChat();

  if (!isVisible || isOpen) return null;

  return (
    <motion.button
      onClick={() => setIsOpen(!isOpen)}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="
      fixed
      bottom-6
      right-6
      w-16
      h-16
      rounded-full
      bg-pink-400
      shadow-xl
      border border-pink-500
      flex
      items-center
      justify-center
      z-50
      hover:scale-105
      cursor-pointer
      pt-2
      "
    >
      <img
        src={perfuminaIcon}
        className="w-20 h-20 rounded-full"
      />
    </motion.button>
  );
};

export default ChatWidget;