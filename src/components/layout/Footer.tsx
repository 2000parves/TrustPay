import { Wallet, ArrowRight, Send, Shield, Zap } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", href: "/faq" },
        { name: "Help Center", href: "/help" },
        { name: "Contact Us", href: "/contact" },
        { name: "Status", href: "/status" },
      ],
    },
  ];

  const features = [
    {
      icon: <Shield className="h-5 w-5 text-blue-400" />,
      text: "Bank-level Security",
    },
    {
      icon: <Zap className="h-5 w-5 text-blue-400" />,
      text: "Lightning Fast",
    },
    {
      icon: <Send className="h-5 w-5 text-blue-400" />,
      text: "Instant Transfers",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 pt-16 pb-8 px-4">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                className="p-2 rounded-lg bg-blue-600/20 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Wallet className="h-8 w-8 text-blue-400" />
              </motion.div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                TrustPay
              </h2>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The future of digital payments, secure, fast, and available today.
              Join thousands of satisfied users worldwide.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {feature.icon}
                  <span className="text-sm text-gray-400">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-white font-semibold text-lg">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <Link
                      to={link.href}
                      className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {currentYear} TrustPay. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://parvesmosarof.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Designed by Parves Mosarof
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
