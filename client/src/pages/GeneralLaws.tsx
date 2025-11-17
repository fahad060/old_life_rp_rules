import { Link } from "wouter";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function GeneralLaws() {
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
          <div className="flex gap-6 py-4">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <Link href="/general-laws" className="text-primary font-semibold hover:text-accent transition-colors">
              القوانين العامة
            </Link>
            <Link href="/theft-laws" className="text-foreground hover:text-primary transition-colors">
              قوانين السرقات
            </Link>
            <Link href="/warnings" className="text-foreground hover:text-primary transition-colors">
              العقوبات والتحذيرات
            </Link>
            <Link href="/crime-laws" className="text-foreground hover:text-primary transition-colors">
              قوانين الإجرام
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-primary">القوانين العامة</h2>

          {/* Laws List */}
          <div className="space-y-6">
            <Card className="bg-card border-border p-6">
              <h3 className="text-2xl font-bold mb-3 text-primary">1. احترام الآخرين</h3>
              <p className="text-foreground mb-2">
                يجب على جميع اللاعبين احترام بعضهم البعض والتعامل بأدب واحترام في جميع التفاعلات داخل السيرفر.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>عدم الإساءة اللفظية للاعبين الآخرين</li>
                <li>احترام الشخصيات والأدوار المختلفة</li>
                <li>عدم التنمر أو المضايقة</li>
              </ul>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="text-2xl font-bold mb-3 text-primary">2. الحفاظ على النظام</h3>
              <p className="text-foreground mb-2">
                يجب الالتزام بقواعد السيرفر والاستماع لتعليمات الإدارة والموظفين.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>الامتثال لأوامر الشرطة والإدارة</li>
                <li>عدم مقاومة السلطات بشكل عنيف</li>
                <li>الالتزام بساعات الحظر المفروضة</li>
              </ul>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="text-2xl font-bold mb-3 text-primary">3. استخدام الموارد</h3>
              <p className="text-foreground mb-2">
                يجب استخدام موارد السيرفر بشكل مسؤول وعادل.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>عدم الإساءة في استخدام الأموال</li>
                <li>عدم الاحتكار غير المشروع</li>
                <li>احترام ملكية الآخرين</li>
              </ul>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="text-2xl font-bold mb-3 text-primary">4. الأمان والسلامة</h3>
              <p className="text-foreground mb-2">
                يجب الحفاظ على أمان وسلامة جميع اللاعبين في السيرفر.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>عدم استخدام الأسلحة بشكل عشوائي</li>
                <li>الالتزام بقوانين المناطق الآمنة</li>
                <li>عدم إزعاج اللاعبين الآخرين</li>
              </ul>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="text-2xl font-bold mb-3 text-primary">5. الحظر والعقوبات</h3>
              <p className="text-foreground mb-2">
                انتهاك القوانين قد يؤدي إلى عقوبات تتراوح من التحذيرات إلى الحظر الدائم.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>التحذيرات الأولى للانتهاكات البسيطة</li>
                <li>الحظر المؤقت للانتهاكات المتكررة</li>
                <li>الحظر الدائم للانتهاكات الخطيرة</li>
              </ul>
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
