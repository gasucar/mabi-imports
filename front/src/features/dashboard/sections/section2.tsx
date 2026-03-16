import { motion } from "framer-motion";
import fingerprint from "../../../assets/icons/fingerprint_icon.png";
import laboratory from "../../../assets/icons/laboratory_bottle_icon.png";
import perfuminaIcon from "../../../assets/icons/perfumina_icon.png";
import ChatMock from "../components/chat_mock";
import { useRef, useState } from "react";
import { useChat } from "../../ai_assistant/chat/hooks/use_chat";

const Section2 = () => {
  const [startChat, setStartChat] = useState(false);
  const chatRef = useRef(null);
  const { setIsVisible } = useChat();
  return (
    <section className="w-full bg-black text-white py-28 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="space-y-10"
          onViewportEnter={() => {
            setStartChat(true);
            setIsVisible(true);
          }}
        >
          <span className="inline-block text-xs tracking-widest border border-neutral-700 px-4 py-1 rounded-full text-neutral-300">
            INTELLIGENT SCENT PROFILING
          </span>

          <h1 className="text-5xl md:text-6xl font-serif leading-tight">
            A fragrance tailored <br />
            <span className="text-neutral-400">exclusively</span> to you.
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            Perfumina AI analyzes your preferences, memories and personality
            to recommend the perfect Arabic scent profile.
          </p>

          <div className="flex gap-12 pt-6">

            <div className="flex flex-col gap-3 max-w-44">
              <img src={fingerprint} className="w-6 h-6 opacity-80" />

              <h3 className="text-xs tracking-widest font-semibold text-neutral-300">
                UNIQUE IDENTITY
              </h3>

              <p className="text-xs text-neutral-500">
                Scents matched to your distinct character.
              </p>
            </div>

            <div className="flex flex-col gap-3 max-w-44">
              <img src={laboratory} className="w-6 h-6 opacity-80" />

              <h3 className="text-xs tracking-widest font-semibold text-neutral-300">
                PRECIOUS INGREDIENTS
              </h3>

              <p className="text-xs text-neutral-500">
                Only the finest Oud, Musk and Amber.
              </p>
            </div>

          </div>

          <button className="flex items-center gap-2 text-sm border-b border-white pb-1 hover:opacity-70 transition">
            Start Your Consultation →
          </button>
        </motion.div>

        {/* RIGHT CHAT */}

        <motion.div
          ref={chatRef}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          onViewportEnter={() => setStartChat(true)}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end"
        >

          <motion.div
            whileHover={{ rotate: 0 }}
            initial={{ rotate: -2 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="w-95 h-130 bg-neutral-900 rounded-2xl border       border-neutral-800
 shadow-2xl flex flex-col overflow-hidden"
          >

            {/* HEADER */}

            <div className="bg-neutral-950 flex items-center justify-between px-4 py-3 border-b border-neutral-800">

              <div className="flex items-center gap-3">
                <img
                  src={perfuminaIcon}
                  className="w-9 h-9 rounded-full bg-pink-400"
                />

                <div>
                  <p className="text-sm font-medium text-white">Perfumina AI</p>
                  <p className="text-xs text-neutral-400">PERSONAL PERFUMER</p>
                </div>
              </div>

              <div className="w-2 h-2 bg-green-500 rounded-full" />

            </div>

            {/* BODY */}

            <div className="flex-1 bg-linear-to-b from-neutral-900 to-neutral-950 p-4 overflow-hidden">
              {startChat && <ChatMock />}
            </div>

            {/* INPUT */}

            <div className="border-t border-neutral-800 p-3 flex gap-2">

              <input
                placeholder="Type your message..."
                className="
                flex-1
                bg-neutral-800
                text-white
                rounded-full
                px-4
                py-2
                text-sm
                outline-none
                "
              />

              <button
                className="
               bg-white
               text-black
               px-4
               rounded-full
               text-sm
               cursor-pointer
               "
              >
                Send
              </button>

            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Section2;