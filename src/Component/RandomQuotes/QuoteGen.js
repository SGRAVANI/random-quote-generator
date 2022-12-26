import React, { useEffect, useState } from 'react'
import './QuoteGen.css'
export default function QuoteGen() {
    let [data,setData]=useState([]);
    let [color,setColor]=useState(randomColor())
    let[randomIndex,setRandomIndex]=useState(0);
    useEffect(()=>{
        fetch("https://type.fit/api/quotes")
        .then((data)=>
        {
            return data.json()
        })
        .then((data)=>{
       setData(data);
      //  console.log(data)
        })
    },[])
    function randomColor(){
        let r=parseInt(Math.random()*256);
        let g=parseInt(Math.random()*256);
        let b=parseInt(Math.random()*256);
        return `rgb(${r},${g},${b})`

    }
    function handleClick(){
        let index=parseInt(Math.random()*data.length)
        setRandomIndex(index)
        console.log(data[index],typeof data[index])
        setColor(randomColor())
        // for(let i=0;i<=10;i++)
        // {
        //     console.log(data[i])
        // }
       console.log("author:",data[index].author)
       console.log("quote:",data[index].text)
    
     //console("author",data[index].author)
     //console
    //   console("author",data[index].text)
    }

    function tweetToTwitter() {
      var encodedPhrase = encodeURIComponent(data[randomIndex].text);
      var url = "https://twitter.com/intent/tweet?text=" + encodedPhrase;
      window.open(url);
  };
 
  //   function postToTumblr() {
  //     var encodedPhrase = encodeURIComponent(data[randomIndex].text);
  //     var author=encodeURIComponent(data[randomIndex].author)
  //     var url = "https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=" + author+"content=" +encodedPhrase+"canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button";
  //     window.open(url);
  // };

    let r;
  return (
    <div style={{backgroundColor:color,transition:"all 1s ease"}} className="wrapper">
    <div id="quote-box" className='p-5' >
    <div className="text">
        <h1 className='text-center' style={{color:color}}><span className="fa fa-quote-left pe-3"></span>{r=data.length>0? data[randomIndex].text:""}</h1>
    </div>
    <div id="author" style={{color:color,textAlign:"right"}}><span  className='pe-3' >- {r=data.length>0? data[randomIndex].author:""}</span></div>
    <div className=" row ">
        <div className='col-6 '>
        {/* <div className="button-left"> */}
         <div className="text-left"> 
        {/* <a id="tweet-quote "  className='me-1 left-button button' title="Tweet this quote!" target="_top" href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22If%20you%20do%20what%20you%E2%80%99ve%20always%20done%2C%20you%E2%80%99ll%20get%20what%20you%E2%80%99ve%20always%20gotten.%22%20Tony%20Robbins"  style={{backgroundColor:color}}><i  className="fa fa-twitter" style={{color:"white",fontSize:'1.2rem'}}></i></a> */}
        <a id="tweet-quote "  className='me-1 left-button button' title="Tweet this quote!" target="_top" onClick={tweetToTwitter}  style={{backgroundColor:color}}><i  className="fa fa-twitter" style={{color:"white",fontSize:'1.2rem'}}></i></a>
        {/* </div> */}
        {/* <div> */}
        {/* <a id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" 
         href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Tony%20Robbins&amp;content=If%20you%20do%20what%20you%E2%80%99ve%20always%20done%2C%20you%E2%80%99ll%20get%20what%20you%E2%80%99ve%20always%20gotten.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button" 
        
        className='left-button button tumblr_share_button' style={{display:'inline-block',backgroundColor:color}}><i style={{color:"white",display:'inline-block',fontSize:'1.2rem'}} className="fa fa-tumblr"></i></a> */}
         </div> 
        </div>
        <div className='col-6 button'>
        
        <div className='text-right'>
        <button id="new-quote" style={{backgroundColor:color}} onClick={handleClick}>New Quote</button>
        {/* </div> */}
        </div>
        </div>
    </div>
   


    </div>
       

    </div>
  )
}
