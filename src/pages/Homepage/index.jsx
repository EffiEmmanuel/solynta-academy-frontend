import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/ui/Navbar";
import FeatureCard from "../../components/ui/FeatureCard";
import BenefitCard from "../../components/ui/BenefitCard";
import BenefitSection from "../../components/ui/BenefitSection";
import HeadingAndSubText from "../../components/ui/HeadingAndSubText";
import { MdStar } from "react-icons/md";

// Icons
import triangleAsset from "../../assets/icons/triangle.svg";
import personalizedLearningIcon from "../../assets/icons/machine-learning.svg";
import aiIcon from "../../assets/icons/ai.svg";
import interactiveIcon from "../../assets/icons/interactive.svg";
import brainIcon from "../../assets/icons/brain.svg";
import bookIcon from "../../assets/icons/book.svg";
import cpuIcon from "../../assets/icons/cpu.svg";
import flexibilityIcon from "../../assets/icons/flexibility.svg";
import timeIcon from "../../assets/icons/time.svg";
import safeIcon from "../../assets/icons/safe.svg";
import circleIcon from "../../assets/icons/circle.svg";
import polygonIcon from "../../assets/icons/polygon.svg";
import rectangleIcon from "../../assets/icons/rectangle.svg";

// Images
import heroImage from "../../assets/images/hero-img.svg";
import benefitsImage1 from "../../assets/images/benefits-img1.svg";
import benefitsImage2 from "../../assets/images/benefits-img2.svg";
import testimonialImage1 from "../../assets/images/testimonial-img1.png";
import testimonialImage2 from "../../assets/images/testimonial-img2.png";
import testimonialImage3 from "../../assets/images/testimonial-img3.png";
import TestinomialCard from "../../components/ui/TestimonialCard";
import Footer from "../../components/ui/Footer";

