import { motion } from "framer-motion";
import PerfumeMock from "../components/perfume_mock";
import CustomButton from "../../../shared/ui/buttons/custom_button";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const Section3 = () => {
  return (
    <section className="w-full bg-white py-28 px-6">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif"
          >
            Available Stock
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-neutral-500 mt-3 text-sm"
          >
            Discover our most exquisite fragrances
          </motion.p>
        </motion.div>

        {/* PRODUCTS */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          <PerfumeMock
            name="Al Haramain Amber Oud"
            description="Warm amber with rich oriental depth"
            price="245"
          />

          <PerfumeMock
            name="Al Haramain Amber Oud"
            description="Fresh citrus layered with soft musk"
            price="210"
          />

          <PerfumeMock
            name="Al Haramain Amber Oud"
            description="Intense oud blended with smoky woods"
            price="320"
          />

          <PerfumeMock
            name="Al Haramain Amber Oud"
            description="Sweet vanilla wrapped in dark amber"
            price="275"
          />
        </motion.div>

        {/* BUTTON */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <CustomButton variant="secondary-outline" size="lg">
            View all fragrances
          </CustomButton>
        </motion.div>

      </div>

    </section>
  );
};

export default Section3;