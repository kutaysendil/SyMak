import React from "react";
import "../../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import r1 from "../pages/SyImg/proimg/1-150x150.jpeg";
import r11 from "../pages/SyImg/proimg/1-650x650.jpeg";
import r2 from "../pages/SyImg/proimg/2-150x150.jpeg";
import r22 from "../pages/SyImg/proimg/2-650x650.jpeg";
import r3 from "../pages/SyImg/proimg/3-150x150.jpeg";
import r33 from "../pages/SyImg/proimg/3-650x650.jpeg";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import { Typography } from "@material-ui/core";

export default function Products() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);

  return (
    <div>
      <div className="urunler"></div>
      <div style={{ background: "lightgray" }}>
        <Container>
          <Typography
            gutterBottom
            variant="h6"
            component="h3"
            style={{ textAlign: "center", fontSize: "2rem", color: "gray" }}
          >
            {" "}
            ÜRETİMLERİMİZ
          </Typography>
          <Gallery>
            <Grid
              container
              spacing={4}
              direction="direction"
              style={{ marginTop: "1%", paddingBottom: "1%" }}
            >
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r11} thumbnail={r1} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r1} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r22} thumbnail={r2} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r2} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
              <Grid item xs={6} md={3} xl={2} data-aos="fade-up">
                <Item original={r33} thumbnail={r3} width="650" height="650">
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={r3} alt="r" />
                  )}
                </Item>
              </Grid>
            </Grid>
          </Gallery>
        </Container>
      </div>
    </div>
  );
}
