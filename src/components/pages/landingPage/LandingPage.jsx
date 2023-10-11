import React from "react";
import incedologo from "../../assets/logo.png"
import "./LandingPage.css";
import dashboardImg from "../../assets/hero-img-1 (1).png"
import userImg from "../../assets/testimonial.png"
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
  <div className="p-1 p-lg-2">
    <div className="overflow-x-hidden rounded-top-4 pt-2 pt-lg-4">
      <header>
        <div
          className="w-lg-75 mx-2 mx-lg-auto position-relative z-2 px-lg-3 py-1 shadow-5 rounded-3 rounded-lg-pill bg-light"
        >
          <nav className="navbar navbar-expand-lg navbar-dark p-0" id="navbar">
            <div className="container px-sm-0">
              <a className="navbar-brand d-inline-block w-lg-64" href="#"
                ><img
                  src={incedologo}
                  className="h-rem-10 logo-img"
                  alt="..."
                /> </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav gap-2 mx-lg-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link rounded-pill"
                      href="#howitworks"
                      aria-current="page"
                      >How it works</a
                    >
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link rounded-pill"
                      href="#whatourclientsays"
                      >Testimonials</a
                    >
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link rounded-pill"
                      href="#ourteamsec"
                      >Our Team</a
                    >
                  </li>
                 
                </ul>
                <div
                  className="navbar-nav align-items-lg-center justify-content-end gap-2 ms-lg-4 w-lg-64"
                >
                  <Link
                    className="nav-item nav-link rounded-pill d-none d-lg-block"
                    to="/login"
                    >Sign in
                  </Link>
                  <Link
                  id="get-start-btn"
                    to="/register"
                    className="btn btn-sm btn-white bg-dark-hover border-0 rounded-pill w-91 w-lg-auto mb-4 mb-lg-0 get-start-btn"
                    >Get started</Link
                  >
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div>
        <div
          className="pt-56 pb-10 pt-lg-56 pb-lg-0 mt-n40 position-relative gradient-bottom-right start-indigo middle-purple end-yellow"
        >
          <div className="container">
            <div className="row align-items-center g-10">
              <div className="col-lg-8">
                <h1 className="ls-tight fw-bolder display-3 text-white mb-5">
                  Successful investing is about managing risk, not avoiding it.
                </h1>
                <p className="w-xl-75 lead text-white">
                  ~ Benjamin Graham
                </p>
              </div>
              <div className="col-lg-4 align-self-end">
                <div className="hstack gap-3 justify-content-lg-end">
                </div>
              </div>
            </div>
            <div className="mt-10 d-none d-lg-block">
              <img src={dashboardImg} className="dash-img"/>
            </div>
          </div>
        </div>
       <section id="howitworks">
       <div
          className="mt-2  pt-lg-32 bg-light rounded-bottom-4 overflow-hidden position-relative z-1"
        >
          <div className="container mw-screen-xl">
            <div className="row">
              <div className="col-lg-6 col-md-10">
                <h5 className="h5 mb-5 text-uppercase text-primary">
                  How it works
                </h5>
                <h1
                  className="display-4 font-display text-black fw-bolder lh-tight mb-4"
                >
                  An investment in knowledge pays the best interest
                </h1>
                <p className="text-lg text-black text-opacity-75">
                Investment is traditionally defined as the "commitment of resources to achieve later benefits".
                </p>
              </div>
            </div>
            <div className="row g-6 g-lg-20 my-10">
              <div className="col-md-4 my-3">
                <div className="card shadow-none border-0">
                  <div className="card-body p-7">
                    <div className="mt-4 mb-7">
                      <div
                        className="icon icon-shape text-white bg-primary rounded-circle text-lg"
                      >
                        <i className="bi bi-regex"></i>
                      </div>
                    </div>
                    <div className="pt-2 pb-3">
                      <h5 className="h3 font-display fw-bold mb-3">
                        Created with the latest technologies
                      </h5>
                      <p className="text-muted">
                        We ensure our code is not just efficient and robust, but
                        also highly adaptable and intuitive for developers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-3">
                <div className="card shadow-none border-0">
                  <div className="card-body p-7">
                    <div className="mt-4 mb-7">
                      <div
                        className="icon icon-shape text-white bg-primary rounded-circle text-lg"
                      >
                        <i className="bi bi-person-workspace"></i>
                      </div>
                    </div>
                    <div className="pt-2 pb-3">
                      <h5 className="h3 font-display fw-bold mb-3">
                        Built by developers for developers
                      </h5>
                      <p className="text-muted">
                        You require not just a theme, but also exceptional tools
                        to streamline the building and customization process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-3">
                <div className="card shadow-none border-0">
                  <div className="card-body p-7">
                    <div className="mt-4 mb-7">
                      <div
                        className="icon icon-shape text-white bg-primary rounded-circle text-lg"
                      >
                        <i className="bi bi-stars"></i>
                      </div>
                    </div>
                    <div className="pt-2 pb-3">
                      <h5 className="h3 font-display fw-bold mb-3">
                        Made for great first impressions
                      </h5>
                      <p className="text-muted">
                        Our theme is lighter and faster compared to the majority
                        of themes available, delivering enhanced value for less.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-3">
                <div className="card shadow-none border-0">
                  <div className="card-body p-7">
                    <div className="mt-4 mb-7">
                      <div
                        className="icon icon-shape text-white bg-primary rounded-circle text-lg"
                      >
                        <i className="bi bi-regex"></i>
                      </div>
                    </div>
                    <div className="pt-2 pb-3">
                      <h5 className="h3 font-display fw-bold mb-3">
                        Created with the latest technologies
                      </h5>
                      <p className="text-muted">
                        We ensure our code is not just efficient and robust, but
                        also highly adaptable and intuitive for developers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-3">
                <div className="card shadow-none border-0">
                  <div className="card-body p-7">
                    <div className="mt-4 mb-7">
                      <div
                        className="icon icon-shape text-white bg-primary rounded-circle text-lg"
                      >
                        <i className="bi bi-person-workspace"></i>
                      </div>
                    </div>
                    <div className="pt-2 pb-3">
                      <h5 className="h3 font-display fw-bold mb-3">
                        Built by developers for developers
                      </h5>
                      <p className="text-muted">
                        You require not just a theme, but also exceptional tools
                        to streamline the building and customization process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-3">
                <div className="card shadow-none border-0">
                  <div className="card-body p-7">
                    <div className="mt-4 mb-7">
                      <div
                        className="icon icon-shape text-white bg-primary rounded-circle text-lg"
                      >
                        <i className="bi bi-stars"></i>
                      </div>
                    </div>
                    <div className="pt-2 pb-3">
                      <h5 className="h3 font-display fw-bold mb-3">
                        Made for great first impressions
                      </h5>
                      <p className="text-muted">
                        Our theme is lighter and faster compared to the majority
                        of themes available, delivering enhanced value for less.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </section>
        
        <section id="whatourclientsays">
        <div className="py-20 py-lg-20">
          <div className="container mw-screen-xl">
            <div className="row text-left mb-1">
              <div className="col-lg-6">
                <h1 className="ls-tight fw-bolder display-5 mb-4">
                  What our clients says
                </h1>
                <p className="lead ">
                  Checkout reviews of our clients
                </p>
              </div>
            </div>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-6 justify-content-center"
            >
             <div class="bg-gray-50 mt-0">
