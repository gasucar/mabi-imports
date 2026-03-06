const Navbar = () => {
  return (
    <nav className="bg-[#e2e2e2] text-black p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
            <div className="text-2xl font-semibold uppercase font-serif">mabi imports</div>
            <div className="w-139.5 flex justify-between font-medium text-sm">
                <a href="/" className="">Catalog</a>
                <a href="/" className="">Perfumina AI</a>
                <a href="/about" className="">About</a>
                <a href="/contact" className="">Contact</a>
            </div>
            <div className="w-24.5 flex justify-between text-sm">
                <a href="/" className="">🔍</a>
                <a href="/" className="">🛒</a>
                <a href="/about" className="">🙍</a>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;