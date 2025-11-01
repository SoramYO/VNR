export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center mb-6">
              <span className="text-primary-foreground text-4xl">★</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            Thắng Lợi Của Đường Lối Lãnh Đạo
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-balance">
            Đảng Cộng sản Việt Nam trong cuộc kháng chiến chống Mỹ cứu nước
          </p>

          <div className="text-lg md:text-xl font-semibold text-primary">1965 — 1975</div>

          <div className="pt-8">
            <a
              href="#theory"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Khám phá lịch sử
            </a>
          </div>

          <div className="pt-12 text-sm text-muted-foreground italic">
            "Không có gì quý hơn độc lập, tự do"
            <div className="mt-2 font-semibold">— Chủ tịch Hồ Chí Minh</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
