import type { IPerfume } from "../../../shared/interfaces/interfaces";
import { useChat } from "../../ai_assistant/chat/hooks/use_chat";

export const ActionButtons = ({ perfume }: { perfume: IPerfume }) => {

  const { setIsOpen, setInitialMessage } = useChat();
  return (
    <div className="flex gap-3">

      <button className="cursor-pointer bg-black text-white px-6 py-3 rounded-md hover:opacity-90 transition">
        Add to Cart
      </button>

      <button
        onClick={() => {
          setIsOpen(true);

          setInitialMessage(
            `Tell me about the perfume ${perfume.name}.
              Be persuasive and concise.
              Explain:
              - How it smells
              - Who it's for
              - Best season or occasion
              - Why it's special

              Keep it natural and premium.`
          );
        }}
        className="cursor-pointer border border-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition"
      >
        Ask Perfumina AI
      </button>

    </div>
  );
};