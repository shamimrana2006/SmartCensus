import React from "react";
import LogoImge from "../../assets/react.svg";
export default function Footer() {
  return (
    <div className="container mx-auto">
      <footer class="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <img className="w-24" src={LogoImge} alt="" />
          <p>
            SmartCensus
            <br />
            Providing reliable tech solutions for over 30 years.
            <br />
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 class="footer-title">Services</h6>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 class="footer-title">Company</h6>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 class="footer-title">Legal</h6>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
}
