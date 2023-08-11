import Navbar from "../../components/Site/navbar/Navbar";
import Header from "../../components/Site/Header/Header";
import Footer from "../../components/Site/Footer/Footer";
import Gallery from "../../components/Site/gallery/gallery";
import Salle from "../../components/Site/Salle/Salle";

const SalleSeminaire = () => {
    return(
        <>
            <Navbar/>
            <Header/>
            <Salle/>
            <Gallery/>
            <Footer/>
        </>
    )
}
export default SalleSeminaire;
