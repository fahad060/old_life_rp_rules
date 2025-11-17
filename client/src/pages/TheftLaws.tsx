import { Link } from "wouter";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function TheftLaws() {
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
            <Link href="/general-laws" className="text-foreground hover:text-primary transition-colors">
              القوانين العامة
            </Link>
            <Link href="/theft-laws" className="text-primary font-semibold hover:text-accent transition-colors">
              قوانين السرقات
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
          <h2 className="text-4xl font-bold mb-8 text-primary">قوانين السرقات</h2>

          {/* Laws List */}
          <div className="space-y-6">
            <Card className="bg-card border-border p-6">
              <h3 className="text-2xl font-bold mb-3 text-primary">1. السرقة البسيطة</h3>
              <p className="text-foreground mb-2">
                سرقة الأشياء الصغيرة والبسيطة من المتاجر أو المنازل.
              </p>
              <div className="bg-background p-4 rounded-lg mb-3">
                <p className="text-muted-foreground"><strong>العقوبة:</strong> غرامة مالية من 500 إلى 2000 دولار أو السجن من 5 إلى 10 دقائق</p>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>سرقة الملابس والإكسسوارات</li>
                <li>سرقة الأغراض الشخصية البسيطة</li>
                <li>السرقة من المتاجر الصغيرة</li>
              </ul>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="text-2xl font-bold mb-3 text-primary">2. السرقة المؤهلة</h3>
              <p className="text-foreground mb-2">
                سرقة أشياء ذات قيمة عالية أو من أماكن محمية.
              </p>
              <div className="bg-background p-4 rounded-lg mb-3">
                <p className="text-muted-foreground"><strong>العقوبة:</strong> غرامة مالية من 5000 إلى 15000 دولار أو السجن من 15 إلى 30 دقيقة</p>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>سرقة المجوهرات والذهب</li>
                <li>سرقة الأسلحة والذخيرة</li>
                <li>سرقة من البنوك والمحلات الكبرى</li>
              </ul>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="text-2xl font-bold mb-3 text-primary">3. سرقة السيارات</h3>
              <p className="text-foreground mb-2">
                سرقة المركبات والسيارات من الشارع أو من المواقف.
              </p>
              <div className="bg-background p-4 rounded-lg mb-3">
                <p className="text-muted-foreground"><strong>العقوبة:</strong> غرامة مالية من 10000 إلى 25000 دولار أو السجن من 30 إلى 60 دقيقة</p>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>سرقة السيارات المركونة</li>
                <li>سرقة الدراجات النارية</li>
                <li>سرقة الشاحنات والمركبات الثقيلة</li>
              </ul>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="text-2xl font-bold mb-3 text-primary">4. السطو المسلح</h3>
              <p className="text-foreground mb-2">
                السرقة بالقوة أو التهديد باستخدام الأسلحة.
              </p>
              <div className="bg-background p-4 rounded-lg mb-3">
                <p className="text-muted-foreground"><strong>العقوبة:</strong> غرامة مالية من 15000 إلى 50000 دولار أو السجن من 45 إلى 120 دقيقة</p>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>السطو على المتاجر</li>
                <li>السطو على البنوك</li>
                <li>السطو على الأفراد في الشارع</li>
              </ul>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="text-2xl font-bold mb-3 text-primary">5. الحد من السرقة</h3>
              <p className="text-foreground mb-2">
                إجراءات الحماية والوقاية من السرقات.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>تركيب الأقفال والأنظمة الأمنية</li>
                <li>الإبلاغ الفوري عن السرقات</li>
                <li>التعاون مع الشرطة في التحقيقات</li>
                <li>الحفاظ على الأشياء الثمينة في أماكن آمنة</li>
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
