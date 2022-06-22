const express = require("express");
const userInforTemplate = require("../Models/userInfo");
const router = express.Router();

router.get("/blogpost", (req, res) => {
  userInforTemplate.find((err, userInfos) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(userInfos);
    }
  });
});

router.post("/blogpost", (req, res) => {
  const userInfo = new userInforTemplate({
    name: req.body.name,
    country: req.body.country,
    mint_amount: req.body.mint_amount,
    user_address: req.body.user_address,
  });

  userInfo
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
