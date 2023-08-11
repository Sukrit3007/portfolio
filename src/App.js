import HorizontalScrollingText from "./components/HorizontalScrollingText";
import About from "./pages/About/About";
import Footer from "./pages/Footer/Footer";
import FormPage from "./pages/FormPage/FormPage";
import Main from "./pages/Main/Main";
import Work from "./pages/Work/Work";


function App() {
  return (
    <div className="App" >
      <HorizontalScrollingText text ={'WELCOME TO MY PORTFOLIO WEBSITE, WHERE I SHOWCASE MY JOURNEY IN CRAFTING DIGITAL EXPERIENCES.'} />
      <Main/>
      <About/>
      <Work/>
      <FormPage/>
      <Footer/>
      <HorizontalScrollingText text={'THANK YOU FOR VISITING MY PORTFOLIO WEBSITE. I HOPE YOU ENJOYED EXPLORING MY WORK AND INSIGHTS.'} />
    </div>
  );
}

export default App;
 