function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <div className="lg:px-20 py-5 px-10">
        <Navbar isHome />
      </div>

      {/* Main section */}
      <main className="mt-14">
        {/* Hero section */}
        <div className="relative mt-20">
          {/* Triangle */}
          <img
            src={triangleAsset}
            alt=""
            className="absolute left-0 top-0 max-w-[35px]"
          />

          {/* Text content */}
          <div className="lg:px-20 py-5 px-10">
            <h1 className="text-4xl font-bold max-w-2xl leading-[3.5rem]">
              <span className="text-solyntaYellow text-4xl font-bold">
                Empowering
              </span>{" "}
              Education: Unleashing Your Child's Potential at{" "}
              <span className="text-solyntaBlue text-4xl font-bold">
                Solynta Academy
              </span>
            </h1>

            <p className="mt-3 max-w-2xl leading-[1.7rem]">
              At Solynta Academy, we believe in providing the best education for
              your child addressing the challenges faced by traditional
              schooling. Our innovative online learning platform is designed to
              dliver personalized and adaptive instruction, leading to improved
              educational outcomes. With Solynta Academy, you can unlock your
              child's potential and set them on a path to success.
            </p>

            {/* Call to action */}
            <Link
              to="/auth/signup"
              className="mt-5 -ml-2 font-semibold rounded-full px-7 py-4 inline-block bg-solyntaYellow text-solyntaBlue"
            >
              Unlock potential now!
            </Link>

            {/* Image */}
            <img
              src={heroImage}
              alt=""
              className="absolute right-0 top-0 max-w-lg lg:max-w-sm xl:max-w-lg lg:inline-block hidden"
            />
          </div>
        </div>

        {/* Features */}
        <div className="px-10 lg:px-20 lg:mt-52 mt-32 flex lg:flex-row lg:justify-between lg:items-center flex-col items-center gap-y-10">
          {/* Feature card */}
          <FeatureCard
            icon={personalizedLearningIcon}
            heading="Personalized Learning"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  efficitur ante non sapien."
          />
          {/* Feature card */}
          <FeatureCard
            icon={aiIcon}
            heading="AI-driven Analytics"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  efficitur ante non sapien."
          />
          {/* Feature card */}
          <FeatureCard
            icon={interactiveIcon}
            heading="Interactive Content"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  efficitur ante non sapien."
          />
        </div>

        {/* Our benefits */}
        <div className="relative mt-44">
          <BenefitSection
            firstCard={{
              bgColor: "bg-solyntaYellow",
              heading: "Personalised Learning",
              text: "Our platform utilizes artificial intelligence to adapt to your child's individual learning style and pace. This personalized approach enhances their understanding and retention of concepts, leading to improved academic performance.",
              icon: brainIcon,
            }}
            secondCard={{
              bgColor: "bg-solyntaBlue",
              heading: "High-Quality Curriculum",
              text: "Solynta Academy offers a comprehensive curriculum aligned with national standards. Your child will receive a well-rounded education covering all key subjects, ensuring they  have a solid foundation for future success.",
              icon: bookIcon,
            }}
            thirdCard={{
              bgColor: "bg-solyntaYellow",
              heading: "Advanced Computer Skills",
              text: "In addition to core subjects, Solynta Academy equips students with advanced computer skills and expertise in the use of artificial intelligence. These essential skills will empower them to thrive in the technology-driven future.",
              icon: cpuIcon,
            }}
            heading="Our Benefits"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            efficitur ante non sapien pulvinar porttitor. Nam in hendrerit
            sapien. Nam sem erat, vulputate et . Lorem ipsum dolor sit
            amet, consectetur adipiscing elit."
            isReversed={false}
            sectionImage={benefitsImage1}
          />

          <div className="mt-40">
            <BenefitSection
              firstCard={{
                bgColor: "bg-solyntaBlue",
                heading: "Flexibility",
                text: "With Solynta Academy, your child can access their lessons anytime, anywhere, at their own pace. Say goodbye to the inconvenience of commuting, rigid schedules, and missed classes. Our platform fits seamlessly into your family’s lifestyle.",
                icon: flexibilityIcon,
              }}
              secondCard={{
                bgColor: "bg-solyntaYellow",
                heading: "Eliminate Daily Commute",
                text: "By enrolling your child with Solynta Academy, you eliminated the need for a daily commute to and from school. Imagine the time and stress cost saved by avoiding traffic, long journeys, and crowded transpo ",
                icon: timeIcon,
              }}
              thirdCard={{
                bgColor: "bg-solyntaBlue",
                heading: "Safe & Secure Environment",
                text: "With Solynta Academy, your child learn in the safety and comfort of your own home. You can  have peace of mind knowing they are protected from potential risks and dangers  associated with commuting and external environments. ",
                icon: safeIcon,
              }}
              heading="Our Benefits"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            efficitur ante non sapien pulvinar porttitor. Nam in hendrerit
            sapien. Nam sem erat, vulputate et . Lorem ipsum dolor sit
            amet, consectetur adipiscing elit."
              isReversed={true}
              sectionImage={benefitsImage2}
            />
          </div>
        </div>

        {/* Our Testimonials */}
        <div className="mt-44">
          <div className="text-center px-10 lg:px-0">
            <HeadingAndSubText
              heading="Our Testimonial"
              subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit in efficitur ante non sapien."
            />
          </div>

          {/* Testimonials */}
          <div className="px-10 lg:px-20 my-20 lg:my-32 flex lg:flex-row lg:justify-between lg:items-center flex-col items-center gap-y-10">
            {/* Testimonial */}
            <TestinomialCard
              icon={circleIcon}
              image={testimonialImage1}
              name="Name Name"
              testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  efficitur ante non sapien pulvinar porttitor. Nam in hendrerit
                  sapien. Nam sem erat, vulputate et."
            />
            <TestinomialCard
              icon={rectangleIcon}
              image={testimonialImage2}
              name="Name Name"
              testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  efficitur ante non sapien pulvinar porttitor. Nam in hendrerit
                  sapien. Nam sem erat, vulputate et."
            />
            <TestinomialCard
              icon={polygonIcon}
              image={testimonialImage3}
              name="Name Name"
              testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  efficitur ante non sapien pulvinar porttitor. Nam in hendrerit
                  sapien. Nam sem erat, vulputate et."
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
