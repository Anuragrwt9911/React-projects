import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 lg:mx-6">
      <div className="max-h-[500px] relative">
        {/**overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/30 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Foods <span className="text-orange-500">Delivered</span>
          </h1>
        </div>
        <img
          className="w-full max-h-[400px] object-cover"
          src="https://th.bing.com/th/id/R.e0a2641ebe0391da31ae49f16c2aa4fb?rik=jGoo4326dNLPZA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-2%2fMeat-Dishes-Wallpaper-03833.jpg&ehk=wJia%2bpXdj4x272Dnp1usdg6%2fLtacuz8HEuSsrEM%2fTdk%3d&risl=&pid=ImgRaw&r=0"
          alt="burger"
        />
      </div>
    </div>
  );
};

export default Hero;
