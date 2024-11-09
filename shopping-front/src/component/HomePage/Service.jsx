import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
const Service = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/service").then((data) => {
      console.log(data.data);
      setInfo(data.data);
    });
  }, []);
  return (
    <div className=" w-full h-full ">
      <div className="service_body grid grid-cols-3">
        <div className="title">our services</div>
        <div className="card w-4/6 mx-auto col-span-2 grid grid-cols-2 justify-center justify-items-center gap-10">
          {info.map((abc) => (
            <ServiceCard key={abc._id} service={abc}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
