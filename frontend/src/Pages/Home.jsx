import React from "react";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import HomeRecruiters from "../components/Home/HomeRecruiters";
import HomeStats from "../components/Home/HomeStats";
import JobSeekers from "../components/Home/JobSeekers";
import LogoSlider from "../components/Home/LogoSlider";
import Testimonial from "../components/Home/Testimonial";

function Home() {
  return (
    <div className="font-Poppins justify-center items-center">
      <Hero />
      <HomeStats />
      <LogoSlider />
      <JobSeekers />
      <HomeRecruiters />
      <section>
        <div className="max-w-full w-[1440px] px-5 mx-auto mb-12  ">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="text-[30px] leading-[54px] font-[700] text-[#181A1E] text-center">What our Student's and Recruiter's say</h2>
            <p className="text-[18px] leading-[30px] font-[400] text-[#4E545F] mt-[18px] text-center">opportuNet saves our Efforts and time by providing the best efficient facilities.</p>
          </div>
          <Testimonial />
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Home;
