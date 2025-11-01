import { Card } from "@/components/ui/card";
import {
  Shield,
  Swords,
  Flag,
  Target,
  Crown,
  Rocket,
  Globe,
  Handshake,
  Mic,
  Plane,
  User,
  FolderOpen,
  Trophy,
} from "lucide-react";
import Image from "next/image";

export function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full mb-6 shadow-lg">
              <Crown className="w-8 h-8 text-accent-foreground" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Đường Lối Lãnh Đạo Chi Tiết
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Quyết tâm chiến lược và phương pháp thực hiện qua từng giai đoạn
              (1965-1975)
            </p>
          </div>

          {/* Section 2: Đánh bại "Chiến tranh cục bộ" */}
          <Card className="p-8 mb-8 bg-gradient-to-br from-primary/15 to-primary/5 border-2 border-primary/30 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                2. Lãnh Đạo Đánh Bại "Chiến Tranh Cục Bộ" (1965–1968)
              </h3>
            </div>

            <div className="space-y-6">
              {/* Miền Bắc */}
              <div className="bg-background p-6 rounded-lg border border-primary/20">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-primary-foreground font-bold">A</span>
                  </div>
                  <h4 className="font-bold text-xl mb-3 text-primary">
                    Miền Bắc - Chống Chiến Tranh Phá Hoại
                  </h4>
                </div>
                <div className="pl-13 space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Từ <strong className="text-primary">5-8-1964</strong>, Mỹ
                    dùng không quân và hải quân đánh phá miền Bắc. Trung ương
                    Đảng kịp thời xác định chủ trương chuyển hướng xây dựng kinh
                    tế phù hợp với tình hình chiến tranh.
                  </p>

                  {/* Image placeholder */}
                  <div className="my-4 bg-muted/50 p-4 rounded-lg border-2 border-dashed border-primary/30 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                        <img
                          src="/images/hcm.jpg"
                          alt="Chủ tịch Hồ Chí Minh"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground italic">
                        Nguồn: Tài liệu lưu trữ lịch sử
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <div className="flex items-start gap-3">
                      <Mic className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-2">
                          Chủ tịch Hồ Chí Minh
                        </p>
                        <p className="text-muted-foreground leading-relaxed italic">
                          "Không có gì quý hơn độc lập, tự do"
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-3 mt-4">
                    <div className="text-center p-3 bg-gradient-to-br from-primary/5 to-transparent rounded-lg border border-primary/20">
                      <div className="text-2xl mb-2">✓</div>
                      <p className="text-sm">Đánh thắng chiến tranh phá hoại</p>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-primary/5 to-transparent rounded-lg border border-primary/20">
                      <div className="text-2xl mb-2">🛣️</div>
                      <p className="text-sm">Đảm bảo giao thông thông suốt</p>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-primary/5 to-transparent rounded-lg border border-primary/20">
                      <div className="text-2xl mb-2">📦</div>
                      <p className="text-sm">Chi viện hiệu quả cho miền Nam</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Miền Nam */}
              <div className="bg-background p-6 rounded-lg border border-accent/20">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-accent-foreground font-bold">B</span>
                  </div>
                  <h4 className="font-bold text-xl mb-3 text-accent">
                    Miền Nam - Chiến Đấu Anh Dũng
                  </h4>
                </div>
                <div className="pl-13">
                  <p className="text-muted-foreground leading-relaxed">
                    Quân và dân miền Nam đã anh dũng chiến đấu, bẻ gẫy cuộc phản
                    công chiến lược mùa khô{" "}
                    <strong className="text-accent">1965-1966</strong> và{" "}
                    <strong className="text-accent">1966-1967</strong> của Mỹ,
                    giữ vững quyền chủ động trên chiến trường.
                  </p>
                </div>
              </div>

              {/* Chuyển hướng chiến lược */}
              <div className="bg-background p-6 rounded-lg border border-primary/20">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-primary-foreground font-bold">C</span>
                  </div>
                  <h4 className="font-bold text-xl mb-3 text-primary">
                    Chuyển Hướng Chiến Lược
                  </h4>
                </div>
                <div className="pl-13">
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Hội nghị Trung ương lần thứ{" "}
                    <strong className="text-primary">13 (1-1967)</strong> quyết
                    định mở mặt trận ngoại giao, tạo cục diện{" "}
                    <strong>vừa đánh, vừa đàm</strong>.
                  </p>
                </div>
              </div>

              {/* Tổng tiến công Mậu Thân */}
              <div className="bg-gradient-to-br from-accent/10 to-primary/5 p-6 rounded-lg border-2 border-accent/30">
                <div className="flex items-start gap-3 mb-4">
                  <Rocket className="w-10 h-10 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-accent">
                      Tổng Tiến Công và Nổi Dậy Mậu Thân 1968
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-accent font-semibold">
                      <span>🏆 Thất bại chiến lược bước ngoặt</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Tháng <strong className="text-accent">12-1967</strong>, Bộ
                    Chính trị ra nghị quyết chuyển cuộc chiến tranh cách mạng
                    miền Nam sang thời kỳ tiến lên giành thắng lợi quyết định
                    bằng phương pháp tổng công kích-tổng khởi nghĩa.
                  </p>

                  {/* Image placeholder */}
                  <div className="my-4 bg-muted/50 p-4 rounded-lg border-2 border-dashed border-accent/30 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-full h-full bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg flex items-center justify-center">
                        <img
                          src="/images/mau-than-1968.jpg"
                          alt="Tổng tiến công Xuân Mậu Thân"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground italic">
                        Nguồn: Tài liệu lưu trữ lịch sử
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background/80 p-4 rounded-lg border border-accent/20">
                      <p className="text-sm font-semibold text-accent mb-2">
                        📅 Thời gian
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Đêm 30 rạng ngày 31-1-1968
                      </p>
                    </div>
                    <div className="bg-background/80 p-4 rounded-lg border border-accent/20">
                      <p className="text-sm font-semibold text-accent mb-2">
                        🎯 Kết quả
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Mỹ chấm dứt ném bom miền Bắc (1-11-1968)
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-accent/10 rounded-lg border border-accent/30">
                    <p className="text-sm text-center">
                      <Handshake className="w-5 h-5 inline-block mr-2 text-accent" />
                      Chấp nhận đàm phán tại{" "}
                      <strong className="text-accent">
                        Hội nghị Paris (từ 13-5-1968)
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Section 3: "Việt Nam hóa chiến tranh" */}
          <Card className="p-8 mb-8 bg-gradient-to-br from-accent/15 to-accent/5 border-2 border-accent/30 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-accent">
                3. Đánh Bại "Việt Nam Hóa Chiến Tranh" & Tổng Tiến Công 1975
                (1969–1975)
              </h3>
            </div>

            <div className="space-y-6">
              {/* Chiến lược mới của Mỹ */}
              <div className="bg-background p-6 rounded-lg border border-accent/20">
                <div className="flex items-start gap-3 mb-4">
                  <User className="w-10 h-10 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-accent">
                      Chiến Lược Mới Của Mỹ
                    </h4>
                    <p className="text-sm text-accent/70">
                      Tổng thống Nixon thay "Chiến tranh cục bộ" bằng "Việt Nam
                      hóa chiến tranh"
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Nhằm{" "}
                    <strong className="text-accent">
                      "dùng người Việt Nam đánh người Việt Nam"
                    </strong>{" "}
                    để rút quân Mỹ nhưng vẫn kiểm soát miền Nam.
                  </p>
                </div>
              </div>

              {/* Quyết tâm hai bước */}
              <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-lg border border-primary/30">
                <div className="flex items-start gap-3 mb-4">
                  <Swords className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-primary">
                      Quyết Tâm Hai Bước
                    </h4>
                    <p className="text-sm text-primary/70">
                      Đảng đề ra quyết tâm chiến lược
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-background p-4 rounded-lg border-l-4 border-primary">
                    <p className="font-semibold text-primary mb-2">
                      Mục tiêu chiến lược:
                    </p>
                    <p className="text-muted-foreground text-lg">
                      "Đánh cho Mỹ cút, đánh cho ngụy nhào"
                    </p>
                  </div>
                </div>
              </div>

              {/* Thắng lợi 1972 */}
              <div className="bg-background p-6 rounded-lg border border-accent/20">
                <div className="flex items-start gap-3 mb-4">
                  <Rocket className="w-10 h-10 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-accent">
                      Thắng Lợi Lớn Năm 1972
                    </h4>
                    <p className="text-sm text-accent/70">Mùa Xuân-Hè 1972</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Quân ta mở cuộc tiến công chiến lược quy mô lớn,{" "}
                    <strong className="text-accent">
                      phá vỡ ba tuyến phòng ngự mạnh nhất
                    </strong>{" "}
                    của địch.
                  </p>

                  {/* Image placeholder */}
                  <div className="my-4 bg-muted/50 p-4 rounded-lg border-2 border-dashed border-accent/30 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-full h-full bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg flex items-center justify-center">
                        <img
                          src="/images/tong-tien-cong-chien-luoc.jpg"
                          alt="Tiến công 1972"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground italic">
                        Nguồn: Tài liệu lưu trữ lịch sử
                      </p>
                    </div>
                  </div>

                  <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                    <div className="flex items-start gap-3">
                      <Plane className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-accent mb-1">
                          Phản ứng của Mỹ:
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Chiến tranh phá hoại miền Bắc lần thứ hai (từ 4-1972)
                        </p>
                        <p className="text-sm font-bold text-accent mt-2">
                          "Điện Biên Phủ trên không" (12 ngày đêm cuối năm 1972)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hiệp định Paris */}
              <div className="bg-gradient-to-br from-accent/10 to-primary/5 p-6 rounded-lg border-2 border-accent/30">
                <div className="flex items-start gap-3 mb-4">
                  <Handshake className="w-10 h-10 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-accent">
                      Hiệp Định Paris
                    </h4>
                    <p className="text-sm text-accent/70">27-1-1973</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed font-semibold">
                    "Hiệp định về chấm dứt chiến tranh, lập lại hòa bình ở Việt
                    Nam" được ký kết.
                  </p>

                  {/* Image placeholder */}
                  <div className="my-4 bg-muted/50 p-4 rounded-lg border-2 border-dashed border-accent/30 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-full h-full bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg flex items-center justify-center">
                        <img
                          src="/images/ki-hiep-dinh-paris.jpg"
                          alt="Ký kết Hiệp định Paris"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground italic">
                        Nguồn: Tài liệu lưu trữ lịch sử
                      </p>
                    </div>
                  </div>

                  <div className="bg-background/80 p-4 rounded-lg border border-accent/20">
                    <p className="text-sm text-center">
                      <strong className="text-accent">Mỹ buộc phải ký</strong>{" "}
                      sau thất bại trên chiến trường
                    </p>
                  </div>
                </div>
              </div>

              {/* Quyết tâm cuối cùng */}
              <div className="bg-background p-6 rounded-lg border border-primary/20">
                <div className="flex items-start gap-3 mb-4">
                  <FolderOpen className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-primary">
                      Quyết Tâm Cuối Cùng
                    </h4>
                    <p className="text-sm text-primary/70">
                      Hội nghị Trung ương lần thứ 21 (7-1973)
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Trước việc Mỹ-ngụy ngoan cố phá hoại Hiệp định, Hội nghị
                    khẳng định con đường cách mạng miền Nam là{" "}
                    <strong className="text-primary">bạo lực cách mạng</strong>,
                    phải nắm vững thời cơ, giữ vững đường lối chiến lược tiến
                    công.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <p className="text-sm font-semibold text-primary mb-2">
                      Chiến thắng Phước Long (6-1-1975):
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Chứng tỏ khả năng giải phóng hoàn toàn miền Nam đã chín
                      muồi
                    </p>
                  </div>
                </div>
              </div>

              {/* Kế hoạch chiến lược 1975 */}
              <div className="bg-gradient-to-br from-accent/10 to-primary/5 p-6 rounded-lg border-2 border-accent/30">
                <div className="flex items-start gap-3 mb-4">
                  <Target className="w-10 h-10 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-accent">
                      Kế Hoạch Chiến Lược 1975
                    </h4>
                    <p className="text-sm text-accent/70">
                      Cuối 1974 - đầu 1975
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Hội nghị Bộ Chính trị đề ra quyết tâm chiến lược giải phóng
                    miền Nam theo kế hoạch hai năm 1975-1976, nhưng cũng{" "}
                    <strong className="text-accent">
                      dự kiến phương hướng hành động linh hoạt
                    </strong>{" "}
                    là nếu thời cơ đến, lập tức giải phóng miền Nam ngay trong
                    năm 1975.
                  </p>
                </div>
              </div>

              {/* Tổng tiến công 1975 */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/5 p-6 rounded-lg border-2 border-primary/30">
                <div className="flex items-start gap-3 mb-4">
                  <Trophy className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-primary">
                      Tổng Tiến Công Và Nổi Dậy Xuân 1975
                    </h4>
                    <p className="text-sm text-primary/70">
                      55 ngày đêm lịch sử
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Diễn ra trong{" "}
                    <strong className="text-primary">
                      55 ngày đêm (10-3 đến 30-4-1975)
                    </strong>
                  </p>

                  {/* Image placeholder */}
                  <div className="my-4 bg-muted/50 p-4 rounded-lg border-2 border-dashed border-primary/30 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                        <img
                          src="/images/mien-nam.jpg"
                          alt="Chiến thắng 30-4-1975"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground italic">
                        Nguồn: Tài liệu lưu trữ lịch sử
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-background/80 p-4 rounded-lg border border-primary/20">
                      <p className="text-sm font-semibold text-primary mb-2">
                        📍 Bắt đầu
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Chiến dịch Tây Nguyên (10-3-1975)
                      </p>
                    </div>
                    <div className="bg-background/80 p-4 rounded-lg border border-accent/20">
                      <p className="text-sm font-semibold text-accent mb-2">
                        🏁 Kết thúc
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Chiến dịch Hồ Chí Minh (30-4-1975)
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border-2 border-primary/30 text-center">
                    <p className="text-lg font-bold text-primary">
                      🏆 30-4-1975, 11:30 - Cắm cờ trên Dinh Độc Lập
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Chiến thắng hoàn toàn!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick summary */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all border-2 border-transparent hover:border-accent/20">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Swords className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-accent">Phương Châm</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent">⚔️</span>
                  <span>Đánh lâu dài, dựa vào sức mình là chính</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">💥</span>
                  <span>Càng đánh càng mạnh</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">⚡</span>
                  <span>Tranh thủ thời cơ giành thắng lợi</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all border-2 border-transparent hover:border-primary/20">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Flag className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary">Nguyên Tắc</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">👥</span>
                  <span>Kháng chiến toàn dân</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">🌐</span>
                  <span>Kháng chiến toàn diện</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">🔄</span>
                  <span>Kháng chiến lâu dài</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
