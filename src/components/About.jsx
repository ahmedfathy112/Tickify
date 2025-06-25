import React from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaEye, FaBullseye, FaStar } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';

/* About Page Styles */
const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

/* About Section */
const AboutHero = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/src/images/about.jpg');
  background-size: cover;
  background-position: center;
  color: var(--white);
  padding: 6rem 2rem;
  text-align: center;
  border-radius: 15px;
  margin-bottom: 4rem;
  margin-top: -120px;
  margin-left: -110px;
  margin-right: -15px;

  @media screen and (max-width: 768px) {
    padding: 4rem 1rem;
    margin: -80px -1rem 2rem -1rem;
    border-radius: 10px;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: 0.8rem;
    }
      @media screen and (max-width: 480px) {
      font-size: 2rem;
    } 
  }

  p {
    font-size: 1.5rem;
    opacity: 0.9;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
  }
`;

/* Vision & Mission Section */
const VisionMission = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const Box = styled.div`
  background: var(--white);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 0.8rem;
    }
  }

  h2 {
    color: var(--primary-color);
    margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
      margin-bottom: 0.8rem;
    }
  }

  p {
    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

/* Values Section */
const ValuesSection = styled.section`
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }

  h2 {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 2rem;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: var(--white);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
      font-size: 1.8rem;
      margin-bottom: 0.8rem;
    }
  }

  h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 0.8rem;
    }
  }

  p {
    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

/* Team Section */
const TeamSection = styled.section`
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }

  h2 {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 2rem;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
    background: var(--white);
    border-radius: 15px;
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.49);

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: var(--primary-color);
    margin: 0;
    text-align: right;
    font-size: 1.1rem;
    margin-bottom: 0.2rem;

    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
      margin: 0.8rem 0 0.4rem;
    }
  }

  p {
    color: var(--text-color);
    color: var(--text-color);
    text-align: right;
    margin: 0;
    font-size: 0.9rem;

    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
      margin-bottom: 0.8rem;
    }
  }
`;

const MemberImage = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    margin-left: 16px;
    position: relative;

  @media screen and (max-width: 768px) {
    height: 250px;
  }

//     &::before {
//     display: none;
// }

//     &::after {
//     display: none;
// }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const About = () => {
  const { language } = useLanguage();

  return (
    <>
    <AboutContainer>
      <AboutHero>
        <h1>{language === 'ar' ? 'من نحن' : 'About Us'}</h1>
        <p>
          {language === 'ar' ? 
        'نحن نؤمن بأن السفر يجب أن يكون تجربة سهلة وممتعة للجميع'
          : 'We believe that travel should be an easy and enjoyable experience for everyone.'}
        </p>
      </AboutHero>

      <VisionMission>
        <Box>
          <FaEye />
          <h2>{language === 'ar' ? 'رؤيتنا' : 'Our Vision'}</h2>
          <p>
            {language === 'ar'
              ? 'نسعى لأن نكون المنصة الأولى في الشرق الأوسط لتقديم خدمات السفر المتميزة'
              : 'We strive to be the premier platform in the Middle East for providing premium travel services.'}
          </p>
        </Box>
        <Box>
          <FaBullseye />
          <h2>{language === 'ar' ? 'مهمتنا' : 'Our Mission'}</h2>
          <p>
            {language === 'ar'
              ? 'تقديم  حلول سفر مبتكرة وخدمات متميزة تلبي احتياجات عملائنا بأفضل الأسعار'
              : 'Providing innovative travel solutions and distinguished services that meet our customers needs at the best prices.'}
          </p>
        </Box>
      </VisionMission>

      <ValuesSection>
        <h2>{language === 'ar' ? 'قيمنا' : 'Our Values'}</h2>
        <ValuesGrid>
          <ValueCard>
            <FaStar />
            <h3>{language === 'ar' ? 'الجودة' : 'Quality'}</h3>
            <p>
              {language === 'ar'
                ? 'نلتزم بتقديم خدمات عالية الجودة تلبي توقعات عملائنا'
                : 'We are committed to providing high-quality services that meet our customers expectations.'}
            </p>
          </ValueCard>
          <ValueCard>
            <i className="fas fa-handshake"></i>
            <h3>{language === 'ar' ? 'الموثوقية' : 'Reliability'}</h3>
            <p>
              {language === 'ar' ?
                'نحرص على بناء علاقات قوية مع عملائنا وشركائنا'
                : 'We are keen to build strong relationships with our clients and partners.'}
            </p>
          </ValueCard>
          <ValueCard>
            <i className="fas fa-lightbulb"></i>
            <h3>{language === 'ar' ? 'الابتكار' : 'Innovation'}</h3>
            <p>
              {language === 'ar'
                ? 'نواكب أحدث التقنيات لتقديم تجربة سفر فريدة'
                : 'We keep pace with the latest technologies to provide a unique travel experience.'}
            </p>
          </ValueCard>
          <ValueCard>
            <i className="fas fa-users"></i>
            <h3>{language === 'ar' ? 'العمل الجماعي' : 'Teamwork'}</h3>
            <p> 
              {language === 'ar' ? 'نؤمن بقوة العمل الجماعي في تحقيق أهدافنا' : 'We believe in the power of teamwork to achieve our goals.'}
              </p>
        </ValueCard>
        </ValuesGrid>
      </ValuesSection>

      <TeamSection>
        <h2>{language === 'ar' ? 'فريقنا' : 'Our Team'}</h2>
        <TeamGrid>
          <TeamMember>
            <MemberImage>
              <img src="/src/images/team1.jpg" alt="Team Member" />
            </MemberImage>
            <div class="member-info">
            <h3> {language === 'ar' ? 'هدير السيد' : 'Hadeer El-Sayeed'} </h3>
            <p>UI/UX Designer</p>
            </div>
          </TeamMember>
          <TeamMember>
            <MemberImage>
              <img src="/src/images/team2.jpg" alt="Team Member" />
            </MemberImage>
            <div class="member-info">
            <h3> {language === 'ar' ? 'هاجر عبدالمجيد' : 'Hagar Abd-Elmejeed'} </h3>
            <p>Frontend Developer</p>
            </div>
          </TeamMember>
          <TeamMember>
            <MemberImage>
              <img src="/src/images/team3.jpg" alt="Team Member" />
            </MemberImage>
            <div class="member-info">
            <h3> {language === 'ar' ? 'فاطمة رضوان' : 'Fatma Radwan'} </h3>
            <p>Frontend Developer</p>
            </div>
          </TeamMember>
            <TeamMember>
            <MemberImage>
              <img src="/src/images/team3.jpg" alt="Team Member" />
            </MemberImage>
            <div class="member-info">
            <h3> {language === 'ar' ? 'كريم فتحي' : 'Kareem Fathy'} </h3>
            <p>Backend Developer</p>
            </div>
          </TeamMember>
            <TeamMember>
            <MemberImage>
              <img src="/src/images/team3.jpg" alt="Team Member" />
            </MemberImage>
            <div class="member-info">
            <h3> {language === 'ar' ? 'الاء ياسر' : 'Hadeer El-Sayeed'} </h3>
            <p>Backend Developer</p>
            </div>
          </TeamMember>
            <TeamMember>
            <MemberImage>
              <img src="/src/images/team3.jpg" alt="Team Member" />
            </MemberImage>
            <div class="member-info">
            <h3> {language === 'ar' ? 'يوسف علاء' : 'Hadeer El-Sayeed'} </h3>
            <p>Flutter Developer</p>
            </div>
          </TeamMember>
        </TeamGrid>
      </TeamSection>
    </AboutContainer>
    </>
  );
};

export default About;
