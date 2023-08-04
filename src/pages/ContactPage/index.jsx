import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/ui/Navbar";
import FeatureCard from "../../components/ui/FeatureCard";
import BenefitCard from "../../components/ui/BenefitCard";
import BenefitSection from "../../components/ui/BenefitSection";
import HeadingAndSubText from "../../components/ui/HeadingAndSubText";
import { MdCheckCircle, MdLocationPin, MdPhone, MdStar } from "react-icons/md";

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
import contactImage from "../../assets/images/contact-img.png";
import testimonialImage1 from "../../assets/images/testimonial-img1.png";
import testimonialImage2 from "../../assets/images/testimonial-img2.png";
import testimonialImage3 from "../../assets/images/testimonial-img3.png";
import TestinomialCard from "../../components/ui/TestimonialCard";
import Footer from "../../components/ui/Footer";
import ContactForm from "../../forms/ContactForm";

function ContactPage() {
  return (
    <div>
      {/* Navbar */}
      <div className="lg:px-20 py-5 px-10">
        <Navbar isContactUs />
      </div>

      {/* Main section */}
      <main className="mt-14 pb-44">
        {/* Hero section */}
        <div className="relative mt-20">
          {/* Triangle */}
          <img
            src={triangleAsset}
            alt=""
            className="absolute left-0 top-0 max-w-[35px]"
          />

          {/* Text content */}
          <div className="lg:px-20 py-5 px-10 flex flex-col gap-y-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="">
              <h1 className="text-4xl font-bold max-w-2xl leading-[3.5rem]">
                <span className="text-solyntaYellow text-4xl font-bold">
                  Unlock
                </span>{" "}
                Your Child's Potential: Contact{" "}
                <span className="text-solyntaBlue text-4xl font-bold">
                  Solynta Academy{" "}
                </span>
                Today!
              </h1>

              <p className="mt-3 max-w-2xl leading-[1.7rem]">
                We are excited to connect with you and discuss how Solynta
                Academy can unlock your child's potential through our
                exceptional educational programs.
              </p>

              <img
                src={contactImage}
                alt=""
                className="my-5 w-full lg:max-w-2xl xl:max-w-lg lg:inline-block hidden"
              />

              <p className="mt-3 max-w-2xl leading-[1.7rem]">
                Our dedicated team is here to provide you with the information
                and guidance you need to make an informed decision about your
                child's education. Whether you have questions about our
                curriculum, personalized learning approach, or enrollment
                process, we are ready to assist you.
              </p>

              <div className="flex justify-between items-center max-w-2xl mt-7">
                <div className="flex gap-x-4 items-center">
                  <MdLocationPin size={20} className="text-solyntaBlue" />
                  <p className="text-solyntaBlue">
                    194-196 Earls Court Road W.8 Kensington
                  </p>
                </div>
                <div className="flex gap-x-4 items-center">
                  <MdPhone size={20} className="text-solyntaBlue" />
                  <Link to="tel:+4402073730027" className="text-solyntaBlue">
                    (+44) 020 7373 0027
                  </Link>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="w-full lg:w-1/2 shadow-lg p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ContactPage;