<div class="max-w-screen-2xl mx-auto lg:p-16 p-8 flex lg:flex-row flex-col justify-center my-testimony">
<div class="lg:w-[15%] w-full">
<img class="w-full" src={userImg} alt="Testimonial" loading="lazy" />
</div>
<div class="lg:w-[50%] w-full mt-6 lg:mt-0">
<p class="text-lg italic text-center lg:text-left mb-4">"Would happily share this with anyone as a viable resource for all things investing."</p>
<p class="font-bold lg:mb-4 mb-8 text-center lg:text-left">- Jeff Rose, CFP®</p>
<div class="flex lg:flex-row flex-col lg:items-center">


</div>
</div>
</div>
</div>
             <div class="bg-gray-50 mt-0">
<div class="max-w-screen-2xl mx-auto lg:p-16 p-8 flex lg:flex-row flex-col justify-center my-testimony">
<div class="lg:w-[15%] w-full">
<img class="w-full" src={userImg} alt="Testimonial" loading="lazy" />
</div>
<div class="lg:w-[50%] w-full mt-6 lg:mt-0">
<p class="text-lg italic text-center lg:text-left mb-4">"Would happily share this with anyone as a viable resource for all things investing."</p>
<p class="font-bold lg:mb-4 mb-8 text-center lg:text-left">- Jeff Rose, CFP®</p>
<div class="flex lg:flex-row flex-col lg:items-center">


</div>
</div>
</div>
</div>
             <div class="bg-gray-50 mt-0">
<div class="max-w-screen-2xl mx-auto lg:p-16 p-8 flex lg:flex-row flex-col justify-center my-testimony">
<div class="lg:w-[15%] w-full">
<img class="w-full" src={userImg} alt="Testimonial" loading="lazy" />
</div>
<div class="lg:w-[50%] w-full mt-6 lg:mt-0">
<p class="text-lg italic text-center lg:text-left mb-4">"Would happily share this with anyone as a viable resource for all things investing."</p>
<p class="font-bold lg:mb-4 mb-8 text-center lg:text-left">- Jeff Rose, CFP®</p>
<div class="flex lg:flex-row flex-col lg:items-center">


</div>
</div>
</div>
</div>

            
            </div>
          </div>
        </div>
        </section>


      </div>

<section id="ourteamsec" className="ourteamsec py-20 py-lg-20">

<div class="container">
            <h1 class="display-4">Our Team</h1>
</div>


<div class="container">
    <div class="row text-center our-team-sec">

        <div class="col-xl-3 col-sm-6 my-10 ">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">Manuella Nevoresky</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-facebook'></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-twitter' ></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-instagram-alt' ></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-linkedin' ></i></a></li>
                </ul>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 my-10 ">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-2.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">Samuel Hardy</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-facebook'></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-twitter' ></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-instagram-alt' ></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-linkedin' ></i></a></li>
                </ul>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 my-10 ">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-1.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">Tom Sunderland</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-facebook'></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-twitter' ></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-instagram-alt' ></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-linkedin' ></i></a></li>
                </ul>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 my-10 ">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-facebook'></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-twitter' ></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-instagram-alt' ></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-linkedin' ></i></a></li>
                </ul>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 my-10 ">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-facebook'></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-twitter' ></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-instagram-alt' ></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-linkedin' ></i></a></li>
                </ul>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 my-10 ">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-facebook'></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-twitter' ></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-instagram-alt' ></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-linkedin' ></i></a></li>
                </ul>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 my-10 ">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-facebook'></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-twitter' ></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-instagram-alt' ></i></a></li>
                    <li class="list-inline-item"><a href="#" class="social-link"><i class='bx bxl-linkedin' ></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</section>



      <footer>
        <div className="container mw-screen-xl">

          <div className="row">
            <div className="col-auto">
              <p className="text-sm text-muted">
                &copy; Copyright 2023 Webpixels - Build like a PRO.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
  );
}
