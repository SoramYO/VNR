import { Card } from "@/components/ui/card"
import { BookOpen, Target, Users } from "lucide-react"

export function TheorySection() {
  return (
    <section id="theory" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Cơ Sở Lý Thuyết</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Nền tảng tư tưởng và vai trò lãnh đạo của Đảng Cộng sản Việt Nam
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Nền Tảng Tư Tưởng</h3>
              <p className="text-muted-foreground leading-relaxed">
                Đảng lấy chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng, kim chỉ nam cho hành động.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Vai Trò Lãnh Đạo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sự lãnh đạo đúng đắn của Đảng là nhân tố hàng đầu quyết định thắng lợi của cách mạng.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Đường Lối Đúng Đắn</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cương lĩnh, đường lối đúng đắn là điều kiện trước hết quyết định thắng lợi của cách mạng.
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Chiến Lược Cách Mạng Đồng Thời (1954–1975)</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Miền Bắc - Hậu Phương Lớn</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Cách mạng xã hội chủ nghĩa: Xây dựng tiềm lực, bảo vệ căn cứ địa của cả nước, hậu thuẫn cho cách
                      mạng miền Nam. Giữ <strong>vai trò quyết định nhất</strong> đối với sự phát triển của toàn bộ cách
                      mạng Việt Nam.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Miền Nam - Tiền Tuyến Lớn</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Cách mạng dân tộc dân chủ nhân dân: Giữ <strong>vai trò quyết định trực tiếp</strong> đối với sự
                      nghiệp giải phóng miền Nam, thực hiện hòa bình thống nhất nước nhà.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-background rounded-lg border-2 border-primary/20">
              <p className="text-center font-semibold text-lg">
                Mục tiêu chung: <span className="text-primary">Giải phóng miền Nam, hòa bình thống nhất Tổ quốc</span>
              </p>
              <p className="text-center text-muted-foreground mt-2">
                Dựa trên ngọn cờ độc lập dân tộc và chủ nghĩa xã hội
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
