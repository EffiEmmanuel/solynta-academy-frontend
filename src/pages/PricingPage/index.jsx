import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/ui/Navbar";
import FeatureCard from "../../components/ui/FeatureCard";
import BenefitCard from "../../components/ui/BenefitCard";
import BenefitSection from "../../components/ui/BenefitSection";
import HeadingAndSubText from "../../components/ui/HeadingAndSubText";
import { MdCheckCircle, MdStar } from "react-icons/md";

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
import pricingHeroImage from "../../assets/images/pricing-hero-img.svg";
import benefitsImage1 from "../../assets/images/benefits-img1.svg";
import benefitsImage2 from "../../assets/images/benefits-img2.svg";
import testimonialImage1 from "../../assets/images/testimonial-img1.png";
import testimonialImage2 from "../../assets/images/testimonial-img2.png";
import testimonialImage3 from "../../assets/images/testimonial-img3.png";
import TestinomialCard from "../../components/ui/TestimonialCard";
import Footer from "../../components/ui/Footer";
import PlanCard from "../../components/ui/PlanCard";

function PricingPage() {
  return (
    <div>
      {/* Navbar */}
      <div className="lg:px-20 py-5 px-10">
        <Navbar isPricing />
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
              Discover Our Competitive
              <span className="text-solyntaYellow text-4xl font-bold">
                Pricing Plans
              </span>{" "}
              for Exceptional Education at{" "}
              <span className="text-solyntaBlue text-4xl font-bold">
                Solynta Academy
              </span>
            </h1>

            <p className="mt-3 max-w-2xl leading-[1.7rem]">
              At Solynta Academy, we understand the importance of balancing
              quality education with affordability. We believe that every child
              deserves the opportunity to receive an exceptional education that
              sets them on the path to success. That's why we have carefully
              crafted our pricing plans to offer you the best value for your
              investment. Our commitment to transparency means that you can
              trust that there are no hidden costs or unexpected fees.
            </p>

            {/* Image */}
            <img
              src={pricingHeroImage}
              alt=""
              className="absolute right-0 top-0 max-w-lg lg:max-w-sm xl:max-w-lg lg:inline-block hidden"
            />
          </div>
        </div>

        {/* Choose the right plan */}
        <div className="mt-44 px-10 lg:px-20">
          <h2 className="text-3xl font-semibold">Choose the right plan</h2>

          {/* Plans */}
          <div className="mt">
            {/* Plan card */}
            <PlanCard
              planName="Essential"
              price={350}
              title="Get started on the path to academic success with our Essential Plan."
              benefit1="Core curriculum coverage in key subjects"
              benefit2="Access to personalized learning platform"
              benefit3="Basic support services"
              benefit4="Basic support services"
              link="/"
            />

            {/* Plan card */}
            <PlanCard
              backgroundColor="bg-[#B8CAE6]"
              buttonColor="bg-solyntaBlue"
              checkColor="text-solyntaBlue"
              price={600}
              planName="Premium"
              title="Elevate your child's learning experience with our Premium Plan Designed to provide an exceptional learning experience."
              benefit1="Comprehensive curriculum with additional enrichment activities"
              benefit2="Personalized learning tailored to individual needs"
              benefit3="Enhanced support services, including regular progress tracking and reporting"
              benefit4="Access to advanced computer skills training"
              link="/"
            />

            {/* Plan card */}
            <PlanCard
              planName="Elite"
              price={800}
              title="Embark on an extraordinary educational journey with our Elite Plan, the epitome of academic excellence."
              benefit1="All-inclusive curriculum with advanced subjects and specialized courses"
              benefit2="Highly personalized learning experience with dedicated academic advisor"
              benefit3="Priority support services, including 24/7 assistance and priority access to resources"
              benefit4="Extensive computer skills training, including artificial intelligence applications"
              link="/"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default PricingPage;
