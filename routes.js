const controller = require("./controller/controller");

module.exports = (app) => {
  //Set path for Upload File
  app.post("/MVC 1", async (req, res) => {
    const Latitude = req.body.Latitude;
    const Degrees = req.body.Degrees;
    const Longitude = req.body.Longitude;

    const { message,answer, error } = await new predictController().predict(
      Latitude,
      Degrees,
      Longitude,
    );

    //Check Error from Call Predict Function and Return Value
    if (error) {
      res.status(400).json({message:message,answer:answer});
    } else {
      res.status(200).json({message:message,answer:answer});
    }
  });
};
