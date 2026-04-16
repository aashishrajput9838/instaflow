export function InfluencerSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white via-pink-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Smart Platform for <span className="italic text-primary">Social Media Growth</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Track performance, analyze audience insights, and grow your social media presence with powerful data-driven tools.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">📊</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Performance Analytics</h3>
                  <p className="text-sm text-foreground/70">Real-time insights into content performance and audience engagement metrics.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">👥</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Audience Insights</h3>
                  <p className="text-sm text-foreground/70">Understand your audience demographics, interests, and engagement patterns.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">⏱️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Smart Scheduling</h3>
                  <p className="text-sm text-foreground/70">AI-powered recommendations for optimal posting times across platforms.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">🔗</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Multi-Platform Integration</h3>
                  <p className="text-sm text-foreground/70">Connect Instagram, Facebook, TikTok, LinkedIn, and more in one place.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-2xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/40 via-secondary/30 to-primary/20 p-8 aspect-square flex items-end">
              <div className="w-full">
                <div className="bg-gradient-to-b from-primary/60 to-secondary/40 rounded-2xl p-6 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Lassy Chester</h3>
                      <p className="text-white/70 text-sm">📍 Washington, USA</p>
                    </div>
                    <span className="text-lg">✓</span>
                  </div>
                  <div className="flex gap-3 mt-4 pt-4 border-t border-white/20">
                    <button className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white text-sm font-medium hover:bg-white/30 transition-colors">
                      📧 Content
                    </button>
                    <button className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white text-sm font-medium hover:bg-white/30 transition-colors">
                      📢 Campaign
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
