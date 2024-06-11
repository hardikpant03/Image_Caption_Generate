import React, { useState } from "react";
import "../index.css"
import "../topbar.css"
import back2 from "../background/back2.jpg"
import { extractTextFromImage } from "../utils/api";

function ImageCaptionGenerator(){
    const [imgFile , setImgFile] = useState();
    const [extractedText , setExtractedText] = useState();
    const [bool, setBool] = useState(false);
    const handleExtractText = async () =>{
        if(imgFile){
        setBool(true)
        const response = await extractTextFromImage(imgFile);
        setExtractedText(response.result_string)
        }
        else{
            window.alert("Set Image First")
        }
    }
    return ( 
            <div>
                {<div className="divtop" style={{ backgroundColor:"lightcyan" ,backgroundRepeat: "no-repeat", backgroundSize:"cover", height: 759, width: 1476 }}>
                <div className="topbarcontainer">
                    <span className="logo">Image Text Extractor</span>
                </div>
                    <div className="div1">
                        <div className="rightbar">

                                <h1 className="heading">
                                    Welcome to VocPix
                                </h1>

                            <h5 style={{ color: 'black', fontSize: "20px" }}>Let Images Speak <br />Upload an Image to get Text from Image!</h5>

                           

                            <input type="file" style={{color:"black"}} onChange={(e) => setImgFile(e.target.files[0])} />

                            
                            <div>
                                
                                <button className="btnGenerate" onClick={handleExtractText}>Extract Text</button>

                            </div>
                            
                            
                        </div>
                        {bool && <div style={{border:"2px Solid Black" ,fontSize:"20px",borderRadius:"25px", padding:"10px" , margin:"20px",
                            marginRight:"100px"
                            }}><span style={{color:"black" , padding :"3px"}}>{extractedText}</span></div>}
                    </div>
                </div>}
            </div>
);};

export default ImageCaptionGenerator;