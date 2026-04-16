export function SocialProof() {
  const brands = [
    { name: 'Slack', logo: '💬' },
    { name: 'Dropbox', logo: '📦' },
    { name: 'Webflow', logo: '🌐' },
    { name: 'Spotify', logo: '🎵' },
    { name: 'Motorola', logo: '📱' },
  ]

  return (
    <section className="py-16 md:py-20 bg-white border-t border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground font-medium mb-8 uppercase tracking-wider">
          500+ businesses growing smarter with Sociafy
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
              <span className="text-2xl">{brand.logo}</span>
              <span className="font-semibold hidden sm:inline">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
