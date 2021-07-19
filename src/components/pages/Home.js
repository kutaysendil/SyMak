import React from "react";
import "../../App.css";
import { Button, Container, Grid } from "@material-ui/core";
import kelebek from "./SyImg/ref/kelebek.png";
import bellona from "./SyImg/ref/bellonma.jpeg";
import adore from "./SyImg/ref/adoreLogo.png";
import yatas from "./SyImg/ref/yatas_grup_logo.jpg";

export default function Home() {
  return (
    <div className="home">
      <div className="content">
        <p className="contenty">
          Çelik Konstrüksiyon
          <br />
          <br />
          Mobilya Iskeleti
        </p>
      </div>
      <Container>
        <div className="content2">
          <h4>BİZ KİMİZ ?</h4>
          <h5>SY Makina - Çelik Konstrüksiyon</h5>
          <div>
            <p>
              firmamiz... Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Suscipit a magnam adipisci et provident deleniti
              perspiciatis doloremque vero eaque soluta blanditiis iste non cum
              error quisquam omnis, tempora repellendus expedita animi
              reiciendis porro neque quia dolor! Nobis, in? Distinctio sapiente
              ducimus eaque sunt nihil cumque assumenda doloremque quo odit
              dolore. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Soluta laboriosam blanditiis, reiciendis nulla iste impedit
              aperiam neque illum, et nesciunt sit, error suscipit sapiente non
              deleniti natus cumque? Qui, quibusdam!
            </p>
          </div>

          <Button
            className="buton"
            fullWidth="true"
            variant="outlined"
            href="/hakkimizda"
            color="primary"
            size="large"
          >
            Daha fazla...
          </Button>
        </div>
      </Container>
      <div className="content3">
        <p className="content3p"> Bize Ulaşmak ve Teklif Almak İçin</p>
        <Button
          variant="contained"
          href="/iletisim"
          color="primary"
          size="large"
          className="content3b"
        >
          {" "}
          Tıklayın
        </Button>
      </div>
      <div className="content4">
        <Container>
          <h3>İŞ REFERANSLARIMIZ</h3>
          <p>
            SY Makina Ltd. Şti. olarak çok farklı sektörlerdeki firmalara
            çeşitli hizmetler sunmuş ve bu alanda kurumsal çözümler üretmeye
            devam etmekteyiz.
          </p>

          <Grid container spacing={4}>
            <Grid item xs={6} md={3}>
              <img
                src={kelebek}
                style={{ width: "100%", height: "150px" }}
                alt="kelebek"
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <img
                src={bellona}
                style={{ width: "100%", height: "150px" }}
                alt="kelebek"
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <img
                src={adore}
                style={{ width: "100%", height: "150px" }}
                alt="kelebek"
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <img
                src={yatas}
                style={{ width: "100%", height: "150px" }}
                alt="kelebek"
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            href="/referanslar"
            color="primary"
            size="large"
            style={{
              marginTop: "40px",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            {" "}
            Tüm Referanslarımız
          </Button>
        </Container>
      </div>
    </div>
  );
}
