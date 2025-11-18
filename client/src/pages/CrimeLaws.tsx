import { Link } from "wouter";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CrimeLaws() {
  const crimes = [
    "إذا تم اختطاف رهينة لديك فقط 15 دقيقة لتنفيذ السيناريو. في حال انتهاء المدة ولم يتم بدء أي سيناريو يجب فك سراح الرهينة",
    "يُمنع تبادل الرهائن بين العصابات والأشخاص أثناء سيناريو قائم",
    "في حال تم خطف رهينة يجب الذهاب لموقع التفاوض على الفور وعدم المماطلة",
    "يجب على المخطوف تقمص دور الخوف والخوف على حياته",
    "يجب أن يكون التهديد بشكل مباشر ولا يسمح لك التهديد بداخل المركبات",
    "يُمنع الإهانة بأي شكل من الأشكال",
    "في حال اختطفت يجب عليك الاستماع لأوامر الخاطف",
    "يُمنع كلبشة شخص إلا إذا كان بالقرب منك وأن تكون خلفه وكتابة أمر ( -كلبشة @منشن الشخص )",
    "يحق للرهينة الهروب في حال وجدت فرصة وفي حال لم يكن الخاطف متواجد وغير منتبه",
    "في حال المواطن متعاون معك لا يحق لك قتله تحت أي ظرف كان. في حال عدم الانصياع يحق لك قتله",
    "يُمنع قتل أي شخص لسبب تافه أو لأجل أمر شخصي",
    "الحد الأقصى لطلب تحرير الرهينة هو ( 5000$ ) ويكون التسليم يد بيد",
    "يجب عليك قبل بداية أي سرقة أو عمل إجرامي التخطيط لها ووضع هدف لها وتدخل خارجي إذا وجد",
    "يُمنع الاعتداء على المفاوض",
    "يُمنع التفاوض على رهينة وهي ليست بالموقع أو قرب الموقع",
    "يُمنع الاتفاق مع الرهينة منعاً باتاً",
    "يُمنع قتل الرهينة لسبب ( تافه )",
    "يُمنع إرسال طلب ( عسكري، تاكسي، والخ ) لغرض خطفه أو تهديده أو لأي عمل إجرامي",
    "حد أفراد العصابة داخل الرحلة ( 8 ) أشخاص فقط",
    "حد المجموعات أو العائلات المسموح فقط 10 أشخاص",
    "يُمنع تحالف العصابات ضد الشرطة أو ضد عصابة أخرى",
    "في حال تم استيقافك مرورياً يُمنع إطلاق النار",
    "يُمنع تقليد ملابس العصابات",
    "يُمنع الخطف والتهديد في حال وجود مواطن أو مدني",
    "يُمنع إهانة الرهينة ويجب التعامل معه بما يحدث ولا يتم الضغط عليه",
    "لا يسمح إطلاق النار العشوائي لغرض جذب العسكر",
    "يُمنع استعمال الحبة",
    "يُمنع خطف عسكري في حالة استيقاف مروري",
    "يجب عليك ارتداء قناع أو وشاح أثناء أي عملية إجرامية",
    "يُمنع محاولة تسبب لعداوة بأي طريقة كانت",
    "يُمنع افتعال فايت بدون سبب",
    "لا تعتبر الرهينة مخطوفة في حال لم تتم كلبشته ويحق له الهروب في حال عدم انتباه الخاطف له",
    "يُمنع عليك استخراج السلاح إلا في المواقف الخطرة",
    "يُمنع منعاً باتاً خطف رهينة بغاية التوجه للسجن والتفاوض مع العساكر لإطلاق سراح أي سجين",
    "يُمنع على أي فرد أو جماعة السرقة ثم الانتظار لفترة في نفس الموقع سواء للتفاوض أو غيره",
    "يُمنع منعاً باتاً طلب على الرهينة أي مبلغ مادي ويحق لك طلب واحد على كل رهينة",
    "أثناء عملية النصب يُمنع منعاً باتاً الحلف مهما كان السبب",
    "لا يحق لك قتل الشخص بعد أن تنصب عليه بحجة النسيان",
    "في حال نصب عليك شخص يحق لك قتله بشكل مباشر وأخذ الغرض الذي تم الاتفاق عليه ولا يحق لك أخذ أي غرض ثاني أو يحق لك أخذ شيء بنفس القيمة",
    "يُمنع منعاً باتاً سرقة السيارات الخاصة بأي شكل من الأشكال",
    "يُمنع منعاً باتاً سرقة الهيلي بأي شكل من الأشكال",
  ];

  const robberyLimits = [
    { name: "ATM Robbery", min: 1, max: 2 },
    { name: "Store Robbery", min: 2, max: 4 },
    { name: "House Robbery", min: 3, max: 5 },
    { name: "Jewellery Robbery", min: 5, max: 7 },
    { name: "Fleeca Robbery", min: 5, max: 9 },
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
            <Link href="/theft-laws" className="text-foreground hover:text-primary transition-colors">
              تسلسل السرقات
            </Link>
            <Link href="/crime-laws" className="text-primary font-semibold hover:text-accent transition-colors">
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
          <h2 className="text-4xl font-bold mb-8 text-primary">قوانين الإجرام</h2>

          {/* Crime Laws */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-primary">قوانين العمليات الإجرامية</h3>
            <div className="space-y-3">
              {crimes.map((crime, index) => (
                <Card key={index} className="bg-card border-border p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg min-w-fit">[ {index + 1} ]</span>
                    <p className="text-foreground">{crime}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Robbery Limits */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-primary">حدود الأشخاص المسموح بها للسرقات</h3>
            <div className="space-y-4">
              {robberyLimits.map((robbery, index) => (
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
                      </div>
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
