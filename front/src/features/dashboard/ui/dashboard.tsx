import banner from "../../../assets/images/dashboard_banner.png";
import CustomButton from "../../../shared/ui/buttons/custom_button";

const Dashboard = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
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

        <div className="mt-8 flex flex-col sm:flex-row gap-8 justify-center">
          <CustomButton variant="primary" size="lg">
            Talk to Perfumina AI
          </CustomButton>
          <CustomButton variant="outline" size="lg">
            Go catalog
          </CustomButton>
        </div>

      </div>
    </section>
  );
};

export default Dashboard;