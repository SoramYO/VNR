"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"

const timelineEvents = [
  {
    year: "1965",
    title: "Hội nghị Trung ương lần thứ 11 & 12",
    description:
      'Đề ra đường lối kháng chiến chống Mỹ, cứu nước trên phạm vi toàn quốc. Mỹ chuyển sang chiến lược "Chiến tranh cục bộ".',
    color: "primary",
  },
  {
    year: "1968",
    title: "Tổng Tiến Công Xuân Mậu Thân",
    description:
      "Chủ trương táo bạo và sáng tạo, đánh thẳng vào ý chí xâm lược của Mỹ. Thất bại chiến lược có tính chất bước ngoặt của Mỹ.",
    color: "accent",
    highlight: true,
  },
  {
    year: "1969-1973",
    title: 'Chống "Việt Nam hóa chiến tranh"',
    description:
      'Kiên trì mục tiêu "Vì độc lập, vì tự do, đánh cho Mỹ cút, đánh cho ngụy nhào". Hiệp định Paris được ký kết (1973).',
    color: "primary",
  },
  {
    year: "1973",
    title: "Nghị quyết 21",
    description:
      "Khẳng định con đường cách mạng miền Nam là con đường bạo lực cách mạng. Chuẩn bị tiến lên hoàn toàn giải phóng miền Nam.",
    color: "primary",
  },
  {
    year: "1975",
    title: "Chiến Thắng Lịch Sử",
    description:
      "Sau chiến thắng Phước Long, quyết tâm giải phóng miền Nam ngay trong năm 1975. Chiến dịch Hồ Chí Minh thắng lợi hoàn toàn.",
    color: "accent",
    highlight: true,
  },
]

export function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="timeline" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Dòng Thời Gian Lịch Sử</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Các quyết sách chiến lược quan trọng từ 1965 đến 1975
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute top-8 left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10" />

                  <Card
                    className={`p-6 transition-all duration-300 ${
                      activeIndex === index ? "shadow-xl scale-105" : "shadow-md"
                    } ${event.highlight ? "border-2 border-primary" : ""}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center font-bold text-sm ${
                          event.color === "primary"
                            ? "bg-primary text-primary-foreground"
                            : "bg-accent text-accent-foreground"
                        }`}
                      >
                        {event.year}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
