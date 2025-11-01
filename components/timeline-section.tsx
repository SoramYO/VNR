"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"
import { FileText, Rocket, Handshake, Scroll, Trophy } from "lucide-react"

const timelineEvents = [
  {
    year: "1965",
    title: "Hội nghị Trung ương lần thứ 11 & 12",
    description:
      'Tháng 3 và tháng 12-1965: Đề ra đường lối kháng chiến chống Mỹ, cứu nước trên phạm vi toàn quốc. Mỹ chuyển sang chiến lược "Chiến tranh cục bộ". Hội nghị xác định quyết tâm "Động viên lực lượng của cả nước, kiên quyết đánh bại cuộc chiến tranh xâm lược của đế quốc Mỹ".',
    color: "primary",
    icon: FileText,
  },
  {
    year: "1967",
    title: "Hội nghị Trung ương lần thứ 13",
    description:
      'Tháng 1-1967: Quyết định mở mặt trận ngoại giao, tạo cục diện vừa đánh, vừa đàm. Bắt đầu đàm phán tại Hội nghị Paris từ 13-5-1968.',
    color: "primary",
    icon: FileText,
  },
  {
    year: "1968",
    title: "Tổng Tiến Công Xuân Mậu Thân",
    description:
      "Đêm 30 rạng ngày 31-1-1968: Bộ Chính trị ra nghị quyết chuyển sang phương pháp tổng công kích-tổng khởi nghĩa. Thất bại chiến lược có tính chất bước ngoặt của Mỹ. Mỹ chấm dứt ném bom miền Bắc (1-11-1968) và chấp nhận đàm phán tại Paris.",
    color: "accent",
    highlight: true,
    icon: Rocket,
  },
  {
    year: "1969-1973",
    title: 'Chống "Việt Nam hóa chiến tranh"',
    description:
      'Quyết tâm hai bước "đánh cho Mỹ cút, đánh cho ngụy nhào". Mùa Xuân-Hè 1972: Tiến công chiến lược quy mô lớn, phá vỡ ba tuyến phòng ngự mạnh nhất của địch. Miền Bắc lập trận "Điện Biên Phủ trên không" (12 ngày đêm cuối năm 1972).',
    color: "primary",
    icon: Handshake,
  },
  {
    year: "1973",
    title: "Hiệp định Paris & Nghị quyết 21",
    description:
      "27-1-1973: Ký kết 'Hiệp định về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam'. Hội nghị Trung ương lần thứ 21 (7-1973): Khẳng định con đường bạo lực cách mạng, phải nắm vững thời cơ.",
    color: "accent",
    highlight: true,
    icon: Scroll,
  },
  {
    year: "1975",
    title: "Tổng Tiến Công Xuân 1975",
    description:
      "Chiến thắng Phước Long (6-1-1975): Chứng tỏ khả năng giải phóng hoàn toàn. 55 ngày đêm (10-3 đến 30-4-1975): Từ Chiến dịch Tây Nguyên đến Chiến dịch Hồ Chí Minh. 30-4-1975, 11:30: Cắm cờ trên Dinh Độc Lập.",
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full mb-6 shadow-lg">
              <Scroll className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dòng Thời Gian Lịch Sử
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
