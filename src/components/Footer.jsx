
import { footerLinks } from "../data/data"
import {
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* Footer top */}
        <div>
          {/* Footer Logo */}
          <div className="">
            {/* <Logo/> */}
            <p className="">
              {" "}
              Empowering learners worldwide with quality educatio and skills.
            </p>
            {/* Social \Links */}
            <div className="">
              {[
                <RiFacebookFill />,
                <RiTwitterFill />,
                <RiInstagramFill />,
                <RiLinkedinFill />,
              ].map((Icon) => (
                <a href="#">{Icon}</a>
              ))}
            </div>
          </div>
          {/* List */}
          { footerLinks.map((item) => (
            <div className="" key={item.id}>
              <p className="">{item.title}</p>
              <ul className="">
                {item.links.map((link) => (
                  <li className="" key={link}>
                    <a href="#" className="">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Footer Bottom */}
        <div className="">
          <p className="">&copy; {new Date().getUTCFullYear()}ScratchUp.all rights reseved.</p>
        {/* Links */}
        <div className="">
          {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map((label)=>(
            <a  href="#">{label}</a>
          ))}
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
