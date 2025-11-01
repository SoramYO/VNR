import { Card } from "@/components/ui/card"
import { Award, Globe, Heart, Lightbulb } from "lucide-react"

export function VictorySection() {
  return (
    <section id="victory" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Vì Sao Thắng Lợi?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Thắng lợi của đường lối là thắng lợi của cuộc kháng chiến chống Mỹ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Độc Lập Dân Tộc + Chủ Nghĩa Xã Hội</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Đảng đã giương cao hai ngọn cờ độc lập dân tộc và chủ nghĩa xã hội, phù hợp với xu thế phát triển của
                lịch sử và thời đại.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Độc lập dân tộc là mục tiêu trước hết</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Chủ nghĩa xã hội là nền tảng vững chắc</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Tạo ra sức mạnh đại đoàn kết toàn dân tộc</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Phân Bổ Chiến Lược Khéo Léo</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Đường lối vạch ra mối quan hệ chiến lược giữa tiền tuyến và hậu phương, kết hợp sức mạnh dân tộc với sức
                mạnh thời đại.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Kết hợp đấu tranh quân sự, chính trị và ngoại giao</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Ba mũi giáp công trên ba vùng chiến lược</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Tranh thủ sự ủng hộ quốc tế</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nắm Bắt Thời Cơ Quyết Định</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tài năng lãnh đạo của Đảng thể hiện qua việc nắm vững thời cơ chiến lược, quyết định giải phóng miền Nam
                ngay trong năm 1975.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Sau chiến thắng Phước Long, chớp thời cơ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Tổng tiến công và nổi dậy Xuân 1975</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Kết thúc chiến tranh trong thời gian ngắn</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sức Mạnh Nhân Dân</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Miền Bắc xã hội chủ nghĩa là hậu phương vững chắc, đảm bảo chi viện tối đa cho tiền tuyến miền Nam.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>80% bộ đội chủ lực từ miền Bắc</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>70% vũ khí và lương thực</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Tinh thần "Không có gì quý hơn độc lập, tự do"</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Kết Luận</h3>
              <p className="text-lg leading-relaxed opacity-95">
                Thắng lợi của cuộc kháng chiến chống Mỹ cứu nước là thắng lợi của đường lối lãnh đạo đúng đắn của Đảng,
                vì Đảng đã đề ra <strong>Cương lĩnh, đường lối đúng đắn</strong> và{" "}
                <strong>phương pháp cách mạng sáng tạo</strong> phù hợp với thực tiễn Việt Nam, phát huy tối đa sức mạnh
                nội lực và tranh thủ được ngoại lực, dẫn đến chiến thắng cuối cùng.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
