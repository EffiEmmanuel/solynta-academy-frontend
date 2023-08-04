import React from "react";

// Logos
import solyntaLogo from "../../../assets/logos/solynta-logo.png";
import facebookLogo from "../../../assets/logos/facebook.svg";
import instagramLogo from "../../../assets/logos/instagram.svg";
import skypeLogo from "../../../assets/logos/skype.svg";
import twitterLogo from "../../../assets/logos/twitter.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-solyntaBlack text-white px-10 lg:px-20 py-10">
      <div className="flex lg:justify-between lg:flex-row flex-col gap-y-10">
        <div className="">
          <img
            src={solyntaLogo}
            alt="Solynta Academy"
            className="w-20 object-contain"
          />

          <p className="max-w-sm text-sm mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
            facilisi quis risus egestas ipsum.
          </p>
        </div>

        <div className="">
          <h4 className="text-solyntaYellow font-semibold">Location</h4>
          <p className="max-w-sm text-sm mt-3">
            194-196 Earls Court Road W.8 Kensington
          </p>
        </div>

        <div className="">
          <h4 className="text-solyntaYellow font-semibold">Call Us</h4>
          <p className="max-w-sm text-sm mt-3">(+44) 020 7373 0027</p>
          <p className="max-w-sm text-sm mt-3">admissions@solynta.io</p>
        </div>

        <div className="">
          <h4 className="text-solyntaYellow font-semibold">Follow Us</h4>
          <div className="flex items-center gap-x-4 my-4">
            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
              <img src={facebookLogo} alt="" className="" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
              <img src={instagramLogo} alt="" className="" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
              <img src={skypeLogo} alt="" className="" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
              <img src={twitterLogo} alt="" className="" />
            </div>
          </div>

          <Link
            to="/auth/signup"
            className="mt-5 bg-solyntaBlue text-solyntaYellow h-9 font-semibold w-24 flex justify-center items-center rounded-full"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <hr className="my-10" />

      <div className="flex gap-x-20 lg:flex-row flex-col gap-y-3">
        <small>&copy; Copyright 2023. All Right Reserved By Shay Designs</small>

        <div className="flex gap-x-3 items-center">
          <div className="h-3 w-3 bg-solyntaBlue rounded-full"></div>
          <Link to="/privacy-policy">
            <small>Privacy Policy</small>
          </Link>
        </div>

        <div className="flex gap-x-3 items-center">
          <div className="h-3 w-3 bg-solyntaBlue rounded-full"></div>
          <Link to="/terms-and-conditions">
            <small>Terms and conditions</small>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
