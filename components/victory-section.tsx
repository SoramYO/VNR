import { Card } from "@/components/ui/card"
import { Award, Globe, Heart, Lightbulb, Sparkles, Trophy, Shield, Zap, Target } from "lucide-react"

export function VictorySection() {
  return (
    <section id="victory" className="py-20 bg-gradient-to-br from-accent/8 via-background to-secondary/10 relative overflow-hidden">
      {/* Unified decorative background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/8 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-secondary/8 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full mb-6 shadow-lg ring-4 ring-accent/20">
              <Sparkles className="w-8 h-8 text-accent-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
              Vì sao thắng lợi của cuộc kháng chiến chống Mỹ là thắng lợi của đường lối lãnh đạo đúng đắn của Đảng?
            </h2>
          </div>

          {/* Main Answer */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-primary/8 to-accent/8 border-2 border-accent/30 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-2">
                Có thể khẳng định <br></br><strong className="text-primary text-xl px-2 py-1 rounded-lg">"Thắng lợi của cuộc kháng chiến chống Mỹ cứu nước là thắng lợi của đường lối lãnh đạo đúng đắn của Đảng"</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Vì trong giai đoạn 1965 – 1975, Đảng Cộng sản Việt Nam đã đề ra và thực hiện một đường lối chiến lược toàn diện, độc lập, tự chủ và sáng tạo, 
                phù hợp với thực tiễn Việt Nam và xu thế thời đại, huy động được sức mạnh tổng hợp của cả dân tộc và quốc tế.
              </p>
            </div>
          </Card>

          {/* Three key points - Giảm từ 4 xuống 3 */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary/30 group bg-gradient-to-br from-primary/5 to-transparent">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform ring-2 ring-primary/20">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                Quyết tâm chiến lược
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Giương cao hai ngọn cờ độc lập dân tộc và chủ nghĩa xã hội. "Tất cả để đánh thắng giặc Mỹ xâm lược".
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-accent/20 group">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                Hai chiến lược
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Miền Bắc - hậu phương vững chắc. Miền Nam - tiền tuyến quyết định. Hai chiến lược cách mạng đồng thời.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary/20 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                Phương pháp tổng hợp
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Ba mũi giáp công: Quân sự, Chính trị, Binh vận. Kết hợp đánh lâu dài và tranh thủ thời cơ quyết định.
              </p>
            </Card>
          </div>

          {/* Final Conclusion */}
          <Card className="p-8 bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground shadow-2xl border-2 border-primary-foreground/20">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-foreground/20 rounded-full mb-4">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Kết luận</h3>
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
