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
      className="py-20 bg-gradient-to-b from-background via-primary/8 to-background relative overflow-hidden"
    >
      {/* Unified decorative background elements - chỉ dùng primary */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/6 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/4 rounded-full blur-3xl"></div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
          {/* Section 2: Đánh bại "Chiến tranh cục bộ" */}
          <Card className="p-8 mb-8 bg-gradient-to-br from-primary/8 to-primary/5 border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                2. Lãnh đạo đánh bại "Chiến tranh cục bộ" (1965-1968)
              </h3>
            </div>

            <div className="space-y-6">
              {/* Miền Bắc - Chống chiến tranh phá hoại */}
              <article className="bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-primary/20 shadow-sm">
                <header className="flex items-start gap-3 mb-4">
                  <h4 className="font-bold text-xl mb-3 text-primary">
                    Miền Bắc - chống chiến tranh phá hoại lần thứ nhất
                  </h4>
                </header>
                
                <div className="pl-13 space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Từ <strong className="text-primary">5-8-1964</strong>, Mỹ dùng không quân và hải quân đánh phá miền Bắc. 
                    Trung ương Đảng kịp thời xác định chủ trương chuyển hướng xây dựng kinh tế phù hợp với tình hình chiến tranh, 
                    tăng cường quốc phòng và ra sức chi viện cho miền Nam với mức cao nhất.
                  </p>

                  {/* Image container */}
                  <figure className="my-4 bg-muted/50 p-4 rounded-lg border-2 border-dashed border-primary/30">
                    <img
                      src="/images/hcm.jpg"
                      alt="Chủ tịch Hồ Chí Minh"
                      className="w-full h-full object-contain rounded-lg bg-gradient-to-br from-primary/10 to-primary/5"
                    />
                    <figcaption className="text-xs text-muted-foreground italic text-center mt-2">
                      Nguồn: Tài liệu lưu trữ lịch sử
                    </figcaption>
                  </figure>

                  <blockquote className="bg-gradient-to-r from-primary/8 to-primary/5 p-4 rounded-lg border-l-4 border-primary shadow-sm">
                    <div className="flex items-start gap-3">
                      <Mic className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <cite className="font-semibold text-primary block mb-2">
                          Chủ tịch Hồ Chí Minh
                        </cite>
                        <p className="text-muted-foreground leading-relaxed italic">
                          "Không có gì quý hơn độc lập, tự do"
                        </p>
                      </div>
                    </div>
                  </blockquote>

                  <div className="flex flex-col md:flex-row gap-3 mt-4">
                    <div className="flex-1 text-center p-3 bg-gradient-to-br from-primary/8 to-primary/5 rounded-lg border border-primary/20 shadow-sm">
                      <div className="text-2xl mb-2">✓</div>
                      <p className="text-sm text-primary font-semibold">Đánh thắng chiến tranh phá hoại</p>
                    </div>
                    <div className="flex-1 text-center p-3 bg-gradient-to-br from-primary/8 to-primary/5 rounded-lg border border-primary/20 shadow-sm">
                      <div className="text-2xl mb-2">🛣️</div>
                      <p className="text-sm text-primary font-semibold">Đảm bảo giao thông thông suốt</p>
                    </div>
                    <div className="flex-1 text-center p-3 bg-gradient-to-br from-primary/8 to-primary/5 rounded-lg border border-primary/20 shadow-sm">
                      <div className="text-2xl mb-2">📦</div>
                      <p className="text-sm text-primary font-semibold">Chi viện hiệu quả cho miền Nam</p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Miền Nam - Chiến đấu anh dũng */}
              <article className="bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-primary/20 shadow-sm">
                <header className="flex items-start gap-3 mb-4">
                  <h4 className="font-bold text-xl mb-3 text-primary">
                    Miền Nam - chiến đấu anh dũng
                  </h4>
                </header>
                
                <div className="pl-13 space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Quân và dân miền Nam đã anh dũng chiến đấu, bẻ gẫy cuộc phản công chiến lược mùa khô{" "}
                    <strong className="text-primary">1965-1966</strong> và{" "}
                    <strong className="text-primary">1966-1967</strong> của Mỹ, 
                    giữ vững quyền chủ động trên chiến trường.
                  </p>

                  <div className="grid md:grid-cols-2 gap-3 mt-4">
                    <div className="text-center p-3 bg-gradient-to-br from-primary/8 to-primary/5 rounded-lg border border-primary/20 shadow-sm">
                      <div className="text-2xl mb-2">⚔️</div>
                      <p className="text-sm text-primary font-semibold">Bẻ gẫy phản công mùa khô 1965-1966</p>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-primary/8 to-primary/5 rounded-lg border border-primary/20 shadow-sm">
                      <div className="text-2xl mb-2">🎯</div>
                      <p className="text-sm text-primary font-semibold">Giữ vững chủ động chiến trường</p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Chuyển hướng chiến lược */}
              <article className="bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-primary/20 shadow-sm">
                <header className="flex items-start gap-3 mb-4">
                  <h4 className="font-bold text-xl mb-3 text-primary">
                    Chuyển hướng chiến lược
                  </h4>
                </header>
                
                <div className="pl-13 space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Hội nghị Trung ương lần thứ <strong className="text-primary">13 (1-1967)</strong> quyết định 
                    mở mặt trận ngoại giao, tạo cục diện <strong className="text-primary">vừa đánh, vừa đàm</strong>.
                  </p>

                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-5 h-5 text-primary" />
                      <strong className="text-primary">Mặt trận ngoại giao</strong>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Kết hợp đấu tranh quân sự với đấu tranh ngoại giao để tạo áp lực toàn diện lên Mỹ
                    </p>
                  </div>
                </div>
              </article>

              {/* Tổng tiến công Mậu Thân 1968 */}
              <article className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border-2 border-primary/30 shadow-sm">
                <header className="flex items-start gap-3 mb-4">
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-primary">
                      Tổng tiến công và nổi dậy Mậu Thân 1968
                    </h4>
                    <span className="text-sm text-primary font-semibold">
                      🏆 Thất bại chiến lược bước ngoặt của Mỹ
                    </span>
                  </div>
                </header>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Tháng <strong className="text-primary">12-1967</strong>, Bộ Chính trị ra nghị quyết 
                    chuyển cuộc chiến tranh cách mạng miền Nam sang thời kỳ tiến lên giành thắng lợi quyết định 
                    bằng phương pháp <strong className="text-primary">tổng công kích-tổng khởi nghĩa</strong>.
                  </p>

                  <figure className="my-4 bg-muted/50 p-4 rounded-lg border-2 border-dashed border-primary/30">
                    <img
                      src="/images/mau-than-1968.jpg"
                      alt="Tổng tiến công Xuân Mậu Thân"
                      className="w-full h-full object-contain rounded-lg bg-gradient-to-br from-primary/10 to-primary/5"
                    />
                    <figcaption className="text-xs text-muted-foreground italic text-center mt-2">
                      Nguồn: Tài liệu lưu trữ lịch sử
                    </figcaption>
                  </figure>

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 bg-background/80 p-4 rounded-lg border border-primary/20 shadow-sm">
                      <p className="text-sm font-semibold text-primary mb-2">📅 Thời gian</p>
                      <p className="text-sm text-muted-foreground">Đêm 30 rạng ngày 31-1-1968</p>
                    </div>
                    <div className="flex-1 bg-background/80 p-4 rounded-lg border border-primary/20 shadow-sm">
                      <p className="text-sm font-semibold text-primary mb-2">🎯 Kết quả</p>
                      <p className="text-sm text-muted-foreground">Mỹ chấm dứt ném bom miền Bắc (1-11-1968)</p>
                    </div>
                  </div>
                  
                  <footer className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/30 shadow-sm text-center">
                    <Handshake className="w-5 h-5 inline-block mr-2 text-primary" />
                    Chấp nhận đàm phán tại <strong className="text-primary">Hội nghị Paris (từ 13-5-1968)</strong>
                  </footer>
                </div>
              </article>
            </div>
          </Card>

          {/* Section 3: "Việt Nam hóa chiến tranh" */}
          <Card className="p-8 mb-8 bg-gradient-to-br from-primary/8 to-primary/5 border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                3. Đánh bại "Việt Nam hóa chiến tranh" & Tổng tiến công 1975<br/>
                (1969-1975)
              </h3>
            </div>

            <div className="space-y-6">
              {/* Chiến lược mới của Mỹ */}
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-primary/20 shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <User className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-primary">
                      Chiến lược mới của Mỹ
                    </h4>
                    <p className="text-sm text-primary/70">
                      Tổng thống Nixon thay "Chiến tranh cục bộ" bằng "Việt Nam
                      hóa chiến tranh"
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Nhằm{" "}
                    <strong className="text-primary">
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
                      Quyết tâm hai bước
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
              <div className="bg-background p-6 rounded-lg border border-primary/20">
                <div className="flex items-start gap-3 mb-4">
                  <Rocket className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-primary">
                      Thắng lợi lớn năm 1972
                    </h4>
                    <p className="text-sm text-primary/70">Mùa Xuân-Hè 1972</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Quân ta mở cuộc tiến công chiến lược quy mô lớn,{" "}
                    <strong className="text-primary">
                      phá vỡ ba tuyến phòng ngự mạnh nhất
                    </strong>{" "}
                    của địch.
                  </p>

                  <figure className="my-4 bg-muted/50 p-4 rounded-lg border-2 border-dashed border-primary/30">
                    <img
                      src="/images/tong-tien-cong-chien-luoc.jpg"
                      alt="Tiến công 1972"
                      className="w-full h-full object-contain rounded-lg bg-gradient-to-br from-primary/10 to-primary/5"
                    />
                    <figcaption className="text-xs text-muted-foreground italic text-center mt-2">
                      Nguồn: Tài liệu lưu trữ lịch sử
                    </figcaption>
                  </figure>

                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <div className="flex items-start gap-3">
                      <Plane className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-primary mb-1">
                          Phản ứng của Mỹ:
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Chiến tranh phá hoại miền Bắc lần thứ hai (từ 4-1972)
                        </p>
                        <p className="text-sm font-bold text-primary mt-2">
                          "Điện Biên Phủ trên không" (12 ngày đêm cuối năm 1972)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hiệp định Paris */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border-2 border-primary/30">
                <div className="flex items-start gap-3 mb-4">
                  <Handshake className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-primary">
                      Hiệp định Paris
                    </h4>
                    <p className="text-sm text-primary/70">27-1-1973</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed font-semibold">
                    "Hiệp định về chấm dứt chiến tranh, lập lại hòa bình ở Việt
                    Nam" được ký kết.
                  </p>

                  <figure className="my-4 bg-muted/50 p-4 rounded-lg border-2 border-dashed border-primary/30">
                    <img
                      src="/images/ki-hiep-dinh-paris.jpg"
                      alt="Ký kết Hiệp định Paris"
                      className="w-full h-full object-contain rounded-lg bg-gradient-to-br from-primary/10 to-primary/5"
                    />
                    <figcaption className="text-xs text-muted-foreground italic text-center mt-2">
                      Nguồn: Tài liệu lưu trữ lịch sử
                    </figcaption>
                  </figure>

                  <div className="bg-background/80 p-4 rounded-lg border border-primary/20">
                    <p className="text-sm text-center">
                      <strong className="text-primary">Mỹ buộc phải ký</strong>{" "}
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
                      Quyết tâm cuối cùng
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
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border-2 border-primary/30">
                <div className="flex items-start gap-3 mb-4">
                  <Target className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-primary">
                      Kế hoạch chiến lược 1975
                    </h4>
                    <p className="text-sm text-primary/70">
                      Cuối 1974 - đầu 1975
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Hội nghị Bộ Chính trị đề ra quyết tâm chiến lược giải phóng
                    miền Nam theo kế hoạch hai năm 1975-1976, nhưng cũng{" "}
                    <strong className="text-primary">
                      dự kiến phương hướng hành động linh hoạt
                    </strong>{" "}
                    là nếu thời cơ đến, lập tức giải phóng miền Nam ngay trong
                    năm 1975.
                  </p>
                </div>
              </div>

              {/* Tổng tiến công 1975 */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border-2 border-primary/30">
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

                  <figure className="my-4 bg-muted/50 p-4 rounded-lg border-2 border-dashed border-primary/30">
                    <img
                      src="/images/mien-nam.jpg"
                      alt="Chiến thắng 30-4-1975"
                      className="w-full h-full object-contain rounded-lg bg-gradient-to-br from-primary/10 to-primary/5"
                    />
                    <figcaption className="text-xs text-muted-foreground italic text-center mt-2">
                      Nguồn: Tài liệu lưu trữ lịch sử
                    </figcaption>
                  </figure>

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 bg-background/80 p-4 rounded-lg border border-primary/20 shadow-sm">
                      <p className="text-sm font-semibold text-primary mb-2">
                        📍 Bắt đầu
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Chiến dịch Tây Nguyên (10-3-1975)
                      </p>
                      </div>
                      <div className="flex-1 bg-background/80 p-4 rounded-lg border border-primary/20 shadow-sm">
                      <p className="text-sm font-semibold text-primary mb-2">
                        🏁 Kết thúc
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Chiến dịch Hồ Chí Minh (30-4-1975)
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border-2 border-primary/30 text-center">
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
          <div className="flex flex-col md:flex-row gap-6">
            <Card className="flex-1 p-6 hover:shadow-lg transition-all border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md ring-2 ring-primary/20">
                  <Swords className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary">Phương châm</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">⚔️</span>
                  <span>Đánh lâu dài, dựa vào sức mình là chính</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">💥</span>
                  <span>Càng đánh càng mạnh</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">⚡</span>
                  <span>Tranh thủ thời cơ giành thắng lợi</span>
                </li>
              </ul>
            </Card>

            <Card className="flex-1 p-6 hover:shadow-lg transition-all border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md ring-2 ring-primary/20">
                  <Flag className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary">Nguyên tắc</h3>
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
    </section>
  );
}
