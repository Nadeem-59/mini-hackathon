import BlueHeader from "../app/components/blue-header";
import Carausel from "../app/components/caraousel";
import Editors from "../app/components/editorspick";
import Navbar from "../app/components/navbar";
import ProductCard from "../app/components/products-card";
import Whitediv from "../app/components/white-dic";
import Footer from "./components/footer";
import GreenDiv from "./components/green-div";
import Lastdiv from "./components/lastdiv";



export default function Home(){
  return(
    <div>
      <BlueHeader/>
      <Navbar/>
      <Carausel/>
      <Editors/>
      <ProductCard/>
      <GreenDiv/>
      <Whitediv/>
      <Lastdiv/>
      <Footer/>
      
      
           
    </div>
  )
}