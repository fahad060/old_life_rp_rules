import { Link } from "wouter";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CrimeLaws() {
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
            <Link href="/theft-laws" className="text-foreground hover:text-primary transition-colors">
              قوانين السرقات
            </Link>
            <Link href="/crime-laws" className="text-primary font-semibold hover:text-accent transition-colors">
              قوانين الإجرام
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-primary">قوانين الإجرام</h2>

          {/* Laws List */}
          <div className="space-y-6">
            <Card className="bg-card border-border p-6">
              <h3 className="text-2xl font-bold mb-3 text-primary">1. الاعتداء والضرب</h3>
              <p className="text-foreground mb-2">
                أي اعتداء جسدي على شخص آخر أو إلحاق الأذى به.
              </p>
              <div className="bg-background p-4 rounded-lg mb-3">
                <p className="text-muted-foreground"><strong>العقوبة:</strong> غرامة مالية من 1000 إلى 5000 دولار أو السجن من 10 إلى 20 دقيقة</p>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>الضرب البسيط</li>
                <li>الاعتداء بأسلحة</li>
                <li>إلحاق إصابات خطيرة</li>
              </ul>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="text-2xl font-bold mb-3 text-primary">2. القتل</h3>
              <p className="text-foreground mb-2">
                إنهاء حياة شخص آخر بأي وسيلة.
              </p>
              <div className="bg-background p-4 rounded-lg mb-3">
                <p className="text-muted-foreground"><strong>العقوبة:</strong> السجن من 120 إلى 300 دقيقة أو الحظر الدائم في الحالات الخطيرة</p>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>القتل العمد</li>
                <li>القتل الخطأ</li>
                <li>القتل في جريمة أخرى</li>
              </ul>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="text-2xl font-bold mb-3 text-primary">3. الاختطاف والحبس غير القانوني</h3>
              <p className="text-foreground mb-2">
                احتجاز شخص ضد إرادته بالقوة أو التهديد.
              </p>
              <div className="bg-background p-4 rounded-lg mb-3">
                <p className="text-muted-foreground"><strong>العقوبة:</strong> غرامة مالية من 10000 إلى 30000 دولار أو السجن من 60 إلى 150 دقيقة</p>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>الاختطاف مقابل فدية</li>
                <li>الحبس غير القانوني</li>
                <li>الاحتجاز بالقوة</li>
              </ul>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="text-2xl font-bold mb-3 text-primary">4. الاغتصاب والتحرش الجنسي</h3>
              <p className="text-foreground mb-2">
                أي تصرف جنسي غير موافق عليه أو إجباري.
              </p>
              <div className="bg-background p-4 rounded-lg mb-3">
                <p className="text-muted-foreground"><strong>العقوبة:</strong> السجن من 180 إلى 300 دقيقة أو الحظر الدائم</p>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>الاغتصاب</li>
                <li>التحرش الجنسي</li>
                <li>الإساءة الجنسية</li>
              </ul>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="text-2xl font-bold mb-3 text-primary">5. الإرهاب والتهديدات</h3>
              <p className="text-foreground mb-2">
                تهديد الآخرين بالعنف أو الأذى أو نشر الخوف.
              </p>
              <div className="bg-background p-4 rounded-lg mb-3">
                <p className="text-muted-foreground"><strong>العقوبة:</strong> غرامة مالية من 5000 إلى 15000 دولار أو السجن من 30 إلى 90 دقيقة</p>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>التهديدات المباشرة</li>
                <li>التهديدات عبر الإنترنت</li>
                <li>نشر الخوف والذعر</li>
              </ul>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="text-2xl font-bold mb-3 text-primary">6. الاتجار بالمخدرات</h3>
              <p className="text-foreground mb-2">
                بيع أو توزيع المخدرات والمواد الممنوعة.
              </p>
              <div className="bg-background p-4 rounded-lg mb-3">
                <p className="text-muted-foreground"><strong>العقوبة:</strong> غرامة مالية من 20000 إلى 50000 دولار أو السجن من 120 إلى 240 دقيقة</p>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>بيع المخدرات</li>
                <li>توزيع المواد الممنوعة</li>
                <li>حيازة كميات كبيرة</li>
              </ul>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="text-2xl font-bold mb-3 text-primary">7. الاحتيال والتزوير</h3>
              <p className="text-foreground mb-2">
                خداع الآخرين أو تزوير الوثائق للحصول على مكاسب.
              </p>
              <div className="bg-background p-4 rounded-lg mb-3">
                <p className="text-muted-foreground"><strong>العقوبة:</strong> غرامة مالية من 5000 إلى 20000 دولار أو السجن من 30 إلى 60 دقيقة</p>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>الاحتيال المالي</li>
                <li>تزوير الوثائق</li>
                <li>الخداع التجاري</li>
              </ul>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="text-2xl font-bold mb-3 text-primary">8. مقاومة السلطات</h3>
              <p className="text-foreground mb-2">
                عدم الامتثال لأوامر الشرطة أو محاولة الهروب.
              </p>
              <div className="bg-background p-4 rounded-lg mb-3">
                <p className="text-muted-foreground"><strong>العقوبة:</strong> غرامة مالية من 2000 إلى 8000 دولار أو السجن من 15 إلى 45 دقيقة</p>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
                <li>عدم الامتثال للأوامر</li>
                <li>محاولة الهروب من الشرطة</li>
                <li>مقاومة القبض</li>
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
