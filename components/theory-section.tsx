import { Card } from "@/components/ui/card"
import { BookOpen, Target, Shield, Sparkles, Flag, Zap, Mic, Award, FileText } from "lucide-react"

export function TheorySection() {
  return (
    <section id="theory" className="py-20 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full mb-6 shadow-lg">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Lý Thuyết
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Đường lối chiến lược chung và nền tảng tư tưởng của Đảng Cộng sản Việt Nam (1965-1975)
            </p>
          </div>

          {/* Section 1: Đường lối chiến lược chung (1965) */}
          <div className="mb-16">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/5 border-2 border-primary/30 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary">1. Đường Lối Chiến Lược Chung (1965)</h3>
              </div>

              <div className="space-y-6">
                {/* Quyết tâm chiến lược */}
                <div className="bg-background p-6 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-primary-foreground font-bold">1.1</span>
                    </div>
                    <h4 className="font-bold text-xl mb-3 text-primary">Quyết Tâm Chiến Lược</h4>
                  </div>
                  <div className="pl-13 space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      Hội nghị Trung ương lần thứ <strong className="text-primary">11 (3-1965)</strong> và lần thứ <strong className="text-primary">12 (12-1965)</strong> đã phát động cuộc kháng chiến chống Mỹ, cứu nước trên phạm vi toàn quốc.
                    </p>
                    
                    {/* Image */}
                    <div className="my-4 bg-muted/50 p-4 rounded-lg border-2 border-dashed border-primary/30 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center overflow-hidden">
                          <img src="/images/trung-uong-11.jpg" alt="Hội nghị Trung ương Đảng" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-xs text-muted-foreground italic">Nguồn: Tài liệu lưu trữ lịch sử</p>
                      </div>
                    </div>
                    
                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-muted-foreground leading-relaxed italic">
                        "Động viên lực lượng của cả nước, kiên quyết đánh bại cuộc chiến tranh xâm lược của đế quốc Mỹ trong bất cứ tình huống nào" để bảo vệ miền Bắc, giải phóng miền Nam, hoàn thành cách mạng dân tộc dân chủ nhân dân, tiến tới thống nhất nước nhà.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hai ngọn cờ lãnh đạo */}
                <div className="bg-background p-6 rounded-lg border border-accent/20">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-accent-foreground font-bold">1.2</span>
                    </div>
                    <h4 className="font-bold text-xl mb-3 text-accent">Hai Ngọn Cờ Lãnh Đạo</h4>
                  </div>
                  <div className="pl-13 space-y-3">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Đảng kiên trì giương cao hai ngọn cờ độc lập dân tộc và chủ nghĩa xã hội, tiếp tục tiến hành đồng thời hai chiến lược cách mạng:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-primary/5 to-transparent p-4 rounded-lg border border-primary/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Flag className="w-5 h-5 text-primary" />
                          <strong className="text-primary">Miền Bắc</strong>
                        </div>
                        <p className="text-sm text-muted-foreground">Cách mạng xã hội chủ nghĩa</p>
                      </div>
                      <div className="bg-gradient-to-br from-accent/5 to-transparent p-4 rounded-lg border border-accent/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="w-5 h-5 text-accent" />
                          <strong className="text-accent">Miền Nam</strong>
                        </div>
                        <p className="text-sm text-muted-foreground">Cách mạng dân tộc dân chủ nhân dân</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phương châm */}
                <div className="bg-background p-6 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-primary-foreground font-bold">1.3</span>
                    </div>
                    <h4 className="font-bold text-xl mb-3 text-primary">Phương Châm</h4>
                  </div>
                  <div className="pl-13">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Thực hiện đường lối chiến tranh nhân dân, toàn dân, toàn diện, lâu dài, dựa vào sức mình là chính trong hoàn cảnh mới.
                    </p>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-2xl mb-1">👥</div>
                        <p className="text-xs font-semibold">Toàn dân</p>
                      </div>
                      <div className="text-center p-3 bg-accent/5 rounded-lg">
                        <div className="text-2xl mb-1">🌐</div>
                        <p className="text-xs font-semibold">Toàn diện</p>
                      </div>
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-2xl mb-1">🔄</div>
                        <p className="text-xs font-semibold">Lâu dài</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Kết luận ngắn */}
          <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <p className="text-center font-semibold text-lg">
                Mục tiêu: <span className="text-primary bg-primary/10 px-3 py-1 rounded">Giải phóng miền Nam, hòa bình thống nhất Tổ quốc</span>
              </p>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            </div>
            <p className="text-center text-muted-foreground">
              🌟 Dựa trên hai ngọn cờ: Độc lập dân tộc và Chủ nghĩa xã hội
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
