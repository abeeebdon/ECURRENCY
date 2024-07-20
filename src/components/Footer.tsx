const Footer = () => {
  return (
    <footer className="footer mt-8 p-4 text-white">
      <div className="w-full  text-center">
        <img src="/images/logo2.png" alt="logo" className="mx-auto" />
        <h2>Sleepstiq</h2>
      </div>
      <article className="grid grid-cols-6 gap-4">
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
        <div className="col-span-2">
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
        <hr />
        <div className="col-span-2">
          <h2>GET IN TOUCH</h2>
          <p>Feel free to get in touch with us vai email</p>
          <h3>hello@sleepstiq.com</h3>
          <div></div>
          <p></p>
        </div>
      </article>
    </footer>
  )
}

export default Footer
