const FooterSection = () => {
  return (
    <footer className="py-20 px-6 bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="editorial-subheadline text-2xl mb-6">4SEASONS</h3>
            <p className="editorial-body">
              Editorial fashion for the conscious minimalist.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="editorial-caption mb-6">Collections</h4>
            <nav className="space-y-3">
              {['Spring', 'Summer', 'Autumn', 'Winter'].map((season) => (
                <a 
                  key={season}
                  href="#" 
                  className="block editorial-body hover:text-accent-foreground/70 transition-colors duration-200"
                >
                  {season}
                </a>
              ))}
            </nav>
          </div>

          {/* About */}
          <div>
            <h4 className="editorial-caption mb-6">About</h4>
            <nav className="space-y-3">
              {['Our Story', 'Sustainability', 'Craftsmanship', 'Press'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="block editorial-body hover:text-accent-foreground/70 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="editorial-caption mb-6">Connect</h4>
            <div className="space-y-3">
              <p className="editorial-body">Newsletter</p>
              <p className="editorial-body">contact@4seasons.com</p>
              <div className="flex space-x-4 mt-6">
                {['IG', 'TW', 'FB'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="editorial-caption hover:text-accent-foreground/70 transition-colors duration-200"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="editorial-caption">© 2024 4SEASONS. All rights reserved.</p>
            <div className="flex space-x-6">
              {['Privacy', 'Terms', 'Cookies'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="editorial-caption hover:text-accent-foreground/70 transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;