import { Link } from "wouter";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const pages = [
    {
      title: "القوانين العامة",
      description: "تعرف على القوانين الأساسية والعامة التي تحكم حياتك اليومية في السيرفر",
      icon: "⚖️",
      href: "/general-laws",
    },
    {
      title: "تسلسل السرقات",
      description: "اطلع على قوانين السرقات المختلفة والحدود المسموح بها لكل سرقة",
      icon: "🔓",
      href: "/theft-laws",
    },
    {
      title: "قوانين الإجرام",
      description: "تعرف على القوانين المتعلقة بالجرائم والعمليات الإجرامية والعقوبات",
      icon: "⚔️",
      href: "/crime-laws",
    },
    {
      title: "العقوبات والتحذيرات",
      description: "اطلع على نظام العقوبات والتحذيرات وفترات الحظر المختلفة",
      icon: "⚠️",
      href: "/warnings",
    },
    {
      title: "المناطق الآمنة",
      description: "تعرف على المناطق الآمنة وغير الآمنة والقوانين المتعلقة بها",
      icon: "🛡️",
      href: "/safe-zones",
    },
    {
      title: "قوانين الديسكورد",
      description: "اطلع على قوانين السلوك والاحترام على خادم الديسكورد",
      icon: "💬",
      href: "/discord-rules",
    },
    {
      title: "قوانين العداوة",
      description: "تعرف على شروط وقيود إعلان العداوة بين اللاعبين",
      icon: "⚡",
      href: "/enemy-rules",
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
            <Link href="/" className="text-primary font-semibold hover:text-accent transition-colors">
              الرئيسية
            </Link>
            <Link href="/general-laws" className="text-foreground hover:text-primary transition-colors">
              القوانين العامة
            </Link>
            <Link href="/theft-laws" className="text-foreground hover:text-primary transition-colors">
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">مرحباً بك في سيرفر Old Life RP</h2>
            <p className="text-lg text-muted-foreground mb-8">
              اكتشف جميع القوانين والأنظمة التي تحكم حياتك في السيرفر
            </p>
          </div>

          {/* Laws Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="mb-4 h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">{page.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{page.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {page.description}
                  </p>
                  <Link href={page.href}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      اقرأ المزيد
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
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
