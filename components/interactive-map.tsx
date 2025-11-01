"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"
import { MapPin, Info, Zap, Target, Trophy, Shield } from "lucide-react"

const campaigns = [
  {
    id: 1,
    name: "Tổng Tiến Công Tết Mậu Thân",
    year: "1968",
    location: "Toàn miền Nam",
    description: "Cuộc tổng tiến công đồng loạt vào hơn 100 thành phố và thị xã, tạo bước ngoặt chiến lược.",
    position: { top: "45%", left: "60%" },
    icon: Zap,
  },
  {
    id: 2,
    name: "Chiến Thắng Phước Long",
    year: "1975",
    location: "Phước Long",
    description: "Chiến thắng đầu tiên giải phóng hoàn toàn một tỉnh, mở đầu cho Tổng tiến công 1975.",
    position: { top: "35%", left: "65%" },
    icon: Target,
  },
  {
    id: 3,
    name: "Chiến Dịch Hồ Chí Minh",
    year: "1975",
    location: "Sài Gòn",
    description: "Chiến dịch cuối cùng giải phóng hoàn toàn miền Nam, thống nhất đất nước.",
    position: { top: "70%", left: "62%" },
    icon: Trophy,
  },
  {
    id: 4,
    name: "Miền Bắc - Hậu Phương",
    year: "1965-1975",
    location: "Hà Nội",
    description: "Căn cứ địa vững chắc, chi viện sức người sức của cho tiền tuyến miền Nam.",
    position: { top: "20%", left: "55%" },
    icon: Shield,
  },
]

export function InteractiveMap() {
  const [selectedCampaign, setSelectedCampaign] = useState<number | null>(null)

  return (
    <section id="map" className="py-20 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full mb-6 shadow-lg">
              <MapPin className="w-8 h-8 text-accent-foreground" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Bản Đồ Chiến Lược
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Các chiến dịch và địa điểm quan trọng trong cuộc kháng chiến
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Visualization */}
            <Card className="p-8 relative overflow-hidden min-h-[500px] bg-gradient-to-br from-muted/30 via-primary/5 to-background border-2 border-primary/20 shadow-xl">
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 400 600" className="w-full h-full">
                  {/* Simplified Vietnam map outline */}
                  <path
                    d="M200,50 L220,80 L210,120 L230,160 L220,200 L240,250 L230,300 L250,350 L240,400 L220,450 L200,500 L180,450 L160,400 L170,350 L150,300 L160,250 L140,200 L150,160 L130,120 L140,80 L160,50 Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              {/* Campaign Markers */}
              {campaigns.map((campaign) => {
                const Icon = campaign.icon
                return (
                  <button
                    key={campaign.id}
                    className={`absolute w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                      selectedCampaign === campaign.id
                        ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground scale-125 ring-4 ring-primary/30 z-20"
                        : "bg-gradient-to-br from-accent to-accent/80 text-accent-foreground hover:scale-110"
                    }`}
                    style={campaign.position}
                    onClick={() => setSelectedCampaign(selectedCampaign === campaign.id ? null : campaign.id)}
                  >
                    <Icon className="w-6 h-6" />
                  </button>
                )
              })}

              <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-sm p-4 rounded-lg border-2 border-primary/20 shadow-lg">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Info className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground font-medium">Nhấp vào các điểm đánh dấu để xem chi tiết</span>
                </div>
              </div>
            </Card>

            {/* Campaign Details */}
            <div className="space-y-4">
              {campaigns.map((campaign) => {
                const Icon = campaign.icon
                return (
                  <Card
                    key={campaign.id}
                    className={`p-6 cursor-pointer transition-all duration-300 ${
                      selectedCampaign === campaign.id 
                        ? "border-2 border-primary shadow-xl scale-[1.02] bg-gradient-to-br from-primary/5 to-transparent" 
                        : "hover:shadow-lg border-2 border-transparent hover:border-primary/20"
                    }`}
                    onClick={() => setSelectedCampaign(selectedCampaign === campaign.id ? null : campaign.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transition-transform ${
                        selectedCampaign === campaign.id ? "scale-110" : ""
                      } ${
                        selectedCampaign === campaign.id
                          ? "bg-gradient-to-br from-primary to-primary/80"
                          : "bg-gradient-to-br from-accent to-accent/80"
                      }`}>
                        {Icon ? (
                          <Icon className="w-8 h-8 text-white" />
                        ) : (
                          <span className="font-bold text-white">{campaign.year}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold mb-1 ${selectedCampaign === campaign.id ? "text-primary" : ""}`}>
                          {campaign.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">{campaign.location}</p>
                        </div>
                        <p className="text-sm leading-relaxed">{campaign.description}</p>
                        {selectedCampaign === campaign.id && (
                          <div className="mt-3 pt-3 border-t border-primary/20">
                            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                              {campaign.year}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
