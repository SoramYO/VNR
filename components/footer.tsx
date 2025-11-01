import { BookOpen, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">★</span>
                </div>
                <span className="font-bold text-lg">Lịch sử Đảng Cộng sản Việt Nam</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Trang web học thuật về đường lối lãnh đạo của Đảng trong cuộc kháng chiến chống Mỹ cứu nước giai đoạn
                1965-1975.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Nguồn Tài Liệu
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Giáo trình Lịch sử Đảng Cộng sản Việt Nam - Ban Tuyên giáo Trung ương</span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Bộ Giáo dục và Đào tạo - Tài liệu giảng dạy chính thống</span>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Văn kiện Đại hội XII của Đảng</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-bold mb-3 text-sm">Phụ Lục AI Usage</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Nội dung thuyết trình được tổng hợp, phân tích và cấu trúc bởi mô hình ngôn ngữ AI dựa trên nguồn tài
                liệu lịch sử chính thống cung cấp (Giáo trình Lịch sử Đảng Cộng sản Việt Nam). AI được sử dụng để trích
                xuất, tổng hợp và tổ chức thông tin theo yêu cầu học thuật.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Lịch sử Đảng Cộng sản Việt Nam. Trang web học thuật.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
