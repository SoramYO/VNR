import { Card } from "@/components/ui/card"
import { Shield, Swords, Flag } from "lucide-react"

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Đường Lối Lãnh Đạo 1965–1975</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Quyết tâm chiến lược và phương châm chỉ đạo trong cuộc kháng chiến chống Mỹ
            </p>
          </div>

          {/* Strategic Determination */}
          <Card className="p-8 mb-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Quyết Tâm Chiến Lược</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Đảng khẳng định có đủ điều kiện và sức mạnh để <strong>đánh Mỹ và thắng Mỹ</strong>.
                </p>
              </div>
            </div>

            <div className="bg-background p-6 rounded-lg border-2 border-primary/20">
              <p className="text-lg leading-relaxed italic">
                "Động viên lực lượng của cả nước, kiên quyết đánh bại cuộc chiến tranh xâm lược của đế quốc Mỹ trong bất
                cứ tình huống nào, để bảo vệ miền Bắc, giải phóng miền Nam, hoàn thành cách mạng dân tộc dân chủ nhân
                dân trong cả nước, tiến tới thực hiện hoà bình thống nhất nước nhà."
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="font-bold text-primary text-center text-xl">"Tất cả để đánh thắng giặc Mỹ xâm lược"</p>
              </div>
            </div>
          </Card>

          {/* Strategic Principles */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Swords className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Phương Châm Tổng Quát</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Đánh lâu dài</strong>, dựa vào sức mình là chính
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Càng đánh càng mạnh</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Tranh thủ thời cơ giành thắng lợi quyết định trong thời gian tương đối ngắn</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Flag className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Nguyên Tắc Kháng Chiến</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Kháng chiến toàn dân</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Kháng chiến toàn diện</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Kháng chiến lâu dài</strong>
                  </span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Strategic Directions */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🔥</span>
                Miền Nam - Tiền Tuyến
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Giữ vững và phát triển thế tiến công, kiên quyết tiến công và liên tục tiến công.
              </p>
              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">Ba mũi giáp công:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Quân sự</li>
                  <li>• Chính trị</li>
                  <li>• Binh vận</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/5 to-transparent">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                Miền Bắc - Hậu Phương
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Chuyển hướng xây dựng kinh tế phù hợp với chiến tranh, bảo vệ vững chắc miền Bắc xã hội chủ nghĩa.
              </p>
              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">Chi viện cho miền Nam:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 80% bộ đội chủ lực</li>
                  <li>• 70% vũ khí và lương thực</li>
                  <li>• 65% thực phẩm</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
