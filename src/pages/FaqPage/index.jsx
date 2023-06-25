import React from "react";
import Navbar from "../../components/ui/Navbar";

// Icons
import triangleAsset from "../../assets/icons/triangle.svg";

// Images
import faqImage from "../../assets/images/faq-img.svg";
import Footer from "../../components/ui/Footer";
import PlanCard from "../../components/ui/PlanCard";
import FAQSection from "../../components/ui/FAQSection";

function FaqPage() {
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
              <span className="text-solyntaYellow text-4xl font-bold">
                FAQs
              </span>{" "}
              Made Easy: Everything You Need to Know about{" "}
              <span className="text-solyntaBlue text-4xl font-bold">
                Solynta Academy
              </span>
              !
            </h1>

            <p className="mt-3 max-w-2xl leading-[1.7rem]">
              Welcome to our FAQs Made Easy page, where we've gathered
              everything you need to know about Solynta Academy in one
              convenient place. We understand that you may have questions about
              our programs, curriculum, and unique approach to education. That's
              why we've compiled this comprehensive resource to provide clear
              and concise answers.
            </p>

            {/* Image */}
            <img
              src={faqImage}
              alt=""
              className="absolute right-0 top-0 max-w-lg lg:max-w-sm xl:max-w-lg lg:inline-block hidden"
            />
          </div>
        </div>

        {/* Choose the right plan */}
        <div className="mt-44 px-10">
          <FAQSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default FaqPage;
