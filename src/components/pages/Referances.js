import React from "react";
import {
  Grid,
  Container,
  Typography,
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import r1 from "./SyImg/ref/adoreLogo.png";
import r2 from "./SyImg/ref/bellonma.jpeg";
import r3 from "./SyImg/ref/istikballogo.png";
import r4 from "./SyImg/ref/kelebek.png";
import r5 from "./SyImg/ref/yatas_grup_logo.jpg";
import { CardHeader } from "@material-ui/core";

const Referances = () => {
  return (
    <div>
      <div className="ref"></div>
      <Container style={{ marginBottom: "20px " }}>
        <Typography
          color="textPrimary"
          component="h2"
          style={{
            textAlign: "center",
            fontSize: "2.5em",
            marginBottom: "1.5em",
          }}
        >
          Referanslarımız
        </Typography>
        <Grid container direction="row" spacing={8}>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardActionArea>
                <CardHeader title="Adore Mobilya" />
                <CardMedia component="img" image={r1} height="250" />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Seri üretim yatak iskeleti
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardActionArea>
                <CardHeader title="Bellona" />
                <CardMedia component="img" image={r2} height="250" />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Seri üretim koltuk iskeleti
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardActionArea>
                <CardHeader title="İstikbal" />
                <CardMedia component="img" image={r3} height="250" />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Seri üretim sandalye iskeleti
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardActionArea>
                <CardHeader title="Kelebek Mobilya" />
                <CardMedia component="img" image={r4} height="250" />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Seri üretim baza iskeleti
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardActionArea>
                <CardHeader title="Yataş Grup" />
                <CardMedia component="img" image={r5} height="250" />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Seri üretim masa iskeleti
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Referances;
