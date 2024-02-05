import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" font-semibold text-white text-7xl">
        Delicious Recipes
        </h1>
        <p className=" text-backgroundColor">
        inappropriate behavior is often laughed off as “boys will be boys,” women <br /> face higher conduct standards especially in the workplace. That’s why it’s <br /> crucial that, as women.
        </p>
        <div className=" lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
