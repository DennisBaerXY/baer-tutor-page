import "./LandingPage.css";
import { useState, useEffect, useRef } from "react";

import React from "react";
import { NavigationBar } from "./Modules/NavigationBar";
import PropTypes from "prop-types";

const LandingPage = (props) => {
  const ref_TextContainer = useRef();

  return (
    <div className='LandingPageContainer'>
      <div className='TextContainer' ref={ref_TextContainer}>
        <h1 className='LandingPageH1'>Baer-Tutor.com</h1>
        <ul className='sublinks'>
          <li className='listitem'>Design</li>
          <li className='listitem'>Programming</li>
          <li className='listitem'>Math</li>
        </ul>
      </div>

      <div className='imageBlock firstImage'>
        <div className='TextBlock'>
          <h3 className='TextHeaderinImg'>Personal</h3>

          <p className='subText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio
            incidunt quia. Odit, voluptate praesentium. Harum repellat hic eaque
            soluta nam numquam magnam, beatae consectetur corrupti in dolores
            provident corporis! Architecto molestiae ratione odio eos eaque
            similique quia perferendis mollitia ipsam natus ut accusamus
            suscipit autem quam dicta, aperiam veniam. Quidem nam ipsum unde
            repudiandae ab nihil ipsa tenetur magnam! Quos alias omnis cumque
            veritatis ad. Consectetur eligendi fugit eaque. Possimus
            necessitatibus nisi minima praesentium reprehenderit ullam nobis
            aspernatur odio provident quis quisquam ab minus placeat,
            accusantium nihil deleniti similique! Eos, officia totam quidem quis
            possimus earum quaerat harum iste ut consectetur assumenda
            aspernatur eligendi dolor reprehenderit architecto ab adipisci? Iure
            nostrum tempore error veniam? Corrupti distinctio amet dolorem nam.
            Qui, illo iure? Repudiandae ea doloremque mollitia inventore labore
            molestias, illum quis ipsa itaque iusto commodi, nobis voluptates
            pariatur aspernatur temporibus nulla similique harum porro eius vero
            facere. Dolorum, molestias.
          </p>
        </div>
      </div>
      <div className='content-seperation'>
        <h1 className='nextContentHeader'>Design</h1>
      </div>
      <div className='imageBlock secondIMG'>
        <div className='TextBlock2'>
          <h3 className='TextHeaderinImg'>Design</h3>

          <p className='subText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio
            incidunt quia. Odit, voluptate praesentium. Harum repellat hic eaque
            soluta nam numquam magnam, beatae consectetur corrupti in dolores
            provident corporis! Architecto molestiae ratione odio eos eaque
            similique quia perferendis mollitia ipsam natus ut accusamus
            suscipit autem quam dicta, aperiam veniam. Quidem nam ipsum unde
            repudiandae ab nihil ipsa tenetur magnam! Quos alias omnis cumque
            veritatis ad. Consectetur eligendi fugit eaque. Possimus
            necessitatibus nisi minima praesentium reprehenderit ullam nobis
            aspernatur odio provident quis quisquam ab minus placeat,
            accusantium nihil deleniti similique! Eos, officia totam quidem quis
            possimus earum quaerat harum iste ut consectetur assumenda
            aspernatur eligendi dolor reprehenderit architecto ab adipisci? Iure
            nostrum tempore error veniam? Corrupti distinctio amet dolorem nam.
            Qui, illo iure? Repudiandae ea doloremque mollitia inventore labore
            molestias, illum quis ipsa itaque iusto commodi, nobis voluptates
            pariatur aspernatur temporibus nulla similique harum porro eius vero
            facere. Dolorum, molestias.
          </p>
        </div>
      </div>

      <div className='content-seperation'>
        <h1 className='nextContentHeader'>Programming</h1>
      </div>
      <div className='imageBlock firstImage'>
        <div className='TextBlock'>
          <h3 className='TextHeaderinImg'>Personal</h3>

          <p className='subText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio
            incidunt quia. Odit, voluptate praesentium. Harum repellat hic eaque
            soluta nam numquam magnam, beatae consectetur corrupti in dolores
            provident corporis! Architecto molestiae ratione odio eos eaque
            similique quia perferendis mollitia ipsam natus ut accusamus
            suscipit autem quam dicta, aperiam veniam. Quidem nam ipsum unde
            repudiandae ab nihil ipsa tenetur magnam! Quos alias omnis cumque
            veritatis ad. Consectetur eligendi fugit eaque. Possimus
            necessitatibus nisi minima praesentium reprehenderit ullam nobis
            aspernatur odio provident quis quisquam ab minus placeat,
            accusantium nihil deleniti similique! Eos, officia totam quidem quis
            possimus earum quaerat harum iste ut consectetur assumenda
            aspernatur eligendi dolor reprehenderit architecto ab adipisci? Iure
            nostrum tempore error veniam? Corrupti distinctio amet dolorem nam.
            Qui, illo iure? Repudiandae ea doloremque mollitia inventore labore
            molestias, illum quis ipsa itaque iusto commodi, nobis voluptates
            pariatur aspernatur temporibus nulla similique harum porro eius vero
            facere. Dolorum, molestias.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
