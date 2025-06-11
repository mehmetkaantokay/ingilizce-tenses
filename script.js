document.addEventListener('DOMContentLoaded', () => {
    // 1. Önce tenseData nesnesini tanımla
    const tenseData = {
        'past-perfect-continuous': {
            title: 'Past Perfect Continuous Tense (Sürekli Geçmiş Mükemmel Zaman)',
            content: `
                <p>Bu zaman, geçmişte belirli bir ana kadar devam etmiş olan bir eylemi anlatır. Genellikle, geçmişteki başka bir eylemden önce başlayan ve o eylem anına kadar süren bir durumu vurgulamak için kullanılır. Eylemin süresi veya o noktaya kadar devamlılığı önemlidir. Örneğin, "Annem geldiğinde iki saattir kitap okuyordum" cümlesinde, annenin gelme eylemi geçmişteki bir anı işaret ederken, kitap okuma eyleminin o ana kadar iki saattir devam ettiğini vurgular.</p>

                <h4>Kurallar:</h4>
                <p>Bu zaman kipinin yapısı, tüm özneler için tutarlıdır.</p>
                <ul>
                    <li><strong>Yapısı:</strong> Subject + had been + Verb (-ing)</li>
                    <li><strong>Olumlu Cümleler:</strong> Özne + had been + Fiil (-ing).
                        <ul>
                            <li>Örnek: "I <strong>had been working</strong> in the garden." (Ben bahçede çalışmaktaydım.)</li>
                        </ul>
                    </li>
                    <li><strong>Olumsuz Cümleler:</strong> Özne + hadn't / had not been + Fiil (-ing).
                        <ul>
                            <li>Örnek: "I <strong>hadn’t been studying</strong> English for two hours." (Ben iki saattir İngilizce çalışmamaktaydım.)</li>
                        </ul>
                    </li>
                    <li><strong>Soru Cümleleri:</strong> Had + Özne + been + Fiil (-ing)?
                        <ul>
                            <li>Örnek: "<strong>Had you been studying</strong> English since six o’clock?" (Sen saat altından beri İngilizce çalışmakta mıydın?)</li>
                        </ul>
                    </li>
                    <li><strong>Wh-Soruları:</strong> Soru Kelimesi + had + Özne + been + Fiil (-ing)?
                        <ul>
                            <li>Örnek: "What <strong>had you been doing</strong> for two hours?" (Sen iki saattir ne yapmaktaydın?)</li>
                        </ul>
                    </li>
                </ul>

                <h4>Zaman Zarfları:</h4>
                <p>For (boyunca), Since (den beri), By the time (e kadar), When (dığında).</p>

                <h4>Önemli Notlar:</h4>
                <p>Bu zaman, Past Continuous ile karıştırılabilir. Past Continuous, geçmişte belirli bir anda devam eden eylemi vurgularken, Past Perfect Continuous o ana kadar ne kadar süreyle devam ettiğini veya o ana kadar süregelen bir eylemi vurgular. Fiile "-ing" eki eklerken, fiilin son harfinin çiftlenmesi (örn: get -> getting) veya "e" harfinin düşmesi (örn: come -> coming) gibi yazım kurallarına dikkat edilmelidir.</p>

                <h4>Past Perfect Continuous Tense Yapısı:</h4>
                <table class="tense-table">
                    <thead>
                        <tr>
                            <th>Cümle Tipi</th>
                            <th>Özne (Subject)</th>
                            <th>Yardımcı Fiil</th>
                            <th>Fiil (-ing)</th>
                            <th>Türkçesi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td>I, You, He, She, It, We, They</td>
                            <td>had been</td>
                            <td>Verb (-ing)</td>
                            <td>... yapmaktaydım/yapmaktaydı/yapmaktaydık vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td>I, You, He, She, It, We, They</td>
                            <td>hadn't been / had not been</td>
                            <td>Verb (-ing)</td>
                            <td>... yapmamaktaydım/yapmamaktaydı/yapmamaktaydık vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td>Had + I, You, He, She, It, We, They</td>
                            <td>been</td>
                            <td>Verb (-ing)?</td>
                            <td>... yapmakta mıydım/mıydı/mıydık vb.?</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Gündelik Hayat Örnekleri:</h4>
                <ul>
                    <li><strong>Ev temizlemek:</strong> I <strong>had been cleaning</strong> the house for three hours when my guests arrived. (Misafirlerim geldiğinde üç saattir evi temizliyordum.)</li>
                    <li><strong>Kitap okumak:</strong> She <strong>had been reading</strong> a book for a long time before she fell asleep. (Uyumadan önce uzun zamandır bir kitap okuyordu.)</li>
                    <li><strong>İngilizce çalışmak:</strong> We <strong>had been studying</strong> English all morning when the power went out. (Elektrik kesildiğinde tüm sabah İngilizce çalışıyorduk.)</li>
                    <li><strong>Kahve içmek:</strong> He <strong>had been drinking</strong> coffee excessively before he decided to cut down. (Azaltmaya karar vermeden önce aşırı derecede kahve içiyordu.)</li>
                    <li><strong>Seyahat etmek:</strong> They <strong>had been traveling</strong> around Europe for months before they returned home. (Eve dönmeden önce aylardır Avrupa'yı geziyorlardı.)</li>
                </ul>
            `
        },
        'past-perfect': {
            title: 'Past Perfect Tense (Geçmiş Mükemmel Zaman)',
            content: `
                <p>Bu zaman, geçmişte gerçekleşen iki olaydan, daha önce tamamlanmış olanı ifade etmek için kullanılır. Genellikle "bir şey olmadan önce başka bir şey olmuştu" anlamını taşır. Geçmişteki bir eylemin, yine geçmişteki başka bir eylemden önce tamamlandığını belirtmek amacıyla kullanılır.</p>

                <h4>Kurallar:</h4>
                <p>Bu zaman kipinin yapısı, tüm özneler için tutarlıdır.</p>
                <ul>
                    <li><strong>Yapısı:</strong> Subject + had + Verb (Past Participle - V3)</li>
                    <li><strong>Olumlu Cümleler:</strong> Özne + had + Fiil (V3).
                        <ul>
                            <li>Örnek: "I <strong>had cleaned</strong> the house." (Evi temizlemiştim.)</li>
                        </ul>
                    </li>
                    <li><strong>Olumsuz Cümleler:</strong> Özne + hadn't / had not + Fiil (V3).
                        <ul>
                            <li>Örnek: "She <strong>hadn't finished</strong> her work." (İşini bitirmemişti.)</li>
                        </ul>
                    </li>
                    <li><strong>Soru Cümleleri:</strong> Had + Özne + Fiil (V3)?
                        <ul>
                            <li>Örnek: "<strong>Had you seen</strong> that movie before?" (O filmi daha önce görmüş müydün?)</li>
                        </ul>
                    </li>
                    <li><strong>Wh-Soruları:</strong> Soru Kelimesi + had + Özne + Fiil (V3)?
                        <ul>
                            <li>Örnek: "Where <strong>had they gone</strong>?" (Nereye gitmişlerdi?)</li>
                        </ul>
                    </li>
                </ul>

                <h4>Zaman Zarfları:</h4>
                <p>Before (den önce), After (den sonra), By the time (e kadar), Already (zaten), Never (hiç).</p>

                <h4>Önemli Notlar:</h4>
                <p>Bu zaman, geçmişteki olayların sıralamasını belirginleştirmek için çok önemlidir. Genellikle Simple Past Tense ile birlikte kullanılır ve hangi eylemin daha önce gerçekleştiğini açıkça gösterir. "Perfect" kelimesi, eylemin tamamlanmışlığını ifade eder ve bu durumda "have/has/had" yardımcı fiili ile fiilin üçüncü hali (V3) kullanılır.</p>

                <h4>Past Perfect Tense Yapısı:</h4>
                <table class="tense-table">
                    <thead>
                        <tr>
                            <th>Cümle Tipi</th>
                            <th>Özne (Subject)</th>
                            <th>Yardımcı Fiil</th>
                            <th>Fiil (V3)</th>
                            <th>Türkçesi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td>I, You, He, She, It, We, They</td>
                            <td>had</td>
                            <td>Verb (V3)</td>
                            <td>... yapmıştım/yapmıştı/yapmıştık vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td>I, You, He, She, It, We, They</td>
                            <td>hadn't / had not</td>
                            <td>Verb (V3)</td>
                            <td>... yapmamıştım/yapmamıştı/yapmamıştık vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td>Had + I, You, He, She, It, We, They</td>
                            <td></td> <!-- Bu kısım boş kalacak çünkü 'had' zaten başta -->
                            <td>Verb (V3)?</td>
                            <td>... yapmakta mıydım/mıydı/mıydık vb.?</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Gündelik Hayat Örnekleri:</h4>
                <ul>
                    <li><strong>Ev temizlemek:</strong> I <strong>had cleaned</strong> the house before my parents arrived. (Annemler gelmeden önce evi temizlemiştim.)</li>
                    <li><strong>Kitap okumak:</strong> She <strong>had read</strong> the book before she saw the movie. (Filmi izlemeden önce kitabı okumuştu.)</li>
                    <li><strong>İngilizce çalışmak:</strong> We <strong>had studied</strong> English for years before we moved to London. (Londra'ya taşınmadan önce yıllarca İngilizce çalışmıştık.)</li>
                    <li><strong>Kahve içmek:</strong> He <strong>had drunk</strong> all the coffee by the time I woke up. (Ben uyandığımda o tüm kahveyi içmişti.)</li>
                    <li><strong>Seyahat etmek:</strong> They <strong>had traveled</strong> to many countries before they decided to settle down. (Yerleşmeye karar vermeden önce birçok ülkeye seyahat etmişlerdi.)</li>
                </ul>
            `
        },
        'past-continuous': {
            title: 'Past Continuous Tense (Sürekli Geçmiş Zaman / Şimdiki Zamanın Hikayesi)',
            content: `
                <p>Bu zaman, geçmişte belirli bir anda devam etmekte olan bir eylemi ifade eder. Genellikle, geçmişteki başka bir olayın kesintiye uğrattığı veya o sırada devam eden bir eylemi anlatmak için kullanılır. Eylemin o anki ilerleyişi vurgulanır. Örneğin, "Ben kitap okuyordum" cümlesi, eylemin geçmişte bir süre devam ettiğini belirtir.</p>

                <h4>Kurallar:</h4>
                <p>Bu zaman kipinin yapısı, özneye göre değişen yardımcı fiiller içerir.</p>
                <ul>
                    <li><strong>Yapısı:</strong> Subject + was/were + Verb (-ing)</li>
                    <li><strong>Olumlu Cümleler:</strong> Özne + was/were + Fiil (-ing).
                        <ul>
                            <li>Örnek: "I <strong>was cleaning</strong> the house." (Evi temizliyordum.)</li>
                        </ul>
                    </li>
                    <li><strong>Olumsuz Cümleler:</strong> Özne + wasn't / was not / weren't / were not + Fiil (-ing).
                        <ul>
                            <li>Örnek: "I <strong>wasn’t sleeping</strong> when the phone rang." (Telefon çaldığında ben uyumuyordum.)</li>
                        </ul>
                    </li>
                    <li><strong>Soru Cümleleri:</strong> Was/Were + Özne + Fiil (-ing)?
                        <ul>
                            <li>Örnek: "<strong>Were you listening</strong> to the minister’s last interview?" (Sen bakanın son röportajını dinliyor muydun?)</li>
                        </ul>
                    </li>
                    <li><strong>Wh-Soruları:</strong> Soru Kelimesi + was/were + Özne + Fiil (-ing)?
                        <ul>
                            <li>Örnek: "What <strong>were you saying</strong>?" (Sen ne söylüyordun?)</li>
                        </ul>
                    </li>
                </ul>

                <h4>Zaman Zarfları:</h4>
                <p>While (iken), When (dığında), At that moment (o anda), Yesterday at 5 PM (dün akşam 5'te).</p>

                <h4>Önemli Notlar:</h4>
                <p>Fiile "-ing" eki ekleme kuralları (örn: "e" harfinin düşmesi, son harfinin çiftlenmesi) Past Continuous için de geçerlidir. Bir zaman adının içinde "Continuous" veya "Progressive" kelimeleri geçtiğinde, fiile "-ing" eki geldiğini unutmamak, bu zaman kipinin temel bir özelliğidir.</p>

                <h4>Past Continuous Tense Yapısı:</h4>
                <table class="tense-table">
                    <thead>
                        <tr>
                            <th>Cümle Tipi</th>
                            <th>Özne (Subject)</th>
                            <th>Yardımcı Fiil</th>
                            <th>Fiil (-ing)</th>
                            <th>Türkçesi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td>I, He, She, It</td>
                            <td>was</td>
                            <td>Verb (-ing)</td>
                            <td>... yapıyordum/yapıyordu vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td>You, We, They</td>
                            <td>were</td>
                            <td>Verb (-ing)</td>
                            <td>... yapıyordun/yapıyorduk/yapıyorlardı vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td>I, He, She, It</td>
                            <td>wasn't / was not</td>
                            <td>Verb (-ing)</td>
                            <td>... yapmıyordum/yapmıyordu vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td>You, We, They</td>
                            <td>weren't / were not</td>
                            <td>Verb (-ing)</td>
                            <td>... yapmıyordun/yapmıyorduk/yapmıyorlardı vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td>Was + I, He, She, It</td>
                            <td></td>
                            <td>Verb (-ing)?</td>
                            <td>... yapıyor muydum/muydu vb.?</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td>Were + You, We, They</td>
                            <td></td>
                            <td>Verb (-ing)?</td>
                            <td>... yapıyor muydun/muyduk/mular mıydı vb.?</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Gündelik Hayat Örnekleri:</h4>
                <ul>
                    <li><strong>Ev temizlemek:</strong> I <strong>was cleaning</strong> the house when you called me. (Sen beni aradığında evi temizliyordum.)</li>
                    <li><strong>Kitap okumak:</strong> She <strong>was reading</strong> a book while her brother was watching TV. (Kardeşi televizyon izlerken o kitap okuyordu.)</li>
                    <li><strong>İngilizce çalışmak:</strong> We <strong>were studying</strong> English when the fire alarm rang. (Yangın alarmı çaldığında İngilizce çalışıyorduk.)</li>
                    <li><strong>Kahve içmek:</strong> He <strong>was drinking</strong> coffee and talking on the phone at the same time. (Aynı anda kahve içiyor ve telefonda konuşuyordu.)</li>
                    <li><strong>Seyahat etmek:</strong> They <strong>were traveling</strong> through the mountains when the storm started. (Fırtına başladığında dağlardan geçiyorlardı.)</li>
                </ul>
            `
        },
        'simple-past': {
            title: 'Simple Past Tense (Basit Geçmiş Zaman)',
            content: `
                <p>Bu zaman, geçmişte belirli bir zamanda başlayıp bitmiş, tamamlanmış eylemleri ifade eder. Eylemin ne zaman olduğu (belirli bir tarih, saat veya zaman ifadesiyle) önemlidir. Örneğin, "Evi temizledim" cümlesi, eylemin geçmişte tamamlandığını ve şu anla bir bağlantısının olmadığını belirtir.</p>

                <h4>Kurallar:</h4>
                <p>Simple Past Tense'in yapısı, olumlu cümlelerde fiilin ikinci halini (V2) kullanırken, olumsuz ve soru cümlelerinde yardımcı fiil "did" kullanıldığı için ana fiilin yalın haline (V1) dönmesini gerektirir.</p>
                <ul>
                    <li><strong>Yapısı:</strong> Subject + Verb (Past Simple - V2)</li>
                    <li><strong>Olumlu Cümleler:</strong> Özne + Fiil (V2).
                        <ul>
                            <li>Örnek: "I <strong>cleaned</strong> the house." (Evi temizledim.)</li>
                        </ul>
                    </li>
                    <li><strong>Olumsuz Cümleler:</strong> Özne + didn't / did not + Fiil (V1 - yalın hali).
                        <ul>
                            <li>Örnek: "My sister <strong>didn’t go</strong> to school today." (Benim kardeşim bugün okula gitmedi.)</li>
                        </ul>
                    </li>
                    <li><strong>Soru Cümleleri:</strong> Did + Özne + Fiil (V1 - yalın hali)?
                        <ul>
                            <li>Örnek: "<strong>Did you forget</strong> your identity card at the office?" (Sen kimlik kartını ofiste mı unuttun?)</li>
                        </ul>
                    </li>
                    <li><strong>Wh-Soruları:</strong> Soru Kelimesi + did + Özne + Fiil (V1 - yalın hali)?
                        <ul>
                            <li>Örnek: "What <strong>did you do</strong> last night?" (Sen dün gece ne yaptın?)</li>
                        </ul>
                    </li>
                </ul>

                <h4>Zaman Zarfları:</h4>
                <p>Yesterday (dün), Last week/month/year (geçen hafta/ay/yıl), Ago (önce), In 1990 (1990'da), When I was young (gençken).</p>

                <h4>Önemli Notlar:</h4>
                <p>İngilizce'de fiillerin düzenli ve düzensiz olmak üzere iki türü vardır. Düzenli fiillerin geçmiş zaman hali "-ed" takısı alırken, düzensiz fiillerin kendine özgü ikinci halleri vardır. Bu hallerin ezberlenmesi kritik öneme sahiptir. Olumsuz ve soru cümlelerinde "did" yardımcı fiili kullanıldığı için ana fiil yalın halde (V1) kalır. Bu durum, zaman anlamını taşıyan yardımcı fiil "did" olduğu için fiilin tekrar geçmiş zaman çekimine girmesine gerek kalmamasından kaynaklanır.</p>

                <h4>Simple Past Tense Yapısı:</h4>
                <table class="tense-table">
                    <thead>
                        <tr>
                            <th>Cümle Tipi</th>
                            <th>Özne (Subject)</th>
                            <th>Fiil / Yardımcı Fiil + Fiil</th>
                            <th>Türkçesi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td>I, You, He, She, It, We, They</td>
                            <td>Verb (V2) (örn: cleaned, went)</td>
                            <td>... yaptım/yaptı/yaptık vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td>I, You, He, She, It, We, They</td>
                            <td>didn't / did not + Verb (V1)</td>
                            <td>... yapmadım/yapmadı/yapmadık vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td>Did + I, You, He, She, It, We, They</td>
                            <td>Verb (V1)?</td>
                            <td>... yaptım mı/yaptı mı/yaptık mı vb.?</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Gündelik Hayat Örnekleri:</h4>
                <ul>
                    <li><strong>Ev temizlemek:</strong> I <strong>cleaned</strong> the house last Saturday. (Geçen Cumartesi evi temizledim.)</li>
                    <li><strong>Kitap okumak:</strong> She <strong>read</strong> that book in one day. (O kitabı bir günde okudu.)</li>
                    <li><strong>İngilizce çalışmak:</strong> We <strong>studied</strong> English for five years in high school. (Lisede beş yıl İngilizce çalıştık.)</li>
                    <li><strong>Kahve içmek:</strong> He <strong>drank</strong> a cup of coffee this morning. (Bu sabah bir fincan kahve içti.)</li>
                    <li><strong>Seyahat etmek:</strong> They <strong>traveled</strong> to many countries before they decided to settle down. (Yerleşmeye karar vermeden önce birçok ülkeye seyahat ettiler.)</li>
                </ul>
            `
        },
        'present-perfect-continuous': {
            title: 'Present Perfect Continuous Tense (Sürekli Şimdiki Mükemmel Zaman)',
            content: `
                <p>Bu zaman, geçmişte başlayıp hala devam eden veya yakın zamanda bitmiş ancak etkisi hala süren eylemleri anlatır. Eylemin süresi veya devamlılığı vurgulanır. Örneğin, "İki yıldır İngilizce çalışmaktayım" cümlesi, İngilizce çalışma eyleminin geçmişte başladığını ve hala devam ettiğini belirtir.</p>

                <h4>Kurallar:</h4>
                <p>Bu zaman kipinin yapısı, özneye göre değişen yardımcı fiiller içerir.</p>
                <ul>
                    <li><strong>Yapısı:</strong> Subject + have/has been + Verb (-ing)</li>
                    <li><strong>Olumlu Cümleler:</strong> Özne + have/has been + Fiil (-ing).
                        <ul>
                            <li>Örnek: "I <strong>have been studying</strong> English for two years." (Ben iki yıldır İngilizce çalışmaktayım.)</li>
                        </ul>
                    </li>
                    <li><strong>Olumsuz Cümleler:</strong> Özne + haven't / have not / hasn't / has not been + Fiil (-ing).
                        <ul>
                            <li>Örnek: "I <strong>haven’t been hearing</strong> you." (Ben sizi duymamaktayım.)</li>
                        </ul>
                    </li>
                    <li><strong>Soru Cümleleri:</strong> Have/Has + Özne + been + Fiil (-ing)?
                        <ul>
                            <li>Örnek: "<strong>How long have you been studying</strong> English?" (Siz ne kadar zamandır İngilizce çalışmaktasınız?)</li>
                        </ul>
                    </li>
                    <li><strong>Wh-Soruları:</strong> Soru Kelimesi + have/has + Özne + been + Fiil (-ing)?
                        <ul>
                            <li>Örnek: "What <strong>have you been wearing</strong> today?" (Sen bugün ne giymektesin?)</li>
                        </ul>
                    </li>
                </ul>

                <h4>Zaman Zarfları:</h4>
                <p>For (boyunca), Since (den beri), All day/morning/week (tüm gün/sabah/hafta), Recently (son zamanlarda), Lately (son zamanlarda).</p>

                <h4>Önemli Notlar:</h4>
                <p>Bu zaman, eylemin süresine ve hala devam etmesine odaklanır. Present Perfect Tense ile karşılaştırıldığında, bu zaman eylemin devamlılığını vurgular, Present Perfect ise eylemin sonucunu veya tamamlanmışlığını vurgular. Fiile "-ing" eki ekleme kuralları burada da geçerlidir.</p>

                <h4>Present Perfect Continuous Tense Yapısı:</h4>
                <table class="tense-table">
                    <thead>
                        <tr>
                            <th>Cümle Tipi</th>
                            <th>Özne (Subject)</th>
                            <th>Yardımcı Fiil</th>
                            <th>Fiil (-ing)</th>
                            <th>Türkçesi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td>I, You, We, They</td>
                            <td>have been</td>
                            <td>Verb (-ing)</td>
                            <td>... yapmaktayım/yapmaktasın/yapmaktayız/yapmaktalar vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td>He, She, It</td>
                            <td>has been</td>
                            <td>Verb (-ing)</td>
                            <td>... yapmaktadır vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td>I, You, We, They</td>
                            <td>haven't been / have not been</td>
                            <td>Verb (-ing)</td>
                            <td>... yapmamaktayım/yapmamaktasın/yapmamaktayız/yapmamaktalar vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td>He, She, It</td>
                            <td>hasn't been / has not been</td>
                            <td>Verb (-ing)</td>
                            <td>... yapmamaktadır vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td>Have + I, You, We, They</td>
                            <td>been</td>
                            <td>Verb (-ing)?</td>
                            <td>... yapmakta mıyım/mısın/mıyız/mılar mı vb.?</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td>Has + He, She, It</td>
                            <td>been</td>
                            <td>Verb (-ing)?</td>
                            <td>... yapmakta mı?</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Gündelik Hayat Örnekleri:</h4>
                <ul>
                    <li><strong>Ev temizlemek:</strong> I <strong>have been cleaning</strong> the house all morning, so I'm tired. (Tüm sabah evi temizliyordum, bu yüzden yorgunum.)</li>
                    <li><strong>Kitap okumak:</strong> She <strong>has been reading</strong> that book for three days. (O kitabı üç gündür okuyor.)</li>
                    <li><strong>İngilizce çalışmak:</strong> We <strong>have been studying</strong> English intensively since last month. (Geçen aydan beri yoğun bir şekilde İngilizce çalışıyoruz.)</li>
                    <li><strong>Kahve içmek:</strong> He <strong>has been drinking</strong> too much coffee lately. (Son zamanlarda çok fazla kahve içiyor.)</li>
                    <li><strong>Seyahat etmek:</strong> They <strong>have been traveling</strong> around Asia for six months. (Altı aydır Asya'yı geziyorlar.)</li>
                </ul>
            `
        },
        'present-perfect': {
            title: 'Present Perfect Tense (Şimdiki Mükemmel Zaman)',
            content: `
                <p>Bu zaman, geçmişte başlayıp şimdiyle bağlantısı olan, etkisi hala devam eden veya yeni bitmiş eylemleri ifade eder. Eylemin ne zaman olduğu değil, sonucunun veya deneyiminin şu anki durumuyla bağlantısı önemlidir. Örneğin, "Evi temizledim" cümlesi, eylemin geçmişte tamamlandığını ancak sonucunun (evin şu an temiz olması) hala geçerli olduğunu belirtir.</p>

                <h4>Kurallar:</h4>
                <p>Bu zaman kipinin yapısı, özneye göre değişen yardımcı fiiller içerir.</p>
                <ul>
                    <li><strong>Yapısı:</strong> Subject + have/has + Verb (Past Participle - V3)</li>
                    <li><strong>Olumlu Cümleler:</strong> Özne + have/has + Fiil (V3).
                        <ul>
                            <li>Örnek: "I <strong>have cleaned</strong> the house." (Evi temizledim.)</li>
                        </ul>
                    </li>
                    <li><strong>Olumsuz Cümleler:</strong> Özne + haven't / have not / hasn't / has not + Fiil (V3).
                        <ul>
                            <li>Örnek: "She <strong>hasn't finished</strong> her report yet." (Raporunu henüz bitirmedi.)</li>
                        </ul>
                    </li>
                    <li><strong>Soru Cümleleri:</strong> Have/Has + Özne + Fiil (V3)?
                        <ul>
                            <li>Örnek: "<strong>Have you ever been</strong> to Japan?" (Japonya'ya hiç gittin mi?)</li>
                        </ul>
                    </li>
                    <li><strong>Wh-Soruları:</strong> Soru Kelimesi + have/has + Özne + Fiil (V3)?
                        <ul>
                            <li>Örnek: "What <strong>have you done</strong> today?" (Bugün ne yaptın?)</li>
                        </ul>
                    </li>
                </ul>

                <h4>Zaman Zarfları:</h4>
                <p>Just (henüz), Already (zaten), Yet (henüz - olumsuz/soru), Ever (hiç - soru), Never (hiç - olumlu), For (boyunca), Since (den beri), So far (şimdiye kadar), Lately (son zamanlarda).</p>

                <h4>Önemli Notlar:</h4>
                <p>Bu zaman, Türkçedeki "yaptım" veya "yapmış bulunuyorum" gibi çevirilerle karıştırılabilir. Anahtar fark, eylemin geçmişte tamamlanmış olmasına rağmen, sonucunun veya deneyiminin şu anki durumla ilgili olmasıdır. "Perfect" kelimesi, eylemin tamamlanmışlığını ifade eder ve bu durumda "have/has/had" yardımcı fiili ile fiilin üçüncü hali (V3) kullanılır.</p>

                <h4>Present Perfect Tense Yapısı:</h4>
                <table class="tense-table">
                    <thead>
                        <tr>
                            <th>Cümle Tipi</th>
                            <th>Özne (Subject)</th>
                            <th>Yardımcı Fiil</th>
                            <th>Fiil (V3)</th>
                            <th>Türkçesi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td>I, You, We, They</td>
                            <td>have</td>
                            <td>Verb (V3)</td>
                            <td>... yaptım/yaptın/yaptık/yaptılar vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td>He, She, It</td>
                            <td>has</td>
                            <td>Verb (V3)</td>
                            <td>... yaptı vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td>I, You, We, They</td>
                            <td>haven't / have not</td>
                            <td>Verb (V3)</td>
                            <td>... yapmadım/yapmadın/yapmadık/yapmadılar vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td>He, She, It</td>
                            <td>hasn't / has not</td>
                            <td>Verb (V3)</td>
                            <td>... yapmadı vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td>Have + I, You, We, They</td>
                            <td></td>
                            <td>Verb (V3)?</td>
                            <td>... yaptım mı/yaptın mı/yaptık mı/yaptılar mı vb.?</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td>Has + He, She, It</td>
                            <td></td>
                            <td>Verb (V3)?</td>
                            <td>... yaptı mı?</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Gündelik Hayat Örnekleri:</h4>
                <ul>
                    <li><strong>Ev temizlemek:</strong> I <strong>have cleaned</strong> the house, so it looks great now. (Evi temizledim, bu yüzden şimdi harika görünüyor.)</li>
                    <li><strong>Kitap okumak:</strong> She <strong>has read</strong> that book twice. (O kitabı iki kez okudu.)</li>
                    <li><strong>İngilizce çalışmak:</strong> We <strong>have studied</strong> English for many years. (Uzun yıllar İngilizce çalıştık.)</li>
                    <li><strong>Kahve içmek:</strong> He <strong>has never drunk</strong> coffee before. (Daha önce hiç kahve içmedi.)</li>
                    <li><strong>Seyahat etmek:</strong> They <strong>have traveled</strong> to Paris. (Paris'e seyahat ettiler. - Sonucu: Paris'i biliyorlar, deneyimleri var.)</li>
                </ul>
            `
        },
        'present-continuous': { // Present Continuous Tense içeriği
            title: 'Present Continuous Tense (Sürekli Şimdiki Zaman)',
            content: `
                <p>Bu zaman, konuşma anında devam eden, geçici olan veya yakın gelecekte kesinleşmiş planları ifade eden eylemleri anlatır. Örneğin, "Şu anda evi temizliyorum" cümlesi, eylemin tam o anda devam ettiğini belirtir.</p>

                <h4>Kurallar:</h4>
                <p>Bu zaman kipinin yapısı, özneye göre değişen "to be" yardımcı fiili içerir.</p>
                <ul>
                    <li><strong>Yapısı:</strong> Subject + am/is/are + Verb (-ing)</li>
                    <li><strong>Olumlu Cümleler:</strong> Özne + am/is/are + Fiil (-ing).
                        <ul>
                            <li>Örnek: "I <strong>am cleaning</strong> the house." (Evi temizliyorum.)</li>
                        </ul>
                    </li>
                    <li><strong>Olumsuz Cümleler:</strong> Özne + am not / isn't / is not / aren't / are not + Fiil (-ing).
                        <ul>
                            <li>Örnek: "My mother <strong>isn’t cooking</strong> now." (Benim annem şimdi yemek pişirmiyor.)</li>
                        </ul>
                    </li>
                    <li><strong>Soru Cümleleri:</strong> Am/Is/Are + Özne + Fiil (-ing)?
                        <ul>
                            <li>Örnek: "<strong>Are you wearing</strong> your raincoat?" (Sen yağmurluğunu giyiyor musun?)</li>
                        </ul>
                    </li>
                    <li><strong>Wh-Soruları:</strong> Soru Kelimesi + am/is/are + Özne + Fiil (-ing)?
                        <ul>
                            <li>Örnek: "What <strong>are you doing</strong> now?" (Sen şu anda ne yapıyorsun?)</li>
                        </ul>
                    </li>
                </ul>

                <h4>Zaman Zarfları:</h4>
                <p>Now (şimdi), Right now (tam şimdi), At the moment (şu anda), Currently (şu anda), Today (bugün), Tonight (bu gece - planlar için).</p>

                <h4>Önemli Notlar:</h4>
                <p>Fiile "-ing" eki ekleme kuralları (örn: "e" düşmesi, son harfin çiftlenmesi) burada da geçerlidir. Bazı fiiller (durum fiilleri), eylemin devamlılığını ifade etmedikleri için genellikle bu zamanda kullanılmaz (örn: know, like, want, understand, see, hear).</p>

                <h4>Present Continuous Tense Yapısı:</h4>
                <table class="tense-table">
                    <thead>
                        <tr>
                            <th>Cümle Tipi</th>
                            <th>Özne (Subject)</th>
                            <th>Yardımcı Fiil</th>
                            <th>Fiil (-ing)</th>
                            <th>Türkçesi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td>I</td>
                            <td>am</td>
                            <td>Verb (-ing)</td>
                            <td>... yapıyorum.</td>
                        </tr>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td>He, She, It</td>
                            <td>is</td>
                            <td>Verb (-ing)</td>
                            <td>... yapıyor.</td>
                        </tr>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td>You, We, They</td>
                            <td>are</td>
                            <td>Verb (-ing)</td>
                            <td>... yapıyorsun/yapıyoruz/yapıyorlardı vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td>I</td>
                            <td>am not</td>
                            <td>Verb (-ing)</td>
                            <td>... yapmıyorum.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td>He, She, It</td>
                            <td>isn't / is not</td>
                            <td>Verb (-ing)</td>
                            <td>... yapmıyor.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td>You, We, They</td>
                            <td>aren't / are not</td>
                            <td>Verb (-ing)</td>
                            <td>... yapmıyorsun/yapmıyoruz/yapmıyorlar.</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td>Am + I</td>
                            <td></td>
                            <td>Verb (-ing)?</td>
                            <td>... yapıyor muyum?</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td>Is + He, She, It</td>
                            <td></td>
                            <td>Verb (-ing)?</td>
                            <td>... yapıyor mu?</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td>Are + You, We, They</td>
                            <td></td>
                            <td>Verb (-ing)?</td>
                            <td>... yapıyor musun/muyuz/mular mı?</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Gündelik Hayat Örnekleri:</h4>
                <ul>
                    <li><strong>Ev temizlemek:</strong> I <strong>am cleaning</strong> the house right now. (Şu anda evi temizliyorum.)</li>
                    <li><strong>Kitap okumak:</strong> She <strong>is reading</strong> an interesting book at the moment. (Şu anda ilginç bir kitap okuyor.)</li>
                    <li><strong>İngilizce çalışmak:</strong> We <strong>are studying</strong> English for our upcoming exam. (Yaklaşan sınavımız için İngilizce çalışıyoruz.)</li>
                    <li><strong>Kahve içmek:</strong> He <strong>is drinking</strong> his coffee slowly. (Kahvesini yavaşça içiyor.)</li>
                    <li><strong>Seyahat etmek:</strong> They <strong>are traveling</strong> to Rome next week. (Gelecek hafta Roma'ya seyahat ediyorlar. - Planlı eylem)</li>
                </ul>
            `
        },
        'simple-present': { // Bu, HTML'deki data-tense ile aynı olmalı
            title: 'Simple Present Tense (Basit Şimdiki Zaman / Geniş Zaman)',
            content: `
                <p>Bu zaman, alışkanlıkları, rutinleri, genel gerçekleri, bilimsel olguları ve tekrarlanan eylemleri ifade eder. Eylemin belirli bir anda değil, genel olarak veya her zaman yapıldığını belirtir. Örneğin, "Evi her gün temizlerim" cümlesi, bu eylemin bir alışkanlık olduğunu ifade eder.</p>

                <h4>Kurallar:</h4>
                <p>Simple Present Tense'in yapısı, üçüncü tekil şahıs öznelerde fiile eklenen "-s" veya "-es" takısıyla diğer öznelerden ayrılır.</p>
                <ul>
                    <li><strong>Yapısı:</strong> Subject + Verb (Base Form - V1)</li>
                    <li><strong>Olumlu Cümleler:</strong> Özne + Fiil (V1).
                        <ul>
                            <li>Örnek: "I <strong>clean</strong> the house every day." (Evi her gün temizlerim.)</li>
                            <li>Önemli Not: He/She/It özneleri için fiile "-s" veya "-es" takısı eklenir.</li>
                            <li>Örnek: "She <strong>loves</strong> me." (O, beni sever.)</li>
                        </ul>
                    </li>
                    <li><strong>Olumsuz Cümleler:</strong> Özne + don't / do not / doesn't / does not + Fiil (V1 - yalın hali).
                        <ul>
                            <li>Örnek: "They <strong>don’t clean</strong> their room every day." (Onlar her gün odalarını temizlemezler.)</li>
                        </ul>
                    </li>
                    <li><strong>Soru Cümleleri:</strong> Do/Does + Özne + Fiil (V1 - yalın hali)?
                        <ul>
                            <li>Örnek: "<strong>Do you surf</strong> the Internet every day?" (Her gün internette sörf yapar mısın?)</li>
                        </ul>
                    </li>
                    <li><strong>Wh-Soruları:</strong> Soru Kelimesi + do/does + Özne + Fiil (V1 - yalın hali)?
                        <ul>
                            <li>Örnek: "What <strong>do you do</strong>?" (Sen ne yaparsın?)</li>
                        </ul>
                    </li>
                </ul>

                <h4>Zaman Zarfları:</h4>
                <p>Always (her zaman), Usually (genellikle), Often (sık sık), Sometimes (bazen), Never (asla), Every day/week/month (her gün/hafta/ay).</p>

                <h4>Önemli Notlar:</h4>
                <p>Fiile "-s/-es" ekleme kuralları (örn: go -> goes, study -> studies) ve "do/does" yardımcı fiillerinin kullanımı bu zamanın temel özellikleridir. Üçüncü tekil şahıs öznelerde fiile eklenen "-s/-es" takısı, Türkçede doğrudan bir karşılığı olmadığı için Türk öğrenciler için dikkat edilmesi gereken önemli bir noktadır. Olumsuz ve soru cümlelerinde "do" veya "does" yardımcı fiilleri kullanıldığı için ana fiil yalın halde (V1) kalır.</p>

                <h4>Simple Present Tense Yapısı:</h4>
                <table class="tense-table">
                    <thead>
                        <tr>
                            <th>Cümle Tipi</th>
                            <th>Özne (Subject)</th>
                            <th>Fiil / Yardımcı Fiil + Fiil</th>
                            <th>Türkçesi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td>I, You, We, They</td>
                            <td>Verb (V1) (örn: clean, go)</td>
                            <td>... yaparım/yaparsın/yaparız/yaparlar vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td>He, She, It</td>
                            <td>Verb (V1 + -s/-es) (örn: cleans, goes)</td>
                            <td>... yapar vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td>I, You, He, She, It, We, They</td>
                            <td>don't / do not + Verb (V1)</td>
                            <td>... yapmam/yapmazsın/yapmayız/yapmazlar vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td>He, She, It</td>
                            <td>doesn't / does not + Verb (V1)</td>
                            <td>... yapmaz vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td>Do + I, You, We, They</td>
                            <td>Verb (V1)?</td>
                            <td>... yaparım mı/yaparsın mı/yaparız mı/yaparlar mı vb.?</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td>Does + He, She, It</td>
                            <td>Verb (V1)?</td>
                            <td>... yapar mı?</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Gündelik Hayat Örnekleri:</h4>
                <ul>
                    <li><strong>Ev temizlemek:</strong> I <strong>clean</strong> the house every weekend. (Her hafta sonu evi temizlerim.)</li>
                    <li><strong>Kitap okumak:</strong> She <strong>reads</strong> a book before bed every night. (Her gece yatmadan önce bir kitap okur.)</li>
                    <li><strong>İngilizce çalışmak:</strong> We <strong>study</strong> English at school. (Okulda İngilizce çalışırız.)</li>
                    <li><strong>Kahve içmek:</strong> He <strong>drinks</strong> coffee every morning. (Her sabah kahve içer.)</li>
                    <li><strong>Seyahat etmek:</strong> They <strong>travel</strong> abroad for work once a year. (İş için yılda bir kez yurt dışına seyahat ederler.)</li>
                </ul>
            `
        },
        'simple-future': {
            title: 'Simple Future Tense (Basit Gelecek Zaman)',
            content: `
                <p>Bu zaman, gelecekteki eylemleri, tahminleri, kararları veya planları ifade etmek için kullanılır. Genellikle "will" veya "be going to" yapılarıyla ifade edilir. Örneğin, "Evi daha sonra temizleyeceğim" veya "Bu öğleden sonra evi temizleyeceğim" cümleleri, gelecekteki bir eylemi belirtir.</p>

                <h4>Kurallar:</h4>
                <p>Simple Future Tense, "will" ve "be going to" olmak üzere iki farklı yapıyla ifade edilir. Her iki yapının da kendi kullanım alanları vardır.</p>
                <ul>
                    <li><strong>Yapısı (Will):</strong> Subject + will + Verb (Base Form - V1)</li>
                    <li><strong>Olumlu Cümleler:</strong> Özne + will + Fiil (V1).
                        <ul>
                            <li>Örnek: "I <strong>will clean</strong> the house." (Evi temizleyeceğim.)</li>
                        </ul>
                    </li>
                    <li><strong>Olumsuz Cümleler:</strong> Özne + won't / will not + Fiil (V1).
                        <ul>
                            <li>Örnek: "She <strong>won't come</strong> to the party." (Partiye gelmeyecek.)</li>
                        </ul>
                    </li>
                    <li><strong>Soru Cümleleri:</strong> Will + Özne + Fiil (V1)?
                        <ul>
                            <li>Örnek: "<strong>Will you help</strong> me?" (Bana yardım edecek misin?)</li>
                        </ul>
                    </li>
                    <li><strong>Wh-Soruları:</strong> Soru Kelimesi + will + Özne + Fiil (V1)?
                        <ul>
                            <li>Örnek: "When <strong>will they arrive</strong>?" (Ne zaman varacaklar?)</li>
                        </ul>
                    </li>
                </ul>

                <h4>Zaman Zarfları:</h4>
                <p>Tomorrow (yarın), Next week/month/year (gelecek hafta/ay/yıl), Soon (yakında), In the future (gelecekte).</p>

                <h4>Önemli Notlar:</h4>
                <p>"Will" genellikle anlık kararlar, spontane teklifler, kanıtsız tahminler veya sözler için kullanılırken; "be going to" daha çok önceden yapılmış planlar, niyetler veya belirgin kanıtlara dayalı tahminlar için kullanılır. Her iki yapının da Türkçeye "yapacağım" olarak çevrilebilmesi, aralarındaki nüansı kavramayı önemli kılar. "Be going to" yapısında, "to be" yardımcı fiili (am/is/are) özneye göre çekimlenir.</p>

                <h4>Simple Future Tense Yapısı (Will ve Be Going To Karşılaştırması):</h4>
                <table class="tense-table">
                    <thead>
                        <tr>
                            <th>Cümle Tipi</th>
                            <th>Yapı</th>
                            <th>Özne (Subject)</th>
                            <th>Yardımcı Fiil + Fiil</th>
                            <th>Türkçesi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td>Will</td>
                            <td>I, You, He, She, It, We, They</td>
                            <td>will + Verb (V1)</td>
                            <td>... yapacağım/yapacak vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td>Be Going To</td>
                            <td>I</td>
                            <td>am going to + Verb (V1)</td>
                            <td>... yapacağım.</td>
                        </tr>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td></td>
                            <td>He, She, It</td>
                            <td>is going to + Verb (V1)</td>
                            <td>... yapacak.</td>
                        </tr>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td></td>
                            <td>You, We, They</td>
                            <td>are going to + Verb (V1)</td>
                            <td>... yapacaksın/yapacağız/yapacaklar.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td>Will</td>
                            <td>I, You, He, She, It, We, They</td>
                            <td>won't / will not + Verb (V1)</td>
                            <td>... yapmayacağım/yapmayacak vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td>Be Going To</td>
                            <td>I</td>
                            <td>am not going to + Verb (V1)</td>
                            <td>... yapmayacağım.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td></td>
                            <td>He, She, It</td>
                            <td>isn't / is not going to + Verb (V1)</td>
                            <td>... yapmayacak.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td></td>
                            <td>You, We, They</td>
                            <td>aren't / are not going to + Verb (V1)</td>
                            <td>... yapmayacaksın/yapmayacağız/yapmayacaklar.</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td>Will</td>
                            <td>Will + I, You, He, She, It, We, They</td>
                            <td>Verb (V1)?</td>
                            <td>... yapacak mıyım/mısın/mı vb.?</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td>Be Going To</td>
                            <td>Am + I</td>
                            <td>going to + Verb (V1)?</td>
                            <td>... yapacak mıyım?</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td></td>
                            <td>Is + He, She, It</td>
                            <td>going to + Verb (V1)?</td>
                            <td>... yapacak mı?</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td></td>
                            <td>Are + You, We, They</td>
                            <td>going to + Verb (V1)?</td>
                            <td>... yapacak mısın/mıyız/mular mı?</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Gündelik Hayat Örnekleri:</h4>
                <ul>
                    <li><strong>Ev temizlemek:</strong> I <strong>will clean</strong> the house later. / I <strong>am going to clean</strong> the house this afternoon. (Evi daha sonra temizleyeceğim. / Bu öğleden sonra evi temizleyeceğim.)</li>
                    <li><strong>Kitap okumak:</strong> She <strong>will read</strong> that book next. / She <strong>is going to read</strong> that book on her vacation. (O kitabı sonra okuyacak. / Tatilinde o kitabı okuyacak.)</li>
                    <li><strong>İngilizce çalışmak:</strong> We <strong>will study</strong> English more. / We <strong>are going to study</strong> English for two hours tonight. (Daha fazla İngilizce çalışacağız. / Bu gece iki saat İngilizce çalışacağız.)</li>
                    <li><strong>Kahve içmek:</strong> He <strong>will drink</strong> coffee if you make some. / He <strong>is going to drink</strong> coffee after dinner. (Kahve yaparsan içecek. / Akşam yemeğinden sonra kahve içecek.)</li>
                    <li><strong>Seyahat etmek:</strong> They <strong>will travel</strong> to Spain someday. / They <strong>are going to travel</strong> to Spain next month. (Bir gün İspanya'ya seyahat edecekler. / Gelecek ay İspanya'ya seyahat edecekler.)</li>
                </ul>
            `
        },
        'future-continuous': {
            title: 'Future Continuous Tense (Sürekli Gelecek Zaman)',
            content: `
                <p>Bu zaman, gelecekte belirli bir anda devam etmekte olacak bir eylemi ifade eder. Gelecekteki bir noktada ne yapıyor olunacağını veya neyin devam ediyor olacağını anlatır. Örneğin, "Yarın bu saatlerde evi temizliyor olacağım" cümlesi, eylemin gelecekteki belirli bir zamanda devamlılığını vurgular.</p>

                <h4>Kurallar:</h4>
                <p>Bu zaman kipinin yapısı, tüm özneler için tutarlıdır.</p>
                <ul>
                    <li><strong>Yapısı:</strong> Subject + will be + Verb (-ing)</li>
                    <li><strong>Olumlu Cümleler:</strong> Özne + will be + Fiil (-ing).
                        <ul>
                            <li>Örnek: "I <strong>will be working</strong> tomorrow." (Ben yarın çalışıyor olacağım.)</li>
                        </ul>
                    </li>
                    <li><strong>Olumsuz Cümleler:</strong> Özne + won't / will not be + Fiil (-ing).
                        <ul>
                            <li>Örnek: "I <strong>won’t be working</strong> tomorrow." (Ben yarın çalışıyor olmayacağım.)</li>
                        </ul>
                    </li>
                    <li><strong>Soru Cümleleri:</strong> Will + Özne + be + Fiil (-ing)?
                        <ul>
                            <li>Örnek: "<strong>Will you be dancing</strong> with Tan Sağtürk?" (Sen Tan Sağtürk’le dans ediyor olacak mısın?)</li>
                        </ul>
                    </li>
                    <li><strong>Wh-Soruları:</strong> Soru Kelimesi + will + Özne + be + Fiil (-ing)?
                        <ul>
                            <li>Örnek: "What <strong>will you be cooking</strong>?" (Ne yemek yapıyor olacaksınız?)</li>
                        </ul>
                    </li>
                </ul>

                <h4>Zaman Zarfları:</h4>
                <p>At this time tomorrow (yarın bu saatlerde), While you are sleeping (sen uyurken), Tonight (bu gece), Next week (gelecek hafta).</p>

                <h4>Önemli Notlar:</h4>
                <p>Bu zaman, gelecekteki bir eylemin devamlılığına odaklanır. Bir zaman adının içinde "Continuous" veya "Progressive" kelimeleri geçtiğinde, fiile "-ing" eki geldiğini unutmamak, bu zaman kipinin temel bir özelliğidir.</p>

                <h4>Future Continuous Tense Yapısı:</h4>
                <table class="tense-table">
                    <thead>
                        <tr>
                            <th>Cümle Tipi</th>
                            <th>Özne (Subject)</th>
                            <th>Yardımcı Fiil</th>
                            <th>Fiil (-ing)</th>
                            <th>Türkçesi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td>I, You, He, She, It, We, They</td>
                            <td>will be</td>
                            <td>Verb (-ing)</td>
                            <td>... yapıyor olacağım/olacaksın/olacak vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td>I, You, He, She, It, We, They</td>
                            <td>won't be / will not be</td>
                            <td>Verb (-ing)</td>
                            <td>... yapıyor olmayacağım/olmayacaksın/olmayacak vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td>Will + I, You, He, She, It, We, They</td>
                            <td>be</td>
                            <td>Verb (-ing)?</td>
                            <td>... yapıyor olacak mıyım/mısın/mı vb.?</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Gündelik Hayat Örnekleri:</h4>
                <ul>
                    <li><strong>Ev temizlemek:</strong> I <strong>will be cleaning</strong> the house at this time tomorrow. (Yarın bu saatlerde evi temizliyor olacağım.)</li>
                    <li><strong>Kitap okumak:</strong> She <strong>will be reading</strong> her favorite novel on the plane. (Uçakta en sevdiği romanı okuyor olacak.)</li>
                    <li><strong>İngilizce çalışmak:</strong> We <strong>will be studying</strong> English all evening. (Tüm akşam İngilizce çalışıyor olacağız.)</li>
                    <li><strong>Kahve içmek:</strong> He <strong>will be drinking</strong> coffee when you arrive. (Sen vardığında kahve içiyor olacak.)</li>
                    <li><strong>Seyahat etmek:</strong> They <strong>will be traveling</strong> through the desert next month. (Gelecek ay çölden geçiyor olacaklar.)</li>
                </ul>
            `
        },
        'future-perfect': {
            title: 'Future Perfect Tense (Gelecek Mükemmel Zaman)',
            content: `
                <p>Bu zaman, gelecekte belirli bir zamandan önce tamamlanmış olacak bir eylemi ifade eder. Eylemin gelecekteki bir noktada kesinlikle bitmiş olacağını vurgular. Örneğin, "Annemler gelene kadar evi temizlemiş olacağım" cümlesi, eylemin gelecekteki bir zamandan (annemlerin gelmesi) önce tamamlanacağını belirtir.</p>

                <h4>Kurallar:</h4>
                <p>Bu zaman kipinin yapısı, tüm özneler için tutarlıdır.</p>
                <ul>
                    <li><strong>Yapısı:</strong> Subject + will have + Verb (Past Participle - V3)</li>
                    <li><strong>Olumlu Cümleler:</strong> Özne + will have + Fiil (V3).
                        <ul>
                            <li>Örnek: "I <strong>will have finished</strong> my homework before the deadline." (Teslim tarihinden önce ödevimi bitirmiş olacağım.)</li>
                        </ul>
                    </li>
                    <li><strong>Olumsuz Cümleler:</strong> Özne + won't / will not have + Fiil (V3).
                        <ul>
                            <li>Örnek: "I <strong>will not have finished</strong> the phone call." (Ben telefon konuşmamı bitirmiş olmayacağım.)</li>
                        </ul>
                    </li>
                    <li><strong>Soru Cümleleri:</strong> Will + Özne + have + Fiil (V3)?
                        <ul>
                            <li>Örnek: "<strong>Will you have been graduated</strong> next year?" (Sen önümüzdeki yıl mezun olmuş olacak mısın?)</li>
                        </ul>
                    </li>
                    <li><strong>Wh-Soruları:</strong> Soru Kelimesi + will + Özne + have + Fiil (V3)?
                        <ul>
                            <li>Örnek: "What <strong>will you have eaten</strong> before the operation?" (Sen ameliyattan önce ne yemiş olacaksın?)</li>
                        </ul>
                    </li>
                </ul>

                <h4>Zaman Zarfları:</h4>
                <p>By (e kadar), By the time (e kadar), Before (den önce).</p>

                <h4>Önemli Notlar:</h4>
                <p>Bu zaman, gelecekteki bir noktadan önce tamamlanacak eylemlere odaklanır. "Have" yardımcı fiili, özneden bağımsız olarak her zaman "have" olarak kalır, "has" olmaz. Bu durum, yardımcı fiillerin bir araya geldiği durumlarda, zaman ve özneye göre çekimlenen ilk yardımcı fiil olmasından kaynaklanır.</p>

                <h4>Future Perfect Tense Yapısı:</h4>
                <table class="tense-table">
                    <thead>
                        <tr>
                            <th>Cümle Tipi</th>
                            <th>Özne (Subject)</th>
                            <th>Yardımcı Fiil</th>
                            <th>Fiil (V3)</th>
                            <th>Türkçesi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td>I, You, He, She, It, We, They</td>
                            <td>will have</td>
                            <td>Verb (V3)</td>
                            <td>... yapmış olacağım/olacaksın/olacak vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td>I, You, He, She, It, We, They</td>
                            <td>won't have / will not have</td>
                            <td>Verb (V3)</td>
                            <td>... yapmış olmayacağım/olmayacaksın/olmayacak vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td>Will + I, You, He, She, It, We, They</td>
                            <td>have</td>
                            <td>Verb (V3)?</td>
                            <td>... yapmış olacak mıyım/mısın/mı vb.?</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Gündelik Hayat Örnekleri:</h4>
                <ul>
                    <li><strong>Ev temizlemek:</strong> I <strong>will have cleaned</strong> the house by the time my parents arrive. (Annemler gelene kadar evi temizlemiş olacağım.)</li>
                    <li><strong>Kitap okumak:</strong> She <strong>will have read</strong> the entire book by tomorrow evening. (Yarın akşama kadar kitabın tamamını okumuş olacak.)</li>
                    <li><strong>İngilizce çalışmak:</strong> We <strong>will have studied</strong> English for our exam by next week. (Gelecek haftaya kadar sınavımız için İngilizce çalışmış olacağız.)</li>
                    <li><strong>Kahve içmek:</strong> He <strong>will have drunk</strong> all the coffee before the meeting starts. (Toplantı başlamadan önce tüm kahveyi içmiş olacak.)</li>
                    <li><strong>Seyahat etmek:</strong> They <strong>will have traveled</strong> to three different cities by the end of their trip. (Seyahatlerinin sonuna kadar üç farklı şehre seyahat etmiş olacaklar.)</li>
                </ul>
            `
        },
        'future-perfect-continuous': { // HTML'deki yeni data-tense ile uyumlu
            title: 'Future Perfect Continuous Tense (Sürekli Gelecek Mükemmel Zaman)',
            content: `
                <p>Bu zaman, gelecekte belirli bir ana kadar devam etmekte olacak bir eylemi ifade eder. Eylemin gelecekteki o noktaya kadar süreceğini ve o noktada hala devam ediyor olacağını vurgular. Örneğin, "Gece yarısına kadar altı saattir evi temizliyor olacağım" cümlesi, gelecekteki bir noktada (gece yarısı) eylemin (evi temizleme) belirli bir süredir devam ediyor olacağını belirtir.</p>

                <h4>Kurallar:</h4>
                <p>Bu zaman kipinin yapısı, tüm özneler için tutarlıdır.</p>
                <ul>
                    <li><strong>Yapısı:</strong> Subject + will have been + Verb (-ing)</li>
                    <li><strong>Olumlu Cümleler:</strong> Özne + will have been + Fiil (-ing).
                        <ul>
                            <li>Örnek: "I <strong>will have been working</strong> in the garden tomorrow." (Ben yarın bahçede çalışmaktaydım.)</li>
                        </ul>
                    </li>
                    <li><strong>Olumsuz Cümleler:</strong> Özne + won't / will not have been + Fiil (-ing).
                        <ul>
                            <li>Örnek: "I <strong>will not have been going</strong> to Ankara tomorrow." (Ben yarın Ankara’ya gitmekte olmayacağım.)</li>
                        </ul>
                    </li>
                    <li><strong>Soru Cümleleri:</strong> Will + Özne + have been + Fiil (-ing)?
                        <ul>
                            <li>Örnek: "<strong>Will you have been working</strong> in your office tomorrow?" (Sen yarın ofisinde çalışma olacak mısın?)</li>
                        </ul>
                    </li>
                    <li><strong>Wh-Soruları:</strong> Soru Kelimesi + will + Özne + have been + Fiil (-ing)?
                        <ul>
                            <li>Örnek: "What <strong>will you have been doing</strong> this Saturday?" (Bu cumartesi ne yapmakta olacaksın?)</li>
                        </ul>
                    </li>
                </ul>

                <h4>Zaman Zarfları:</h4>
                <p>By (e kadar), By the time (e kadar), For (boyunca).</p>

                <h4>Önemli Notlar:</h4>
                <p>Bu zaman, gelecekteki bir noktada hala devam edecek olan bir eylemin süresini vurgular. Future Continuous ile karıştırılmamalıdır; Future Continuous gelecekteki bir anda devam eden eylemi, Future Perfect Continuous ise gelecekteki bir ana kadar süregelen eylemi vurgular.</p>

                <h4>Future Perfect Continuous Tense Yapısı:</h4>
                <table class="tense-table">
                    <thead>
                        <tr>
                            <th>Cümle Tipi</th>
                            <th>Özne (Subject)</th>
                            <th>Yardımcı Fiil</th>
                            <th>Fiil (-ing)</th>
                            <th>Türkçesi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="color: #2ecc71;"><strong>Olumlu</strong></td>
                            <td>I, You, He, She, It, We, They</td>
                            <td>will have been</td>
                            <td>Verb (-ing)</td>
                            <td>... yapmakta olacağım/olacaksın/olacak vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #c0392b;"><strong>Olumsuz</strong></td>
                            <td>I, You, He, She, It, We, They</td>
                            <td>won't have been / will not have been</td>
                            <td>Verb (-ing)</td>
                            <td>... yapmakta olmayacağım/olmayacaksın/olmayacak vb.</td>
                        </tr>
                        <tr>
                            <td style="color: #3498db;"><strong>Soru</strong></td>
                            <td>Will + I, You, He, She, It, We, They</td>
                            <td>have been</td>
                            <td>Verb (-ing)?</td>
                            <td>... yapmakta olacak mıyım/mısın/mı vb.?</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Gündelik Hayat Örnekleri:</h4>
                <ul>
                    <li><strong>Ev temizlemek:</strong> By midnight, I <strong>will have been cleaning</strong> the house for six hours. (Gece yarısına kadar altı saattir evi temizliyor olacağım.)</li>
                    <li><strong>Kitap okumak:</strong> By next summer, she <strong>will have been reading</strong> this series for a year. (Gelecek yaza kadar bu seriyi bir yıldır okuyor olacak.)</li>
                    <li><strong>İngilizce çalışmak:</strong> In 2025, we <strong>will have been studying</strong> English for ten years. (2025'te on yıldır İngilizce çalışıyor olacağız.)</li>
                    <li><strong>Kahve içmek:</strong> By the end of the day, he <strong>will have been drinking</strong> coffee since morning. (Günün sonunda sabahtan beri kahve içiyor olacak.)</li>
                    <li><strong>Seyahat etmek:</strong> By the time they arrive, they <strong>will have been traveling</strong> for 24 hours. (Onlar vardığında 24 saattir seyahat ediyor olacaklar.)</li>
                </ul>
            `
        }
    };

    // 2. DOM elementlerini tanımla
    const elements = {
        points: document.querySelectorAll('.point'),
        contentContainer: document.getElementById('content-container'),
        timeline: document.querySelector('.timeline-points')
    };

    // 3. State yönetimi
    const state = {
        activePoint: null,
        isTransitioning: false
    };

    // 4. İçerik yükleme fonksiyonu
    function loadContent(point) {
        const tenseKey = point.dataset.tense;
        const data = tenseData[tenseKey];

        if (data) {
            elements.contentContainer.innerHTML = `
                <h2>${data.title}</h2>
                ${data.content}
            `;
            elements.contentContainer.classList.add('visible');
        } else {
            elements.contentContainer.innerHTML = `
                <h2>Bilgi Bulunamadı</h2>
                <p>Bu zaman hakkında detaylı bilgi henüz eklenmemiştir.</p>
            `;
            elements.contentContainer.classList.add('visible');
        }
    }

    // 5. Event listener'ları ekle
    elements.points.forEach(point => {
        point.addEventListener('click', (e) => {
            if (state.activePoint) {
                state.activePoint.classList.remove('active');
            }
            
            const clickedPoint = e.currentTarget;
            clickedPoint.classList.add('active');
            state.activePoint = clickedPoint;
            
            loadContent(clickedPoint);
        });
    });

    // 6. Başlangıç içeriğini yükle
    const initialPoint = document.querySelector('.point.location-marker[data-tense="present-continuous"]');
    if (initialPoint) {
        initialPoint.classList.add('active');
        state.activePoint = initialPoint;
        loadContent(initialPoint);
    }
});
