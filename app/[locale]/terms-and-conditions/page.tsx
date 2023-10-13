"use client";

import {useTranslations} from 'next-intl';
import { useEffect, useState } from 'react';

const TermsPage = () => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const t = useTranslations('Terms');

    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
          setMousePosition({ x: event.clientX, y: event.clientY });
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);


    return ( 
      <div className="px-8">
          <h1 className="mb-8 font-black tracking-tight leading-none text-hero dark:text-white w-full" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px` }}>{t("headline")}</h1>
          <div className="grid grid-cols-8 mb-0">
              <div className="col-span-5 text-standard leading-8">
                  <p className="mb-8 text-standard-2x">{t("lastUpdated")}</p>
                  <p className="mb-8 text-standard-2x">{t("p1")}</p>
                  <h2 className="font-black leading-tight text-4xl mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>{t("h2-1")}</h2>
                  <h3 className="font-black leading-tight text-3xl mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>{t("h3-1")}</h3>
                  <p className="mb-8 text-standard-2x">{t("p2")}</p>
                  <h3 className="font-black leading-tight text-3xl mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>{t("h3-2")}</h3>
                  <p className="mb-8 text-standard-2x">{t("p3")}</p>
                  <ul className='list-disc ml-10'>
                  <li>
                  <p className="mb-6 text-standard-2x"><div dangerouslySetInnerHTML={{__html: t.raw('p4')}} ></div></p>
                  </li>
                  <li>
                  <p className="mb-6 text-standard-2x"><div dangerouslySetInnerHTML={{__html: t.raw('p5')}} ></div></p>
                  </li>
                  <li>
                  <p className="mb-6 text-standard-2x"><div dangerouslySetInnerHTML={{__html: t.raw('p6')}} ></div></p>
                  </li>
                  <li>
                  <p className="mb-6 text-standard-2x"><div dangerouslySetInnerHTML={{__html: t.raw('p7')}} ></div></p>
                  </li>
                  <li>
                  <p className="mb-6 text-standard-2x"><div dangerouslySetInnerHTML={{__html: t.raw('p8')}} ></div></p>
                  </li>
                  <li>
                  <p className="mb-6 text-standard-2x"><div dangerouslySetInnerHTML={{__html: t.raw('p9')}} ></div> <a href="https://www.freeprivacypolicy.com/free-terms-and-conditions-generator/" target="_blank">Free Terms and Conditions Generator</a></p>
                  </li>
                  <li>
                  <p className="mb-6 text-standard-2x"><div dangerouslySetInnerHTML={{__html: t.raw('p10')}} ></div></p>
                  </li>
                  <li>
                  <p className="mb-6 text-standard-2x"><strong>{t("p11")}</strong>{t("p11b")}<a className="border-b-2 border-black hover:border-green-500 hover:text-green-500" href="https://aiforcreativ.es" rel="external nofollow noopener" target="_blank">https://aiforcreativ.es</a></p>
                  </li>
                  <li>
                  <p className="mb-6 text-standard-2x"><div dangerouslySetInnerHTML={{__html: t.raw('p12')}} ></div></p>
                  </li>
                  <li>
                  <p className="mb-6 text-standard-2x"><div dangerouslySetInnerHTML={{__html: t.raw('p13')}} ></div></p>
                  </li>
                  </ul>
                  <h2 className="font-black text-4xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>{t("h2-2")}</h2>
                  <p className="mb-6 text-standard-2x">{t("p14")}</p>
                  <p className="mb-6 text-standard-2x">{t("p15")}</p>
                  <p className="mb-6 text-standard-2x">{t("p16")}</p>
                  <p className="mb-6 text-standard-2x">{t("p17")}</p>
                  <p className="mb-8">{t("p18")}</p>
                  <h3 className="font-black text-3xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>{t("h3-3")}</h3>
                  <p className="mb-6 text-standard-2x">{t("p19")}</p>
                  <p className="mb-6 text-standard-2x">{t("p20")}</p>
                  <p className="mb-6 text-standard-2x">{t("p21")}</p>
                  <h3 className="font-black text-3xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>{t("h3-3")}</h3>
                  <p className="mb-6 text-standard-2x">We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
                  <p className="mb-6 text-standard-2x">Upon termination, Your right to use the Service will cease immediately.</p>
                  <p className="mb-6 text-standard-2x">Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven&apos;t purchased anything through the Service.</p>
                  <p className="mb-6 text-standard-2x">To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
                  <p className="mb-8 text-standard-2x">Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party&apos;s liability will be limited to the greatest extent permitted by law.</p>
                  <h3 className="font-black text-3xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h3>
                  <p className="mb-6 text-standard-2x">The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>
                  <p className="mb-6 text-standard-2x">Without limiting the foregoing, neither the Company nor any of the company&apos;s provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>
                  <p className="mb-8 text-standard-2x">Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>
                  <h3 className="font-black text-3xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>Governing Law</h3>
                  <p className="mb-8 text-standard-2x">The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
                  <h3 className="font-black text-3xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>Disputes Resolution</h3>
                  <p className="mb-8 text-standard-2x">If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
                  <h3 className="font-black text-3xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>For European Union (EU) Users</h3>
                  <p className="mb-8 text-standard-2x">If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.</p>
                  <h3 className="font-black text-3xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>United States Legal Compliance</h3>
                  <p className="mb-8 text-standard-2x">You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
                  <h3 className="font-black text-3xl mb-8" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>Severability and Waiver</h3>
                  <h4 className='font-bold text-standard-2x leading-tight mb-4'>Severability</h4>
                  <p className="mb-8 text-standard-2x">If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
                  <h4 className='font-bold text-standard-2x leading-tight mb-4'>Waiver</h4>
                  <p className="mb-8 text-standard-2x">Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party&apos;s ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>
                  <h3 className="font-black text-3xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>Translation Interpretation</h3>
                  <p className="mb-6 text-standard-2x">These Terms and Conditions may have been translated if We have made them available to You on our Service.</p>
                  <p className="mb-8 text-standard-2x">You agree that the original English text shall prevail in the case of a dispute.</p>
                  <h3 className="font-black text-3xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>Changes to These Terms and Conditions</h3>
                  <p className="mb-6 text-standard-2x">We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
                  <p className="mb-8 text-standard-2x">By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>
                  <h3 className="font-black text-3xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>Contact Us</h3>
                  <p className="mb-8 text-standard-2x">If you have any questions about these Terms and Conditions, You can contact us:</p>
                  <ul className='list-disc ml-10'>
                  <li>By email: <a className="border-b-2 border-black hover:border-green-500 hover:text-green-500" href="mailto:hello@aiforcreativ.es">hello@aiforcreativ.es</a></li>
                  </ul>
                </div>
            </div>
        </div>
     );
}
 
export default TermsPage;