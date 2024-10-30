import React from "react";

const Cardview = ({ propData }) => {
 // console.log(propData);
  return (
    <>
     <section className='main-card--cointainer'>
        {propData.map((curElem) => {
        
        const {id, category,image,title,description} = curElem;

        return (
          <>
              <div className='card-container' key={id}>
                <div className='card'>
                  <div className='card-body'>
                  <span className='card-number card-circle subtle'>{id}</span>
                  <span className='card-author subtle'>{category}</span>    
                  <img src={image} alt="images" className='card-image' />              
                  <h2 className='card-title'>{title}</h2>
                  <span className='card-description'>{description}</span>
                  
                  {/* */}
                  <span className='card-tag subtle'>View Detail</span>
                  </div>
                </div>
              </div>
           
          </>
        )
      })}
     </section>
    </>
    
  );
};

export default Cardview;
