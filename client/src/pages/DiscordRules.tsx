import { Link } from "wouter";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function DiscordRules() {
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
            <Link href="/discord-rules" className="text-primary font-semibold hover:text-accent transition-colors">
              قوانين الديسكورد
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-primary">قوانين الديسكورد</h2>

          {/* Discord Specific Rules */}
          <div className="space-y-4">
            <Card className="bg-card border-border p-6">
              <h4 className="text-xl font-bold mb-3 text-foreground">عدم المضايقة والاحترام</h4>
              <p className="text-muted-foreground">يُمنع مضايقة أو شتم اللاعبين أو الخوض في أحاديث سياسية أو دينية داخل السيرفر، كما يُمنع أيضاً استخدام أي كلمات أو مصطلحات تحمل معاني مختلفة</p>
            </Card>

            <Card className="bg-card border-border p-6">
              <h4 className="text-xl font-bold mb-3 text-foreground">عدم التحدث بسوء عن اللاعبين</h4>
              <p className="text-muted-foreground">يُمنع التحدث بسوء عن اللاعبين خارج السيرفر سواء كان في بث أو غيره. في حال الاشتباه بوجود شخصنة بين اللاعبين سيتم تبنيدهم من السيرفر بشكل نهائي</p>
            </Card>

            <Card className="bg-card border-border p-6">
              <h4 className="text-xl font-bold mb-3 text-foreground">الالتزام بالواقعية</h4>
              <p className="text-muted-foreground">يجب عليك الالتزام في تقمص الحياة الواقعية داخل السيرفر، سواء كان بالحوار أو ارتداء الملابس الملائمة بوظيفتك / قصة شخصيتك وغيرها</p>
            </Card>

            <Card className="bg-card border-border p-6">
              <h4 className="text-xl font-bold mb-3 text-foreground">استكشاف الوظائف</h4>
              <p className="text-muted-foreground">يجب عليك استكشاف جميع الوظائف والبحث عن متعة الرول بلاي للحصول على تجربة مختلفة</p>
            </Card>

            <Card className="bg-card border-border p-6">
              <h4 className="text-xl font-bold mb-3 text-foreground">منع نقل الأموال بين الشخصيات</h4>
              <p className="text-muted-foreground">يُمنع نقل الأموال بين شخصياتك (مثل نقل الأموال من شخصية العسكري إلى المواطن أو بشكل عام). في حال مخالفتك سيتم اتخاذ الإجراءات الإدارية وكذلك حذف جميع شخصياتك</p>
            </Card>

            <Card className="bg-card border-border p-6">
              <h4 className="text-xl font-bold mb-3 text-foreground">برنامج التصوير</h4>
              <p className="text-muted-foreground">يجب عليك تشغيل برنامج تصوير لحفظ آخر 20 دقيقة دائماً في حال تم طلبها منك، ويُمنع دخولك السيرفر دون ذلك</p>
            </Card>

            <Card className="bg-card border-border p-6">
              <h4 className="text-xl font-bold mb-3 text-foreground">عدم التدخل في السيناريوهات</h4>
              <p className="text-muted-foreground">يُمنع التدخل في سيناريو قائم (مثل تهديد مواطنين أثناء سرقتهم للبقالة وغيره من السيناريوهات الأخرى)</p>
            </Card>

            <Card className="bg-card border-border p-6">
              <h4 className="text-xl font-bold mb-3 text-foreground">تقدير حياتك عند إطلاق النار</h4>
              <p className="text-muted-foreground">في حال وجود إطلاق نار يجب عليك تقدير حياتك والابتعاد قدر الإمكان عن الموقع وعدم التوقف للمشاهدة</p>
            </Card>

            <Card className="bg-card border-border p-6">
              <h4 className="text-xl font-bold mb-3 text-foreground">عدم الخروج عن الرول بلاي</h4>
              <p className="text-muted-foreground">يُمنع الخروج عن الرول بلاي نهائياً مهما كان السبب سواء حدوث مخالفة أو غيره. يجب عليك استكمال السيناريو والتوجه بعد الانتهاء منه بشكل كامل للدعم الفني لحل المشكلة أو المخالفة</p>
            </Card>

            <Card className="bg-card border-border p-6">
              <h4 className="text-xl font-bold mb-3 text-foreground">منع القتل العشوائي</h4>
              <p className="text-muted-foreground">يُمنع قتل أو إسقاط أو صدم اللاعبين بشكل عشوائي باستخدام أي سلاح / أداة أو مركبة. يقصد بالعشوائية كون اللاعب المستهدف خارج السيناريو وبلا سبب مقنع</p>
            </Card>

            <Card className="bg-card border-border p-6">
              <h4 className="text-xl font-bold mb-3 text-foreground">عدم تذكر الأحداث بعد العلاج</h4>
              <p className="text-muted-foreground">يُمنع تذكر جميع الأحداث التي أدت إلى إصابتك / تحللك بعد تلقي العلاج في المستشفى. كما يُمنع طلب تذكيرك من قبل أصدقائك بعد تلقي علاجك فوراً (يجب عليك الهدوء وأخذ راحة بسبب تعرضك لإصابة حديثة)</p>
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
