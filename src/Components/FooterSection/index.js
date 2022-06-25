import React from 'react';
// import logo from '../../images/logo.png';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

import {
  FooterContainer,
  SocialMediaActions,
  FooterLogo,
  FotterNav,
  FotterContact,
  FotterContactlist,
  FotterContactNo,
  FotterContactName,
  SocialMediaActionsContainer,
  FooterMobileContainer,
  FotterHName,
} from './FooterSectionElements';

const FooterSection = ({ isOpen, toggle }) => {
  return (
    <FooterContainer id="Footertag">
      <FooterLogo>
        <div className="mt-10">
          {/* <div>
            <img src={logo} alt="" />
          </div> */}
          <div>
            <h1 className="pt-10 font-bold text-xl   text-white md:block hidden">
              © BigRig Group Inc, 2022 All rights reserved.
            </h1>
          </div>
        </div>
        <FotterHName className="md:block hidden">
          Get in touch with us for your service
        </FotterHName>
      </FooterLogo>

      <FotterNav>
        <FotterContact>
          <FotterContactlist>
            <FotterContactName>Address</FotterContactName>
            <FotterContactNo>
              1225 Riverside Rd, Abbotsford, BC V2S 7P1, Canada
            </FotterContactNo>
            <FotterContactNo>
              9115 52 St SE, Calgary, AB T2C 2R4, Canada
            </FotterContactNo>
          </FotterContactlist>
        </FotterContact>
        <FotterContact>
          <FotterContactlist>
            <FotterContactName>Help line Number</FotterContactName>
            <FotterContactNo>(800) 977 0010</FotterContactNo>
            {/* //todo */}
          </FotterContactlist>
        </FotterContact>
        <FotterContact>
          <FotterContactlist>
            <FotterContactName>Email</FotterContactName>
            <FotterContactNo>trailers@bigrigcanada.com</FotterContactNo>
            {/* //todo */}
          </FotterContactlist>
        </FotterContact>
        <FotterContact>
          <FotterContactlist>
            <FotterContactName>We are open</FotterContactName>
            <FotterContactNo>
              Monday to Friday, 8:00 AM to 5:00 PM
            </FotterContactNo>
          </FotterContactlist>
        </FotterContact>
      </FotterNav>
    </FooterContainer>
  );
};

export default FooterSection;
