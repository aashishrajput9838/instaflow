export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Ready to Transform Your Social Media Strategy?
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 mb-10">
          Join hundreds of marketing teams that are already using Sociafy to grow their social media presence and make data-driven decisions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:opacity-90 transition-opacity">
            Start Free Trial Today
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-primary text-primary font-bold text-lg hover:bg-primary/5 transition-colors">
            Schedule Demo
          </button>
        </div>
        <p className="text-sm text-muted-foreground mt-6">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  )
}
