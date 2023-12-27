import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Newsitem from './newsitem'
import "./Navbarcss.css"

const About = () => {
  return (
    <div>
       <section className="py-2 header text-center ">
          <div className="container py-5 text-black " >
            <header className="py-5">
              <h1 className="display-4" style={{display:"inline"}}>THE WORLD </h1>
              <h1 className="display-4" style={{display:"inline " ,color:"red" ,background:"Highlight",borderRadius:"5px",paddingLeft:"10px",paddingRight:"10px",paddingTop:"0px"}}>NEWS</h1>
              {/* <h1 className="display-4" style={{display:"inline" ,color:"red"}}>E</h1>
              <h1 className="display-4" style={{display:"inline" ,color:"red"}}>W</h1>
              <h1 className="display-4" style={{display:"inline" ,color:"red"}}>S</h1> */}
              <p className="font-italic mb-1">INDIAN INSTITUTE OF TECHNOLOGY ,INDORE</p>
              <p className="font-italic">by
                <a className="text-black" >
                  TKP
                </a>
              </p>
            </header>
          </div>
        </section>



        <header className="header sticky-top">
          <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
            <div className="wrapper">

            </div>
            <div className="container-fluid all-show">
              <a className="navbar-brand" href="#">TWN<i className=""></i></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">

                <li className="nav-item">
                    <a className="nav-link"  href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" style={{background:"Highlight", borderRadius:"10px"}} aria-current="page" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={`/sports`}>Sports</a>
                  </li>

                  <li className="nav-item ">
                    <a className="nav-link" href="/entertainment">entertainment</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/tech">Techs</a>
                  </li>

                  
                  



                </ul>
                <div className="d-flex flex-column sim">


                  <form className="form-inline my-2 my-lg-0">


                    <Link to="/login" className="btn btn-secondary my-2 my-sm-0 ">
                      Login
                    </Link>
                  </form>

                </div>
              </div>
            </div>
          </nav>

        </header>



        <section className="py-5 section-4">
        <div className="container py-5 text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>THE NEWS APP</h2>
              <p className="text-muted lead">Keeping up with the latest news is essential in todays world  from current affairs to technological developments, staying informed makes all the difference.
              In a world where information is constantly evolving, staying abreast of current events is more crucial than ever. Introducing THE WORLD NEWS, a dynamic news platform designed to revolutionize the way you consume information. Our commitment is simple: to provide you with timely, accurate, and engaging news that empowers you to make informed decisions.</p>
              <p className="text-muted lead">
              Navigating the news has never been easier. Our sleek and intuitive design ensures a seamless user experience, allowing you to explore stories effortlessly. Whether you're on your desktop, tablet, or smartphone, [Your Website Name] adapts to your preferences, ensuring you never miss a beat.
              </p>
              <p className="text-muted lead">
              We invite you to connect with us through our vibrant social media community.Connect with us across these platforms, and let's embark on a journey of discovery and understanding together. Together, we can amplify our voices and contribute to a more informed and connected world.
              </p>


              
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-center text-white footers">

        <div className="container p-4 pb-0">

          <section className="mb-4">

            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fa fa-facebook-f"></i></a>


            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fa fa-twitter"></i ></a>


            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fa fa-google"></i></a>


            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fa fa-instagram"></i></a>


            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fa fa-linkedin"></i></a>


            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fa fa-github"></i>
            </a>
          </section>

        </div>

        <div className="text-center p-3" >
          © 2023 Copyright:
          <a className="text-white" >TKP</a>
        </div>

      </footer>
    </div>
  )
}

export default About
