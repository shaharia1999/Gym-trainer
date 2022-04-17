import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
       <div id="about">
     <div className="container">
       <div className="row">
         <center><h1><span className="desh"></span>About us<span className="desh"></span></h1></center>
         <div className="col-md-5 images">
           <img src="images/about.jpeg" alt=""/>
         </div>
         <div className="col-md-7">
           <h2>i'm shaharia and i'm a <span className="autuplay2"> Web Devoloper</span></h2>
           <p>I was born in Brahmanbaria district, Nasinagar Upazila. I have one sister and my parents. I have Running Student BBA 3rd Year. Now I am studying in Brahmanbaria College.. I've been working on web design and development since 2021 for helping people to build their website, manage and develop functionality.

I'm Passionate at web design and development. I love to do this, it's my life- everything. I learn new things every day.
           </p>
           <button>download cv</button>
         </div>
       </div>
     </div>

</div>
   {/* services */}
   <section id="services">
  <div className="container">
    <center><span>my services</span></center>
    <div className="row">
       <div className="col-lg-4 col-md-6  ">
         <div className="service-col bg-primary">
          <i className="fas fa-fill-drip"></i> 
         <h2>web design</h2>
         <p className='mt-3'>I have been designing websites with speed optimization skills for the  1 years. I love what I do. . I have served many with FireBase website speed optimization skills and complete SEO services.</p>
        </div>
       </div>
       <div className="col-lg-4 col-md-6">
        <div className="service-col ">
          <i className="fas fa-blog"></i>
          <h2>web development</h2>
          <p className='mt-3'>I have been designing websites with speed optimization skills for the  1 years. I love what I do. . I have served many with FireBase website speed optimization skills and complete SEO services.</p>
         </div>
       </div>
       <div className="col-lg-4 col-md-6 ">
        <div className="service-col ">
          <i className="fas fa-code"></i>
          <h2>apps design</h2>
          <p className='mt-3'>I have been designing websites with speed optimization skills for the  1 years. I love what I do. . I have served many with FireBase website speed optimization skills and complete SEO services.</p>
         </div>
       </div>
    </div>
  </div>

</section>
   {/* service */}
   <section id="skill">
     <div className="container">
      <center><span>my skill</span></center>
           <div className="row">
             <div className="col-md-6 skill-div1">
               <h2>my creative  skill & exparience  :</h2>
               <p>I have been designing websites with speed optimization skills for the  1 years. I love what I do. . I have served many with FireBase website speed optimization skills and complete SEO services.
               </p>
               <button>Read more</button>
             </div>
               <div className="col-md-6 skill-div2">
                    <ul>
                      <li className="html">html</li>
                      <li  className="css">css</li>
                      <li  className="bootsrap">bootstrap</li>
                      <li  className="javascript">javascript</li>
                      <li  className="php">php</li>
                      <li  className="mysquel">my squel</li>
                    </ul>
               </div>
           </div>
     </div>

</section>
        </div>
    );
};

export default About;