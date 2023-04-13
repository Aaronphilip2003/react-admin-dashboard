import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../data/mockGeoFeatures";
import { tokens } from "../theme";
import { mockGeographyData as data } from "../data/mockData";
import Iframe from 'react-iframe';

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div>
  <Iframe
  src="/maps/info.html"
  width="75%"
  height="550px"
  width="1225px"
  frameBorder="0"/>
    </div>
  );
};

export default GeographyChart;
