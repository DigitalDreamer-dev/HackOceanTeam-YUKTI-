import { useState } from "react";
import { FaEnvelope, FaCheckCircle } from "react-icons/fa";

import "../styles/forms.css";


export default function Newsletter(){

const [email,setEmail]=useState("");

const [subscribed,setSubscribed]=useState(false);



const handleSubmit=(e)=>{

e.preventDefault();


if(email){

setSubscribed(true);

}

};



return(

<section className="newsletter-section">


<div className="newsletter-card">


{
subscribed ?

(

<div className="subscribe-success">

<FaCheckCircle/>

<h2>
Thank You For Joining 🌊
</h2>

<p>
You will receive ocean conservation updates.
</p>

</div>

)

:

(

<>

<FaEnvelope className="newsletter-icon"/>


<h2>
Join Ocean Updates
</h2>


<p>
Get conservation news, cleanup events
and marine life stories.
</p>



<form onSubmit={handleSubmit}>


<input

type="email"

placeholder="Enter your email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

required

/>


<button>
Subscribe
</button>


</form>

</>

)

}



</div>


</section>

)

}