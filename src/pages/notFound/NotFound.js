import React from 'react';
import notFoundImage from '../../images/download.jpg';

const NotFound = () => {


    const styleNotFound = {
      textAlign: 'center',
      padding: '150px 0',
        
    }

   

    return (
       <section className="not-found-section" style={styleNotFound}>
           <img src={notFoundImage} alt="" />
       </section>
    );
};

export default NotFound;