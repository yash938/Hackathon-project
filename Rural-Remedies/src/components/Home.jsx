import "./home.css"
import img from "../assets/we-are-intro2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4-bg-rm.png"
import img5 from "../assets/btnimg.png"
import box1 from "../assets/box1.png"
import box2 from "../assets/box2.png"
import box3 from "../assets/box3.png"
import box4 from "../assets/box4.png"
import box5 from "../assets/box5.png"
import box6 from "../assets/box6.png"
import box7 from "../assets/box7.png"
import box8 from "../assets/box8.png"
import Ts1 from "../assets/testimonial1.jpg"
import Ts2 from "../assets/testimonial2.jpg"
import Ts3 from "../assets/testimonial3.jpg"
import img91 from "../assets/img91.png"
import img92 from "../assets/img92.jpg"
import img93 from "../assets/img93.png"
import img94 from "../assets/img94.png"
import img81 from "../assets/img81.avif"
import img82 from "../assets/clove.jpg"
import img83 from "../assets/garlic.jpg"
import img84 from "../assets/milk.jpg"
import img85 from "../assets/ginger.jpg"
import img86 from "../assets/onions.jpg"
import img87 from "../assets/ghee.jpg"
import img88 from "../assets/dark-circle.jpg"
function Home() {
  return (
    <div>
     <section className="Second-header d-flex">
       <p><i className="fa-regular fa-envelope mx-2"></i> ruralremedies196@gmail.com</p>
       <p><i className="fa-solid fa-location-dot mx-2 text-danger"></i>Sage University , Bhopal</p>
       <p>
        <a href="/"><i className="fa-brands fa-facebook-f text-white mx-2"></i></a> 
        <a href="/"><i className="fa-brands fa-instagram text-white mx-2"></i></a>
        <a href="/"><i className="fa-brands fa-twitter text-white mx-2"></i></a>
      </p>      
     </section>

      <section className="Home-main">
          <div className="right bg-transparent">
          <div className="title">
            <h1 className="natural">Natural</h1>
            <h1 className="natural">Herbal Remedies</h1>
            
            <h1 className="text-white organic" >100%</h1>
            <h1 className="text-white organic">Organic</h1>
            <div className="content d-flex">
             <p></p>
              <span className="mx-2 mt-4">
              Rural remedies epitomize a harmonious blend of nature's wisdom and human resilience, providing holistic healing solutions rooted in centuries-old knowledge. They celebrate the enduring efficacy of traditional practices, showcasing a sustainable approach to wellness deeply intertwined with community strength.
             </span>
            </div>
     </div>

        <div className="social">
           <a href="/" ><i className="fa-brands fa-facebook-f mx-2"></i></a> 
           <a href="/" ><i className="fa-brands fa-instagram mx-2"></i></a>
           <a href="/" ><i className="fa-brands fa-twitter mx-2"></i></a>
           <a href="/" ><i className="fa-brands fa-whatsapp mx-2"></i></a>  
        </div>
      </div>
       
      </section>

      <section className="We-are">

          <div className="we-are-intro">
            <h1>Herbal Remedies</h1>
            <h3 className="text-black">who we are</h3>
            <img src={img} alt="" />
          </div>

         <section className="d-flex">
           <div className="section-left">
                  <div className="section-left-title d-flex">
                     <p className="section-left-title-line"></p>
                      <span className="p-2 py-4">
                        <p className="m-0">We are amazing</p>
                        <h3 className="m-0">Remedies For All Problems</h3>
                      </span>
                  </div>
                  <div className="section-left-content">
                    <p className="px-4 section-left-content-ptag ">Rural home remedies rely on natural ingredients like herbs, embodying a deep understanding of herbal medicine. They are easy to prepare and often used for common health issues, reflecting a holistic approach to wellness.Explore our curated collection of rural remedy recipes, blending natural ingredients and time-honored techniques for holistic wellness</p>
                  </div>
             <div className="section-left-btn">
                 <span className="d-flex justify-content-evenly">
                  <p> <img className="mx-2" src={img5} alt="" />Genuine Remedies</p>
                  <p>  <img className="mx-2" src={img5} alt="" />Hand Made</p>
                 </span>

                 <span className="d-flex justify-content-evenly">
                  <p>  <img className="mx-2" src={img5} alt="" />Free Accessories</p>
                  <p>  <img className="mx-2" src={img5} alt="" />100% Organic</p>
                 </span>
                 <button className="btn mx-2">Read More</button>
             </div>
           </div>
           <div className="section-right d-flex">
               <img src={img3} alt="loading"/>
               <img className="img4" src={img4} alt="" />
           </div>
         </section>


      </section>

      <section className="categories">
           <div className="we-are-intro">
            <h1>Categories</h1>
            <h3 className="text-black">Herbs That Heal</h3>
            <img src={img} alt="" />
          </div> 
          <div className="categories-box">
               <div className="cards">

                <div className="card">
                  <img src={box1} alt="" />
                  <h4>Herbal Remedies</h4>
                  <p>Natural herbs offer diverse health benefits through traditional medicinal practices</p>
                </div>

                <div className="card">
                  <img src={box2} alt="" />
                  <h4>Herbal Supplement</h4>
                  <p>Herbal supplements augment health with natural ingredients for various wellness needs</p>
                </div>
                <div className="card">
                  <img src={box3} alt="" />
                  <h4>Herbal Teas</h4>
                 <p>Herbal teas soothe, nourish, and refresh with diverse flavors and benefits.</p>
                </div>
                <div className="card">
                  <img src={box4} alt="" />
                  <h4>Herbal Beauty</h4>
                   <p>Herbal beauty harnesses nature's gifts for radiant, nourished skin and hair.</p>
                </div>
                <div className="card">
                  <img src={box5} alt="" />
                  <h4>Herbal Health</h4>
                  <p>Herbal health promotes well-being through natural remedies and holistic practices.</p>
                </div>
                <div className="card">
                  <img src={box6} alt="" />
                  <h4>Herbal Nutrition</h4>
                   <p>Herbal nutrition enriches diets with natural, nutrient-rich ingredients for wellness</p>
                </div>
                <div className="card">
                  <img src={box7} alt="" />
                  <h4>Herbal Lifestyle</h4>
                  <p>Herbal lifestyle embraces nature, fostering wellness, balance, and sustainability practices.</p>
                </div>
                <div className="card">
                  <img src={box8} alt="" />
                  <h4>Herbal Wellness</h4>
                  <p>Herbal wellness promotes holistic health through natural remedies and practices.</p>
                </div>
               </div>
          </div>

      </section>

       <section className="testimonial">
       <div className="we-are-intro">
            <h1>Testimonial</h1>
            <h3 className="text-black">What client say</h3>
            <img src={img} alt="" />
        </div> 
        
        <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">

         <div className="carousel-inner">

      <div className="carousel-item active">

      <div className="testimonial-part1 d-flex">
          <p>
              <div className="testimonial-part1-img">
                  <img src={Ts1} alt=""/>
              </div>
               <span>The rural remedy website has been a game-changer for me, offering easy-to-follow recipes using local ingredients for holistic healing. <br /> ⭐⭐⭐⭐⭐</span>
               <br/>
               <section><span>~ Nicholas Tourtillott ~</span></section>
          </p>
          <p>
              <div className="testimonial-part1-img">
                  <img src={Ts2} alt=""/>
              </div>
               <span>I'm impressed by the variety of remedies on the site; each recipe feels like a well-kept secret passed down through generations. <br /> ⭐⭐⭐⭐⭐</span>
               <br/>
               <section><span>~ John Methot ~</span></section>
          </p>
          <p>
              <div className="testimonial-part1-img">
                  <img src={Ts3} alt=""/>
              </div>
               <span>Using the rural remedy website, I've discovered the power of nature's medicine cabinet and feel more connected to traditional healing practices. <br /> ⭐⭐⭐⭐⭐</span>
               <br/>
               <section><span>~ Elizabeth Cohen ~</span></section>
          </p>
      </div>

    </div>

      <div className="carousel-item">
      <div className="testimonial-part1 d-flex">
          <p>
              <div className="testimonial-part1-img">
                  <img src={img94} alt=""/>
              </div>
               <span>The simplicity and effectiveness of the remedies shared on the website make it a go-to resource for maintaining my family's health naturally. ⭐⭐⭐⭐⭐</span>
               <br/>
               <section><span>~Eles perry~</span></section>
          </p>
          <p>
              <div className="testimonial-part1-img">
                  <img src={img91} alt=""/>
              </div>
               <span>The website's emphasis on sustainability and accessibility makes it a valuable resource for anyone seeking natural health solutions. <br /> ⭐⭐⭐⭐⭐</span>
               <br/>
               <section><span>~Lucky Parmar~</span></section>
          </p>
          <p>
              <div className="testimonial-part1-img">
                  <img src={img92} alt=""/>
              </div>
                <span>Thanks to the rural remedy website, I've found effective remedies using everyday ingredients, saving both time and money on store-bought products. <br/> ⭐⭐⭐⭐⭐</span>
               <br/>
               <section><span>~Cristina~</span></section>
          </p>
          
          </div>
      </div>

      <div className="carousel-item">
      <div className="testimonial-part1 d-flex">
          <p>
              <div className="testimonial-part1-img">
                  <img src={img91} alt=""/>
              </div>
               <span>The website's emphasis on sustainability and accessibility makes it a valuable resource for anyone seeking natural health solutions. <br /> ⭐⭐⭐⭐⭐</span>
               <br/>
               <section><span>~Lucky Parmar~</span></section>
          </p>
          <p>
              <div className="testimonial-part1-img">
                  <img src={img92} alt=""/>
              </div>
                <span>Thanks to the rural remedy website, I've found effective remedies using everyday ingredients, saving both time and money on store-bought products. <br/> ⭐⭐⭐⭐⭐</span>
               <br/>
               <section><span>~Cristina~</span></section>
          </p>
          <p>
              <div className="testimonial-part1-img">
                  <img src={img93} alt=""/>
              </div>
               <span>As someone passionate about holistic wellness, I highly recommend the rural remedy website for its authentic and time-tested home remedies.⭐⭐⭐⭐⭐</span>
               <br/>
               <section><span>Ali Morshedlou</span></section>
          </p>
          </div>
      </div>

  </div> 

    <button className="carousel-control-prev controler-pre bg-dark"  type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>

    <button className="carousel-control-next controler-next bg-dark" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
      <span className="carousel-control-next-icon " aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>

  </div> 
       </section>

      <section className="top-remedy">
      <div className="we-are-intro">
            <h1>Top Remedies</h1>
            <h3 className="text-black">View top remedies</h3>   
            <img src={img} alt=""/> 
       </div>
       <div className="remedy-eg d-flex">

      <div className="top-remedy-cards">
       <p className="h1">Basil (tulsi)</p>
       <p className="p">One natural treatment for acidity is chewing a few Basil (tulsi) leaves after a meal. This not just works as an antacid as it helps the body absorb food but also prevents reflux and the formation of ulcers.</p>
       <button><a target="blank" href="https://svthw.org/20-home-remedies-everyone-should-know/">Read More</a></button>
     </div>

      <div className="top-remedy-cards">
        <p className="h1">clove</p>
      <p className="p">Sucking a piece of Clove after a meal helps in reducing acidity problem.</p>
      <button><a target="blank" href="https://svthw.org/20-home-remedies-everyone-should-know/">Read More</a></button>

     </div>

    <div className="top-remedy-cards">
       <p className="h1">Garlic</p>
       <p className="p">A flake of garlic swallowed with water taken empty stomach daily in the morning can be helpful in solving many stomach & gastric problems.</p>
       <button><a target="blank" href="https://svthw.org/20-home-remedies-everyone-should-know/">Read More</a></button>

    </div>

    <div className="top-remedy-cards">
       <p className="h1">Milk</p>
       <p className="p">A flake of garlic swallowed with water taken empty stomach daily in the morning can be helpful in solving many stomach & gastric problems.</p>
       <button><a target="blank" href="https://svthw.org/20-home-remedies-everyone-should-know/">Read More</a></button>

    </div>

      <div className="top-remedy-cards">
         <p className="h1">Cold&Fever Remedies</p>
         <p className="p">Mix 2 teaspoons of honey with equal quantity of ginger juice. The concoction helps to expectorate mucus, providing relief for the common cold, coughs and sore throat.</p>
         <button><a target="blank" href="https://svthw.org/20-home-remedies-everyone-should-know/">Read More</a></button>

     </div>

     <div className="top-remedy-cards">
        <p className="h1">Ayurveda cough syrup</p>
       <p className="p">Ayurveda cough syrup at home. Peel and chop six medium onions. Put the pieces in a container and add four tablespoons of honey. Cover and leave them in a water bath over low heat for two hours. Strain and take one tablespoon every three hours.</p>
       <button><a target="blank" href="https://svthw.org/20-home-remedies-everyone-should-know/">Read More</a></button>

     </div>

      <div className="top-remedy-cards">
      <p className="h1"> anemia or iron deficiency </p>
       <p className="p">A simple remedy for anemia or iron deficiency – Pound 3-4 soft dates with milk and add a little ghee in it. Eating this mixture will help to prevent Anemia.</p>
       <button><a target="blank" href="https://svthw.org/20-home-remedies-everyone-should-know/">Read More</a></button>

     </div>

      <div className="top-remedy-cards">
       <p className="h1">Home Remedy to Cure Dark Circles-</p>
       <p className="p">Tomato paste is one of the most effective remedies for dark circles. You can make it easily at home. Take one or two fresh tomatoes, one tablespoon of lemon juice and a pinch of gram flour and turmeric powder. Blend these ingredients nicely until they become a thick paste and apply it very gently around your eyes. Rinse it off gently with clean water after 10 or 20 minutes. Repeating this process twice or thrice every week will make your skin tone around your eyes lighter and will eventually make your dark circles go away completely.</p>
       <button><a target="blank" href="https://svthw.org/20-home-remedies-everyone-should-know/">Read More</a></button>

     </div>

       </div>

      </section>
       
   </div>
  )
}

export default Home
