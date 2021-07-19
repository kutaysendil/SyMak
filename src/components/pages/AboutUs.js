import React from "react";
import "../../App.css";
import {
  Grid,
  Container,
  Typography,
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import worker from "./SyImg/hakk/spencer-davis-SVfXlChg9HI-unsplash.jpg";
import f1 from "./SyImg/hakk/calculaotr.jpg";
import f2 from "./SyImg/hakk/iskelet.jpg";
import f3 from "./SyImg/hakk/kalite.jpg";
import f4 from "./SyImg/hakk/kargo.jpg";

export default function AboutUs() {
  return (
    <div>
      <div className="about">
        <h3>SY MAKINA HAKKINDA</h3>
      </div>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <img
              src={worker}
              alt="worker"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <h4 className="hakkh">SY MAKİNA KİMDİR ?</h4>
            <p className="hakkp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              explicabo odio aliquid illum ut aut saepe et, nobis impedit
              commodi, in recusandae ratione corporis distinctio tempore quod
              cupiditate beatae dolore! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Commodi, labore repellendus nesciunt quod
              asperiores in id. Veniam quo laborum accusantium porro sequi
              mollitia et iusto nam nemo sit officia aut commodi beatae,
              cupiditate rem nisi tempora praesentium quidem sed excepturi
              corrupti architecto dolorem in at. Ducimus tempora excepturi natus
              veritatis! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Dolores iusto, cupiditate temporibus ab consequatur
              accusantium a obcaecati, perferendis beatae, error soluta debitis
              commodi ipsam. Officiis consectetur aliquid labore veritatis, unde
              illum itaque nemo error nihil distinctio quia, nostrum commodi
              iste voluptates temporibus ratione.
            </p>
          </Grid>
        </Grid>
        <Typography
          variant="h3"
          style={{ margin: "20px 0 " }}
          className="hakkd"
        >
          Bazı Değerlerimiz
        </Typography>
        <Grid
          container
          direction="row"
          justify="flex-start"
          spacing={4}
          style={{ marginBottom: "20px" }}
        >
          <Grid item xs={6} md={3}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={f1} height="200" />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">
                    Uygun Maliyet
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={f2} height="200" />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">
                    Hassas Üretim
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={f3} height="200" />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">
                    Yüksek Kalite
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={f4} height="200" />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">
                    Hızlı Teslimat
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
