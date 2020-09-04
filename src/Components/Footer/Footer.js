import React from "react";
import FooterDiv from "./FooterDiv";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="main__footer">
      <FooterDiv
        title="Company"
        item1="Company Profile"
        item2="Why Choose Us"
        item3="Leadership"
        item4="Careers"
        item5="Testimonials"
        item6="Contact Us"
      />
      <FooterDiv
        title="Services"
        item1="Document Translation"
        item2="Software Localization"
        item3="Multilingual Translation"
        item4="Translation with Editing"
        item5="eLearning Translation"
        item6="Video Translation"
      />
      <FooterDiv
        title="Features"
        item1="Pricing Plans"
        item2="Cost Calculator"
        item3="Case Studies"
        item4="Appointments"
        item5="Coming Soon"
        item6="FAQ’s"
      />
      <FooterDiv
        title="Articles"
        item1="The Quality of Legal Dictionaries: An Assessment"
        item2="Video captioning – tips to follow when subtitling"
        item3="Language and Culture in Translation"
        item4="Coping Tactics in Interpretation"
      />
    </footer>
  );
};

export default Footer;
