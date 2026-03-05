import {
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-8 px-8 md:px-16 lg:px-24 w-full">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 mb-16">
          {/* Brand & Description Section */}
          <div className="md:w-1/3">
            <h2 className="text-xl font-bold mb-6">
              CS <span className="opacity-80">—</span> Ticket System
            </h2>
            <p className="text-[#8e8e8e] text-sm leading-relaxed max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Links Sections Container */}
          <div className="flex flex-wrap md:flex-nowrap justify-between gap-12 md:gap-16 lg:gap-24 md:w-2/3">
            <div className="flex flex-col">
              <h3 className="text-base font-semibold mb-6">Company</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="#"
                    className="text-[#8e8e8e] hover:text-white transition-colors text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#8e8e8e] hover:text-white transition-colors text-sm"
                  >
                    Our Mission
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#8e8e8e] hover:text-white transition-colors text-sm"
                  >
                    Contact Saled
                  </a>
                </li>
              </ul>
            </div>

            {/* Services Links */}
            <div className="flex flex-col">
              <h3 className="text-base font-semibold mb-6">Services</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="#"
                    className="text-[#8e8e8e] hover:text-white transition-colors text-sm"
                  >
                    Products & Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#8e8e8e] hover:text-white transition-colors text-sm"
                  >
                    Customer Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#8e8e8e] hover:text-white transition-colors text-sm"
                  >
                    Download Apps
                  </a>
                </li>
              </ul>
            </div>

            {/* Information Links */}
            <div className="flex flex-col">
              <h3 className="text-base font-semibold mb-6">Information</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="#"
                    className="text-[#8e8e8e] hover:text-white transition-colors text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#8e8e8e] hover:text-white transition-colors text-sm"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#8e8e8e] hover:text-white transition-colors text-sm"
                  >
                    Join Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex flex-col">
              <h3 className="text-base font-semibold mb-6">Social Links</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="#"
                    className="text-[#8e8e8e] hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black text-[10px]">
                      <FaXTwitter />
                    </div>
                    @CS — Ticket System
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#8e8e8e] hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black text-[10px]">
                      <FaLinkedinIn />
                    </div>
                    @CS — Ticket System
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#8e8e8e] hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black text-[10px]">
                      <FaFacebookF />
                    </div>
                    @CS — Ticket System
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@cst.com"
                    className="text-[#8e8e8e] hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black text-[10px]">
                      <FaEnvelope />
                    </div>
                    support@cst.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Divider & Copyright */}
        <div className="border-t border-[#1a1a1a] pt-8 flex justify-center items-center">
          <p className="text-[#8e8e8e] text-sm">
            © 2026 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
