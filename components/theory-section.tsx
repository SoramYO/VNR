import { Card } from "@/components/ui/card"
import { BookOpen, Target, Shield, Sparkles, Flag, Zap, Mic, Award, FileText } from "lucide-react"

export function TheorySection() {
  return (
    <section id="theory" className="py-20 bg-gradient-to-b from-primary/8 via-background to-primary/5 relative overflow-hidden">
      {/* Unified decorative background elements - chỉ dùng primary */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/6 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary/4 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section 1: Đường lối chiến lược chung (1965) */}
          <div className="mb-16">
            <Card className="p-8 bg-gradient-to-br from-primary/8 to-primary/5 border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-primary">1. Đường Lối Chiến Lược Chung (1965)</h3>
              </div>

              <div className="space-y-6">
                {/* Nội dung tóm gọn */}
                <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-primary/20 shadow-sm">
                  <div className="space-y-4">
                    <h4 className="font-bold text-xl mb-3 text-primary">Quyết Tâm và Phương Châm Chiến Lược</h4>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      Hội nghị Trung ương lần thứ <strong className="text-primary">11 (3-1965)</strong> và lần thứ <strong className="text-primary">12 (12-1965)</strong> phát động cuộc kháng chiến chống Mỹ, cứu nước toàn quốc, giương cao hai ngọn cờ độc lập dân tộc và chủ nghĩa xã hội.
                    </p>

                    {/* Image container for Hội nghị 12 */}
                    <figure className="my-4 bg-muted/50 p-4 rounded-lg border-2 border-dashed border-primary/30">
                      <img
                        src="/images/hoinghi12.png"
                        alt="Hội nghị Trung ương lần thứ 12"
                        className="w-full h-64 object-contain rounded-lg bg-gradient-to-br from-primary/10 to-primary/5"
                      />
                      <figcaption className="text-xs text-muted-foreground italic text-center mt-2">
                        Hội nghị Trung ương lần thứ 12 (12-1965) - Nguồn: Pháp luật Nhà Đất
                      </figcaption>
                    </figure>
                    
                    {/* Hai miền - gộp lại */}
                    <div className="flex flex-col md:flex-row gap-4 my-4">
                      <div className="flex-1 bg-gradient-to-br from-primary/8 to-transparent p-4 rounded-lg border border-primary/20 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <Flag className="w-5 h-5 text-primary" />
                          <strong className="text-primary">Miền Bắc:</strong>
                        </div>
                        <p className="text-sm text-muted-foreground">Cách mạng xã hội chủ nghĩa</p>
                      </div>
                      
                      <div className="flex-1 bg-gradient-to-br from-primary/6 to-transparent p-4 rounded-lg border border-primary/20 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="w-5 h-5 text-primary" />
                          <strong className="text-primary">Miền Nam:</strong>
                        </div>
                        <p className="text-sm text-muted-foreground">Cách mạng dân tộc dân chủ nhân dân</p>
                      </div>
                    </div>

                    {/* Ba phương châm - giữ nguyên */}
                    <div className="flex flex-col md:flex-row gap-3">
                      <div className="flex-1 text-center p-3 bg-gradient-to-br from-primary/8 to-primary/5 rounded-lg border border-primary/20 shadow-sm">
                        <div className="text-2xl mb-1">👥</div>
                        <p className="text-xs font-semibold text-primary">Toàn dân</p>
                      </div>
                      
                      <div className="flex-1 text-center p-3 bg-gradient-to-br from-primary/8 to-primary/5 rounded-lg border border-primary/20 shadow-sm">
                        <div className="text-2xl mb-1">🌐</div>
                        <p className="text-xs font-semibold text-primary">Toàn diện</p>
                      </div>
                      
                      <div className="flex-1 text-center p-3 bg-gradient-to-br from-primary/8 to-primary/5 rounded-lg border border-primary/20 shadow-sm">
                        <div className="text-2xl mb-1">🔄</div>
                        <p className="text-xs font-semibold text-primary">Lâu dài</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Kết luận ngắn */}
          <Card className="p-6 bg-gradient-to-r from-primary/8 to-primary/5 border-2 border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <p className="text-center font-semibold text-lg">
                Mục tiêu: <span className="text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">Giải phóng miền Nam, hòa bình thống nhất Tổ quốc</span>
              </p>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
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
