import React from "react";
import ToggleButton from "./ToggleButton";

const Home = () => {
  return (
    <>
      <div className="h-screen bg-stone-900 ">
        <div className="text-center  pt-[90px]   overflow-hidden text-white text-4xl">
          Home
        </div>
        <div className=" text-stone-500 text-md text-center">
          @Using React-router-Dom
        </div>
        <div className="flex flex-col items-center">
          {/* <ToggleButton /> */}
          <div className="w-[500px] p-2 px-6 flex flex-col items-center space-y-5 h-[400px] mx-auto mt-10 bg-white text-black dark:bg-stone-800 rounded-md dark:text-orange-500">
            <h1 className="text-3xl">Theme Mode</h1>
            <h1 className="">Current Theme: </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis voluptatem, inventore quae doloribus, debitis sed vitae
              dolor dignissimos vel cupiditate illo dicta asperiores perferendis
              accusamus assumenda laudantium deserunt corrupti aliquam?
            </p>
            <button className="bg-purple-800 p-2 text-white rounded-sm text-sm font-semibold dark:bg-orange-500  ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
