"use client"
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  Bot,
  FileText,
  Target,
  CheckCircle,
  Shield,
  Lightbulb,
  Home,
  Search,
  Image,
  Sparkles,
  ScrollText,
  AlertCircle,
  MapPin,
  Trophy,
  Clock,
  BookOpen,
  X,
  Menu,
} from "lucide-react";
import { useState, useEffect } from "react"

export default function AIUsagePage() {

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


  const navItems = [
    { label: "Trang chủ", href: "/", icon: Home },
    { label: "Lý thuyết", href: "/#theory", icon: BookOpen },
    { label: "Đường lối", href: "/#leadership", icon: Shield },
    { label: "Thời gian", href: "/#timeline", icon: Clock },
    { label: "Thắng lợi", href: "/#victory", icon: Trophy },
    { label: "AI Usage", href: "/ai-usage", icon: Bot, isExternal: true },
  ]
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Simple Navigation for this page */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm shadow-lg border-b border-primary/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg ring-2 ring-primary/20">
                  <span className="text-primary-foreground font-bold text-lg">
                    ★
                  </span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
              <span className="font-bold text-lg hidden sm:inline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Lịch sử Đảng
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-primary/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-1 bg-muted/50 rounded-lg p-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-6 shadow-lg">
                <Bot className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Phụ Lục AI Usage
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
                Nguyên tắc sử dụng AI trong dự án học tập và nghiên cứu
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <span>🤖</span>
                <span className="italic">
                  Trang web thuyết trình học thuật về Lịch sử Đảng Cộng sản Việt
                  Nam
                </span>
              </div>
            </div>

            {/* Section 1: Minh bạch */}
            <Card className="p-8 mb-8 bg-gradient-to-br from-primary/10 to-accent/5 border-2 border-primary/30 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-primary">
                  1. Minh Bạch
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-background/80 p-6 rounded-lg border border-primary/20">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-primary">
                    <Search className="w-6 h-6" />
                    Công Cụ Và Mục Đích Sử Dụng
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border border-primary/20">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <Bot className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">ChatGPT</h4>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          Hỗ trợ tìm kiếm và tổng hợp thông tin cho website để
                          hệ thống lý luận chặt chẽ hơn.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-accent/5 to-transparent border border-accent/20">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <ScrollText className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-bold text-accent mb-2">
                          NotebookLM
                        </h4>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          Trích xuất thông tin lý thuyết trực tiếp từ giáo trình
                          Tư tưởng Hồ Chí Minh, giáo trình Lịch sử Đảng Cộng sản
                          Việt Nam và các nguồn báo chí chính thống.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border border-primary/20">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <Bot className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">
                          Claude (Cursor AI)
                        </h4>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          Hỗ trợ thiết kế giao diện và chỉnh sửa CSS cho
                          website, có thể xây dựng một website hoàn chỉnh.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Section 2: Có trách nhiệm */}
            <Card className="p-8 mb-8 bg-gradient-to-br from-accent/10 to-primary/5 border-2 border-accent/30 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-accent-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-accent">
                  2. Có Trách Nhiệm
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-background/80 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="font-bold text-lg mb-3 text-accent">
                    🔍 Kiểm Chứng Thông Tin
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tất cả thông tin do AI hỗ trợ đều được kiểm chứng lại bằng
                    giáo trình và các văn bản, nghị quyết chính thống.
                  </p>
                </div>

                <div className="bg-background/80 p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="font-bold text-lg mb-3 text-primary">
                    👥 Trách Nhiệm Cá Nhân
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nhóm chịu trách nhiệm hoàn toàn về nội dung cuối cùng, không
                    để AI thay thế toàn bộ quá trình học tập và nghiên cứu.
                  </p>
                </div>

                <div className="bg-background/80 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="font-bold text-lg mb-3 text-accent">
                    📚 Học Tập Tích Cực
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    AI chỉ là công cụ hỗ trợ, không thay thế việc học tập và
                    nghiên cứu của sinh viên.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 3: Sáng tạo */}
            <Card className="p-8 mb-8 bg-gradient-to-br from-primary/10 to-accent/5 border-2 border-primary/30 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                  <Lightbulb className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-primary">3. Sáng Tạo</h2>
              </div>

              <div className="bg-background/80 p-6 rounded-lg border border-primary/20">
                <h3 className="font-bold text-xl mb-4 text-primary">
                  Ứng Dụng AI Trong Sáng Tạo
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-primary/5 to-transparent border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Image className="w-5 h-5 text-primary" />
                      <h4 className="font-bold text-primary">
                        Thiết Kế Và Hình Ảnh
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ảnh minh họa, thiết kế giao diện, chỉnh sửa CSS
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-accent/5 to-transparent border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-5 h-5 text-accent" />
                      <h4 className="font-bold text-accent">
                        Tương Tác Và Trò Chơi
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Gợi ý câu hỏi và tích hợp vào minigame ôn tập
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-lg bg-background border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-primary">
                      Nội dung học thuật:
                    </strong>{" "}
                    Nội dung phân tích, dẫn chứng và lập luận học thuật được
                    nhóm biên soạn dựa trên tài liệu chính thống.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 4: Liêm chính học thuật */}
            <Card className="p-8 mb-8 bg-gradient-to-br from-accent/10 to-primary/5 border-2 border-accent/30 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-8 h-8 text-accent-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-accent">
                  4. Liêm Chính Học Thuật
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-background/80 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="font-bold text-lg mb-3 text-accent">
                    📋 Cam Kết
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Không để AI làm thay hoàn toàn, mà chỉ sử dụng như công cụ
                    hỗ trợ.
                  </p>
                </div>

                <div className="bg-background/80 p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="font-bold text-lg mb-3 text-primary">
                    ✏️ Phân Định Rõ
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Các kết quả AI sinh ra đều được chú thích và có phần chỉnh
                    sửa, bổ sung bởi sinh viên.
                  </p>
                </div>

                <div className="bg-background/80 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="font-bold text-lg mb-3 text-accent">
                    📖 Đối Chiếu Nguồn
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Toàn bộ thông tin từ AI đều được so sánh với tài liệu chính
                    thống trước khi đưa vào sản phẩm cuối cùng.
                  </p>
                </div>
              </div>
            </Card>

            {/* Kết luận */}
            <Card className="p-8 mb-8 bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground shadow-2xl border-2 border-primary-foreground/20">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-foreground/20 rounded-full mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Kết Luận
                </h3>
                <p className="text-lg leading-relaxed opacity-95">
                  Việc sử dụng AI trong dự án học tập này đã mang lại hiệu quả
                  tích cực, giúp nhóm sinh viên tiếp cận kiến thức lịch sử một
                  cách hiện đại và sáng tạo. Tuy nhiên, điều quan trọng nhất là
                  luôn duy trì tinh thần học tập chủ động và kiểm chứng thông
                  tin một cách cẩn thận.
                </p>
              </div>
            </Card>

            {/* Lưu ý quan trọng */}
            <Card className="p-8 bg-gradient-to-br from-muted to-background border-2 border-primary/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-3 text-primary">
                    Lưu Ý Quan Trọng
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <h4 className="font-bold text-lg mb-3 text-primary">
                    Cam Kết Sử Dụng:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Chỉ sử dụng ChatGPT, Claude và NotebookLM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>AI là công cụ hỗ trợ, không thay thế học tập</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Kiểm chứng mọi thông tin từ AI</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 p-6 rounded-lg border-l-4 border-accent">
                  <h4 className="font-bold text-lg mb-3 text-accent">
                    Đảm Bảo Chất Lượng:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Đối chiếu với tài liệu chính thống</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Chỉnh sửa và bổ sung bởi sinh viên</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Tuân thủ chuẩn mực học thuật</span>
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
  );
}
