import { Link } from "wouter";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function TheftLaws() {
  const robberies = [
    {
      name: "الصراف الألي / ATM",
      min: 1,
      max: 2,
      escape: "الهروب فوري",
    },
    {
      name: "البقالة / Market",
      min: 2,
      max: 3,
      escape: "الهروب بعد 3 دقائق",
    },
    {
      name: "الحلاق / The Barber",
      min: 2,
      max: 4,
      escape: "الهروب بعد 3 دقائق",
    },
    {
      name: "متجر الأزياء / Clothe Store",
      min: 2,
      max: 4,
      escape: "الهروب بعد 4 دقائق",
    },
    {
      name: "متجر الوشوم / Tattoo Shop",
      min: 2,
      max: 4,
      escape: "الهروب بعد 4 دقائق",
    },
    {
      name: "حانة ساندي شور / Sandy Shore Bar",
      min: 3,
      max: 5,
      escape: "الهروب بعد 4 دقائق",
    },
    {
      name: "متجر الأسلحة / Weapons Store",
      min: 3,
      max: 6,
      escape: "الهروب بعد 5 دقائق",
    },
    {
      name: "السجن المركزي / Central Prison Assault",
      min: 6,
      max: 12,
      escape: "الهروب فوري",
    },
    {
      name: "ورشة / Work Shop",
      min: 5,
      max: 8,
      escape: "الهروب بعد 8 دقائق",
    },
    {
      name: "ورشة بينز / Bennys Work Shop",
      min: 6,
      max: 9,
      escape: "الهروب بعد 9 دقائق",
    },
    {
      name: "البنك المركزي",
      min: 8,
      max: 10,
      escape: "الهروب بعد 12 دقائق",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={APP_LOGO} alt={APP_TITLE} className="h-12 w-12" />
              <h1 className="text-2xl font-bold text-primary">{APP_TITLE}</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-border bg-card">
        <div className="container">
          <div className="flex gap-6 py-4 flex-wrap">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <Link href="/general-laws" className="text-foreground hover:text-primary transition-colors">
              القوانين العامة
            </Link>
            <Link href="/theft-laws" className="text-primary font-semibold hover:text-accent transition-colors">
              تسلسل السرقات
            </Link>
            <Link href="/crime-laws" className="text-foreground hover:text-primary transition-colors">
              قوانين الإجرام
            </Link>
            <Link href="/warnings" className="text-foreground hover:text-primary transition-colors">
              العقوبات والتحذيرات
            </Link>
            <Link href="/safe-zones" className="text-foreground hover:text-primary transition-colors">
              المناطق الآمنة
            </Link>
            <Link href="/discord-rules" className="text-foreground hover:text-primary transition-colors">
              قوانين الديسكورد
            </Link>
            <Link href="/enemy-rules" className="text-foreground hover:text-primary transition-colors">
              قوانين العداوة
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-primary">تسلسل السرقات</h2>

          {/* Rules Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-primary">القواعد العامة</h3>
            <div className="space-y-4">
              <Card className="bg-card border-border p-6">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg min-w-fit">[ 1 ]</span>
                  <p className="text-foreground">الأولوية / الجريدة هو المكان الذي يتم توضيح الجرائم المسموحة تناسباً مع عدد العسكر المباشرين للميدان</p>
                </div>
              </Card>

              <Card className="bg-card border-border p-6">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg min-w-fit">[ 2 ]</span>
                  <p className="text-foreground">التدخل الخارجي يُمنع أن يكون من أشخاص خارج السيناريو بمعنى يحسب من ضمن العدد المسموح لك فيه بالسرقة</p>
                </div>
              </Card>

              <Card className="bg-card border-border p-6">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg min-w-fit">[ 3 ]</span>
                  <p className="text-foreground">العلامة الخضراء أمام اسم السرقة تعني أنها مسموحة والعكس مع العلامة الحمراء</p>
                </div>
              </Card>

              <Card className="bg-card border-border p-6">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg min-w-fit">[ 4 ]</span>
                  <p className="text-foreground">الأولوية تُعرض هنا # فقط</p>
                </div>
              </Card>

              <Card className="bg-card border-border p-6">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg min-w-fit">[ 5 ]</span>
                  <p className="text-foreground">في حال تأخر العسكر المدة الموضحة بالأسفل من بعد نجاح السرقة يسمح لك بمغادرة موقع السرقة</p>
                </div>
              </Card>

              <Card className="bg-card border-border p-6">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg min-w-fit">[ 6 ]</span>
                  <p className="text-foreground">يُمنع وضع (Ghost / Off Radar) أثناء عملية السرقة ويسمح بها فقط وقت الهروب</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Robberies Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-primary">تسلسل السرقات</h3>
            <div className="space-y-4">
              {robberies.map((robbery, index) => (
                <Card key={index} className="bg-card border-border p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-3 text-foreground">{robbery.name}</h4>
                      <div className="space-y-2 text-muted-foreground">
                        <p className="flex items-center gap-2">
                          <span className="text-primary font-bold">الحد الأدنى:</span>
                          <span className="text-foreground font-semibold">{robbery.min}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="text-primary font-bold">الحد الأقصى:</span>
                          <span className="text-foreground font-semibold">{robbery.max}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="text-primary font-bold">وقت الهروب:</span>
                          <span className="text-foreground font-semibold">{robbery.escape}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-4xl text-primary">✓</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12">
            <Link href="/">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                العودة للرئيسية
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-12">
        <div className="container py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Old Life RP. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
