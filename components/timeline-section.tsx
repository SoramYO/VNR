"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"
import { FileText, Rocket, Handshake, Scroll, Trophy } from "lucide-react"

const timelineEvents = [
  {
    year: "1965",
    title: "Đường lối kháng chiến chống Mỹ",
    description:
      'Hội nghị Trung ương 11 & 12: Đề ra đường lối kháng chiến toàn quốc. "Động viên lực lượng của cả nước, kiên quyết đánh bại cuộc chiến tranh xâm lược của đế quốc Mỹ".',
    color: "primary",
    icon: FileText,
  },
  {
    year: "1968",
    title: "Tổng Tiến Công Xuân Mậu Thân",
    description:
      "30-1-1968: Tổng công kích-tổng khởi nghĩa. Bước ngoặt chiến lược buộc Mỹ chấm dứt ném bom miền Bắc và chấp nhận đàm phán Paris.",
    color: "accent",
    highlight: true,
    icon: Rocket,
  },
  {
    year: "1973",
    title: "Hiệp định Paris",
    description:
      "27-1-1973: Ký 'Hiệp định chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam'. Nghị quyết 21: Nắm vững thời cơ, tiếp tục con đường cách mạng.",
    color: "primary",
    icon: Scroll,
  },
  {
    year: "1975",
    title: "Giải Phóng Hoàn Toàn",
    description:
      "30-4-1975: Chiến thắng hoàn toàn. 55 ngày đêm từ Tây Nguyên đến Sài Gòn. Cắm cờ trên Dinh Độc Lập, thống nhất đất nước.",
    color: "accent",
    highlight: true,
    icon: Trophy,
  },
]

export function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DÒNG THỜI GIAN LỊCH SỬ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Các quyết sách chiến lược quan trọng từ 1965 đến 1975
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon
                return (
                  <div
                    key={index}
                    className={`relative ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"}`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    {/* Timeline Dot */}
                    <div className={`hidden md:block absolute top-8 left-1/2 w-6 h-6 rounded-full -translate-x-1/2 ring-4 ring-background z-10 transition-all duration-300 ${
                      activeIndex === index 
                        ? event.color === "primary" 
                          ? "bg-primary scale-150 ring-primary/30" 
                          : "bg-accent scale-150 ring-accent/30"
                        : event.color === "primary"
                        ? "bg-primary"
                        : "bg-accent"
                    }`} />

                    <Card
                      className={`p-6 transition-all duration-300 ${
                        activeIndex === index ? "shadow-xl scale-105" : "shadow-md hover:shadow-lg"
                      } ${event.highlight ? "border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-transparent" : "border-2 border-transparent hover:border-primary/20"}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex-shrink-0 w-20 h-20 rounded-xl flex items-center justify-center shadow-lg transition-transform ${
                            activeIndex === index ? "scale-110" : ""
                          } ${
                            event.color === "primary"
                              ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
                              : "bg-gradient-to-br from-accent to-accent/80 text-accent-foreground"
                          }`}
                        >
                          {Icon ? (
                            <Icon className="w-10 h-10" />
                          ) : (
                            <span className="font-bold text-lg">{event.year}</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className={`text-xl font-bold ${event.highlight ? "text-primary" : ""}`}>{event.title}</h3>
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                              event.color === "primary"
                                ? "bg-primary/10 text-primary"
                                : "bg-accent/10 text-accent"
                            }`}>
                              {event.year}
                            </span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
