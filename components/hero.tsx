export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-50/50 via-white to-white py-20 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 h-96 w-96 rounded-full bg-gradient-to-b from-primary/20 to-secondary/10 blur-3xl" />
        <div className="absolute -left-1/4 top-1/3 h-80 w-80 rounded-full bg-gradient-to-r from-secondary/15 to-transparent blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-3xl px-4 text-center">
        <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          ✦ Manage Your Social Growth
        </div>

        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl text-foreground">
          Advanced Platform for{' '}
          <span className="italic text-primary">Social Media</span> Growth &{' '}
          <span className="italic text-primary">Analytics</span>
        </h1>

        <p className="mb-8 text-lg text-foreground/70 md:text-xl">
          Track performance, analyze audience insights, and grow your social media presence with powerful data-driven tools.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <div className="relative w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-6 py-3 rounded-full border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 sm:w-64"
            />
          </div>
          <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
            Start Free Trial
          </button>
        </div>

        <div className="relative aspect-video w-full max-w-2xl mx-auto rounded-2xl overflow-hidden border border-border bg-white shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent" />
          <div className="h-full w-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-muted-foreground mb-2">📊</div>
              <p className="text-muted-foreground">Dashboard Preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
