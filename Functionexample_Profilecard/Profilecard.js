import React from "react";
 function ProfileCard(){
const name='Dija Dinesan';
const hobby='Learning React JS';
const description ='Aspirinfg frontend Developer, loves codes and coffee';
return(
    <div className="profile-card">
        <h2>{name}</h2>
        <p><strong>Hobby: </strong>{hobby}</p>
        <p>{description}</p>

    </div>
)

 }
 export default ProfileCard;