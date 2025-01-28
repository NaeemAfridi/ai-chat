// src/components/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between gap-5">
        <div className="flex flex-col flex-1">
          <h2 className="text-2xl font-bold mb-4">JonTech</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex  flex-col flex-1 items-center">
          <h2 className="text-2xl font-bold mb-4">Usefull Links</h2>

          <a href="#" className="text-gray-400 hover:text-white">
            About Us
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Contact Us
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
        </div>

        <div className="flex flex-col flex-1 items-center">
          <h2 className="text-2xl font-bold mb-4">Address</h2>
          <p className="text-gray-400">123 Street Name, City, Country</p>
          <p className="text-gray-400">info@example.com</p>
          <p className="text-gray-400">123-456-7890</p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} JonTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
