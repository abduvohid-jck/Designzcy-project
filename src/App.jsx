import React from "react";
import logo from "./assets/photos/logo.svg";
import banner from "./assets/photos/hero-banner.svg";
import "./App.css";
import completedProjects from "./assets/photos/completed-projects.svg";
import activeClients from "./assets/photos/active-clients.svg";
import happyClients from "./assets/photos/happy-clients.svg";
import webDesign from "./assets/photos/web-design.svg";
import webDevelopment from "./assets/photos/web-development.svg";
import webApp from "./assets/photos/web-app.svg";
import arrow from "./assets/photos/arrow.svg";
import arrowWhite from "./assets/photos/arrow-white.svg";

function App() {
  let results = [
    {
      id: 1,
      image: completedProjects,
      count: "5200+",
      description: "Projects completed",
      border: true,
    },
    {
      id: 2,
      image: activeClients,
      count: "500+",
      description: "Active clients",
      border: true,
    },
    {
      id: 3,
      image: happyClients,
      count: "4500+",
      description: "Happy clients",
      border: false,
    },
  ];
  let services = [
    {
      id: 1,
      image: webDesign,
      title: "Website design",
      description:
        "Need something changed or is there something not quite working  the  best service",
      color: true,
    },
    {
      id: 2,
      image: webDevelopment,
      title: "Web development",
      description:
        "Need something changed or is there something not quite working  the  best service",
      color: false,
    },
    {
      id: 3,
      image: webApp,
      title: "Web application",
      description:
        "Need something changed or is there something not quite working  the  best service",
      color: true,
    },
  ];
  return (
    <>
      <div className="w-[1225px] m-auto">
        {/* Header section */}
        <div className="mt-[51px] flex items-center">
          <img className="mr-[253px]" src={logo} alt="Logo" />
          <div>
            <div className="w-[721px] flex items-center justify-between">
              <div className="flex gap-[60px]">
                <a
                  className="font-dmsans font-[500] text-[14px] nav-bar-link"
                  href="#"
                >
                  Home
                </a>
                <a
                  className="font-dmsans font-[500] text-[14px] nav-bar-link"
                  href="#"
                >
                  Service
                </a>
                <a
                  className="font-dmsans font-[500] text-[14px] nav-bar-link"
                  href="#"
                >
                  Portfolio
                </a>
                <a
                  className="font-dmsans font-[500] text-[14px] nav-bar-link"
                  href="#"
                >
                  Blog
                </a>
              </div>
              <button className="opacity-[85%] rounded-[5px] font-dmsans font-[500] text-[14px] text-[white] py-[12px] pl-[24px] pr-[21px] contact-us-btn">
                Contact us
              </button>
            </div>
          </div>
        </div>
        {/* Hero section */}
        <div className="flex items-center justify-between mt-[98.86px]">
          <div>
            <h1 className="font-rubik font-[600] text-[72px] text-[#3D3D3F]">
              Smart Web Design Agency
            </h1>
            <p className="text-[#3D3D3F] font-rubik font-[400] text-[20px] mt-[42px]">
              We will provide best web design and business devlopment <br />
              service clients expectation and satisfaction guarantee.
            </p>
            <button className="opacity-[85%] mt-[40px] pb-[15px] px-[28px] font-rubik font-[400] text-[20px] text-white pt-[14px] free-consultation-btn rounded-[5px]">
              Free consultation
            </button>
          </div>
          <img src={banner} alt="Banner" />
        </div>
        {/* Services section */}
        <div className="mt-[120px] mb-[60px]">
          <h2 className="text-center font-dmsans font-[700] text-[40px] text-[#3D3D3F] mb-[55px]">
            We Provide the Best Web services
          </h2>
          <div className="rounded-[17px] border-[2px] w-[1170px] border-[#EBEBEBCC] flex justify-between py-[36px] pr-[71px] pl-[67px]">
            {results.map((result) => (
              <div
                key={result.id}
                className={`text-center ${
                  result.border
                    ? "border-r-[2px] border-r-[#EBEBEBCC] pr-[120px]"
                    : ""
                }`}
              >
                <img className="m-auto" src={result.image} alt="Service icon" />
                <h3 className="font-[700] text-[36px] text-[#3D3D3F] font-dmsans mt-[23px]">
                  {result.count}
                </h3>
                <p className="font-dmsans text-[24px] text-[#3D3D3F] font-[400] mt-[13px]">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Service description section */}
        <div className="mb-[120px]">
          <h2 className="font-dmsans font-[700] text-[40px] text-[#3D3D3F] text-center mb-[117.12px]">
            What Service We’re Offering
          </h2>
          <div className="flex justify-center gap-[51px] text-center">
            {services.map((service) => (
              <div
                key={service.id}
                className="w-[356px] bg-white pt-[75px] pr-[17px] pb-[39px] pl-[62px] relative rounded-[23px] service-card"
              >
                <div
                  className={`absolute left-[135px] top-[-55px] h-[102px] w-[102px] flex rounded-[100%] services-icons ${
                    service.color ? "bg-white" : "bg-[#ff7950]"
                  }`}
                >
                  <img
                    className="m-auto"
                    src={service.image}
                    alt="Service logo"
                  />
                </div>
                <h4 className="text-[#3D3D3F] font-dmsans font-[700] text-[24px] mb-[10px]">
                  {service.title}
                </h4>
                <p className="font-dmsans font-[400] text-[16px] text-[#595959] mb-[27px]">
                  {service.description}
                </p>
                <button
                  className={`h-[42px] w-[42px] flex items-center justify-center m-auto rounded-[100%] ${
                    service.color ? "bg-[#F1F1F5]" : "bg-[#ff7950]"
                  }`}
                >
                  <img src={service.color ? arrow : arrowWhite} alt="" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
