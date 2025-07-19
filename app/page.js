import ExportedImage from "next-image-export-optimizer";

export default function Home() {
  return (

  <>
    {/* Header Start */}
 <div className="top-header" id="top-header">
  <div className="container text-center">
    <div className="row">
      <div className="col-md-12">
        <ExportedImage 
          unoptimized={true}
          src="/img/talha.jpg" 
          width={180}
          height={300}
          alt="Muhammad Talha"
          className="mx-auto d-block"
        />
      </div>
      <div className="col-md-12">
        <h1>I'm Muhammad Talha</h1>
      </div>
      <div className="col-md-12">
        <p>
          Web Designer, Web Developer, Front End Developer, Back End
          Developer, Apps Developer,
        </p>
        <h2 />
      </div>
    </div>
  </div>
</div>
{/* Header End */}




   {/* Nav Start */}
  <div className="header">
    <div className="container">
      <div className="logo pull-left">
        <h1>
          <a href="/">MyFolio</a>
        </h1>
      </div>
      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li>
            <a href="#top-header">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </nav>
      <nav className="nav social-nav pull-right d-none d-lg-inline">
        <a href="https://web.facebook.com/mano.talha.940" target="_blank">
          <i className="fa fa-facebook" />
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/muhammad-talha-54045a300/"
          target="_blank"
        >
          <i className="fa fa-linkedin" />
        </a>
      </nav>
    </div>
  </div>
  {/* Nav End */}
  
    {/* About Me Start*/}
  <div className="about" id="about">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 col-lg-4">
          <ExportedImage 
          unoptimized={true}
            src="/img/talha.jpg"
          width={350}
          height={465}
          alt="Muhammad Talha"
           className="img-fluid" />
        </div>
        <div className="col-md-6 col-lg-8">
          <header className="section-header">
            <h2>About Me</h2>
          </header>
          <h3>
            <strong>Name:</strong> Muhammad Talha
          </h3>
          <h4>
            <strong>Profession:</strong> Web Developer{" "}
          </h4>
          <p>
            i am a web developer with over 2<sup className="colorplus">+</sup>{" "}
            years of experience in creating dynamic and user-friendly websites.
            My expertise includes both front-end and back-end development,
            allowing me to build complete web solutions that meet client needs.
          </p>
          <p>
            I specialize in HTML, CSS, JavaScript, and frameworks such as React
            and Next.js, and back-end technologies like Node.js and Express.js,
            with a strong focus on responsive design and performance
            optimization. My goal is to deliver high-quality web applications
            that enhance user experience and drive business success.
          </p>
          <p>
            I have a proven track record of successfully completing projects on
            time and within budget. My attention to detail and commitment to
            excellence ensure that every website I create is not only functional
            but also visually appealing.
          </p>
          <a href="#contact"> Get in Touch</a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="skills">
            <h3>Front End Skills</h3>
            <div className="skill-name">
              <p>HTML</p>
              <p>85%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={85}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="skill-name">
              <p>CSS</p>
              <p>95%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={95}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="skill-name">
              <p> JavaScript</p>
              <p>80%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="skills">
            <h3>Back End Skills</h3>
            <div className="skill-name">
              <p>Node.js</p>
              <p>90%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={90}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="skill-name">
              <p>Express.js</p>
              <p>85%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={85}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="skill-name">
              <p>MySQL</p>
              <p>95%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={95}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About Me End*/}


    {/* Job Experience Start */}
  <div className="experience" id="experience">
    <div className="container">
      <header className="section-header">
        <h3>Job Experience</h3>
        <p>
          I have worked with various companies and clients, gaining valuable
          experience in web development.
        </p>
      </header>
      <div className="row">
        <div className="col-md-6">
          <div className="exp-column">
            <p className="exp-date">
              12-Mar-2023 <span>to</span> 30-Jun-2024
            </p>
            <h4 className="exp-company">Beta Byte technologies</h4>
            <h4 className="exp-designation">Web Developer</h4>
            <p className="exp-detail">
              work as a web developer, focusing on front-end development. I was
              responsible for creating responsive and user-friendly web
              applications, ensuring optimal performance and security.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="exp-column">
            <p className="exp-date">
              02-Feb-2024 <span>to</span> present{" "}
            </p>
            <h4 className="exp-company"> Selsla technologies</h4>
            <h4 className="exp-designation">Web Developer</h4>
            <p className="exp-detail">
              work as a web developer, focusing on both Front and back-end
              development. I was responsible for creating dynamic and
              interactive web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Job Experience End */}


 <div className="services" id="services">
    <div className="container">
      <header className="section-header">
        <h3>My Services</h3>
        <p>
          I offer a range of services to help you build and maintain your web
          presence. From design to development, I can assist you in creating a
          website that meets your needs.
        </p>
      </header>
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="single-service">
            <span />
            <div className="service-icon">
              <i className="fa fa-television" />
            </div>
            <h4>
              <a href="#">Web Design</a>
            </h4>
            <p>Creating visually appealing and user-friendly websites.</p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="single-service">
            <span />
            <div className="service-icon">
              {" "}
              <i className="fa fa-laptop" />{" "}
            </div>
            <h4>
              <a href="#">Web Development</a>
            </h4>
            <p>
              Building robust and scalable web applications using modern
              technologies.
            </p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="single-service">
            <span />
            <div className="service-icon">
              {" "}
              <i className="fa fa-android" />{" "}
            </div>
            <h4>
              <a href="#">Apps Development</a>
            </h4>
            <p>
              Creating high-quality mobile applications for Android platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Services End */}


    {/* Counter Start */}
  <div className="counters">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="counter">
            <div className="counter-icon-box">
              <i className="fa fa-calendar" />
            </div>
            <div className="number animateNumber" data-toggle="counter-up">
              {" "}
              <span>2</span>
            </div>
            <h4 className="font-weight">Years of Experience</h4>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="counter">
            <div className="counter-icon-box">
              <i className="fa fa-check" />
            </div>
            <div className="number animateNumber" data-toggle="counter-up">
              {" "}
              <span>10</span>
            </div>
            <h4 className="font-weight">Completed Projects</h4>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="counter">
            <div className="counter-icon-box">
              <i className="fa fa-users" />
            </div>
            <div className="number animateNumber" data-toggle="counter-up">
              {" "}
              <span>8</span>
            </div>
            <h4 className="font-weight">Total Clients</h4>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="counter">
            <div className="counter-icon-box">
              <i className="fa fa-heart" />
            </div>
            <div className="number animateNumber" data-toggle="counter-up">
              {" "}
              <span>3</span>
            </div>
            <h4 className="font-weight">Award Won</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Counter End */}


   {/* Portfolio Start */}
  <div className="portfolio" id="portfolio">
    <div className="container">
      <header className="section-header">
        <h3 className="section-title">My Portfolio</h3>
        <p>A showcase of my latest projects and work samples.</p>
      </header>
      <div className="row portfolio-container">
        <div className="col-lg-4 col-md-6 portfolio-item web-des">
          <div className="portfolio-wrap">
            <figure>
              <ExportedImage 
              src="img/portfolio-1.jpg" 
              className="img-fluid" alt=" Muhammad Talha" 
              unoptimized={true}
              width={350}
              height={218}
              />
              <a
                href="img/portfolio-1.jpg"
                data-lightbox="portfolio"
                data-title="Curabitur semper erat"
                className="link-preview"
                title="Preview"
              >
                <i className="fa fa-eye" />
              </a>
              <a href="#" className="link-details" title="More Details">
                <i className="fa fa-link" />
              </a>
              <h4 className="portfolio-title">
                Curabitur semper erat <span>Web Design</span>
              </h4>
            </figure>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item web-des">
          <div className="portfolio-wrap">
            <figure>
              <ExportedImage 
              src="/img/portfolio-2.jpg" className="img-fluid" alt="Muhammad Talha" unoptimized={true} width={350} height={218} />
              <a
                href="img/portfolio-2.jpg"
                className="link-preview"
                data-lightbox="portfolio"
                data-title="Maecenas a tempus tortor"
                title="Preview"
              >
                <i className="fa fa-eye" />
              </a>
              <a href="#" className="link-details" title="More Details">
                <i className="fa fa-link" />
              </a>
              <h4 className="portfolio-title">
                Maecenas a tempus tortor <span>Web Design</span>
              </h4>
            </figure>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item web-dev">
          <div className="portfolio-wrap">
            <figure>
              <ExportedImage 
              src="/img/portfolio-3.jpg" className="img-fluid" alt="Muhammad Talha" unoptimized={true} width={350} height={218} />
              <a
                href="img/portfolio-3.jpg"
                className="link-preview"
                data-lightbox="portfolio"
                data-title="Aliquam id sapien lorem"
                title="Preview"
              >
                <i className="fa fa-eye" />
              </a>
              <a href="#" className="link-details" title="More Details">
                <i className="fa fa-link" />
              </a>
              <h4 className="portfolio-title">
                Aliquam id sapien lorem <span>Web Development</span>
              </h4>
            </figure>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item web-dev">
          <div className="portfolio-wrap">
            <figure>
              <ExportedImage 
              src="/img/portfolio-4.jpg" 
              className="img-fluid" 
              alt="Muhammad Talha"
              unoptimized={true}
              width={350}
              height={218} />
              <a
                href="img/portfolio-4.jpg"
                className="link-preview"
                data-lightbox="portfolio"
                data-title="Quisque lectus mauris"
                title="Preview"
              >
                <i className="fa fa-eye" />
              </a>
              <a href="#" className="link-details" title="More Details">
                <i className="fa fa-link" />
              </a>
              <h4 className="portfolio-title">
                Quisque lectus mauris <span>Web Development</span>
              </h4>
            </figure>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item app-dev">
          <div className="portfolio-wrap">
            <figure>
              <ExportedImage 
              src="/img/portfolio-5.jpg" 
              className="img-fluid" 
              alt="Muhammad Talha"
              unoptimized={true}
              width={350}
              height={218} />
              <a
                href="img/portfolio-5.jpg"
                className="link-preview"
                data-lightbox="portfolio"
                data-title="Interdum et malesuada"
                title="Preview"
              >
                <i className="fa fa-eye" />
              </a>
              <a href="#" className="link-details" title="More Details">
                <i className="fa fa-link" />
              </a>
              <h4 className="portfolio-title">
                Interdum et malesuada <span>Apps Development</span>
              </h4>
            </figure>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item app-dev">
          <div className="portfolio-wrap">
            <figure>
              <ExportedImage 
              src="/img/portfolio-6.jpg" className="img-fluid" alt="Muhammad Talha" unoptimized={true} width={350} height={218} />
              <a
                href="img/portfolio-6.jpg"
                className="link-preview"
                data-lightbox="portfolio"
                data-title="Pellentesque lacus"
                title="Preview"
              >
                <i className="fa fa-eye" />
              </a>
              <a href="#" className="link-details" title="More Details">
                <i className="fa fa-link" />
              </a>
              <h4 className="portfolio-title">
                Pellentesque lacus <span>Apps Development</span>
              </h4>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio End */}

    {/* Contact Start */}
{/* Contact Start */}
<div className="contact" id="contact">
  <div className="container">
    <div className="section-header">
      <h3>Contact Me</h3>
      <p>Feel free to reach out to me for any inquiries or collaborations.</p>
    </div>
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="contact-info">
          <p>
            <i className="fa fa-user" /> Muhammad Talha
          </p>
          <p>
            <i className="fa fa-tag" />
            Web Developer
          </p>
          <p>
            <i className="fa fa-map-marker" />
            ....
          </p>
          <p>
            <i className="fa fa-envelope" />
            <a href="mailto:talharahman426@gmail.com">talharahman426@gmail.com</a>
          </p>
          <p>
            <i className="fa fa-phone" />
            <a href="tel:+923158077033">+92 3158077033</a>
          </p>
          <div className="social">
            <a href="https://web.facebook.com/mano.talha.940" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-talha-54045a300/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form">
          <form 
            action="https://formsubmit.co/talharahman426@gmail.com" 
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows={5}
                placeholder="Message"
                required
              />
            </div>
            <div>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Contact End */}

  {/* Contact End */}

    {/* Footer Start */}
  <div className="footer">
    <div className="container">
      <div className="copyright">
        <p>
          © Copyright <a href="/"> Coder boy</a>. All Rights
          Reserved
        </p>
        <p>
          Powered by <a href="/">Muhammad Talha</a>
        </p>
      </div>
    </div>
  </div>
  {/* Footer end */}

    {/* Back to Top */}
  <a href="#" className="back-to-top">
    <i className="fa fa-chevron-up" />
  </a>
  
  </>
  );
}
