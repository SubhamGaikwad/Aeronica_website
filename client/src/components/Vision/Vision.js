import React from "react";
import slide2 from "../../Images/slide2.jpg";

const Vision = () => {
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div className="w-[400vw] h-full flex transition-transform duration-1000">
          <div className="relative w-screen h-full">
            <img
              className="w-full h-full object-cover"
              src={slide2}
              alt="slide_1"
              loading="priority"
            />
            {/* Add your content here with a transparent background */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center bg-black bg-opacity-25">
              <div className="bg-[rgba(255,255,255,0)] p-4 text-white">
                <div className="bottom-80">
                  <h1 className="text-2xl font-bold">Your Content Here</h1>
                  <p>
                    Our aim to improve agricultural/land efficiency and
                    procuctivity.
                  </p>
                  <div>
                    <p className="top-50">
                      This Technology supply on-demand crop performance data
                      that drives
                    </p>
                    <p>
                      precision agriculture and precision land mapping or
                      survey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
