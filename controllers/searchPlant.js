const { Router } = require("express");
const router = Router();
const axios = require("axios");

router.get("/:plant", async (req, res) => {
  try {
    const config = {
      headers: {
        Authorization: `${process.env.API_KEY}`,
      },
    };

    const response = await axios.get(
      `https://trefle.io/api/v1/plants/search?q=${req.params.plant}`,
      config
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});

router.get("/plant/:id", async (req, res) => {
  try {
    const config = {
      headers: {
        Authorization: `${process.env.API_KEY}`,
      },
    };

    const response = await axios.get(
      `https://trefle.io/api/v1/plants/${req.params.id}`,
      config
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
