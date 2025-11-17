import { Link } from "wouter";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Warnings() {
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
            <Link href="/warnings" className="text-primary font-semibold hover:text-accent transition-colors">
              العقوبات والتحذيرات
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-primary">العقوبات والتحذيرات</h2>

          {/* Warning Levels */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <Card className="bg-card border-border p-4">
              <div className="text-center">
                <h3 className="text-lg font-bold text-primary mb-2">Warn 1</h3>
                <p className="text-muted-foreground">تحذير لمدة</p>
                <p className="text-2xl font-bold text-primary">يومين</p>
              </div>
            </Card>
            <Card className="bg-card border-border p-4">
              <div className="text-center">
                <h3 className="text-lg font-bold text-primary mb-2">Warn 2</h3>
                <p className="text-muted-foreground">تحذير لمدة</p>
                <p className="text-2xl font-bold text-primary">4 أيام</p>
              </div>
            </Card>
            <Card className="bg-card border-border p-4">
              <div className="text-center">
                <h3 className="text-lg font-bold text-primary mb-2">Warn 3</h3>
                <p className="text-muted-foreground">تحذير لمدة</p>
                <p className="text-2xl font-bold text-primary">6 أيام</p>
              </div>
            </Card>
            <Card className="bg-card border-border p-4">
              <div className="text-center">
                <h3 className="text-lg font-bold text-primary mb-2">Warn Perm</h3>
                <p className="text-muted-foreground">عقوبة</p>
                <p className="text-2xl font-bold text-destructive">نهائي</p>
              </div>
            </Card>
          </div>

          {/* Warnings List */}
          <div className="space-y-4">
            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">1. فتح الخريطة</h3>
                  <p className="text-muted-foreground">فتح الخريطة أثناء اللعب بدون سبب</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 2</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">2. عدم إخفاء الـ IDs</h3>
                  <p className="text-muted-foreground">عدم إخفاء أرقام اللاعبين أثناء اللعب</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 2</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">3. استخدام شيء ليس معك بالحقيبة</h3>
                  <p className="text-muted-foreground">استخدام أشياء لم تكن موجودة في حقيبتك + تصفير الحقيبة</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 2</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">4. قتل وتلويت في منطقة آمنة</h3>
                  <p className="text-muted-foreground">القتل والتلويت داخل المناطق الآمنة + تصفير الحقيبة</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 2</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">5. RDM (Random Death Match)</h3>
                  <p className="text-muted-foreground">قتل عشوائي بدون سبب RP صحيح</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 2</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">6. VDM (Vehicle Death Match)</h3>
                  <p className="text-muted-foreground">استخدام السيارة لقتل اللاعبين بدون سبب RP</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 2</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">7. LAR (Leaving After Robbery)</h3>
                  <p className="text-muted-foreground">مغادرة السيرفر بعد السرقة مباشرة</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 2</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">8. رد الخطأ بالخطأ</h3>
                  <p className="text-muted-foreground">الرد على الخطأ بخطأ آخر بدلاً من الامتثال</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 3</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">9. مخالفة الرول بلي</h3>
                  <p className="text-muted-foreground">عدم اتباع الرول بلي والتصرف بشكل غير واقعي</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 2</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">10. التدخل في سيناريو ليس لك فيه علاقة</h3>
                  <p className="text-muted-foreground">التدخل في أحداث RP ليس لك دور فيها</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 1</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">11. تطلع جبال بسيارة صغيرة</h3>
                  <p className="text-muted-foreground">استخدام سيارة صغيرة للصعود إلى أماكن لا تستطيع الوصول إليها</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 1</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">12. التظاهر بـ AFK لتجنب القبض</h3>
                  <p className="text-muted-foreground">التظاهر بعدم النشاط لتجنب العقوبة</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 1</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">13. عدم العودة لمكان الإسقاط</h3>
                  <p className="text-muted-foreground">السقوط من مكان عالي وعدم العودة للمكان</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 1</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">14. الإزعاج بـ Afro One</h3>
                  <p className="text-muted-foreground">استخدام Afro One بشكل متكرر للإزعاج</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 1</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">15. إعطاء الشخصية الثانية أغراض أو فلوس</h3>
                  <p className="text-muted-foreground">نقل الأموال أو الأغراض بين الشخصيات + تصفير + سحب الشخصية</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 3</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">16. تشويه السمعة</h3>
                  <p className="text-muted-foreground">نشر معلومات كاذبة أو تشويه سمعة شخص ما</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN PERM</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">17. القذف</h3>
                  <p className="text-muted-foreground">اتهام شخص بتهم باطلة أو قذف</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN PERM</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">18. التفجير والتخريب</h3>
                  <p className="text-muted-foreground">تفجير أو تخريب الممتلكات بأي شكل من الأشكال</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN PERM</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">19. المساعدة على التخريب</h3>
                  <p className="text-muted-foreground">مساعدة شخص على تخريب الممتلكات</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN PERM</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">20. التجمع في مكان غير مخصص</h3>
                  <p className="text-muted-foreground">التجمع في مكان غير مخصص للتجميع وأنت خارج القيم أو بدون قيم</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 2</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">21. استخدام الأوامر خارج القيم</h3>
                  <p className="text-muted-foreground">استخدام أوامر القيم وأنت غير موجود بداخلها</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 2</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">22. التحدث وأنت مسقط</h3>
                  <p className="text-muted-foreground">التحدث أو التفاعل وأنت في حالة إسقاط</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 1</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">23. استخدام القلتشات</h3>
                  <p className="text-muted-foreground">استخدام الثغرات والقلتشات في اللعبة</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN PERM</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">24. إطلاق النار وأنت تسوق</h3>
                  <p className="text-muted-foreground">إطلاق النار من السيارة أثناء القيادة</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 1</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">25. تعديل السيارة وهي منقلبة</h3>
                  <p className="text-muted-foreground">إصلاح السيارة وهي في حالة انقلاب</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 1</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">26. الضرب وأنت مكلبش</h3>
                  <p className="text-muted-foreground">مهاجمة شخص وأنت مقيد أو مكلبش</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 2</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">27. تعديل السيارة لمنع انفجار الكفر</h3>
                  <p className="text-muted-foreground">تعديل السيارة لمنع انفجار الإطار + إزالة السيارة</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 2</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">28. إطلاق النار وأنت مكلبش</h3>
                  <p className="text-muted-foreground">إطلاق النار بينما أنت مقيد أو مكلبش</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 2</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">29. لبس الملابس والسيارات المهكرة</h3>
                  <p className="text-muted-foreground">استخدام ملابس أو سيارات مهكرة</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 1</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">30. الخروج من القيم وأنت ممسوك</h3>
                  <p className="text-muted-foreground">الخروج من القيم وأنت ممسوك من العسكر أو مخطوف (إلا إذا كان لديك عذر ودليل)</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 3</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">31. رفع الصوت على الرقابي</h3>
                  <p className="text-muted-foreground">الحديث بأسلوب فظ أو رفع الصوت على الرقابي</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 3</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">32. عدم الامتثال بعد الضربة</h3>
                  <p className="text-muted-foreground">إذا تلقيت ضربة أو إغماء، انتظر 30 ثانية وكمل RP وانسَ آخر 5 دقائق</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 1</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">33. ذبح شخص في منطقة آمنة</h3>
                  <p className="text-muted-foreground">قتل شخص بطريقة وحشية في المناطق الآمنة</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 2</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">34. النشر</h3>
                  <p className="text-muted-foreground">نشر معلومات شخصية أو حساسة عن لاعب</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN PERM</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">35. عدم الانصياع لأوامر الرقابي</h3>
                  <p className="text-muted-foreground">عدم الامتثال لأوامر الرقابي والموظفين</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN PERM</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">36. السب والشتم على الرقابي</h3>
                  <p className="text-muted-foreground">سب أو شتم الرقابي بأي شكل من الأشكال</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN PERM</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">37. تحرير من القسم بدون شروط</h3>
                  <p className="text-muted-foreground">تحرير شخص من القسم (إلا إذا كان هناك داهمة وعدد العساكر أكثر من 6)</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 2</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">38. فتح تكت شكوى بدون أدلة كاملة</h3>
                  <p className="text-muted-foreground">فتح تكت شكوى بينما لا تمتلك الأدلة الكاملة</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 1</span>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">39. التفجير والقتل أثناء الإعصار</h3>
                  <p className="text-muted-foreground">تفجير أو قتل شخص أثناء حدوث إعصار</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold whitespace-nowrap">WARN 2</span>
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
