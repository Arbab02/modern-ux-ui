
import React, { useRef } from 'react';
import Cuboid from '../assets/cuboid.png'
import Cylinder from '../assets/cylinder.png'
import Pill from '../assets/pill.png'

const ServiceCard = ({ icon, title, description, bgColor, shadowColor }) => {
  const cardItemRef = useRef(null);


  return (
    <div className="rounded bg-[#0a0e21]  p-6 text-center " >
      <div
        className={`mx-auto flex h-28 w-28 -translate-y-12 transform items-center justify-center rounded-full  ${bgColor}  ${shadowColor}`}
      ref={cardItemRef}
      >
        {icon}
      </div>
      <h1 className="text-white mb-3 text-xl font-medium lg:px-14">{title}</h1>
      <p className="px-4 text-white">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: (
        <img
          src={Cuboid}
          alt="Tree and Shrub Pruning"
          className=" h-36 w-36"
        />
      ),
      title: "TREE AND SHRUB PRUNING",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet modi accusantium vero perspiciatis, incidunt dicta sed aspernatur!",
      bgColor: "transparent",
      shadowColor: "",
    },
    {
      icon: (
        <img
          src={Cylinder}
          alt="Irrigation & Drainage"
          className="h-[8rem] w-[8rem]"
        />
      ),
      title: "IRRIGATION & DRAINAGE",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet modi accusantium vero perspiciatis, incidunt dicta sed aspernatur!",
      bgColor: "bg-transparent",
      shadowColor: "",
    },
    {
      icon: (
        <img
          src={Pill}
          alt="Landscape Design"
          className="h-[7rem] w-[7rem]"
        />
      ),
      title: "LANDSCAPE DESIGN",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet modi accusantium vero perspiciatis, incidunt dicta sed aspernatur!",
      bgColor: "bg-transparent",
      shadowColor: "",
    },
  ];

  return (
    <div className="h-full min-h-screen w-full bg-[#050816] pt-12 p-4">
      <h1 className='text-6xl text-white font-bold text-center mb-14'>Our Services</h1>
      <div className="grid gap-14 md:grid-cols-3 md:gap-5">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            bgColor={service.bgColor}
            shadowColor={service.shadowColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;