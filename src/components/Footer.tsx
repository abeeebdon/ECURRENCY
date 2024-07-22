import { socialMedia } from '../data/Data'

const Footer = () => {
  return (
    <footer className="footer mt-[200px] p-4 text-white">
      <section className="w-full max-w-[1109px] mx-auto">
        <div className="w-full my-4 text-center">
          <img src="/images/logo2.png" alt="logo" className="mx-auto" />
          <h2>Sleepstiq</h2>
        </div>
        <article className="grid text-center md:text-left  grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 lg:gap-8 mx-auto">
          <div className="col-span-1">
            <h2 className="text-[16px] leading-[38px] font-[600]">COMPANY</h2>
            <div className="mt-6 text-[16px] leading-[40px] text-[#ABABAB]">
              <p>About</p>
              <p>Blog</p>
              <p>Contact</p>
              <p>Jobs</p>
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-[16px] leading-[38px] font-[600]">CONTACT</h2>
            <div className="mt-6 text-[16px] leading-[40px] text-[#ABABAB]">
              <p>Phone</p>
              <p className="text-white">+234 708 507 3128</p>
              <p>Address</p>
              <p className="text-white">Jobs</p>
            </div>
          </div>
          <div className="col-span-3 flex gap-4 ">
            <div>
              <h2 className="text-[16px] leading-[38px] font-[600]">
                CUSTOMER ADVISORY
              </h2>
              <p className="mt-6 paragraph">
                These statements have not been evaluated by the Food and Drug
                Administration. This product is not intended to diagnose, treat,
                cure, or prevent any disease. This product should be used only
                as directed on the label. All trademarks and copyrights are
                property of their respective owners and not affiliated with nor
                do they endorse this product. Results may vary.
              </p>
              <p className=" paragraph mt-6">
                By using our website or product, you agree to follow our{' '}
                <span className="text-primary">terms of service.</span>
              </p>
            </div>
            <p className="hidden lg:block  min-h-[50px] w-[1px] bg-white"></p>
          </div>
          <div className=" col-span-3 md:col-span-2 lg:col-span-2 w-full text-center lg:text-left ">
            <h2 className="text-[16px] leading-[38px] font-[600]">
              GET IN TOUCH
            </h2>
            <p className="text-[#ABABAB] paragraph mt-6 w-full">
              Feel free to get in touch with us vai email
            </p>
            <h3 className="text-[24px] leading-[38px] my-6 font-bold">
              hello@sleepstiq.com
            </h3>
            <div className="flex items-center gap-2  min-w-[200px]  mt-4 justify-center lg:justify-start w-full">
              {socialMedia.map((data) => {
                return (
                  <div className="p-2 rounded-full bg-[#8FE2FF]">
                    <img
                      src={`/icons/${data}.png`}
                      className="w-[20px] h-[20px]"
                    />
                  </div>
                )
              })}
            </div>
            <p className="mt-16 text-[14px] leading-[21px] text-[#ABABAB]">
              © 2020@sleepstiq. All Rights Reserved.
            </p>
          </div>
        </article>
      </section>
    </footer>
  )
}

export default Footer
