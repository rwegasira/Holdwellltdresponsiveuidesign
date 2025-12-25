import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#333333] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#008000] rounded-lg flex items-center justify-center">
                <span className="text-white font-['Montserrat'] text-xl">H</span>
              </div>
              <span className="text-white font-['Montserrat'] text-xl">Holdwell LTD</span>
            </div>
            <p className="text-gray-300 font-['Lora'] mb-6">
              Professional consulting and services that help brands, institutions, and individuals
              communicate clearly.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#008000] rounded-full flex items-center justify-center hover:bg-[#FFD700] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#008000] rounded-full flex items-center justify-center hover:bg-[#FFD700] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#008000] rounded-full flex items-center justify-center hover:bg-[#FFD700] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Montserrat'] mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-[#FFD700] transition-colors font-['Lora']"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-gray-300 hover:text-[#FFD700] transition-colors font-['Lora']"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="text-gray-300 hover:text-[#FFD700] transition-colors font-['Lora']"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-[#FFD700] transition-colors font-['Lora']"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-[#FFD700] transition-colors font-['Lora']"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-['Montserrat'] mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#008000] flex-shrink-0 mt-1" />
                <a
                  href="tel:+255792178828"
                  className="text-gray-300 hover:text-[#FFD700] transition-colors font-['Lora']"
                >
                  +255 792 178 828
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#008000] flex-shrink-0 mt-1" />
                <a
                  href="mailto:info@holdwell.co.tz"
                  className="text-gray-300 hover:text-[#FFD700] transition-colors font-['Lora']"
                >
                  info@holdwell.co.tz
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#008000] flex-shrink-0 mt-1" />
                <span className="text-gray-300 font-['Lora']">
                  Dar es Salaam, Tanzania
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-['Montserrat'] mb-6">Newsletter</h3>
            <p className="text-gray-300 font-['Lora'] mb-4">
              Stay updated with our latest insights and offerings.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-[#444444] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#008000] transition-colors font-['Lora']"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#008000] text-white rounded-lg hover:bg-[#FFD700] hover:text-[#333333] transition-all duration-300 font-['Montserrat']"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-['Lora']">
            © {new Date().getFullYear()} Holdwell LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
