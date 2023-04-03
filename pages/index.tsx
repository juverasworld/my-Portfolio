import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Main from "../components/Main"
// import Feature from "../components/Feature"
// import FeatureA from "../components/FeatureA"
import FeatureB from "../components/FeatureB"
import FeatureC from "../components/FeatureC"
// import FeatureD from "../components/FeatureD"
// import FeatureE from "../components/FeatureE"
// import FeatureF from "../components/FeatureF"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"
export default function Home(){
    return(
        <>
        <section>
            <Header/>
<Main/>
{/* <Feature/>
<FeatureA/> */}
<FeatureB/>
<FeatureC/>
{/* <FeatureD/>
<FeatureE/>
<FeatureF/> */}
<Testimonials/>
<Contact/>
<Footer/>
        </section>
        </>
    )
}