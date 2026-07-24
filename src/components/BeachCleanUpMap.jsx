import {
 MapContainer,
 TileLayer,
 Marker,
 Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import "../styles/dashboard.css";


const locations=[

{
name:"Goa Beach Cleanup",
position:[15.2993,74.1240],
volunteers:"120+",
date:"15 August 2026"
},

{
name:"Mumbai Marine Drive",
position:[18.9440,72.8230],
volunteers:"200+",
date:"20 August 2026"
},

{
name:"Chennai Marina Beach",
position:[13.0500,80.2824],
volunteers:"150+",
date:"5 September 2026"
}

];


export default function BeachCleanupMap(){


return(

<section className="map-section">


<h1>
Beach Cleanup Locations 🌊
</h1>


<p>
Join upcoming ocean conservation events.
</p>



<div className="map-box">


<MapContainer

center={[20.5937,78.9629]}

zoom={5}

style={{
height:"500px",
width:"100%"
}}

>


<TileLayer

url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"

/>



{

locations.map((place,index)=>(


<Marker

key={index}

position={place.position}

>


<Popup>


<h3>
{place.name}
</h3>


<p>
👥 Volunteers:
{place.volunteers}
</p>


<p>
📅 Date:
{place.date}
</p>


<button>

Join Cleanup

</button>


</Popup>


</Marker>


))

}


</MapContainer>


</div>



</section>

)

}