import { motion } from "framer-motion";
import example from "../../../assets/items_mock/example.png";

type Props = {
  name: string;
  description: string;
  price: string;
};

const PerfumeMock = ({ name, description, price }: Props) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center"
    >
      <img
        src={example}
        alt={name}
        className="w-full h-65 object-cover"
      />

      <h3 className="mt-4 text-sm font-medium">{name}</h3>

      <p className="text-xs text-neutral-500 mt-1">
        {description}
      </p>

      <p className="text-sm mt-2 font-medium">
        ${price}
      </p>
    </motion.div>
  );
};

export default PerfumeMock;