import React from 'react'
import image from "../Assets/image1.jpg"
import { Navigate, useNavigate,useNavigation } from "react-router-dom";


const Newsitem = ({title,description,url,urlToImage}) => {
    const navigate = useNavigate()
   
    const handleClickt=()=>{
        
        navigate("/items",title={title})
    }

    const handleClick=()=>{
        console.log("title from nav : ");
        let newsdiv=document.getElementById("news")
        newsdiv.innerHTML=`
        <div>
      
        <section class="py-2 header text-center ">
                <div class="container py-5 text-black " >
                  <header class="py-5">
                    <h1 class="display-4" style="display:inline">THE WORLD </h1>
                    <h1 class="display-4" class="display-4" style="display:inline  ;color:red; background:Highlight;borderRadius:5px;padding-left:10px;padding-right:10px">NEWS</h1>
                   
                    <p class="font-italic mb-1">INDIAN INSTITUTE OF TECHNOLOGY ,INDORE</p>
                    <p class="font-italic">by
                      <a class="text-black" >
                        TKP
                      </a>
                    </p>
                  </header>
                </div>
              </section>
      
      
              
              <header class="header sticky-top">
                <nav class="navbar navbar-expand-lg navbar-red navbar-dark">
                  <div class="wrapper">
      
                  </div>
                  <div class="container-fluid all-show">
                    <a class="navbar-brand" href="#">TWN<i className=""></i></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
      
                      
      
                        
                        <li class="nav-item">
                          <a class="nav-link" href="/">home</a>
                        </li>
      
      
      
                      </ul>
                    
                    </div>
                  </div>
                </nav>
      
              </header>
      
      
        
      
      <div style="text-align:center">
        <div class="card bg-dark text-light mb-3 d-inline-block my-5 px-5 py-5" style="width: 50rem;marginLeft:10px;marginRight:10px">
        <img src=` + urlToImage +` style="height:500px; width:500px;" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">` + title + `</h5>
          <p class="card-text">` + description + `</p>
         <a href=`+url+`> visit site</a>
        </div>
      </div>
      </div>
      
            
      <footer class="bg-dark text-center text-white footers">
      
      <div class="container p-4 pb-0">
      
        <section class="mb-4">
      
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fa fa-facebook-f"></i></a>
      
      
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fa fa-twitter"></i ></a>
      
      
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fa fa-google"></i></a>
      
      
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fa fa-instagram"></i></a>
      
      
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fa fa-linkedin"></i></a>
      
      
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fa fa-github"></i>
          </a>
        </section>
      
      </div>
      
      <div class="text-center p-3" >
        © 2023 Copyright:
        <a class="text-white" >TKP</a>
      </div>
      
      </footer>
      
        </div>`
       }
  return (
    // <div>
    //   <div>{title}</div>
    //   <img className='center'  style={{maxHeight:400,maxWidth:400}} src={urlToImage} />
    //   <div>{description}</div>
    // </div>

//     <div id="news">
//     <div class='row'>
  
//   <div class='column one'>
//     <div class='picture'>
//       <img className='center' src={urlToImage?urlToImage:image} alt=""/>
//     </div>
//     <div class='desc'>
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   </div>


  
//   </div>
//   </div>


<div class="card bg-dark text-light mb-3 d-inline-block my-3 px-2 py-2" style={{width: "18rem",marginLeft:"10px",marginRight:"10px"}} id='parts'>
  <img src={urlToImage?urlToImage:image}  style={{height:"200px", width:"270px"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title.slice(0,50)}...</h5>
    <p class="card-text">{description?description.slice(0,90):"description not available"}...</p>
    <a  onClick={() => handleClick()} class="btn btn-primary">View full NEWS</a>
    {/* <a  onClick={() => handleClickt()} class="btn btn-primary">View full NEWS</a> */}
  </div>
</div>



// {/* <div className="row">
//   <div className="column" >
//   <img className='' src={urlToImage} alt=""/>
//   <h3>{title}</h3>
//   <p>{description}</p>
//   </div>
  
// </div> */}



  )
}

export default Newsitem
