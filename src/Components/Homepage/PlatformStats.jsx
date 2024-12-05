import React from "react";

const PlatformStats = () => {
  return (
    <section>
      <div className="container mx-auto mb-14">
        <div className="flex justify-center">
          <div className="grid grid-col-1 sm:grid-cols-3 w-[80%] mt-14 text-center gap-6">
            <div>
              <h4 className="text-[3.3rem] font-[500]">200k+</h4>
              <p className="text-[#8A8A8A] text-lg tracking-wider">
                Registered Students
              </p>
            </div>
            <div>
              <h4 className="text-[3.3rem] font-[500]">50+</h4>
              <p className="text-[#8A8A8A] text-lg tracking-wider">
                Universities Globally
              </p>
            </div>
            <div>
              <h4 className="text-[3.3rem] font-[500]">20bp</h4>
              <p className="text-[#8A8A8A] text-lg tracking-wider">
                Data Served
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformStats;
