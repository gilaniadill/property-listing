import React, { useState } from "react";
import "./style.css";
import Cardview from "./Cardview";
import Detail from "./propApi";
import Navbar from "./Navbar";


const uniqueList =[... new Set(Detail.map((curElem)=>{
  return curElem.category;
})
),
"All"
];
console.log(uniqueList);

const Property = () => {
  const [propData, setgetData] = useState(Detail);
  const [propList, setPropData]= useState(uniqueList);

  const filterItems =(category)=>{
    if(category==="All")
    {
      setgetData(Detail);
      return;
    }
    const updatedList = Detail.filter((curElem)=>{
      return curElem.category===category;
 
    })
    setgetData(updatedList);
  }
  return (
    <>
    <Navbar filteritems={filterItems} propList={propList}/>
      <Cardview propData={propData} />
    </>
  );
};

export default Property;
