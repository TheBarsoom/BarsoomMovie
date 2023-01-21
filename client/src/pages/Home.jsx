import React from 'react'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import tmdbConfigs from "../api/configs/tmdb.config";
import { HeroSlide, Container, MediaSlide } from "../components";
import { Box } from "@mui/material";
import uiConfigs from "../configs/ui.configs";

const Home = () => {
  return (
    <>
          <HeroSlide
        mediaType={tmdbConfigs.mediaType.movie}
        mediaCategory={tmdbConfigs.mediaCategory.popular}
      />
    </>
  )
}

export default Home
