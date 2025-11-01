"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"
import { MapPin, Info } from "lucide-react"

const campaigns = [
  {
    id: 1,
    name: "Tổng Tiến Công Tết Mậu Thân",
    year: "1968",
    location: "Toàn miền Nam",
    description: "Cuộc tổng tiến công đồng loạt vào hơn 100 thành phố và thị xã, tạo bước ngoặt chiến lược.",
    position: { top: "45%", left: "60%" },
  },
  {
    id: 2,
    name: "Chiến Thắng Phước Long",
    year: "1975",
    location: "Phước Long",
    description: "Chiến thắng đầu tiên giải phóng hoàn toàn một tỉnh, mở đầu cho Tổng tiến công 1975.",
    position: { top: "35%", left: "65%" },
  },
  {
    id: 3,
    name: "Chiến Dịch Hồ Chí Minh",
    year: "1975",
    location: "Sài Gòn",
    description: "Chiến dịch cuối cùng giải phóng hoàn toàn miền Nam, thống nhất đất nước.",
    position: { top: "70%", left: "62%" },
  },
  {
    id: 4,
    name: "Miền Bắc - Hậu Phương",
    year: "1965-1975",
    location: "Hà Nội",
    description: "Căn cứ địa vững chắc, chi viện sức người sức của cho tiền tuyến miền Nam.",
    position: { top: "20%", left: "55%" },
  },
]

export function InteractiveMap() {
  const [selectedCampaign, setSelectedCampaign] = useState<number | null>(null)

  return (
    <section id="map" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Bản Đồ Chiến Lược</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Các chiến dịch và địa điểm quan trọng trong cuộc kháng chiến
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Visualization */}
            <Card className="p-8 relative overflow-hidden min-h-[500px] bg-gradient-to-br from-muted/50 to-background">
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 400 600" className="w-full h-full">
                  {/* Simplified Vietnam map outline */}
                  <path
                    d="M200,50 L220,80 L210,120 L230,160 L220,200 L240,250 L230,300 L250,350 L240,400 L220,450 L200,500 L180,450 L160,400 L170,350 L150,300 L160,250 L140,200 L150,160 L130,120 L140,80 L160,50 Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Campaign Markers */}
              {campaigns.map((campaign) => (
                <button
                  key={campaign.id}
                  className={`absolute w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    selectedCampaign === campaign.id
                      ? "bg-primary text-primary-foreground scale-125 ring-4 ring-primary/30"
                      : "bg-accent text-accent-foreground hover:scale-110"
                  }`}
                  style={campaign.position}
                  onClick={() => setSelectedCampaign(selectedCampaign === campaign.id ? null : campaign.id)}
                >
                  <MapPin className="w-5 h-5" />
                </button>
              ))}

              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Info className="w-4 h-4" />
                  <span>Nhấp vào các điểm đánh dấu để xem chi tiết</span>
                </div>
              </div>
            </Card>

            {/* Campaign Details */}
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <Card
                  key={campaign.id}
                  className={`p-6 cursor-pointer transition-all duration-300 ${
                    selectedCampaign === campaign.id ? "border-2 border-primary shadow-lg" : "hover:shadow-md"
                  }`}
                  onClick={() => setSelectedCampaign(selectedCampaign === campaign.id ? null : campaign.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                      {campaign.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{campaign.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{campaign.location}</p>
                      <p className="text-sm leading-relaxed">{campaign.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
