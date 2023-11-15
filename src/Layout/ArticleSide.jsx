import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  faFacebookF,
  faWhatsapp,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ArticleSide = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-3 text-black">
        <div className="mr-[189px] bg-white rounded-lg p-5">
          <span className="text-2xl font-normal">Share</span>
          <div className="mt-5 flex flex-row gap-3">
            <FacebookShareButton url="https://ajarinaku.vercel.app">
              <div className="border-solid border-[#00419E] border-[1.8px] w-[42px] h-[42px] flex justify-center items-center rounded-sm">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  style={{ color: "#00419E" }}
                  size="lg"
                />
              </div>
            </FacebookShareButton>
            <WhatsappShareButton url="https://ajarinaku.vercel.app">
              <div className="border-solid border-[#00419E] border-[1.8px] w-[42px] h-[42px] flex justify-center items-center rounded-sm">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ color: "#00419E" }}
                  size="lg"
                />
              </div>
            </WhatsappShareButton>
            <LinkedinShareButton url="https://ajarinaku.vercel.app">
              <div className="border-solid border-[#00419E] border-[1.8px] w-[42px] h-[42px] flex justify-center items-center rounded-sm">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{ color: "#00419E" }}
                  size="lg"
                />
              </div>
            </LinkedinShareButton>
            <TwitterShareButton url="https://ajarinaku.vercel.app">
              <div className="border-solid border-[#00419E] border-[1.8px] w-[42px] h-[42px] flex justify-center items-center rounded-sm">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  style={{ color: "#00419E" }}
                  size="lg"
                />
              </div>
            </TwitterShareButton>
          </div>
        </div>
        <div className="mr-[189px] h-96 bg-white rounded-lg">
          <span>Related Content</span>
        </div>
        <div className="mr-[189px] h-96 bg-white rounded-lg">
          <span>Choosen Articles</span>
        </div>
      </div>
    </>
  );
};

export default ArticleSide;
