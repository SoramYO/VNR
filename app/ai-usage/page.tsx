import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Bot, FileText, Target, CheckCircle, Edit, Code, Database, Lightbulb, Home } from "lucide-react"

export default function AIUsagePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Simple Navigation for this page */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-lg border-b border-primary/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg ring-2 ring-primary/20">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
              <span className="font-bold text-lg hidden sm:inline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Usage
              </span>
            </div>
            <Link href="/" className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200">
              <Home className="w-4 h-4" />
              <span>Về Trang Chủ</span>
            </Link>
          </div>
        </div>
      </nav>
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-6 shadow-lg">
                <Bot className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Phụ Lục AI Usage
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tài liệu minh bạch về việc sử dụng công cụ AI trong việc xây dựng trang web lịch sử này
              </p>
            </div>

            {/* Overview */}
            <Card className="p-8 mb-12 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Lightbulb className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3 text-primary">Mục Đích Sử Dụng AI</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Công cụ AI được sử dụng với mục đích học thuật để hỗ trợ tổng hợp, phân tích và cấu trúc thông tin lịch sử từ nguồn tài liệu chính thống, 
                    nhằm tạo ra một trang web thuyết trình có tính tương tác và dễ hiểu về đường lối lãnh đạo của Đảng Cộng sản Việt Nam.
                  </p>
                </div>
              </div>
            </Card>

            {/* Tools Used */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                <Code className="w-8 h-8 text-primary" />
                Công Cụ AI Đã Sử Dụng
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 hover:shadow-lg transition-all border-2 border-transparent hover:border-primary/20">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-md">
                      <Bot className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Cursor AI (Claude Sonnet 4.5)</h3>
                      <p className="text-sm text-muted-foreground">Mô hình ngôn ngữ thông minh dùng để phân tích và code</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-all border-2 border-transparent hover:border-accent/20">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center shadow-md">
                      <Database className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Byterover MCP</h3>
                      <p className="text-sm text-muted-foreground">Hệ thống quản lý knowledge base để lưu trữ pattern</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Prompts Used */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                <Target className="w-8 h-8 text-accent" />
                Các Prompt Chính Đã Sử Dụng
              </h2>

              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-background to-primary/5 border-2 border-primary/20">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-primary-foreground font-bold">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-primary">Prompt: Tạo trang web lịch sử</h3>
                      <div className="bg-muted p-4 rounded-lg border border-border">
                        <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                          "Tôi muốn tạo một trang web thuyết trình về đường lối lãnh đạo của Đảng Cộng sản Việt Nam 
                          trong cuộc kháng chiến chống Mỹ cứu nước giai đoạn 1965-1975. Trang web cần có các section 
                          về lý thuyết, đường lối, timeline, bản đồ, và thắng lợi."
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-background to-accent/5 border-2 border-accent/20">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-accent-foreground font-bold">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-accent">Prompt: Nâng cấp styling</h3>
                      <div className="bg-muted p-4 rounded-lg border border-border">
                        <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                          "Tôi muốn bạn style cho tôi đẹp hơn, màu sắc và icon có ý nghĩa cho từng component."
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-background to-primary/5 border-2 border-primary/20">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-primary-foreground font-bold">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-primary">Prompt: Tạo phụ lục AI Usage</h3>
                      <div className="bg-muted p-4 rounded-lg border border-border">
                        <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                          "Tạo cho tôi 1 page mới có phụ lục AI. Minh bạch: Có slide/phụ lục 'AI Usage' liệt kê công cụ, 
                          mục đích, prompt chính, kết quả và phần chỉnh sửa."
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Results */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                <CheckCircle className="w-8 h-8 text-primary" />
                Kết Quả Đạt Được
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-3">Nội Dung</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span>6 components chính: Hero, Theory, Leadership, Timeline, Map, Victory</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span>Tổng hợp thông tin từ giáo trình Lịch sử Đảng chính thống</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span>Cấu trúc logic, dễ đọc và hiểu</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Code className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-3">Thiết Kế & Code</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">✓</span>
                          <span>UI đẹp với gradient, shadows, animations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">✓</span>
                          <span>Icons có ý nghĩa cho từng section</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">✓</span>
                          <span>Responsive design, tối ưu cho mobile</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Edits Made */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                <Edit className="w-8 h-8 text-accent" />
                Các Chỉnh Sửa Quan Trọng
              </h2>

              <div className="space-y-4">
                <Card className="p-5 hover:shadow-md transition-all border-l-4 border-primary">
                  <p className="font-semibold mb-2">✓ Thêm Navigation với icons</p>
                  <p className="text-sm text-muted-foreground">Home, BookOpen, Shield, Clock, MapPin, Trophy</p>
                </Card>

                <Card className="p-5 hover:shadow-md transition-all border-l-4 border-accent">
                  <p className="font-semibold mb-2">✓ Nâng cấp TheorySection</p>
                  <p className="text-sm text-muted-foreground">Thêm Sparkles icon, gradient backgrounds, hover effects</p>
                </Card>

                <Card className="p-5 hover:shadow-md transition-all border-l-4 border-primary">
                  <p className="font-semibold mb-2">✓ Cải thiện LeadershipSection</p>
                  <p className="text-sm text-muted-foreground">Crown icon, Shield/Swords/Flag/Target icons, emoji bullets</p>
                </Card>

                <Card className="p-5 hover:shadow-md transition-all border-l-4 border-accent">
                  <p className="font-semibold mb-2">✓ Tăng cường TimelineSection</p>
                  <p className="text-sm text-muted-foreground">FileText, Rocket, Handshake, Scroll, Trophy icons</p>
                </Card>

                <Card className="p-5 hover:shadow-md transition-all border-l-4 border-primary">
                  <p className="font-semibold mb-2">✓ Thiết kế InteractiveMap</p>
                  <p className="text-sm text-muted-foreground">Zap, Target, Trophy, Shield icons, better visualization</p>
                </Card>

                <Card className="p-5 hover:shadow-md transition-all border-l-4 border-accent">
                  <p className="font-semibold mb-2">✓ Hoàn thiện VictorySection</p>
                  <p className="text-sm text-muted-foreground">Emoji indicators, better conclusion card</p>
                </Card>

                <Card className="p-5 hover:shadow-md transition-all border-l-4 border-primary">
                  <p className="font-semibold mb-2">✓ Tạo Footer đẹp hơn</p>
                  <p className="text-sm text-muted-foreground">GraduationCap, FileText icons, improved layout</p>
                </Card>
              </div>
            </div>

            {/* Disclaimer */}
            <Card className="p-8 bg-gradient-to-br from-muted to-background border-2 border-primary/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-3 text-primary">Lưu Ý Quan Trọng</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Nội dung lịch sử trên trang web này được tổng hợp từ <strong className="text-primary">Giáo trình Lịch sử Đảng Cộng sản Việt Nam</strong> 
                    của Ban Tuyên giáo Trung ương và Bộ Giáo dục Đào tạo. AI chỉ được sử dụng như một công cụ hỗ trợ để:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Tổ chức và cấu trúc thông tin một cách logic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Thiết kế giao diện người dùng hiện đại và tương tác</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Viết code React/Next.js cho các components</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">KHÔNG thay đổi hoặc tạo ra nội dung lịch sử mới</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

