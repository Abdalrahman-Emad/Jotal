import { notFound } from "next/navigation"
import BlogPost from "../../../components/blog-post"

const articles = {
    en: [
        {
            id: 1,
            slug: "ant-control-jeddah-coastal-climate",
            title: "Complete Guide to Ant Control in Jeddah's Coastal Climate",
            excerpt:
                "Discover professional strategies to eliminate ant infestations in Jeddah's unique coastal environment. Learn about local ant species and proven treatment methods.",
            image: "/article1.webp",
            author: "Eng. Youssef Alashry",
            date: "December 15, 2024",
            tags: ["Ant Control", "Jeddah", "Pest Management"],
            readTime: "4 min read",
            full: `
        <div class="space-y-8">
          <div class="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500">
            <h4 class="text-xl font-semibold text-emerald-800 mb-3">Why Jeddah Faces Unique Ant Challenges</h4>
            <p class="text-emerald-700 leading-relaxed">Jeddah's coastal location along the Red Sea creates ideal conditions for various ant species. The combination of high humidity, warm temperatures year-round, and sandy soil provides perfect breeding grounds for these persistent pests.</p>
          </div>

          <section>
            <h3 class="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-emerald-200 pb-2">Common Ant Species in Jeddah</h3>
            
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div class="bg-white p-5 rounded-lg shadow-md border border-slate-200">
                <h4 class="text-lg font-semibold text-slate-800 mb-3">🐜 Pharaoh Ants</h4>
                <ul class="text-slate-600 space-y-2">
                  <li>• Thrive in Jeddah's warm, humid climate</li>
                  <li>• Form multiple colonies quickly</li>
                  <li>• Attracted to sweet foods and moisture</li>
                  <li>• Difficult to eliminate without professional treatment</li>
                </ul>
              </div>
              
              <div class="bg-white p-5 rounded-lg shadow-md border border-slate-200">
                <h4 class="text-lg font-semibold text-slate-800 mb-3">🏠 Pavement Ants</h4>
                <ul class="text-slate-600 space-y-2">
                  <li>• Common in residential areas</li>
                  <li>• Build nests under concrete slabs</li>
                  <li>• Active during cooler evening hours</li>
                  <li>• Leave visible dirt mounds near entry points</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 class="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-emerald-200 pb-2">Professional Treatment Strategies</h3>
            
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-6">
              <h4 class="text-xl font-semibold text-indigo-800 mb-4">🎯 Targeted Baiting Systems</h4>
              <p class="text-indigo-700 mb-4">Our proven baiting approach uses slow-acting insecticides that worker ants carry back to the colony, eliminating the entire nest including the queen.</p>
              <ul class="text-indigo-600 space-y-2">
                <li>✓ Strategic placement near ant trails</li>
                <li>✓ Weather-resistant bait stations</li>
                <li>✓ Regular monitoring and refilling</li>
                <li>✓ Safe for children and pets when properly applied</li>
              </ul>
            </div>

            <div class="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl mb-6">
              <h4 class="text-xl font-semibold text-amber-800 mb-4">🛡️ Perimeter Defense</h4>
              <p class="text-amber-700 mb-4">Creating protective barriers around your property prevents new ant colonies from establishing themselves.</p>
              <ul class="text-amber-600 space-y-2">
                <li>✓ Liquid barrier treatments around foundation</li>
                <li>✓ Sealing entry points and cracks</li>
                <li>✓ Vegetation management near structures</li>
                <li>✓ Moisture control in problem areas</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 class="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-emerald-200 pb-2">Prevention Tips for Jeddah Residents</h3>
            
            <div class="grid md:grid-cols-3 gap-4 mb-6">
              <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                <h5 class="font-semibold text-green-800 mb-2">🧹 Cleanliness</h5>
                <p class="text-green-700 text-sm">Keep surfaces clean, store food in sealed containers, and promptly clean up spills.</p>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 class="font-semibold text-blue-800 mb-2">💧 Moisture Control</h5>
                <p class="text-blue-700 text-sm">Fix leaks, improve ventilation, and eliminate standing water sources.</p>
              </div>
              
              <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h5 class="font-semibold text-purple-800 mb-2">🔧 Maintenance</h5>
                <p class="text-purple-700 text-sm">Seal cracks, trim vegetation, and maintain proper drainage around your property.</p>
              </div>
            </div>
          </section>

          <div class="bg-emerald-100 p-6 rounded-xl border border-emerald-300">
            <h4 class="text-xl font-semibold text-emerald-800 mb-3">🏆 Why Choose Professional Treatment?</h4>
            <p class="text-emerald-700 leading-relaxed mb-4">While DIY methods may provide temporary relief, professional pest control ensures complete elimination and long-term prevention. Our team understands Jeddah's unique climate challenges and uses targeted treatments that are both effective and environmentally responsible.</p>
            <p class="text-emerald-700 leading-relaxed">Contact us today for a comprehensive ant control assessment and customized treatment plan for your property.</p>
          </div>
        </div>
      `,
        },
        {
            id: 2,
            slug: "seasonal-pest-prevention-jeddah",
            title: "Seasonal Pest Prevention: Protecting Your Jeddah Home Year-Round",
            excerpt:
                "Master the art of seasonal pest control in Jeddah. Learn when different pests are most active and how to prepare your home for each season.",
            image: "/article2.webp",
            author: "Eng. Youssef Alashry",
            date: "December 10, 2024",
            tags: ["Prevention", "Seasonal", "Home Protection"],
            readTime: "3 min read",
            full: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
            <h4 class="text-xl font-semibold text-purple-800 mb-3">Understanding Jeddah's Pest Seasons</h4>
            <p class="text-purple-700 leading-relaxed">Unlike temperate climates, Jeddah's year-round warmth means pest activity never truly stops. However, different seasons bring unique challenges that require specific prevention strategies.</p>
          </div>

          <section>
            <h3 class="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-purple-200 pb-2">Seasonal Pest Activity Calendar</h3>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-200">
                <div class="flex items-center mb-4">
                  <div class="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-sm font-bold">☀️</span>
                  </div>
                  <h4 class="text-xl font-bold text-red-800">Summer (June - August)</h4>
                </div>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded-lg">
                    <h5 class="font-semibold text-red-700 mb-2">Peak Activity:</h5>
                    <ul class="text-red-600 text-sm space-y-1">
                      <li>• Cockroaches (seeking cool, moist areas)</li>
                      <li>• Flying insects (moths, flies)</li>
                      <li>• Ants (increased foraging activity)</li>
                    </ul>
                  </div>
                  <div class="bg-red-100 p-3 rounded-lg">
                    <h5 class="font-semibold text-red-800 mb-2">Key Actions:</h5>
                    <ul class="text-red-700 text-sm space-y-1">
                      <li>• Increase AC maintenance</li>
                      <li>• Seal entry points</li>
                      <li>• Monitor moisture levels</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                <div class="flex items-center mb-4">
                  <div class="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-sm font-bold">🌊</span>
                  </div>
                  <h4 class="text-xl font-bold text-blue-800">Humid Season (Sept - Nov)</h4>
                </div>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded-lg">
                    <h5 class="font-semibold text-blue-700 mb-2">Peak Activity:</h5>
                    <ul class="text-blue-600 text-sm space-y-1">
                      <li>• Silverfish and book lice</li>
                      <li>• Termites (swarming season)</li>
                      <li>• Mosquitoes (breeding increase)</li>
                    </ul>
                  </div>
                  <div class="bg-blue-100 p-3 rounded-lg">
                    <h5 class="font-semibold text-blue-800 mb-2">Key Actions:</h5>
                    <ul class="text-blue-700 text-sm space-y-1">
                      <li>• Dehumidify storage areas</li>
                      <li>• Termite inspection</li>
                      <li>• Eliminate standing water</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl text-center">
            <h4 class="text-xl font-bold mb-3">Stay Ahead of Jeddah's Pest Seasons</h4>
            <p class="mb-4">Our seasonal protection program adapts to Jeddah's unique climate patterns, ensuring year-round peace of mind.</p>
            <div class="flex justify-center space-x-4 text-sm">
              <span>✓ Customized seasonal treatments</span>
              <span>✓ Climate-specific solutions</span>
              <span>✓ Proactive prevention</span>
            </div>
          </div>
        </div>
      `,
        },
        {
            id: 3,
            slug: "termite-protection-jeddah-properties",
            title: "Termite Protection for Jeddah Properties: Complete Defense Guide",
            excerpt:
                "Safeguard your Jeddah property from termite damage with our comprehensive protection strategies. Learn about local termite species and advanced treatment options.",
            image: "/article3.webp",
            author: "Eng. Youssef Alashry",
            date: "December 5, 2024",
            tags: ["Termites", "Property Protection", "Prevention"],
            readTime: "2 min read",
            full: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border-l-4 border-amber-500">
            <h4 class="text-xl font-semibold text-amber-800 mb-3">Why Termites Thrive in Jeddah</h4>
            <p class="text-amber-700 leading-relaxed">Jeddah's coastal climate, with its consistent warmth and humidity from the Red Sea, creates ideal conditions for termite colonies. The sandy soil composition allows for easy tunneling, while the abundance of cellulose materials in modern construction provides ample food sources.</p>
          </div>

          <section>
            <h3 class="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-amber-200 pb-2">Termite Species Common in Jeddah</h3>
            
            <div class="space-y-6">
              <div class="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <div class="flex items-start space-x-4">
                  <div class="bg-red-100 p-3 rounded-full">
                    <span class="text-2xl">🐛</span>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-xl font-bold text-red-800 mb-3">Subterranean Termites</h4>
                    <div class="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 class="font-semibold text-slate-700 mb-2">Characteristics:</h5>
                        <ul class="text-slate-600 space-y-1 text-sm">
                          <li>• Live in underground colonies</li>
                          <li>• Build mud tubes for protection</li>
                          <li>• Most destructive termite species</li>
                          <li>• Active year-round in Jeddah's climate</li>
                        </ul>
                      </div>
                      <div>
                        <h5 class="font-semibold text-slate-700 mb-2">Damage Potential:</h5>
                        <ul class="text-red-600 space-y-1 text-sm">
                          <li>• Can destroy structural wood</li>
                          <li>• Damage often goes unnoticed</li>
                          <li>• Colonies can contain millions</li>
                          <li>• Cause billions in damage annually</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 rounded-xl text-center">
            <h4 class="text-xl font-bold mb-3">Protect Your Jeddah Investment Today</h4>
            <p class="mb-4">Don't wait for visible damage. Our comprehensive termite protection plans safeguard your property's value and your family's safety.</p>
            <div class="grid md:grid-cols-3 gap-4 text-sm">
              <div class="bg-white/20 p-3 rounded-lg">
                <span class="font-semibold">✓ Free Inspection</span>
                <p class="text-xs mt-1">Comprehensive property assessment</p>
              </div>
              <div class="bg-white/20 p-3 rounded-lg">
                <span class="font-semibold">✓ 5-Year Warranty</span>
                <p class="text-xs mt-1">Complete protection guarantee</p>
              </div>
              <div class="bg-white/20 p-3 rounded-lg">
                <span class="font-semibold">✓ 24/7 Support</span>
                <p class="text-xs mt-1">Emergency response available</p>
              </div>
            </div>
          </div>
        </div>
      `,
        },
    ],
    ar: [
        {
            id: 1,
            slug: "ant-control-jeddah-coastal-climate",
            title: "دليل شامل لمكافحة النمل في مناخ جدة الساحلي",
            excerpt:
                "اكتشف الاستراتيجيات المهنية للقضاء على غزو النمل في البيئة الساحلية الفريدة لجدة. تعرف على أنواع النمل المحلية وطرق العلاج المثبتة.",
            image: "/article1.webp",
            author: "م. يوسف العشري",
            date: "15 ديسمبر 2024",
            tags: ["مكافحة النمل", "جدة", "إدارة الآفات"],
            readTime: "4 دقائق قراءة",
            full: `
        <div class="space-y-8">
          <div class="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500">
            <h4 class="text-xl font-semibold text-emerald-800 mb-3">لماذا تواجه جدة تحديات فريدة مع النمل</h4>
            <p class="text-emerald-700 leading-relaxed">موقع جدة الساحلي على البحر الأحمر يخلق ظروفاً مثالية لأنواع مختلفة من النمل. الجمع بين الرطوبة العالية ودرجات الحرارة الدافئة على مدار السنة والتربة الرملية يوفر أرضاً خصبة مثالية لهذه الآفات المستمرة.</p>
          </div>

          <section>
            <h3 class="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-emerald-200 pb-2">أنواع النمل الشائعة في جدة</h3>
            
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div class="bg-white p-5 rounded-lg shadow-md border border-slate-200">
                <h4 class="text-lg font-semibold text-slate-800 mb-3">🐜 نمل فرعون</h4>
                <ul class="text-slate-600 space-y-2">
                  <li>• يزدهر في مناخ جدة الدافئ والرطب</li>
                  <li>• يشكل مستعمرات متعددة بسرعة</li>
                  <li>• ينجذب للأطعمة الحلوة والرطوبة</li>
                  <li>• صعب القضاء عليه بدون علاج مهني</li>
                </ul>
              </div>
              
              <div class="bg-white p-5 rounded-lg shadow-md border border-slate-200">
                <h4 class="text-lg font-semibold text-slate-800 mb-3">🏠 نمل الرصيف</h4>
                <ul class="text-slate-600 space-y-2">
                  <li>• شائع في المناطق السكنية</li>
                  <li>• يبني أعشاش تحت الألواح الخرسانية</li>
                  <li>• نشط خلال ساعات المساء الباردة</li>
                  <li>• يترك أكوام تراب مرئية قرب نقاط الدخول</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 class="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-emerald-200 pb-2">استراتيجيات العلاج المهنية</h3>
            
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-6">
              <h4 class="text-xl font-semibold text-indigo-800 mb-4">🎯 أنظمة الطعوم المستهدفة</h4>
              <p class="text-indigo-700 mb-4">نهجنا المثبت للطعوم يستخدم مبيدات حشرية بطيئة المفعول يحملها النمل العامل إلى المستعمرة، مما يقضي على العش بأكمله بما في ذلك الملكة.</p>
              <ul class="text-indigo-600 space-y-2">
                <li>✓ وضع استراتيجي بالقرب من مسارات النمل</li>
                <li>✓ محطات طعوم مقاومة للطقس</li>
                <li>✓ مراقبة وإعادة تعبئة منتظمة</li>
                <li>✓ آمن للأطفال والحيوانات الأليفة عند التطبيق الصحيح</li>
              </ul>
            </div>

            <div class="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl mb-6">
              <h4 class="text-xl font-semibold text-amber-800 mb-4">🛡️ الدفاع المحيطي</h4>
              <p class="text-amber-700 mb-4">إنشاء حواجز وقائية حول الممتلكات يمنع مستعمرات النمل الجديدة من ترسيخ نفسها.</p>
              <ul class="text-amber-600 space-y-2">
                <li>✓ علاجات الحاجز السائل حول الأساس</li>
                <li>✓ إغلاق نقاط الدخول والشقوق</li>
                <li>✓ إدارة النباتات بالقرب من الهياكل</li>
                <li>✓ التحكم في الرطوبة في المناطق المشكلة</li>
              </ul>
            </div>
          </section>

          <section>
  <h3 class="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-emerald-200 pb-2">
    نصائح وقائية لسكان جدة
  </h3>

  <div class="grid md:grid-cols-3 gap-4 mb-6">
    <div class="bg-green-50 p-4 rounded-lg border border-green-200">
      <h5 class="font-semibold text-green-800 mb-2">🧹 النظافة</h5>
      <p class="text-green-700 text-sm">
        حافظ على نظافة الأسطح، خزّن الطعام في أوعية محكمة الإغلاق، ونظّف أي انسكابات فورًا.
      </p>
    </div>

    <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
      <h5 class="font-semibold text-blue-800 mb-2">💧 التحكم في الرطوبة</h5>
      <p class="text-blue-700 text-sm">
        أصلح التسريبات، حسّن التهوية، وتخلّص من مصادر المياه الراكدة.
      </p>
    </div>

    <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
      <h5 class="font-semibold text-purple-800 mb-2">🔧 الصيانة</h5>
      <p class="text-purple-700 text-sm">
        أغلق الشقوق، قص النباتات المحيطة، وحافظ على تصريف جيد حول الممتلكات.
      </p>
    </div>
  </div>
</section>


          <div class="bg-emerald-100 p-6 rounded-xl border border-emerald-300">
            <h4 class="text-xl font-semibold text-emerald-800 mb-3">🏆 لماذا تختار العلاج المهني؟</h4>
            <p class="text-emerald-700 leading-relaxed mb-4">بينما قد توفر الطرق المنزلية راحة مؤقتة، فإن مكافحة الآفات المهنية تضمن القضاء الكامل والوقاية طويلة المدى. فريقنا يفهم تحديات مناخ جدة الفريدة ويستخدم علاجات مستهدفة فعالة ومسؤولة بيئياً.</p>
            <p class="text-emerald-700 leading-relaxed">اتصل بنا اليوم للحصول على تقييم شامل لمكافحة النمل وخطة علاج مخصصة لممتلكاتك.</p>
          </div>
        </div>
      `,
        },
        {
            id: 2,
            slug: "seasonal-pest-prevention-jeddah",
            title: "الوقاية الموسمية من الآفات: حماية منزلك في جدة على مدار السنة",
            excerpt:
                "أتقن فن مكافحة الآفات الموسمية في جدة. تعلم متى تكون الآفات المختلفة أكثر نشاطاً وكيفية تحضير منزلك لكل موسم.",
            image: "/article2.webp",
            author: "م. يوسف العشري",
            date: "10 ديسمبر 2024",
            tags: ["الوقاية", "موسمي", "حماية المنزل"],
            readTime: "3 دقائق قراءة",
            full: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
            <h4 class="text-xl font-semibold text-purple-800 mb-3">فهم مواسم الآفات في جدة</h4>
            <p class="text-purple-700 leading-relaxed">على عكس المناخات المعتدلة، فإن دفء جدة على مدار السنة يعني أن نشاط الآفات لا يتوقف حقاً. ومع ذلك، تجلب المواسم المختلفة تحديات فريدة تتطلب استراتيجيات وقاية محددة.</p>
          </div>
            <section>
              <h3 class="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-purple-200 pb-2">تقويم نشاط الآفات الموسمي</h3>
              
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-200">
                  <div class="flex items-center mb-4">
                    <div class="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center ml-3">
                      <span class="text-sm font-bold">☀️</span>
                    </div>
                    <h4 class="text-xl font-bold text-red-800">الصيف (يونيو - أغسطس)</h4>
                  </div>
                  <div class="space-y-3">
                    <div class="bg-white p-3 rounded-lg">
                      <h5 class="font-semibold text-red-700 mb-2">ذروة النشاط:</h5>
                      <ul class="text-red-600 text-sm space-y-1">
                        <li>• الصراصير (تبحث عن مناطق باردة ورطبة)</li>
                        <li>• الحشرات الطائرة (العث، الذباب)</li>
                        <li>• النمل (زيادة نشاط البحث عن الطعام)</li>
                      </ul>
                    </div>
                    <div class="bg-red-100 p-3 rounded-lg">
                      <h5 class="font-semibold text-red-800 mb-2">الإجراءات الرئيسية:</h5>
                      <ul class="text-red-700 text-sm space-y-1">
                        <li>• زيادة صيانة التكييف</li>
                        <li>• إغلاق نقاط الدخول</li>
                        <li>• مراقبة مستويات الرطوبة</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                  <div class="flex items-center mb-4">
                    <div class="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center ml-3">
                      <span class="text-sm font-bold">🌊</span>
                    </div>
                    <h4 class="text-xl font-bold text-blue-800">الموسم الرطب (سبتمبر - نوفمبر)</h4>
                  </div>
                  <div class="space-y-3">
                    <div class="bg-white p-3 rounded-lg">
                      <h5 class="font-semibold text-blue-700 mb-2">ذروة النشاط:</h5>
                      <ul class="text-blue-600 text-sm space-y-1">
                        <li>• السمك الفضي وقمل الكتب</li>
                        <li>• النمل الأبيض (موسم التكاثر)</li>
                        <li>• البعوض (زيادة التكاثر)</li>
                      </ul>
                    </div>
                    <div class="bg-blue-100 p-3 rounded-lg">
                      <h5 class="font-semibold text-blue-800 mb-2">الإجراءات الرئيسية:</h5>
                      <ul class="text-blue-700 text-sm space-y-1">
                        <li>• إزالة الرطوبة من مناطق التخزين</li>
                        <li>• فحص النمل الأبيض</li>
                        <li>• القضاء على المياه الراكدة</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl text-center">
              <h4 class="text-xl font-bold mb-3">ابق متقدماً على مواسم الآفات في جدة</h4>
              <p class="mb-4">برنامج الحماية الموسمية لدينا يتكيف مع أنماط المناخ الفريدة في جدة، مما يضمن راحة البال على مدار السنة.</p>
              <div class="flex justify-center space-x-4 text-sm">
                <span>✓ علاجات موسمية مخصصة</span>
                <span>✓ حلول خاصة بالمناخ</span>
                <span>✓ وقاية استباقية</span>
              </div>
            </div>
          </div>
        `,
        },
        {
            id: 3,
            slug: "termite-protection-jeddah-properties",
            title: "حماية الممتلكات في جدة من النمل الأبيض: دليل الدفاع الشامل",
            excerpt:
                "احم ممتلكاتك في جدة من أضرار النمل الأبيض باستراتيجيات الحماية الشاملة. تعرف على أنواع النمل الأبيض المحلية وخيارات العلاج المتقدمة.",
            image: "/article3.webp",
            author: "م. يوسف العشري",
            date: "5 ديسمبر 2024",
            tags: ["النمل الأبيض", "حماية الممتلكات", "الوقاية"],
            readTime: "10 دقائق قراءة",
            full: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border-l-4 border-amber-500">
            <h4 class="text-xl font-semibold text-amber-800 mb-3">لماذا يزدهر النمل الأبيض في جدة</h4>
            <p class="text-amber-700 leading-relaxed">مناخ جدة الساحلي، مع دفئه المستمر والرطوبة من البحر الأحمر، يخلق ظروفاً مثالية لمستعمرات النمل الأبيض. تركيب التربة الرملية يسمح بالحفر السهل، بينما وفرة المواد السليلوزية في البناء الحديث توفر مصادر غذاء وفيرة.</p>
          </div>
            <section>
              <h3 class="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-amber-200 pb-2">أنواع النمل الأبيض الشائعة في جدة</h3>
              
              <div class="space-y-6">
                <div class="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                  <div class="flex items-start space-x-4">
                    <div class="bg-red-100 p-3 rounded-full">
                      <span class="text-2xl">🐛</span>
                    </div>
                    <div class="flex-1">
                      <h4 class="text-xl font-bold text-red-800 mb-3">النمل الأبيض الجوفي</h4>
                      <div class="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 class="font-semibold text-slate-700 mb-2">الخصائص:</h5>
                          <ul class="text-slate-600 space-y-1 text-sm">
                            <li>• يعيش في مستعمرات تحت الأرض</li>
                            <li>• يبني أنابيب طينية للحماية</li>
                            <li>• أكثر أنواع النمل الأبيض تدميراً</li>
                            <li>• نشط على مدار السنة في مناخ جدة</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-slate-700 mb-2">إمكانية الضرر:</h5>
                          <ul class="text-red-600 space-y-1 text-sm">
                            <li>• يمكن أن يدمر الخشب الهيكلي</li>
                            <li>• الضرر غالباً ما يمر دون ملاحظة</li>
                            <li>• المستعمرات يمكن أن تحتوي على الملايين</li>
                            <li>• يسبب أضراراً بمليارات سنوياً</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div class="bg-gradient-to-l from-amber-600 to-orange-600 text-white p-6 rounded-xl text-center">
              <h4 class="text-xl font-bold mb-3">احم استثمارك في جدة اليوم</h4>
              <p class="mb-4">لا تنتظر الضرر المرئي. خطط الحماية الشاملة من النمل الأبيض لدينا تحمي قيمة ممتلكاتك وسلامة عائلتك.</p>
              <div class="grid md:grid-cols-3 gap-4 text-sm">
                <div class="bg-white/20 p-3 rounded-lg">
                  <span class="font-semibold">✓ فحص شامل</span>
                  <p class="text-xs mt-1">تقييم شامل للممتلكات</p>
                </div>
                <div class="bg-white/20 p-3 rounded-lg">
                  <span class="font-semibold">✓ ضمان </span>
                  <p class="text-xs mt-1">ضمان حماية كاملة</p>
                </div>
                <div class="bg-white/20 p-3 rounded-lg">
                  <span class="font-semibold">✓ دعم 24/7</span>
                  <p class="text-xs mt-1">استجابة طوارئ متاحة</p>
                </div>
              </div>
            </div>
          </div>
        `,
        },
    ],
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    const { slug } = params

    const enArticle = articles.en.find((article) => article.slug === slug)
    const arArticle = articles.ar.find((article) => article.slug === slug)
    const article = enArticle || arArticle

    if (!article) {
        return {
            title: "Article Not Found",
        }
    }

    return {
        title: `${article.title} | Expert Pest Control Insights`,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            images: [article.image],
            type: "article",
            publishedTime: article.date,
            authors: [article.author],
            tags: article.tags,
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.excerpt,
            images: [article.image],
        },
    }
}

// Generate static params for static generation
export async function generateStaticParams() {
    const enParams = articles.en.map((article) => ({
        slug: article.slug,
    }))
    const arParams = articles.ar.map((article) => ({
        slug: article.slug,
    }))
    return [...enParams, ...arParams]
}

export default function BlogPostPage({ params }) {
    const { slug } = params

    const enArticle = articles.en.find((article) => article.slug === slug)
    const arArticle = articles.ar.find((article) => article.slug === slug)

    if (!enArticle && !arArticle) {
        notFound()
    }

    return <BlogPost enArticle={enArticle} arArticle={arArticle} />
}
