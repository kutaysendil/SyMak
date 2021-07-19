import React from "react";
import "../../App.css";
import MediaQuery from "react-responsive";
import {
  Grid,
  Container,
  Button,
  InputLabel,
  TextField,
  Box,
} from "@material-ui/core";
import emailjs from "emailjs-com";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ytciipe",
        "template_0fmae1d",
        e.target,
        "user_NHrU4Oz02v5REJass9DD3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div style={{ background: "lightgray" }}>
      <div className="contact">
        <h4>İLETİŞİM</h4>
        <p>Firmamıza ait iletişim bilgilerine bu sayfadan ulaşabilirsiniz. </p>
      </div>
      <div>
        <Container>
          <Grid
            direction="column"
            alignContent="center"
            justify="center"
            alignItems="center"
            container
            style={{ marginTop: "5%", marginBottom: "5%" }}
          >
            <MediaQuery minDeviceWidth={941} maxDeviceWidth={3080}>
              <iframe
                title="harita"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24459.638632400893!2d32.739152!3d39.97594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2e7d61e0cccb27bc!2sSY%20Makine!5e0!3m2!1str!2str!4v1618561344251!5m2!1str!2str"
                width="900"
                height="500"
                allowFullScreen=""
                loading="lazy"
                style={{ border: "0" }}
              ></iframe>
            </MediaQuery>
            <MediaQuery minDeviceWidth={240} maxDeviceWidth={940}>
              <iframe
                title="harita"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24459.638632400893!2d32.739152!3d39.97594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2e7d61e0cccb27bc!2sSY%20Makine!5e0!3m2!1str!2str!4v1618561344251!5m2!1str!2str"
                width="300"
                height="150"
                allowFullScreen=""
                loading="lazy"
                style={{ border: "0" }}
              ></iframe>
            </MediaQuery>
          </Grid>
          <Grid
            direction="column"
            alignContent="center"
            alignItems="center"
            justify="center"
            container
            style={{ textAlign: "center" }}
          >
            <Box>
              <Box component="h2" m={2} style={{ fontSize: "3em" }}>
                İletişim Formu
              </Box>
              <Box component="h4" m={2} style={{ fontSize: "1.4em" }}>
                Mesaj Bırakın Sizi Arayalım
              </Box>
            </Box>
          </Grid>
          <form onSubmit={sendEmail}>
            <Grid>
              <InputLabel>
                <TextField
                  label="Ad Soyad"
                  multiline
                  rowsMax={12}
                  variant="outlined"
                  name="name"
                  fullWidth
                  required
                  style={{
                    background: "#4c6a91",
                    opacity: "..9",
                    marginBottom: "10px",
                  }}
                />
              </InputLabel>
            </Grid>
            <Grid item>
              <InputLabel>
                <TextField
                  label="Email"
                  multiline
                  rowsMax={4}
                  variant="outlined"
                  name="email"
                  fullWidth
                  required
                  style={{
                    background: "#4c6a91",
                    opacity: ".9",
                    marginBottom: "10px",
                  }}
                />
              </InputLabel>
            </Grid>
            <Grid item>
              <InputLabel>
                <TextField
                  label="Telefon Numarası"
                  multiline
                  rowsMax={4}
                  variant="outlined"
                  name="phone"
                  fullWidth
                  required
                  style={{
                    background: "#4c6a91",
                    opacity: ".9",
                    marginBottom: "10px",
                  }}
                />
              </InputLabel>
            </Grid>

            <Grid item>
              <InputLabel>
                <TextField
                  id="outlined-multiline-static"
                  label="Mesaj"
                  multiline
                  rows={4}
                  variant="outlined"
                  name="message"
                  required
                  style={{
                    background: "#4c6a91",
                    opacity: ".9",
                    marginBottom: "10px",
                  }}
                  fullWidth
                />
              </InputLabel>
            </Grid>
            <Grid container direction="column" style={{ marginTop: "2%" }}>
              <Button variant="contained" color="primary" type="submit">
                Gönder
              </Button>
            </Grid>
          </form>
          <br />
          <hr />
          <div
            style={{ marginTop: "20px", padding: "10px", fontSize: "1.2em" }}
          >
            <h3 style={{ fontSize: "1.2em" }}>İLETİŞİM BİLGİLERİ</h3>
            <br />
            <div>
              <p style={{ marginTop: "2px" }}>
                <span style={{ fontWeight: "bold" }}>FABRİKA: </span>
                06374 Ostim Osb/Yenimahalle/Ankara
              </p>
              <p style={{ marginTop: "2px" }}>
                {" "}
                <span style={{ fontWeight: "bold" }}> TEL:</span> +90 312 385 76
                93
              </p>
              <p style={{ marginTop: "2px" }}>
                {" "}
                <span style={{ fontWeight: "bold" }}>FAX:</span> +90 312 385 76
                93
              </p>
              <p style={{ marginTop: "2px" }}>
                {" "}
                <span style={{ fontWeight: "bold" }}>E-MAIL:</span>{" "}
                info@symakina.com
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
