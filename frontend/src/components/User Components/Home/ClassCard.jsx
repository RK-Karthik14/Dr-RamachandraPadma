import React from "react";
import HomeClassCard from "../../../assets/Page Assets/Home/Home Class Card.png";

const ClassCard = () => {
  const openInNewTab = () => {
    window.open('/class');
  };

  return (
    <>
      <div className="hidden md:block">
        <div className="h-[400px] my-10 w-full flex justify-center">
          <div className="shadow-lg relative w-4/5 mt-20 bg-green-3 p-6 lg:p-10 rounded-tl-[400px] rounded-[100px]">
            <div className="flex justify-end">
              <div className="w-3/5 text-center">
                <p className="text-white text-[36px] lg:text-2xl font-leagueSpartanMedium mb-4">
                  <span className="font-gurajadaRegular text-[40px]">ప్రకృతే వైద్యుడు</span><br/>
                  21 days - Naturopathy Workshop
                </p>
                <p className="text-white text-[24px] leading-relaxed font-tenaliRamaKrishnaRegular">
                  "ప్రకృతి వైద్యం మిమ్మల్ని నయం చేయడంలో సహాయపడనివ్వండి! ఇది అన్నింటికీ నివారణ కానప్పటికీ, ప్రకృతి వైద్యం మీకు ఆరోగ్యంగా మరియు సంతోషంగా ఉండేందుకు సహాయపడుతుంది."
                </p>
              </div>
            </div>
            <img src={HomeClassCard} className="absolute -top-16 left-20 w-48"/>
            <button 
              className="absolute left-24 bottom-10 bg-green-2 px-16 py-3 rounded-tl-full rounded-br-full shadow-md font-gurajadaRegular"
              onClick={() => window.open('/class')}>
                సంప్రదించండి
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="h-auto my-10 w-full flex justify-center">
          <div className="shadow-lg relative w-4/5 mt-20 bg-green-3 p-6 rounded-2xl">
            <div className="flex justify-center mt-10">
              <div className="text-center">
                <p className="text-white text-lg font-leagueSpartanRegular mb-4">
                  <span className="font-gurajadaRegular">ప్రకృతే వైద్యుడు</span><br/>
                  21 days - Naturopathy Workshop
                </p>
                <p className="text-white text-[24px] leading-relaxed font-tenaliRamaKrishnaRegular">
                  "ప్రకృతి వైద్యం మిమ్మల్ని నయం చేయడంలో సహాయపడనివ్వండి! ఇది అన్నింటికీ నివారణ కానప్పటికీ, ప్రకృతి వైద్యం మీకు ఆరోగ్యంగా మరియు సంతోషంగా ఉండేందుకు సహాయపడుతుంది."
                </p>
                <button 
                  className="mt-2 bg-green-2 px-4 py-1 rounded-tl-full rounded-br-full shadow-md font-gurajadaRegular"
                  onClick={() => window.open('/class')}>
                    సంప్రదించండి
                </button>
              </div>
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={HomeClassCard} className="w-36" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassCard;
