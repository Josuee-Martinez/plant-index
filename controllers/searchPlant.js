const { Router } = require("express");
const router = Router();
const axios = require("axios");

//Search for plant
router.get("/:species", async (req, res) => {
  try {
    const config = {
      headers: {
        Authorization: `${process.env.API_KEY}`,
      },
    };

    const response = await axios.get(
      `https://trefle.io/api/v1/species/search?q=${req.params.species}`,
      config
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});

//Plant pagination
router.get("/plant/:url", async (req, res) => {
  try {
    const config = {
      headers: {
        Authorization: `${process.env.API_KEY}`,
      },
    };

    const response = await axios.get(
      `https://trefle.io/${req.params.url}`,
      config
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});

//Single plant by ID
router.get("/speciesid/:id", async (req, res) => {
  try {
    const config = {
      headers: {
        Authorization: `${process.env.API_KEY}`,
      },
    };

    const response = await axios.get(
      `https://trefle.io/api/v1/species/${req.params.id}`,
      config
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
