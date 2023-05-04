import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import CardContents from "./CardContents";
import cryptoData from "./cryptoData";
import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const CryptoCards = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  React.useEffect(() => {
    handleLoading();
  }, []);

  const [value, setValue] = React.useState(0);
  const [query, setQuery] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const filteredCryptoData = cryptoData.filter((crypto) =>
    crypto.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <React.Fragment>
      <Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography sx={{ color: "rgb(107, 114, 128)" }} variant="subtitle">
            Buy any crypto index anytime, anywhere.
          </Typography>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search for a token"
              inputProps={{ "aria-label": "Search" }}
              onChange={handleSearch}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>

        {isLoading ? (
          <Box>Loading...</Box>
        ) : (
          <Grid container spacing={3}>
            {filteredCryptoData.map((crypto, id) => (
              <Grid key={id} item xs={12} sm={6} md={4}>
                <CardContents
                  cryptoTitle={crypto.title}
                  cryptoChange={crypto.change}
                  topbarBG1={crypto.color1}
                  topbarBG2={crypto.color2}
                  topbarBG3={crypto.color3}
                  img1={crypto.img1}
                  img2={crypto.img2}
                  img3={crypto.img3}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </React.Fragment>
  );
};

export default CryptoCards;
