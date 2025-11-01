export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Unified Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-accent/20" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mb-6 shadow-lg ring-4 ring-primary/20">
              <span className="text-primary-foreground text-4xl">★</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
            Thắng Lợi Của Đường Lối Lãnh Đạo
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-balance">
            Đảng Cộng sản Việt Nam trong cuộc kháng chiến chống Mỹ cứu nước
          </p>

          <div className="text-lg md:text-xl font-semibold text-primary bg-accent/10 px-4 py-2 rounded-full inline-block">
            1965 — 1975
          </div>

          <div className="pt-8">
            <a
              href="#theory"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg font-semibold hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Khám phá lịch sử
            </a>
          </div>

          <div className="pt-12 bg-secondary/20 p-6 rounded-lg border border-accent/30">
            <p className="text-sm text-muted-foreground italic mb-2">
              "Không có gì quý hơn độc lập, tự do"
            </p>
            <div className="text-sm font-semibold text-primary">— Chủ tịch Hồ Chí Minh</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex items-start justify-center p-2 bg-background/80 backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
