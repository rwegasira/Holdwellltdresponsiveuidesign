import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {
  Target,
  Shield,
  TrendingUp,
  Lightbulb,
  Languages,
  Megaphone,
  Briefcase,
  Users,
  BookOpen,
  Smartphone,
  Glasses,
  PenTool,
  Leaf,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleRequestService = () => {
    scrollToSection('contact');
  };

  const handleExploreProducts = () => {
    scrollToSection('products');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        onRequestService={handleRequestService}
        onExploreProducts={handleExploreProducts}
      />

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-[#f8f9fa] to-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-['Montserrat'] text-4xl sm:text-5xl lg:text-6xl text-[#333333]">
                We Help Brands, Institutions & Individuals{' '}
                <span className="text-[#008000]">Communicate Clearly</span>
              </h1>
              <p className="font-['Lora'] text-lg lg:text-xl text-gray-600">
                Strategic consulting, products, and services that move you forward
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleRequestService}
                  className="px-8 py-4 bg-[#008000] text-white rounded-lg hover:bg-[#006600] hover:shadow-lg transition-all duration-300 font-['Montserrat']"
                >
                  Request Service
                </button>
                <button
                  onClick={handleExploreProducts}
                  className="px-8 py-4 border-2 border-[#008000] text-[#008000] rounded-lg hover:bg-[#008000] hover:text-white transition-all duration-300 font-['Montserrat']"
                >
                  Explore Products
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1683770997177-0603bd44d070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2NjY2MDAzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional team collaboration"
                className="rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#008000] rounded-2xl opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FFD700] rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Holdwell Section */}
      <section id="about" className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl text-[#333333] mb-4">
              Why Choose <span className="text-[#008000]">Holdwell</span>
            </h2>
            <p className="font-['Lora'] text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver results that matter through proven expertise and strategic thinking
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#008000] hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#008000] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FFD700] transition-colors duration-300">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="font-['Montserrat'] text-xl text-[#333333] mb-3">Clarity</h3>
              <p className="font-['Lora'] text-gray-600">
                Communicate your vision with precision, avoiding misunderstandings.
              </p>
            </div>

            <div className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#008000] hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#008000] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FFD700] transition-colors duration-300">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="font-['Montserrat'] text-xl text-[#333333] mb-3">Trust</h3>
              <p className="font-['Lora'] text-gray-600">
                Build credibility with your audience through professional execution.
              </p>
            </div>

            <div className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#008000] hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#008000] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FFD700] transition-colors duration-300">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="font-['Montserrat'] text-xl text-[#333333] mb-3">Growth</h3>
              <p className="font-['Lora'] text-gray-600">
                Scale your business, brand, and personal impact strategically.
              </p>
            </div>

            <div className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#008000] hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#008000] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FFD700] transition-colors duration-300">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h3 className="font-['Montserrat'] text-xl text-[#333333] mb-3">Strategy</h3>
              <p className="font-['Lora'] text-gray-600">
                Use proven methods that deliver measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-gradient-to-br from-[#f8f9fa] to-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl text-[#333333] mb-4">
              Our <span className="text-[#008000]">Services</span>
            </h2>
            <p className="font-['Lora'] text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to elevate your brand and message
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <img
                src="https://images.unsplash.com/photo-1673515336170-3bf951ddb5a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc2xhdGlvbiUyMGxhbmd1YWdlJTIwc2VydmljZXN8ZW58MXx8fHwxNzY2NjY4OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Language Services"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-8">
                <div className="w-14 h-14 bg-[#008000] rounded-xl flex items-center justify-center mb-4">
                  <Languages className="text-white" size={28} />
                </div>
                <h3 className="font-['Montserrat'] text-2xl text-[#333333] mb-3">
                  Language Services
                </h3>
                <p className="font-['Lora'] text-gray-600 mb-6">
                  Professional translation, interpretation, voiceover services, language lessons,
                  and equipment hire. Break down language barriers and connect with global
                  audiences.
                </p>
                <button
                  onClick={handleRequestService}
                  className="inline-flex items-center gap-2 text-[#008000] hover:text-[#006600] font-['Montserrat'] group/btn"
                >
                  Request Service
                  <ArrowRight
                    size={20}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <img
                src="https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBjb250ZW50JTIwY3JlYXRpb258ZW58MXx8fHwxNzY2NjY4OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Marketing & Content"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-8">
                <div className="w-14 h-14 bg-[#008000] rounded-xl flex items-center justify-center mb-4">
                  <Megaphone className="text-white" size={28} />
                </div>
                <h3 className="font-['Montserrat'] text-2xl text-[#333333] mb-3">
                  Marketing & Content
                </h3>
                <p className="font-['Lora'] text-gray-600 mb-6">
                  Social media management, billboard advertising, magazine publishing, and expert
                  copywriting. Amplify your message and reach your target audience effectively.
                </p>
                <button
                  onClick={handleRequestService}
                  className="inline-flex items-center gap-2 text-[#008000] hover:text-[#006600] font-['Montserrat'] group/btn"
                >
                  Request Service
                  <ArrowRight
                    size={20}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <img
                src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzY2NjEzMDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business Promotion"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-8">
                <div className="w-14 h-14 bg-[#008000] rounded-xl flex items-center justify-center mb-4">
                  <Briefcase className="text-white" size={28} />
                </div>
                <h3 className="font-['Montserrat'] text-2xl text-[#333333] mb-3">
                  Business Promotion
                </h3>
                <p className="font-['Lora'] text-gray-600 mb-6">
                  Project writeups, short courses, seminars, and online application assistance.
                  Promote your business initiatives and unlock new opportunities.
                </p>
                <button
                  onClick={handleRequestService}
                  className="inline-flex items-center gap-2 text-[#008000] hover:text-[#006600] font-['Montserrat'] group/btn"
                >
                  Request Service
                  <ArrowRight
                    size={20}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <img
                src="https://images.unsplash.com/photo-1761039808584-ece726074e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wbWVudCUyMHRyYWluaW5nfGVufDF8fHx8MTc2NjY2ODk3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional Development"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-8">
                <div className="w-14 h-14 bg-[#008000] rounded-xl flex items-center justify-center mb-4">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="font-['Montserrat'] text-2xl text-[#333333] mb-3">
                  Personality & Professional Development
                </h3>
                <p className="font-['Lora'] text-gray-600 mb-6">
                  Seminars, specialized courses, and personal branding services. Develop your
                  professional presence and enhance your personal brand.
                </p>
                <button
                  onClick={handleRequestService}
                  className="inline-flex items-center gap-2 text-[#008000] hover:text-[#006600] font-['Montserrat'] group/btn"
                >
                  Request Service
                  <ArrowRight
                    size={20}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl text-[#333333] mb-4">
              Our <span className="text-[#008000]">Products</span>
            </h2>
            <p className="font-['Lora'] text-lg text-gray-600 max-w-3xl mx-auto">
              Innovative solutions designed to enhance your lifestyle and business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#008000] hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1572017436980-94e258a8b72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdhemluZSUyMHB1YmxpY2F0aW9uJTIwcmVhZGluZ3xlbnwxfHx8fDE3NjY2Njg5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Beholder Magazine"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-[#008000] rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h3 className="font-['Montserrat'] text-xl text-[#333333] mb-3">
                  Beholder Magazine
                </h3>
                <p className="font-['Lora'] text-gray-600 mb-6">
                  Monthly subscription magazine exploring history, science, religion, and emerging
                  technologies.
                </p>
                <button className="w-full px-6 py-3 bg-[#008000] text-white rounded-lg hover:bg-[#006600] hover:shadow-lg transition-all duration-300 font-['Montserrat']">
                  Subscribe Now
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#008000] hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1730817403162-83d5094480ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBwaG9uZXxlbnwxfHx8fDE3NjY2NDg0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="HoldApp"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-[#008000] rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="text-white" size={24} />
                </div>
                <h3 className="font-['Montserrat'] text-xl text-[#333333] mb-3">HoldApp</h3>
                <p className="font-['Lora'] text-gray-600 mb-6">
                  Secure fundraising app for weddings, funerals, birthdays, and community events.
                </p>
                <button className="w-full px-6 py-3 bg-[#008000] text-white rounded-lg hover:bg-[#006600] hover:shadow-lg transition-all duration-300 font-['Montserrat']">
                  Download App
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#008000] hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1584541984229-f5150426225e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVnbGFzc2VzJTIwYmx1ZSUyMGxpZ2h0fGVufDF8fHx8MTc2NjY2ODk3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Lumivue Eyewear"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-[#008000] rounded-lg flex items-center justify-center mb-4">
                  <Glasses className="text-white" size={24} />
                </div>
                <h3 className="font-['Montserrat'] text-xl text-[#333333] mb-3">
                  Lumivue by Holdwell
                </h3>
                <p className="font-['Lora'] text-gray-600 mb-6">
                  Blue-light filtering eyewear that protects eyes and enhances style.
                </p>
                <button className="w-full px-6 py-3 bg-[#008000] text-white rounded-lg hover:bg-[#006600] hover:shadow-lg transition-all duration-300 font-['Montserrat']">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#008000] hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1645027718562-54414cd86f5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NjY2Njg5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hold'em Blog"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-[#008000] rounded-lg flex items-center justify-center mb-4">
                  <PenTool className="text-white" size={24} />
                </div>
                <h3 className="font-['Montserrat'] text-xl text-[#333333] mb-3">
                  Hold'em Blog
                </h3>
                <p className="font-['Lora'] text-gray-600 mb-6">
                  Interactive blog on money, relationships, culture, mind power, politics, and
                  human behavior.
                </p>
                <button className="w-full px-6 py-3 bg-[#008000] text-white rounded-lg hover:bg-[#006600] hover:shadow-lg transition-all duration-300 font-['Montserrat']">
                  Read Blog
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#008000] hover:shadow-xl transition-all duration-300 group md:col-span-2 lg:col-span-1">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1666068467131-2c8a03ca84cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBwbGFudHMlMjBpbmRvb3J8ZW58MXx8fHwxNzY2NjY4OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Tree to Five"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-[#008000] rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="text-white" size={24} />
                </div>
                <h3 className="font-['Montserrat'] text-xl text-[#333333] mb-3">
                  Tree to Five
                </h3>
                <p className="font-['Lora'] text-gray-600 mb-6">
                  Promoting indoor plants in offices for air quality, stress management, and
                  productivity.
                </p>
                <button className="w-full px-6 py-3 bg-[#008000] text-white rounded-lg hover:bg-[#006600] hover:shadow-lg transition-all duration-300 font-['Montserrat']">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#008000] to-[#006600]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              How We <span className="text-[#FFD700]">Work</span>
            </h2>
            <p className="font-['Lora'] text-lg text-white/90 max-w-3xl mx-auto">
              Our proven process ensures excellence at every step
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-['Montserrat'] text-3xl text-[#008000]">1</span>
              </div>
              <h3 className="font-['Montserrat'] text-2xl text-white">Understand</h3>
              <p className="font-['Lora'] text-white/80">
                We listen carefully to your needs, goals, and challenges to create a clear picture
                of success.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-['Montserrat'] text-3xl text-[#008000]">2</span>
              </div>
              <h3 className="font-['Montserrat'] text-2xl text-white">Strategize</h3>
              <p className="font-['Lora'] text-white/80">
                We develop a customized strategy that aligns with your objectives and maximizes
                impact.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-['Montserrat'] text-3xl text-[#008000]">3</span>
              </div>
              <h3 className="font-['Montserrat'] text-2xl text-white">Execute</h3>
              <p className="font-['Lora'] text-white/80">
                Our expert team implements the plan with precision, quality, and attention to
                detail.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-['Montserrat'] text-3xl text-[#008000]">4</span>
              </div>
              <h3 className="font-['Montserrat'] text-2xl text-white">Review & Refine</h3>
              <p className="font-['Lora'] text-white/80">
                We measure results, gather feedback, and continuously improve for optimal outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl text-[#333333] mb-4">
              Latest from Our <span className="text-[#008000]">Blog</span>
            </h2>
            <p className="font-['Lora'] text-lg text-gray-600 max-w-3xl mx-auto">
              Insights, strategies, and stories to help you grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#008000] hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzY2NjEzMDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Blog post"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-['Lora']">
                  <span>December 20, 2024</span>
                  <span>•</span>
                  <span>Business</span>
                </div>
                <h3 className="font-['Montserrat'] text-xl text-[#333333] mb-3">
                  5 Strategies to Scale Your Business in Tanzania
                </h3>
                <p className="font-['Lora'] text-gray-600 mb-4">
                  Discover practical strategies that successful businesses use to scale operations
                  and increase profitability in the East African market.
                </p>
                <button className="inline-flex items-center gap-2 text-[#008000] hover:text-[#006600] font-['Montserrat'] group/btn">
                  Read More
                  <ArrowRight
                    size={18}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </article>

            <article className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#008000] hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBjb250ZW50JTIwY3JlYXRpb258ZW58MXx8fHwxNzY2NjY4OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Blog post"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-['Lora']">
                  <span>December 18, 2024</span>
                  <span>•</span>
                  <span>Marketing</span>
                </div>
                <h3 className="font-['Montserrat'] text-xl text-[#333333] mb-3">
                  The Power of Personal Branding in Professional Growth
                </h3>
                <p className="font-['Lora'] text-gray-600 mb-4">
                  Learn how developing a strong personal brand can open doors to new opportunities
                  and accelerate your career progression.
                </p>
                <button className="inline-flex items-center gap-2 text-[#008000] hover:text-[#006600] font-['Montserrat'] group/btn">
                  Read More
                  <ArrowRight
                    size={18}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </article>

            <article className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#008000] hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1673515336170-3bf951ddb5a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc2xhdGlvbiUyMGxhbmd1YWdlJTIwc2VydmljZXN8ZW58MXx8fHwxNzY2NjY4OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Blog post"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-['Lora']">
                  <span>December 15, 2024</span>
                  <span>•</span>
                  <span>Communication</span>
                </div>
                <h3 className="font-['Montserrat'] text-xl text-[#333333] mb-3">
                  Breaking Language Barriers in Global Business
                </h3>
                <p className="font-['Lora'] text-gray-600 mb-4">
                  Explore how professional language services can help businesses expand
                  internationally and connect with diverse audiences.
                </p>
                <button className="inline-flex items-center gap-2 text-[#008000] hover:text-[#006600] font-['Montserrat'] group/btn">
                  Read More
                  <ArrowRight
                    size={18}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-[#f8f9fa] to-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl text-[#333333] mb-4">
              Ready to Get <span className="text-[#008000]">Started?</span>
            </h2>
            <p className="font-['Lora'] text-lg text-gray-600 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve your goals
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#333333] mb-2 font-['Montserrat']">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#008000] focus:outline-none transition-colors font-['Lora']"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[#333333] mb-2 font-['Montserrat']">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#008000] focus:outline-none transition-colors font-['Lora']"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#333333] mb-2 font-['Montserrat']">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#008000] focus:outline-none transition-colors font-['Lora']"
                    placeholder="+255 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-[#333333] mb-2 font-['Montserrat']">
                    Service Interested In
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#008000] focus:outline-none transition-colors font-['Lora']">
                    <option>Language Services</option>
                    <option>Marketing & Content</option>
                    <option>Business Promotion</option>
                    <option>Professional Development</option>
                    <option>Products</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#333333] mb-2 font-['Montserrat']">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#008000] focus:outline-none transition-colors font-['Lora']"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#008000] text-white rounded-lg hover:bg-[#006600] hover:shadow-lg transition-all duration-300 font-['Montserrat']"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="w-14 h-14 bg-[#008000] rounded-xl flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="text-white" size={28} />
                    </div>
                    <p className="font-['Montserrat'] text-[#333333]">Quick Response</p>
                    <p className="text-sm text-gray-600 font-['Lora']">Within 24 hours</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-14 h-14 bg-[#008000] rounded-xl flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="text-white" size={28} />
                    </div>
                    <p className="font-['Montserrat'] text-[#333333]">Free Consultation</p>
                    <p className="text-sm text-gray-600 font-['Lora']">No obligation</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-14 h-14 bg-[#008000] rounded-xl flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="text-white" size={28} />
                    </div>
                    <p className="font-['Montserrat'] text-[#333333]">Expert Guidance</p>
                    <p className="text-sm text-gray-600 font-['Lora']">Personalized advice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
