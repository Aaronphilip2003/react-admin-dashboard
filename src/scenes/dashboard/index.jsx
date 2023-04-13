import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import Header from "../../components/Header";
import Card from "../../components/Card";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card
          title="Card 1"
          description="Some content goes here."
          image="https://via.placeholder.com/150"
        />
        <Card
          title="Card 2"
          description="Some content goes here."
          image="https://via.placeholder.com/150"
        />
        <Card
          title="Card 3"
          description="Some content goes here."
          image="https://via.placeholder.com/150"
        />
        <Card
          title="Card 4"
          description="Some content goes here."
          image="https://via.placeholder.com/150"
        />
        <Card
          title="Card 5"
          description="Some content goes here."
          image="https://via.placeholder.com/150"
        />
        <Card
          title="Card 6"
          description="Some content goes here."
          image="https://via.placeholder.com/150"
        />
      </div>
    </div>
  );
};

export default Dashboard;
