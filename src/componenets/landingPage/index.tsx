import shape from "../../assets/pageShape.png";
import base from "../../assets/base.png";
import Cv1 from "../../assets/CV1.png";
import Cv2 from "../../assets/CV2.png";
import Cv3 from "../../assets/CV3.png";
const LandingPage = () => {
  return (
    <>
      <div className="container max-w-[1250px] h-[80vh]">
        <img
          src={shape}
          alt="shape"
          className="absolute top-0 left-0 -z-10  sm:w-8/12 md:w-5/12"
        />
        <div className="lg:flex h-full font-[500] mt-16">
          <div className="flex lg:w-[60%] justify-center flex-col gap-5">
            <p className="text-white drop-shadow-md">
              One of the best resume builder online
            </p>
            <div className="flex gap-2">
              <p className="text-white text-[27px] xl:text-[54px] lg:text-[48px]">
                Build professional
              </p>
              <p className="text-[#367BFC] text-[27px] xl:text-[54px] lg:text-[48px] drop-shadow-md">
                resume
              </p>
            </div>
            <div className="flex gap-2">
              <p className="text-white text-[27px] xl:text-[54px] lg:text-[48px] drop-shadow-md">
                and search your
              </p>
              <p className="text-[#24E3C2] text-[27px] xl:text-[54px] lg:text-[48px] drop-shadow-md">
                dream job
              </p>
            </div>
            <p className="text-white w-7/12 drop-shadow-md">
              Try our resume builder and create a resume in minutes. Let the
              JOBZ resume maker help build your resume quickly and effortlessly.
            </p>
            <div>
              <button className="text-white bg-gradient-to-r from-[#00ECEA] to-[#367BFC] hover:bg-[#cdfbf3] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2">
                Download app
              </button>
            </div>
          </div>
          <div className=" lg:w-[40%] flex items-center justify-center ">
            <div className="relative h-full min-w-[475px] min-h-[730px] scale-75 md:scale-100">
              <img
                src={base}
                alt="base"
                className="absolute z-10 top-[45%] left-[10%]"
                width={400}
              />
              <img
                src={Cv1}
                alt="resume"
                className="absolute z-10 left-[260px] top-[35%]"
                width={230}
              />
              <img
                src={Cv2}
                alt="resume"
                className="absolute z-10 left-[120px] top-[20%]"
                width={230}
              />
              <img
                src={Cv3}
                alt="resume"
                className="absolute z-10 left-0 top-[35%]"
                width={230}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
