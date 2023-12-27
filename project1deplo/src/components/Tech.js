import React , { useEffect, useState }from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Newsitem from './newsitem'
import "./Navbarcss.css"

const Tech = () => {



    const [articles, setArticles] = useState([])

  useEffect(() => {

    const getArticles = async () => {
      const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_354832adfb850bb2618843bef68de0f95c1ac&q=sports%20news&country=in&language=en&category=technology ')
      console.log(response)
      setArticles(response.data.results)
    }
    getArticles()
  }, [])


  const [input,setInput]=useState("")
  
  const [results,setResults]=useState([])
  const fetchData=(value)=>{
    fetch("https://newsdata.io/api/1/news?apikey=pub_354832adfb850bb2618843bef68de0f95c1ac&q=sports%20news&country=in&language=en&category=technology ")
    .then((response)=> response.json())
    .then((json)=>{
      const results=json.results.filter((user)=>{
        return value && user && user.title && user.title.toLowerCase().includes(value)
      })
      console.log(results);
      setResults(results)
    });

    
  }

 
  const handleChange=(value)=>{
    setInput(value)
    fetchData(value)
  }
  
 const handleClick=(result)=>{
  console.log("title from nav : "+result.title);
  let newsdiv=document.getElementById("news")
  newsdiv.innerHTML=`
  <div>

  <section class="py-2 header text-center ">
          <div class="container py-5 text-black " >
            <header class="py-5">
              <h1 class="display-4" style="display:inline">THE WORLD </h1>
              <h1 class="display-4" style="display:inline  ;color:red; background:Highlight;borderRadius:5px;padding-left:10px;padding-right:10px">NEWS</h1>
             
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
                  <li class="nav-item">
                    <a class="nav-link" href="/tech">techs</a>
                  </li>



                </ul>
              
              </div>
            </div>
          </nav>

        </header>


  

<div style="text-align:center"">
  <div class="card bg-dark text-light mb-3 d-inline-block my-3 px-2 py-2" style="width: 50rem;marginLeft:10px;marginRight:10px">
  <img src=` + result.image_url +` style="height:500px; width:500px;" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">` + result.title + `</h5>
    <p class="card-text">` + result.description + `</p>
    <a href="#" >visit site</a>
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
    <div id='news'>
      <section className="py-5 header text-center ">
          <div className="container py-5 text-black " >
            <header className="py-5">
              <h1 className="display-4" style={{display:"inline"}}>THE WORLD </h1>
              <h1 className="display-4" style={{display:"inline " ,color:"red" ,background:"Highlight",borderRadius:"5px",paddingLeft:"10px",paddingRight:"10px",paddingTop:"0px"}}>NEWS</h1>
           
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
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/about">About</a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link"  href={`/sports`}>Sports</a>
                  </li>

                  <li className="nav-item ">
                    <a className="nav-link" href="/entertainment">entertainment</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" style={{background:"Highlight", borderRadius:"10px"}} href="/tech">Techs</a>
                  </li>

                  
                  



                </ul>
                <div className="d-flex flex-column sim">


                  <form className="form-inline my-2 my-lg-0">


                    <Link to="/login" className="btn btn-secondary my-2 my-sm-0 ">
                      Admin Login
                    </Link>
                  </form>

                </div>
              </div>
            </div>
          </nav>

        </header>



        <form class="row domain-search bg-pbluet">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <h2 class="form-title">Find Your <strong>News Here</strong></h2>
                    <p>Search for your News domain now</p>
                </div>
                <div class="col-md-9">
                    <div class="input-group">
                        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"
                        value={input}
                        onChange={(e)=> handleChange(e.target.value)}/>
                        <span class="input-group-addon"><input type="submit" value="Search" class="btn btn-primary"/></span>
                    </div>


                    <div class="vertical-menu">

  {results.map(result=>{
        return(
          
        //  <a href={result.url}>{result.title}</a>

          <a href="#" style={{backgroundColor:"grey", borderRadius:"1px",color:"white"}} onClick={() => handleClick(result)}>{result.title}</a>
        )
      })}
  
</div>



                    <p>.com <strong>$8.95</strong>.net <strong>$7.95</strong>.org <strong>$9.95</strong>.club <strong>$0.99</strong></p>
                </div>
            </div>
        </div>
    </form>



        <div className='divarticles' style={{marginLeft:"auto",textAlign:"center"}}>
        {articles.map(article => {
        return (

          <Newsitem title={article.title}
            description={article.description}
            url={article.link}
            urlToImage={article.image_url} />

        )
      })}
      </div>


<section className="py-5 section-4">
        <div className="container py-5 text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>THE NEWS APP</h2>
              <p className="text-muted lead">Keeping up with the latest news is essential in todays world from current affairs to technological developments, staying informed makes all the difference.</p>
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

export default Tech

