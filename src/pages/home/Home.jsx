import Chart from "../../component/chart/Chart";
import FeaturedInfo from "../../component/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgeLg from "../../component/widgeLg/WidgeLg";
import WidgeSm from "../../component/widgeSm/WidgeSm";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        dataKey={"Active User"}
        grid
        title={"User Analytics"}
      />
      <div className="homeWidgets">
        <WidgeSm />
        <WidgeLg />
      </div>
    </div>
  );
}
