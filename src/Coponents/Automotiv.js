import React from 'react';

const services = [
  "Automotive",
  "Beauty",
  "Building & Remodeling",
  "B to B Services",
  "Cannabis",
  "Child Education & Development",
  "Eco-Friendly / Green Company",
  "Financial Services",
  "Fitness / Sports",
  "Food & Beverage",
  "Health, Medical, Nutrition",
  "Home Services",
  "Lodging / Travel",
  "Pet Services",
  "Real Estate",
  "Retail",
  "Seniors",
];

const ServicesList = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-around gap-5 px-[15%]  ">
                <div className="mx-10 w-full md:w-1/2 p-5">
                    <h2 className="text-2xl text-start font-semibold mb-4">Industries / FAQs</h2>
                    <p className="text-gray-700 text-xl text-justify">
                            Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu
                            sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
                            magna. Nam mattis lacus, porttitor eu mauris a, blandit ultricies nibh.
                            Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius
                            volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
                            Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi.
                            Proin vitae facilisis nisi, ac posuere leo.
                    </p>
                </div>
            <img src="apple.jpeg" alt="" className="w-full md:w-1/3 h-auto my-5 object-cover" />
        </div>
        <div className="p-5 mx-[20%] my-[5%] bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Services</h2>
            <ul className="list-none p-0">
                {services.map((service, motive) => (
                <li key={motive} className="flex cursor-pointer items-center justify-between border-b border-gray-300 py-2 text-lg font-[600]">
                <li className="text-gray-800">{service}</li>
                <li className="w-4 h-4 bg-gray-300 text-gray-500 font-bold pb-[4px] flex cursor-pointer items-center justify-center rounded-full"><p>+</p></li>
                </li>
                  ))}
            </ul>
        </div>
    </div>
  );
};
     
  
  export default ServicesList;


