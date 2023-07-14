import Hero from "../../components/Hero/Hero";
import HowAppWorks from "../../components/HowAppWorks/HowAppWorks";
import DownloadApp from "../../components/DownloadApp/DownloadApp";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <HowAppWorks />
        <DownloadApp />
      </main>
    </>
  );
};

export default Home;
