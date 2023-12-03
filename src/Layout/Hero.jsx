/* eslint-disable react/no-children-prop */
import { ButtonP } from "../component/Button";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-[#EFF0F4] relative isolate px-6 pt-14 lg:px-8">
      <div className="hero-content flex-col grow lg:flex-row items-center">
        <div className="md:mx-7 ml-2 mr-2">
          <h1 className="text-3xl sm:text-6xl font-bold text-black">
            Learn Without Limits
          </h1>
          <p className="py-6 text-black text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
            recusandae sunt aliquid fugit aperiam qui sed asperiores voluptatum
            quisquam magnam doloremque incidunt facilis! Minus, aut porro
            praesentium vero, iure iste cum, quod consequuntur dolorum magni
            aperiam. Illum ea error eligendi, in dicta, quisquam qui nihil quae
            id architecto sunt asperiores.
          </p>
          <ButtonP link="/auth/register" value="Join for free" color="bg-biruTua" />
        </div>
        <img
          src="./assets/heroImg.png"
          className="max-w-lg max-h-fit mx-10 hidden md:inline"
        />
      </div>
    </div>
  );
};

export default Hero;
