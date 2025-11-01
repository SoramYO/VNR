import { BookOpen, ExternalLink, GraduationCap, FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-muted/50 via-background to-background border-t border-border py-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg ring-2 ring-primary/20">
                    <span className="text-primary-foreground font-bold text-xl">★</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                </div>
                <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Lịch sử Đảng Cộng sản Việt Nam
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Trang web học thuật về đường lối lãnh đạo của Đảng trong cuộc kháng chiến chống Mỹ cứu nước giai đoạn
                1965-1975.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-primary text-2xl">🇻🇳</span>
                <span className="text-muted-foreground italic">Vì độc lập, vì tự do</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 flex items-center gap-2 text-lg">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                Nguồn Tài Liệu
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors group">
                  <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
                  <span>Giáo trình Lịch sử Đảng Cộng sản Việt Nam - Ban Tuyên giáo Trung ương</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/5 transition-colors group">
                  <GraduationCap className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent group-hover:scale-110 transition-transform" />
                  <span>Bộ Giáo dục và Đào tạo - Tài liệu giảng dạy chính thống</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors group">
                  <FileText className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary group-hover:scale-110 transition-transform" />
                  <span>Văn kiện Đại hội XII của Đảng</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t-2 border-border">
            <div className="bg-gradient-to-br from-muted/80 to-background p-6 rounded-lg border-2 border-primary/20 shadow-lg">
              <h4 className="font-bold mb-3 text-sm flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                Phụ Lục AI Usage
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Nội dung thuyết trình được tổng hợp, phân tích và cấu trúc bởi mô hình ngôn ngữ AI dựa trên nguồn tài
                liệu lịch sử chính thống cung cấp (Giáo trình Lịch sử Đảng Cộng sản Việt Nam). AI được sử dụng để trích
                xuất, tổng hợp và tổ chức thông tin theo yêu cầu học thuật.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-xs text-muted-foreground font-medium">
                © 2025 Lịch sử Đảng Cộng sản Việt Nam. Trang web học thuật.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
