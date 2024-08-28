import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/FooterWrapper.scss";
function Footer() {
  return (
    <div className="footer-wraaper">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              minWidth: { xs: "100%", sm: "60%" },
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
              <Typography
                sx={{
                  fontSize: "36px",
                  padding: "12px 0",
                }}
                fontWeight={600}
              >
                Weather<span className="footer-logo">Hub</span>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", sm: "flex" },
              marginTop: "24px",
            }}
            className="footer-action"
          >
            <Typography>Home</Typography>
            <Typography>About</Typography>
            <Typography>Block</Typography>
            <Typography>FAQs</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: { xs: 4, sm: 4 },
            width: "100%",
            borderTop: "1px solid",
            borderColor: "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography color="rgba(255, 255, 255, 0.7)">
              Privacy Policy
            </Typography>
            <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Typography color="rgba(255, 255, 255, 0.7)">
              Terms of Service
            </Typography>
          </Box>
          <Stack direction="row" justifyContent="left" spacing={1} useFlexGap>
            <IconButton>
              <FaGithub className="icon" />
            </IconButton>
            <IconButton>
              <FaLinkedin className="icon gm" />
            </IconButton>
            <IconButton>
              <FaFacebook className="icon fb" />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}

export default Footer;
