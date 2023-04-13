import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import Iframe from 'react-iframe';

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  
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
