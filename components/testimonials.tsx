'use client'

import { useState } from 'react'

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'Glassier',
      quote: 'With scheduling posts to tracking performance, everything I need is in one place. This platform transformed how we manage social media.',
      avatar: '👩‍💼',
      color: 'from-pink-400 to-pink-600',
    },
    {
      name: 'Michael Chen',
      role: 'Social Media Manager',
      company: 'Budget Streak',
      quote: 'The analytics dashboard gives us the insights we need to make data-driven decisions. Our engagement has increased by 240%.',
      avatar: '👨‍💼',
      color: 'from-orange-400 to-orange-600',
    },
    {
      name: 'Emma Wilson',
      role: 'Content Strategist',
      company: 'Lassy Chester',
      quote: 'The AI recommendations for optimal posting times are incredibly accurate. We have cut our content planning time in half.',
      avatar: '👩‍🎨',
      color: 'from-purple-400 to-purple-600',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-pink-50/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="italic">Customers</span> Say
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover why leading marketing teams trust Sociafy to manage and grow their social media presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-2xl border border-border bg-white p-8 transition-all cursor-pointer ${
                activeIndex === index ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-2xl`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-foreground/70">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="flex gap-1 mt-4">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="text-primary">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
