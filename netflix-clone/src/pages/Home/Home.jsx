import React from 'react' 
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/banner"
import RowLst from '../../Components/Rows/RowList/RowLst';


const Home = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <RowLst/>
      <Footer/>
    </>
  )
}

export default Home
