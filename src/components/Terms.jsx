import React from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLanguage } from '../context/LanguageContext';

/* Terms and Conditions Page Styles */
const TermsContainer = styled.div`
    max-width: 1000px;
    margin: -6rem auto;
    padding: 2rem;
    background: var(--white);
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        margin: 1rem;
        padding: 1.5rem;
    }

    @media (max-width: 480px) {
        margin: 0.5rem;
        padding: 1rem;
    }

    h1 {
        color: var(--primary-color);
        text-align: center;
        margin-bottom: 2rem;
        font-size: 2.5rem;

        @media (max-width: 768px) {
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }

        @media (max-width: 480px) {
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }
    }
`;

const TermsSection = styled.section`
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #eee;

    &:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    h2 {
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-size: 1.5rem;

        @media (max-width: 768px) {
            font-size: 1.3rem;
            margin-bottom: 0.8rem;
        }

        @media (max-width: 480px) {
            font-size: 1.2rem;
            margin-bottom: 0.6rem;
        }
    }

    p {
        color: var(--text-color);
        line-height: 1.6;
        margin-bottom: 1rem;
        font-size: 1rem;

        @media (max-width: 768px) {
            font-size: 0.95rem;
            line-height: 1.5;
            margin-bottom: 0.8rem;
        }

        @media (max-width: 480px) {
            font-size: 0.9rem;
            line-height: 1.4;
            margin-bottom: 0.6rem;
        }
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        color: var(--text-color);
        margin-bottom: 0.5rem;
        padding-right: 1.5rem;
        position: relative;
        font-size: 1rem;

        @media (max-width: 768px) {
            font-size: 0.95rem;
            margin-bottom: 0.4rem;
            padding-right: 1.2rem;
        }

        @media (max-width: 480px) {
            font-size: 0.9rem;
            margin-bottom: 0.3rem;
            padding-right: 1rem;
        }

        &:before {
            content: "•";
            color: var(--primary-color);
            position: absolute;
            right: 0;
        }
    }
`;

const Terms = () => {
  const { language } = useLanguage();

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{language === 'ar' ? 'الشروط والأحكام' : 'Terms and Conditions'}</h1>
      <div style={{maxWidth: 800, margin: '2rem auto', background: '#fff', borderRadius: 15, padding: 24}}>
        <section>
          <h2>{language === 'ar' ? '1. مقدمة' : '1. Introduction'}</h2>
          <p>
            {language === 'ar'
              ? 'مرحباً بك في تيكيفاي. باستخدامك لموقعنا، فإنك توافق على الالتزام بهذه الشروط والأحكام.'
              : 'Welcome to Tickify. By using our website, you agree to comply with these terms and conditions.'}
          </p>
        </section>
        <section>
          <h2>{language === 'ar' ? '2. استخدام الموقع' : '2. Use of Website'}</h2>
          <p>
            {language === 'ar'
              ? 'يجب استخدام موقعنا بشكل قانوني وأخلاقي. يحظر أي استخدام غير مصرح به أو ضار.'
              : 'Our website must be used legally and ethically. Any unauthorized or harmful use is prohibited.'}
          </p>
        </section>
        <section>
          <h2>{language === 'ar' ? '3. الحجوزات والمدفوعات' : '3. Bookings and Payments'}</h2>
          <p>
            {language === 'ar'
              ? 'جميع الحجوزات تخضع لسياسة الإلغاء الخاصة بنا. يجب إتمام المدفوعات بالكامل قبل تأكيد الحجز.'
              : 'All bookings are subject to our cancellation policy. Payments must be completed in full before booking confirmation.'}
          </p>
        </section>
        <section>
          <h2>{language === 'ar' ? '4. الخصوصية' : '4. Privacy'}</h2>
          <p>
            {language === 'ar'
              ? 'نحن نحمي خصوصية مستخدمينا. يرجى مراجعة سياسة الخصوصية الخاصة بنا لمزيد من المعلومات.'
              : 'We protect our users\' privacy. Please review our privacy policy for more information.'}
          </p>
        </section>
        <section>
          <h2>{language === 'ar' ? '5. المسؤولية القانونية' : '5. Legal Liability'}</h2>
          <p>
            {language === 'ar'
              ? 'لا نتحمل المسؤولية عن أي خسائر أو أضرار ناتجة عن استخدام موقعنا.'
              : 'We are not liable for any losses or damages resulting from the use of our website.'}
          </p>
        </section>
        <section>
          <h2>{language === 'ar' ? '6. التغييرات' : '6. Changes'}</h2>
          <p>
            {language === 'ar'
              ? 'نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم إخطار المستخدمين بأي تغييرات جوهرية.'
              : 'We reserve the right to modify these terms and conditions at any time. Users will be notified of any significant changes.'}
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
