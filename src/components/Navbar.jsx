export default function Navbar() {
  return(
     <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img src="/bat.png" alt="Alucart" className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
          </div>
          <span className="text-lg sm:text-xl md:text-2xl font-medium">
            <span className="text-white">Alu</span>
            <span className="text-red-500">Cart</span>
          </span>

        {/* Nav Links */}
        <div className="flex item-center space-x-6 lg:space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white text-sm lg:text-base">Features</a>
          <a href="#pricing" className="text-gray-300 hover:text-white text-sm lg:text-base">Pricing</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white text-sm lg:text-base">Testimonials</a>
        </div>
        </div>
      </div>
    </nav>
  );
}