import React from 'react';

const ContactSection = () => {
  return (
    <section className="flex justify-center items-center py-16 px-4 bg-[#0067B1]">
      <div className="w-full max-w-[1362px] min-h-[609px] bg-[#0067B1] rounded-[10px] flex flex-col lg:flex-row">
        {/* Left Side - Contact Information */}
        <div className="w-full lg:w-1/2 p-8 lg:p-[88px_132px]">
          <div className="flex flex-col gap-8 text-white">
            <div>
              <h2 className="font-manrope font-semibold text-3xl md:text-4xl lg:text-[48px] leading-[1.2] whitespace-nowrap text-white">
                Get in touch
              </h2>
              <div className="w-12 border-t-[3px] border-white my-4"></div>
              <p className="font-manrope font-normal text-xl lg:text-2xl leading-[1.2] text-white">
                For general enquiries
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-manrope font-semibold text-lg lg:text-xl leading-[1.2] text-white mb-2">
                  Address :
                </h3>
                <p className="font-manrope font-normal text-lg lg:text-xl leading-[1.2] whitespace-nowrap text-white">
                  110, 16th Road, Chembur, Mumbai – 400071
                </p>
              </div>

              <div>
                <h3 className="font-manrope font-semibold text-lg lg:text-xl leading-[1.2] text-white mb-2">
                  Phone :
                </h3>
                <p className="font-manrope font-normal text-lg lg:text-xl leading-[1.2] text-white">
                  +91 22 25208822
                </p>
              </div>

              <div>
                <h3 className="font-manrope font-semibold text-lg lg:text-xl leading-[1.2] text-white mb-2">
                  Email :
                </h3>
                <p className="font-manrope font-normal text-lg lg:text-xl leading-[1.2] text-white">
                  info@supremegroup.co.in
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-[88px_132px] bg-[#0067B1] rounded-b-[10px] lg:rounded-bl-none lg:rounded-r-[10px]">
          <form className="flex flex-col gap-8 h-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="sr-only">
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Full name"
                className="border-b border-gray-300 py-2 outline-none bg-transparent placeholder:text-[#FFFFFF] text-[#FFFFFF] font-manrope font-normal text-base md:text-lg lg:text-[20px] leading-[1.2]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="sr-only">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                className="border-b border-gray-300 py-2 outline-none bg-transparent placeholder:text-[#FFFFFF] text-[#FFFFFF] font-manrope font-normal text-base md:text-lg lg:text-[20px] leading-[1.2]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="border-b border-gray-300 py-2 outline-none bg-transparent placeholder:text-[#FFFFFF] text-[#FFFFFF] font-manrope font-normal text-base md:text-lg lg:text-[20px] leading-[1.2]"
              />
            </div>

            <div className="flex flex-col gap-2 flex-grow">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <input
                type="text"
                id="message"
                placeholder="Message"
                className="border-b border-gray-300 py-2 outline-none bg-transparent placeholder:text-[#FFFFFF] text-[#FFFFFF] font-manrope font-normal text-base md:text-lg lg:text-[20px] leading-[1.2]"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-[141px] h-[50px] rounded-[100px] border border-[#0067B1] bg-white text-[#000000] font-manrope font-semibold text-base md:text-lg lg:text-[20px] px-[30px] py-[10px] mt-[20px] lg:mt-[49px] transition-colors duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;