import { socialMedia } from '../data/Data'

const Footer = () => {
  return (
    <footer className="footer mt-[200px] p-4 text-white">
      <div className="w-full my-4 text-center">
        <img src="/images/logo2.png" alt="logo" className="mx-auto" />
        <h2>Sleepstiq</h2>
      </div>
      <article className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-4 mx-auto">
        <div className="col-span-1">
          <h2>Company</h2>
          <div>
            <p>About</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Jobs</p>
          </div>
        </div>
        <div className="col-span-1">
          <h2>Contact</h2>
          <div>
            <p>Phone</p>
            <p>+234 708 507 3128</p>
            <p>Address</p>
            <p>Jobs</p>
          </div>
        </div>
        <div className="col-span-2 ">
          <h2>Consumer Advisory</h2>
          <p>
            These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat,
            cure, or prevent any disease. This product should be used only as
            directed on the label. All trademarks and copyrights are property of
            their respective owners and not affiliated with nor do they endorse
            this product. Results may vary.
          </p>
          <p>
            By using our website or product, you agree to follow our{' '}
            <a>terms of service.</a>
          </p>
        </div>
        <p className="hidden lg:block  min-h-[50px] w-[1px] bg-white"></p>
        <div className="col-span-2">
          <h2>GET IN TOUCH</h2>
          <p>Feel free to get in touch with us vai email</p>
          <h3>hello@sleepstiq.com</h3>
          <div className="flex items-center gap-4 my-4">
            {socialMedia.map((data) => {
              return (
                <div className="p-3 rounded-full bg-[#8FE2FF]">
                  <img
                    src={`/icons/${data}.png`}
                    className="w-[20px] h-[20px]"
                  />
                </div>
              )
            })}
          </div>
          <p></p>
        </div>
      </article>
    </footer>
  )
}

export default Footer
