const model = require("../model/model");

class Controller {
  async predict(Latitude, Degrees, Longitude) {
    //Call Function from Model
    //ค่าที่เก็บ
    const { message,answer, error } = await new predictModel().predict(
      Latitude, 
      Degrees, 
      Longitude
    );

    return { message: message, answer:answer,error: error };
  }
}

module.exports = Controller;
