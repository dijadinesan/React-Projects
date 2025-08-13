import React from "react";
import './ProfileCard.css'

function ProfileCard({name,role,hobby,image}){
    return(
        
        <div>            
                            <img src={image} alt="h" style={{width:"100px",height:"100px",borderRadius:"50%"}}/>
                            <h1>{name}</h1>
                            <p>{role}</p>
                            <p>Hobby:{hobby}</p>
                        
        </div>          

    );
}

export default ProfileCard;