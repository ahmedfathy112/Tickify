import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLanguage } from '../context/LanguageContext';

/* Cancellation Policy Page Styles */
const CancellationContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    // padding: 2rem;
    // background-color: #fff;

    @media (max-width: 768px) {
        padding: 1rem;
    }

    h1 {
        text-align: center;
        color: #00233D;
        margin-bottom: 2rem;
        font-size: 2.5rem;
        margin-top: -5rem;

        @media (max-width: 768px) {
            font-size: 2rem;
            margin-top: -3rem;
            margin-bottom: 1.5rem;
        }

        @media (max-width: 480px) {
            font-size: 1.8rem;
            margin-top: -2rem;
            margin-bottom: 1rem;
        }
    }
`;

const PolicySection = styled.section`
    background-color:rgba(248, 249, 250, 0);
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-right: -25rem;
    margin-left: -30rem;

    @media (max-width: 768px) {
        padding: 1.5rem;
        margin-right: -1rem;
        margin-left: -1rem;
    }
    @media (max-width: 480px) {
        padding: 1rem;
        margin-right: -0.5rem;
        margin-left: -0.5rem;
    }

h2 {
    color: #00233D;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    border-bottom: 2px solid #1976d2;
    padding-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
        margin-bottom: 1.2rem;
        padding-bottom: 0.4rem;
    }

    @media (max-width: 480px) {
        font-size: 1.3rem;
        margin-bottom: 1rem;
        padding-bottom: 0.3rem;
    }
}
    @media (max-width: 768px) {
    font-size: 1.5rem;
  }
    @media (max-width: 480px) {
    font-size: 1.3rem;
;  }
`;

const PolicyContent = styled.div`
    padding: 1rem;

    h3 {
    color: #333;
    margin: 1.5rem 0 1rem;
    font-size: 1.4rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
        margin: 1.2rem 0 0.8rem;
    }

    @media (max-width: 480px) {
        font-size: 1.1rem;
        margin: 1rem 0 0.6rem;
    }
}
    @media (max-width: 768px) {
    font-size: 1.2rem;
  }
    @media (max-width: 480px) {
    font-size: 1.1rem;
  }

    ul {
    list-style-type: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
}

    li {
    position: relative;
    padding: 0.5rem 0 0.5rem 1.5rem;
    color: #555;
    line-height: 1.6;
    font-size: 1rem;

    @media (max-width: 768px) {
        font-size: 0.95rem;
        padding: 0.4rem 0 0.4rem 1.2rem;
        line-height: 1.5;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
        padding: 0.3rem 0 0.3rem 1rem;
        line-height: 1.4;
    }
}
    &:before {
    content: "•";
    color: #1976d2;
    position: absolute;
    right: -10px;
    font-size: 1.2rem;

    @media (max-width: 768px) {
        font-size: 1.1rem;
        right: -8px;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
        right: -6px;
    }
}
    p {
    color: #555;
    line-height: 1.6;
    margin: 1rem 0;
    font-size: 1rem;

    @media (max-width: 768px) {
        font-size: 0.95rem;
        line-height: 1.5;
        margin: 0.8rem 0;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
        line-height: 1.4;
        margin: 0.6rem 0;
    }
}
`;


const Cancellation = () => {
  const { language } = useLanguage();
  return (
    <>
    <CancellationContainer>
        <h1>سياسة الإلغاء</h1>
        
        <PolicySection>
            <h2>1. رحلات الطيران</h2>
            <PolicyContent>
                <h3>{language === 'ar' ? ' تذاكر الطيران القابلة للإلغاء' : 'Cancellable airline tickets'}</h3>
                <ul>
                <li>
                    {language === 'ar' ? 'يمكن إلغاء الحجز قبل 24 ساعة من موعد الرحلة' : 'Reservations can be cancelled 24 hours before the flight time.'}
                </li>
                <li>
                    {language === 'ar' ? 'يتم خصم رسوم إدارية بنسبة 10% من قيمة التذكرة' : 'An administrative fee of 10% will be deducted from the ticket value.'}
                </li>
                    <li>{language === 'ar' ? 'يتم استرداد المبلغ المتبقي خلال 5-7 أيام عمل' : 'The remaining amount will be refunded within 5-7 business days.'}</li>
                </ul>
            </PolicyContent>
        </PolicySection>

        <PolicySection>
            <h2>2. حجوزات الفنادق</h2>
            <PolicyContent>
                <h3>حجوزات الفنادق القابلة للإلغاء</h3>
                <ul>
                    <li>يمكن إلغاء الحجز قبل 48 ساعة من موعد الوصول</li>
                    <li>لا يتم خصم أي رسوم إضافية</li>
                    <li>يتم استرداد المبلغ كاملاً خلال 3-5 أيام عمل</li>
                </ul>

            </PolicyContent>
        </PolicySection>

        <PolicySection>
            <h2>3. حجوزات السيارات</h2>
            <PolicyContent>
                <h3>الحجوزات القابلة للإلغاء</h3>
                <ul>
                    <li>يمكن إلغاء الحجز قبل 24 ساعة من موعد الاستلام</li>
                    <li>يتم خصم رسوم إدارية بنسبة 5% من قيمة الحجز</li>
                    <li>يتم استرداد المبلغ المتبقي خلال 3-5 أيام عمل</li>
                </ul>

            </PolicyContent>
        </PolicySection>

        <PolicySection>
            <h2>4. حالات خاصة</h2>
            <PolicyContent>
                <h3>الإلغاء بسبب ظروف قاهرة</h3>
                <ul>
                    <li>في حالة الكوارث الطبيعية أو الأوبئة</li>
                    <li>في حالة إغلاق المطارات أو الفنادق</li>
                    <li>في حالة القيود الحكومية المفروضة على السفر</li>
                </ul>
                <p>في هذه الحالات، يتم استرداد المبلغ كاملاً أو إعادة جدولة الحجز دون أي رسوم إضافية.</p>
            </PolicyContent>
        </PolicySection>
    </CancellationContainer>
    </>
  )
}

export default Cancellation;
