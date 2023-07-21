import "./featuredInfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenu</span>
        <div className="featuredMoneyContiner">
          <span className="featuredMoney">$2,122</span>
          <span className="featuredMoneyRate">
            -11.12
            <ArrowDownwardIcon className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContiner">
          <span className="featuredMoney">$4,122</span>
          <span className="featuredMoneyRate">
            -1.12
            <ArrowDownwardIcon className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContiner">
          <span className="featuredMoney">$1,122</span>
          <span className="featuredMoneyRate">
            +2.12
            <ArrowUpwardIcon className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">compare to last month</span>
      </div>
    </div>
  );
}
