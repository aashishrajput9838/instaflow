export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-foreground font-bold">
                S
              </div>
              <span className="text-xl font-bold">Sociafy</span>
            </div>
            <p className="text-white/70 text-sm">
              Advanced platform for social media growth and analytics. Manage, analyze, and grow smarter.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="https://wa.me/919319977285" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-white/70">
              © 2024 Sociafy. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                Twitter
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                Instagram
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
