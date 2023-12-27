import React ,{useEffect,useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Newsitem from './newsitem';
import "./Navbarcss.css"

// import '../App.css'


const Navbar = () => {

  const [input,setInput]=useState("")
  
  const [results,setResults]=useState([])
  const fetchData=(value)=>{
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=04631de072794e8680851c9e53c5bd75")
    .then((response)=> response.json())
    .then((json)=>{
      const results=json.articles.filter((user)=>{
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
  newsdiv.innerHTML=`<div class='row'>
  
  <div class='column one'>
    <div class='picture'>
      <img className='center' src=` + result.urlToImage +` alt=""/>
    </div>
    <div class='desc'>
      <h3>` + result.title + `</h3>
      <p>` + result.description + `</p>
    </div>
  </div>
  </div>`
 }

  return (
    <div>
    {/* <div className='sticky-top'>
      <nav className="navbar navbar-expand-lg " style={{backgroundColor:'orange'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/tests">Link</a>
        </li>
        
        
      </ul>
   
        <div>
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"
        value={input}
        onChange={(e)=> handleChange(e.target.value)}/>
        
        </div>
    </div>
  </div>
  
  
</nav>   

<div class="vertical-menu">

  {results.map(result=>{
        return(
          
        //  <a href={result.url}>{result.title}</a>

          <div onClick={() => handleClick(result)}>{result.title}</div>
        )
      })}
  
</div>


   </div> */}



<section className="py-5 header text-center">
<div className="container py-5 text-white " >
  <header className="py-5">
    <h1 className="display-4">THE AEROMODELLING CLUB</h1>
    <p className="font-italic mb-1">INDIAN INSTITUTE OF TECHNOLOGY ,INDORE</p>
    <p className="font-italic">by
      <a className="text-white" >
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
    <a className="navbar-brand" href="#">TAMC<i className=""></i></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={`/clubmem`}>club Members</a>
        </li>

        <li className="nav-item ">
          <a className="nav-link" href="/clubprojects">Projects</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/clubheads">club head</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/contacts">contact</a>
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
</div>
    
   
  )
}

export default Navbar