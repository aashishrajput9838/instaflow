export function FeaturesSection() {
  const features = [
    {
      title: 'Advanced Analytics',
      description: 'Advanced analytics delivers real-time insights, tracks performance, reveals trends, and helps optimize campaigns for faster, smarter decisions.',
      icon: '📊',
    },
    {
      title: 'Audience Growth Insights',
      description: 'Audience growth insights track trends, reveal engagement drivers, and help optimize content to attract, retain, and grow followers consistently.',
      icon: '📈',
    },
    {
      title: 'AI Playground',
      description: 'AI Playground leverages machine learning to automate analysis, generate insights, predict trends, and recommend content strategies.',
      icon: '🤖',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Marketing Tools Designed <br />
            for <span className="italic">Modern Teams</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Powerful features to help your marketing team manage, analyze, and grow your social media presence at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="group rounded-2xl border border-border bg-white p-8 hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
