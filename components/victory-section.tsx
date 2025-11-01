import { Card } from "@/components/ui/card"
import { Award, Globe, Heart, Lightbulb, Sparkles, Trophy, Shield, Zap, Target } from "lucide-react"

export function VictorySection() {
  return (
    <section id="victory" className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-6 shadow-lg">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Vì Sao Thắng Lợi?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Thắng lợi của đường lối là thắng lợi của cuộc kháng chiến chống Mỹ
            </p>
          </div>

          {/* Main Answer */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-primary/15 to-accent/5 border-2 border-primary/30 shadow-xl">
            <div className="text-center mb-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-2">
                Có thể khẳng định <strong className="text-primary text-xl">"Thắng lợi của cuộc kháng chiến chống Mỹ cứu nước là thắng lợi của đường lối lãnh đạo đúng đắn của Đảng"</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                vì trong giai đoạn 1965 – 1975, Đảng Cộng sản Việt Nam đã đề ra và thực hiện một đường lối chiến lược toàn diện, độc lập, tự chủ và sáng tạo, 
                phù hợp với thực tiễn Việt Nam và xu thế thời đại, huy động được sức mạnh tổng hợp của cả dân tộc và quốc tế.
              </p>
            </div>
          </Card>

          {/* Four key points */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary/20 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                1. Quyết Tâm & Hai Ngọn Cờ
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Đảng xác định quyết tâm chiến lược là "Động viên lực lượng của cả nước, kiên quyết đánh bại cuộc chiến tranh xâm lược của đế quốc Mỹ trong bất cứ tình huống nào". 
                Đường lối kiên trì giương cao hai ngọn cờ độc lập dân tộc và chủ nghĩa xã hội.
              </p>
              <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm font-semibold text-primary">Khẩu hiệu:</p>
                <p className="text-sm italic">"Tất cả để đánh thắng giặc Mỹ xâm lược"</p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-accent/20 group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                2. Hai Chiến Lược & Hậu Phương
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Thành công trong việc lãnh đạo đồng thời hai chiến lược cách mạng: cách mạng xã hội chủ nghĩa ở miền Bắc và cách mạng dân tộc dân chủ nhân dân ở miền Nam. 
                Miền Bắc giữ vai trò quyết định nhất.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent">🏛️</span>
                  <span>Miền Bắc: Hậu phương vững chắc</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">🎯</span>
                  <span>Miền Nam: Tiền tuyến quyết định</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary/20 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                3. Phương Pháp Tổng Hợp
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Đánh lâu dài, dựa vào sức mình là chính, càng đánh càng mạnh, đồng thời cố gắng tập trung lực lượng để tranh thủ thời cơ giành thắng lợi quyết định trong thời gian tương đối ngắn.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">⚔️</span>
                  <span>Ba mũi giáp công: Quân sự, Chính trị, Binh vận</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">🌐</span>
                  <span>Kết hợp quân sự, chính trị, ngoại giao</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-accent/20 group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Lightbulb className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                4. Chuyển Hướng Linh Hoạt
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Chuyển hướng chiến lược linh hoạt: Từ đánh bại "Chiến tranh cục bộ" (1965-1968) đến chống "Việt Nam hóa chiến tranh" (1969-1975), 
                luôn nắm vững thời cơ chiến lược.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent">🚀</span>
                  <span>Mậu Thân 1968: Chuyển thế chiến lược</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">⚡</span>
                  <span>Xuân 1975: Chớp thời cơ quyết định</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Final Conclusion */}
          <Card className="p-8 bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground shadow-2xl border-2 border-primary-foreground/20">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-foreground/20 rounded-full mb-4">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Kết Luận</h3>
              <p className="text-lg leading-relaxed opacity-95 mb-4">
                Thắng lợi cuối cùng năm 1975 là sự toàn thắng của chủ nghĩa anh hùng cách mạng, của bản lĩnh và trí tuệ Việt Nam, bắt nguồn từ đường lối chính trị, quân sự, ngoại giao độc lập, tự chủ, đúng đắn và sáng tạo của Đảng.
              </p>
              <p className="text-base leading-relaxed opacity-90">
                Đảng đã đề ra <strong>Cương lĩnh, đường lối đúng đắn</strong> và <strong>phương pháp cách mạng sáng tạo</strong> phù hợp với thực tiễn Việt Nam, 
                phát huy tối đa sức mạnh nội lực và tranh thủ được ngoại lực, dẫn đến chiến thắng cuối cùng.
              </p>
              <div className="mt-6 text-4xl">🎉🏆🇻🇳</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
