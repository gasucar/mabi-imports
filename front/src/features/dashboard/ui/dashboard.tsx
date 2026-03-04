import banner from "../../../assets/images/dashboard_banner.png";

const Dashboard = () => {
  return (
    <section
      className="relative h-[90vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        
        <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
          Find Your Perfect <br /> Arabic Fragrance
        </h1>

        <p className="mt-6 text-gray-200 text-base font-medium md:text-lg max-w-2xl mx-auto">
          Experience the art of scent through our intelligent AI perfumina.
          Curated for your unique personality and taste.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
            Talk to Perfumina AI
          </button>

          <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition">
            Shop Collection
          </button>
        </div>

      </div>
    </section>
  );
};

export default Dashboard;