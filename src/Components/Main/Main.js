import React from "react";
import main from './main.css'
import ReactPlayer from 'react-player'
const Main = () => {
  return (
    <div className="main__div">
      <div className="text">
      Giving Your Business
      <br></br>
      A Global Voice
      <div className="Text__define">
        <br></br>
      Professional translation services at the speed of your business in
      <br></br> over 120 languages by qualified native speaker translators.
      <br></br>
      <br></br>
      <button className="button" variant="contained" className="button">
          Start Now
        </button>
        <button className="buttons" variant="contained" className="button">
          Get a Fare Quote
        </button>
      </div>
      </div>
      <div className="service">
        Services
        <div className="service__define">
        <br></br>Services Serving more than 6,000 global brands worldwide, Lyngva provides a range of customised,
        <br></br>affordable translation and localisation services to suit your multilingual needs, across multiple 
        <br></br>industries, content types and platforms. We made it our mission to deliver your stories globally 
        <br></br>on time, in any language.
        </div>
        <div className="illustration__png">
        <div className="illustration">
          <img src="/images/1.jpg"alt=""style={{width:"50%"}}/>
          <br></br>
          Translation
          <div className="illustration__define">
            <br></br>
          Words matter. Words have enormous power.
           <br></br>We simply help you harness that power
           <br></br> around the world.
          </div>
        </div>
        <div className="illustration">
          <img src="/images/1.jpg"alt=""style={{width:"50%"}}/>
          <br></br>
          Localization
          <div className="illustration__define">
            <br></br>
            Most large companies have the ambition of
           <br></br>going global with their products and services.
           <br></br> around the world.
          </div>
        </div>
        <div className="illustration">
          <img src="/images/1.jpg"alt=""style={{width:"50%"}}/>
          <br></br>
          Multimedia
          <div className="illustration__define">
            <br></br>
            Brands rely on audio and video to engage
           <br></br>employees, partners, customers, and fans.
           <br></br> around the world.
          </div>
        </div>
        </div>
      </div>
      <div className="Channel__link">
      Our list of services does not end here. We’ll adapt to your particular needs. <a href="Google.com">Get a Quote for Your Business</a>
      </div>
      <div className="youtube__link">
      <ReactPlayer 
      height="70vh"
      width="90vh"
      url='https://www.youtube.com/watch?v=oW257zA7aUo' />
      <div className="youtube__learn">
      Why Choose Us
      <div className="youtube__define">
      <br></br>Armed with a global network of production facilities, we can
      <br></br>translate anything into over 60 languages, guaranteeing client
      <br></br>satisfaction. We’re happy to provide free price quotes for any
      <br></br>document, user manual, website or software localization project. In
      <br></br>order for us to live up to our promise of an outstanding service,
      <br></br>each job is assigned to linguists with specializations in various
      <br></br>languages who work for our company.
      <br></br>
      <br></br><a href="Google.com">Read More</a>
      </div>
      </div>
      </div>
      <div className="language">
      Languages
      <br></br>
      <div className="language__define">
        <br></br>Our advanced network of translators and linguists deliver content for more than 6,000 global brands
        <br></br>in 100 target languages and 400 language pairs. We are fast, cost-effective and accurate.
      </div>
      </div>
      <div className="flag">
        <img src="/images/england.png"alt=""style={{height:40}}/>
        <div className="flag__title">
          England
          <br></br>
          <div className="flag__define">
            <br></br>We create accurate and powerful
            <br></br>localised content that truly reflects the
            <br></br>diversity of each European region.
          </div>
        </div>
        
        <img src="/images/German.jpg"alt=""style={{height:40}}/>
        <div className="flag__title">
          German
          <br></br>
          <div className="flag__define">
            <br></br>Whatever type of document you need
            <br></br>translated, your order will be served by a
            <br></br>proper native German translator.
          </div>
        </div>
        <img src="/images/france.webp"alt=""style={{height:40}}/>
        <div className="flag__title">
          France
          <br></br>
          <div className="flag__define">
            <br></br>We will customize the translation
            <br></br>according to their different perception of
            <br></br>foreign texts.
          </div>
        </div>
      </div>
      <div className="flag__extra">
        <img src="/images/spanish.png"alt=""style={{height:40}}/>
        <div className="flag__title">
          Spanish
          <br></br>
          <div className="flag__define">
            <br></br>A good Spanish translator doesn't
            <br></br>know the words; he knows the ranges
            <br></br> of possible definitions.
          </div>
        </div>
        
        <img src="/images/Swedish.png"alt=""style={{height:40}}/>
        <div className="flag__title">
          Swedish
          <br></br>
          <div className="flag__define">
            <br></br>We have, and will successfully use our
            <br></br>rich experience of translating from
            <br></br>English into Swedish.
          </div>
        </div>
        <img src="/images/japanese.webp"alt=""style={{height:40}}/>
        <div className="flag__title">
          France
          <br></br>
          <div className="flag__define">
            <br></br>We provides high quality, professional
            <br></br>Japanese translations, our services will
            <br></br>help you improve your global strategy.
          </div>
        </div>
      </div>
      <div className="Icon__Link">
       <img src="/images/icon.jpg"alt=""style={{width:"100%",padding:"1rem",paddingTop:"10%"}}/>
      </div>
    </div>
  );
};
export default Main;
