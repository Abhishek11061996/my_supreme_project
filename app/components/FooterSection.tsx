import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const footerLinks = {
    applications: ['Apparel', 'Automotive', 'Filtration', 'Customised Solution'],
    company: ['Innovation', 'Global Competency', 'About Us', 'Contact Us'],
    more: ['Career', 'Privacy Policy', 'Terms and Conditions'],
    followUs: ['Twitter', 'LinkedIn', 'Instagram', 'Medium']
  };

  return (
    <footer className="w-full bg-white">
      <div className="w-full flex justify-center px-4 py-28">
        <div className="w-full max-w-[988px] flex flex-col gap-[79px]">
          <div>
            <Image
              src="/assets/images/Supreme_logosFooter.png"
              alt="Supreme Group Logo"
              width={200}
              height={50}
              className="h-auto"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-manrope font-bold text-base uppercase mb-4 text-black">
                Application
              </h3>
              <ul className="space-y-1">
                {footerLinks.applications.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-manrope font-medium text-sm leading-[41px] text-gray-800 hover:text-gray-600 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-manrope font-bold text-base uppercase mb-4 text-black">
                Company
              </h3>
              <ul className="space-y-1">
                {footerLinks.company.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-manrope font-medium text-sm leading-[41px] text-gray-800 hover:text-gray-600 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-manrope font-bold text-base uppercase mb-4 text-black">
                More
              </h3>
              <ul className="space-y-1">
                {footerLinks.more.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-manrope font-medium text-sm leading-[41px] text-gray-800 hover:text-gray-600 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-manrope font-bold text-base uppercase mb-4 text-black">
                Follow Us
              </h3>
              <ul className="space-y-1">
                {footerLinks.followUs.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-manrope font-medium text-sm leading-[41px] text-gray-800 hover:text-gray-600 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6 gap-4">
            <p className="font-manrope font-medium text-sm text-gray-800 text-center md:text-left">
              ©2023. All Rights Reserved.
            </p>
            <p className="font-manrope font-medium text-sm text-gray-800 text-center md:text-right">
              Supreme house: 110, 16th Road, Chembur, Mumbai – 400071.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
