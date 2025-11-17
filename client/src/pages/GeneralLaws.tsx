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
          <div className="flex gap-6 py-4 flex-wrap">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <Link href="/general-laws" className="text-primary font-semibold hover:text-accent transition-colors">
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
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-primary">القوانين العامة</h2>

          {/* Laws List */}
          <div className="space-y-4">
            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 1 ]</span>
                <p className="text-foreground">يجب أن تتعامل بجدية مع المواقف الهامة وعدم المزاح في كل شيء</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 2 ]</span>
                <p className="text-foreground">يُمنع خطف وسرقة وتدمير أغراض الكادر الطبي</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 3 ]</span>
                <p className="text-foreground">يُمنع استخدام شخصية البنت في حال كنت رجل والعكس صحيح، ويُمنع إزالة الوشوم الموجودة في الشخصية بعد إنشاؤك لها</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 4 ]</span>
                <p className="text-foreground">يُمنع ارتداء الزي الذي ينافي الواقعية (مثل لبس الفضائي)</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 5 ]</span>
                <p className="text-foreground">يُمنع ارتداء الحزام وأدوات الشرطة والمسعفين (كالدرع العسكري) ويُمنع ارتداء الملابس المشابهة لهم (باستثناء الانتحال)</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 6 ]</span>
                <p className="text-foreground">يُمنع منعاً باتاً استعمال واستخدام أغراض لا تمتلكها في حقيبتك</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 7 ]</span>
                <p className="text-foreground">عند تغيير ملابسك يجب عليك تغييرها عند محل الملابس أو من شنطة المركبة</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 8 ]</span>
                <p className="text-foreground">يجب امتلاك مايك جيد عند دخولك السيرفر</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 9 ]</span>
                <p className="text-foreground">يُمنع الاتصال على شخص لم يقوم بإعطائك رقمه (يصنف ذلك الخروج عن الـ RP)</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 10 ]</span>
                <p className="text-foreground">يُسمح بمقاومة أشخاص أكثر منك طالما كان السلاح الناري في يدك، لكن في حال تم تهديدك بسلاح ثقيل وأنت تحمل سلاح خفيف يجب عليك الخوف على حياتك (غير ذلك يُصنف LAR)</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 11 ]</span>
                <p className="text-foreground">يُمنع الهروب من المستشفى في حال تم رفع عليك التيزر (من 3 عساكر فما فوق) أو السلاح الناري (في حال المخالفة يعتبر LAR). ملاحظة: في حال تم رفع عليك التيزر من عسكريين وأقل مسموح تهرب</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 12 ]</span>
                <p className="text-foreground">يُسمح التحدث في الـ Afro One 10 ثواني فأقل (غير ذلك في الـ VIP أو MC)</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 13 ]</span>
                <p className="text-foreground">التعرف على الشخص يكون من خلال الملامح وليس من خلال الصوت (تعتبر مخالفة ذلك الخروج عن الـ RP)</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 14 ]</span>
                <p className="text-foreground">عند حدوث إعصار تعود جميع الأحداث إلى ما قبل الإعصار، في حال كنت رهينة ترجع للخاطف، وفي حال تم القبض عليك ترجع للشرطة والخ</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 15 ]</span>
                <p className="text-foreground">يُمنع الشخصنة بين العصابات أو العساكر أو المواطنين خارج الرول بلاي</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 16 ]</span>
                <p className="text-foreground">في حال تم إسقاطك سواء إسقاط شرعي أو غير شرعي إلزامي عليك العودة إلى موقع إسقاطك</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 17 ]</span>
                <p className="text-foreground">في حال كنت في عمل إجرامي (كخطف رهينة) وتغيرت الأولوية إلى الأقل من الخطف تستطيع الاستكمال في الخطف، دون عمل أي عمل إجرامي آخر لا يُسمح به في الأولوية، ويندرج هذا الموضوع على جميع الأعمال الإجرامية</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 18 ]</span>
                <p className="text-foreground">يُمنع ارتداء الملابس المدرعة على المواطنين، ويُستثنى من ذلك من مسموح لهم من رجال الشرطة ومسؤولي العصابات المسموح لهم فقط</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 19 ]</span>
                <p className="text-foreground">عند دخولك للسجن تعتبر جميع أدوات التواصل مع العالم الخارجي مسحوبة وعند خروجك تستعيدها</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 20 ]</span>
                <p className="text-foreground">يُمنع تغيير ملامح وجهك (الشخصية) منعاً باتاً</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 21 ]</span>
                <p className="text-foreground">يُمنع كلبشة شخص مسقط</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 22 ]</span>
                <p className="text-foreground">نقل المصاب بغير هدف واضح وإلى مسافات بعيدة يعتبر خطف (إن كان الهدف هو أخذ صورة يجب أن يكون داخل محيط الإسقاط)، ولا يحق سحب أي غرض منه إلا إذا كنت خاطفاً</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 23 ]</span>
                <p className="text-foreground">يُمنع التدريع من مركبة لا تمتلكها ويُستثنى من ذلك العساكر ومركباتهم</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 24 ]</span>
                <p className="text-foreground">السناك (الهيل) يُستخدم في حال كنت مكڤر (ماخذ كڤر) وتهيل ومسوح كل 5 ثواني سناك واحد</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 25 ]</span>
                <p className="text-foreground">يُمنع دخول أو عمل أي مهمة داخل القيم باستثناء Ms.Baker, Dax (وأي مهمة تشيل الشرطة المدنية دون تخريب بيئة اللعب)</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 26 ]</span>
                <p className="text-foreground">يجب تكوين العلاقات داخل القيم بشكل كامل، ويُمنع ربط الشخصيات بعلاقة مع شخصية أخرى لأي سبب كان (غير ذلك يعتبر الخروج عن الـ RP)</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 27 ]</span>
                <p className="text-foreground">يُمنع الاتفاق أو التخطيط لأي عمل خارج القيم (غير ذلك يعتبر الخروج عن الـ RP)</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 28 ]</span>
                <p className="text-foreground">يُمنع الإزعاج باستخدام المكسر، مثل وضع صدى للصوت أو تشغيل الأغاني بصوت عالي. يُسمح بتشغيلها في الحالات التالية: استخدامك للجوال / تكون متواجد بالمركبة / في حال كنت تمتلك مسجل بالحقيبة</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 29 ]</span>
                <p className="text-foreground">يُمنع التدخل في أي سيناريو قائم (سرقة / فايت / خطف، الخ) وأنت لا تربطك علاقة بالسيناريو</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 30 ]</span>
                <p className="text-foreground">يُمنع رمي الممنوعات (سلاح / مخدرات، الخ) وأنت تحت أنظار العساكر</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 31 ]</span>
                <p className="text-foreground">يُمنع ارتكاب المخالفات أمام العسكر بهدف جعلهم يطاردونك</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 32 ]</span>
                <p className="text-foreground">عند التجميع أو العمل في أحد الوظائف يُمنع تواجدك داخل المركبة</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 33 ]</span>
                <p className="text-foreground">يُمنع الخروج من القيم في حال كنت مشارك في سيناريو مهما كان نوع السيناريو إلا بعد مرور ما لا يقل عن 10 دقائق</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 34 ]</span>
                <p className="text-foreground">يُمنع استعمال البرامج التي تساعد على تسهيل التجميع مثل برامج النسخ والخ</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 35 ]</span>
                <p className="text-foreground">الطريقة النظامية (المرخصة) للحصول على الأسلحة البيضاء والأسلحة النارية عن طريق الطرق الشرعية</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 36 ]</span>
                <p className="text-foreground">يُمنع التحلل إلا بعد شروط آتية: 1) مرور 5 دقائق على إسقاطك، 2) التأكد من عدم وجود أشخاص حولك، 3) أخذ الإذن من الرقابة للتحلل</p>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg min-w-fit">[ 37 ]</span>
                <p className="text-foreground">يُمنع الانقلاب أو الخيانة العسكرية بجميع أنواعها، ولا يُسمح بذلك إلا بسبب واضح، ويجب أن يُعرض السبب على إدارة السيرفر عبر تذكرة أونر للحصول على الموافقة</p>
              </div>
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
