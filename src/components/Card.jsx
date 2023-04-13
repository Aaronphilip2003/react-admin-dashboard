import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-gray-400 p-4 rounded-lg">
      <img src={image} alt={title} className="mb-4" />
      <Typography variant="h6" className="text-black">{title}</Typography>
      <Typography variant="body1" className="text-black">{description}</Typography>
    </div>
  )
}

export default Card
