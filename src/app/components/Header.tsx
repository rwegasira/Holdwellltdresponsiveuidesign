import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onRequestService: () => void;
  onExploreProducts: () => void;
}

export function Header({ onRequestService, onExploreProducts }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('home')} className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#008000] rounded-lg flex items-center justify-center">
                  <span className="text-white font-['Montserrat'] text-xl">H</span>
                </div>
                <span className="text-[#333333] font-['Montserrat'] text-xl hidden sm:inline">
                  Holdwell LTD
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-[#333333] hover:text-[#008000] transition-colors font-['Lora']"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#333333] hover:text-[#008000] transition-colors font-['Lora']"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#333333] hover:text-[#008000] transition-colors font-['Lora']"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-[#333333] hover:text-[#008000] transition-colors font-['Lora']"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-[#333333] hover:text-[#008000] transition-colors font-['Lora']"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#333333] hover:text-[#008000] transition-colors font-['Lora']"
            >
              Contact Us
            </button>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onExploreProducts}
              className="px-6 py-2.5 border-2 border-[#008000] text-[#008000] rounded-lg hover:bg-[#008000] hover:text-white transition-all duration-300 font-['Montserrat']"
            >
              Explore Products
            </button>
            <button
              onClick={onRequestService}
              className="px-6 py-2.5 bg-[#008000] text-white rounded-lg hover:bg-[#006600] hover:shadow-lg transition-all duration-300 font-['Montserrat']"
            >
              Request Service
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#333333] hover:text-[#008000] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-3 text-[#333333] hover:bg-gray-50 hover:text-[#008000] transition-colors rounded-lg font-['Lora']"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 text-[#333333] hover:bg-gray-50 hover:text-[#008000] transition-colors rounded-lg font-['Lora']"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-3 text-[#333333] hover:bg-gray-50 hover:text-[#008000] transition-colors rounded-lg font-['Lora']"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left px-4 py-3 text-[#333333] hover:bg-gray-50 hover:text-[#008000] transition-colors rounded-lg font-['Lora']"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="block w-full text-left px-4 py-3 text-[#333333] hover:bg-gray-50 hover:text-[#008000] transition-colors rounded-lg font-['Lora']"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 text-[#333333] hover:bg-gray-50 hover:text-[#008000] transition-colors rounded-lg font-['Lora']"
            >
              Contact Us
            </button>
            <div className="pt-4 space-y-3">
              <button
                onClick={onExploreProducts}
                className="w-full px-6 py-3 border-2 border-[#008000] text-[#008000] rounded-lg hover:bg-[#008000] hover:text-white transition-all duration-300 font-['Montserrat']"
              >
                Explore Products
              </button>
              <button
                onClick={onRequestService}
                className="w-full px-6 py-3 bg-[#008000] text-white rounded-lg hover:bg-[#006600] hover:shadow-lg transition-all duration-300 font-['Montserrat']"
              >
                Request Service
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
