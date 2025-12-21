
import Banner from "../layouts/Banner";
import Download from "../layouts/Download";
import Limetimeblog from "../layouts/Limetimeblog";
import Locations from "../layouts/Locations";
import Ourvehicles from "../layouts/Ourvehicles";
import Theapp from "../layouts/Theapp";
import Whylime from "../layouts/Whylime";

const Home = () => {
  return (
    <>

      <Banner />
      <Ourvehicles/>
      <Theapp/>
      <Locations/>
      <Whylime/>
      <Limetimeblog/>
      <Download/>
    </>
  );
};

export default Home;
