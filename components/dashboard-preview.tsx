'use client'

import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export function DashboardPreview() {
  const sentimentData = [
    { name: 'Positive', value: 72 },
    { name: 'Neutral', value: 20 },
    { name: 'Negative', value: 8 },
  ]

  const platformData = [
    { platform: 'Instagram', followers: 54000, engagement: 12300 },
    { platform: 'Facebook', followers: 38000, engagement: 8200 },
    { platform: 'TikTok', followers: 29000, engagement: 15100 },
  ]

  const colors = ['#e83e8c', '#fd7e14', '#20c997']

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Social Media Analytics Dashboard
          </h2>
          <p className="text-lg text-foreground/70">
            Track performance, engagement, and growth across all your social platforms in one unified workspace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="rounded-lg border border-border bg-white p-6">
            <div className="text-sm text-muted-foreground mb-1">Total Followers</div>
            <div className="text-3xl font-bold text-foreground">132,540</div>
            <div className="text-xs text-green-600 mt-2">↑ 12% this month</div>
          </div>
          <div className="rounded-lg border border-border bg-white p-6">
            <div className="text-sm text-muted-foreground mb-1">Total Engagement</div>
            <div className="text-3xl font-bold text-foreground">48,920</div>
            <div className="text-xs text-green-600 mt-2">↑ 8% this month</div>
          </div>
          <div className="rounded-lg border border-border bg-white p-6">
            <div className="text-sm text-muted-foreground mb-1">Total Reach</div>
            <div className="text-3xl font-bold text-foreground">1.8M</div>
            <div className="text-xs text-green-600 mt-2">↑ 15% this month</div>
          </div>
          <div className="rounded-lg border border-border bg-white p-6">
            <div className="text-sm text-muted-foreground mb-1">Total Impressions</div>
            <div className="text-3xl font-bold text-foreground">3.2M</div>
            <div className="text-xs text-green-600 mt-2">↑ 22% this month</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-lg border border-border bg-white p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Optimal Posting Time</h3>
            <div className="space-y-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                <div key={day} className="flex items-center gap-2">
                  <span className="text-xs font-medium w-8 text-muted-foreground">{day}</span>
                  <div className="flex gap-1 flex-1">
                    {Array(7).fill(0).map((_, j) => (
                      <div
                        key={j}
                        className="h-6 flex-1 rounded bg-gradient-to-b from-secondary/40 to-secondary/10"
                        style={{ opacity: 0.3 + (Math.random() * 0.7) }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-white p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Audience Sentiment</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2 text-sm">
              {sentimentData.map((item, i) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[i] }} />
                  <span className="text-foreground/70">{item.name}</span>
                  <span className="ml-auto font-semibold text-foreground">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-white p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Platform Performance</h3>
            <div className="space-y-4">
              {platformData.map((item) => (
                <div key={item.platform} className="space-y-1">
                  <div className="text-sm font-medium text-foreground">{item.platform}</div>
                  <div className="flex gap-2 text-xs text-foreground/70">
                    <span>{item.followers.toLocaleString()} Followers</span>
                    <span>•</span>
                    <span>{item.engagement.toLocaleString()} Engagement</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
