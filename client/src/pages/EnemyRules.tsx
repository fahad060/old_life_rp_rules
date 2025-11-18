import { Link } from "wouter";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function EnemyRules() {
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
            <Link href="/theft-laws" className="text-foreground hover:text-primary transition-colors">
              قوانين السرقات
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
            <Link href="/enemy-rules" className="text-primary font-semibold hover:text-accent transition-colors">
              قوانين العداوة
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-primary">قوانين العداوة</h2>

          {/* Main Rules */}
          <div className="space-y-4 mb-12">
            <Card className="bg-card border-border p-6">
              <h4 className="text-xl font-bold mb-3 text-foreground">شروط إعلان العداوة</h4>
              <p className="text-muted-foreground">إذا كنت ستعلن عداوة مع شخص لابد أن يكون هناك سبب مقنع مثل: نصب أو اعتداء أو خيانة أو قصة داخل الرول بلاي</p>
            </Card>

            <Card className="bg-card border-border p-6">
              <h4 className="text-xl font-bold mb-3 text-foreground">دور إدارة السيرفر</h4>
              <p className="text-muted-foreground">إدارة السيرفر مسؤولة عن قبول أو رفض إعلان العداوة مهما كان السبب، وفقاً لما تراه مناسباً</p>
            </Card>
          </div>

          {/* Military Rules */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-primary">قوانين العداوة مع العسكريين</h3>
            <div className="space-y-4">
              <Card className="bg-card border-border p-6">
                <h4 className="text-xl font-bold mb-3 text-foreground">⚠️ عدم إعلان العداوة مع العسكري العادي</h4>
                <p className="text-muted-foreground">لا يحق لك إعلان عداوة مع عسكري لأنه يقوم بعمله الطبيعي</p>
              </Card>

              <Card className="bg-card border-border p-6">
                <h4 className="text-xl font-bold mb-3 text-foreground">✓ حالات يمكن فيها إعلان العداوة مع العسكري</h4>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-start gap-3">
                    <span className="text-primary font-bold min-w-fit">•</span>
                    <span>إذا كان العسكري فاسداً</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-primary font-bold min-w-fit">•</span>
                    <span>إذا كان هناك معرفة طويلة وحقد بينك وبينه (داخل الرول بلاي)</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-primary font-bold min-w-fit">•</span>
                    <span>إذا قام بالاعتداء عليك جسدياً</span>
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Aggressor Rules */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-primary">قوانين المعتدي</h3>
            <Card className="bg-card border-border p-6">
              <h4 className="text-xl font-bold mb-3 text-foreground">⛔ المعتدي لا يحق له إعلان العداوة</h4>
              <p className="text-muted-foreground">في حال كنت أنت المعتدي، لا يحق لك إعلان عداوة. يجب أن يكون الطرف الآخر هو من يعلن العداوة عليك</p>
            </Card>
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
