import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <>
      <div className='bg-[url("/Footer-img/Footer-img.jpg")] bg-center bg-no-repeat bg-cover text-white'>
        <div className="bg-[#000000e4] px-16 pt-16">
          <div className="flex justify-around ">
            <div className="w-60">
              <h1 className="font-bold">LINK LIST</h1>
              <ul className="">
                <li>Assignment Writing Help</li>
                <li>Essay Writing Help</li>
                <li>Dissertation Writing Help</li>
                <li>Presentation Writing Help</li>
                <li>Coursework Writing Help</li>
                <li>Myob Perdisco Assignment Help</li>
                <li>Proofreading & Editing Services</li>
              </ul>
            </div>
            <div className="w-60">
              <h1 className="font-bold">ADDRESS LIST</h1>
              <div className="flex items-center">
                <p className="text-yellow-700">
                  <LocationOnIcon />
                </p>
                <p>
                  Mahaveer Nagar, Near Pooja Tower, Gopalpura, Jaipur, Rajasthan
                  302018
                </p>
              </div>
              <div className="flex">
                <p className="text-green-600">
                  <LocalPhoneIcon />
                </p>
                <p>+91 9876543210</p>
              </div>
              <div className="flex">
                <p className="text-red-700">
                  <MailIcon />
                </p>
                <p>assignment@gmail.com</p>
              </div>
            </div>
            <div className="w-60">
              <h1 className="font-bold text-4xl">
                Standard Research Solutions Pvt. Ltd
              </h1>
              <p>
                A Final Destination to hand over your assignment problems and
                get the real solutions{" "}
              </p>
            </div>
          </div>
          <p className="text-center py-4">
            Copyright <CopyrightIcon /> 2021 Standard Research Solutions Pvt.Ltd
            Designed By{" "}
            <span className="text-blue-700 font-medium">
              Nihit Jangir and Garvit Jangir.
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;