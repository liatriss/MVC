
class Model {
  async predict(Latitude, Degrees, Longitude) {
    
    function station() {
      var x = Longitude;
      var y = Latitude;

      var a = Math.sqrt(x+y) //เอาค่าละ ลอง ที่ได้ มาคำนวณแบบพิธากอรัส
    }

    //ถ้าเข้าเงื่อนไข ก็แสดงผลว่าได้ศูนย์อะไร ตามตาราง
    try {
      if (Degrees == "N" && Latitude  && Longitude ) {
        return { message: "Complete", answer: "ลาดกระบัง (LKB)", error: false };
      }
      else if (Degrees == "N" && Latitude  && Longitude) {
        return { message: "Complete", answer: "เดลี (DL)", error: false };
      }
      else if (Degrees == "N" && Latitude  && Longitude) {
        return { message: "Complete", answer: "ลอนดอน (LDN)", error: false };
      }
      else if (Degrees == "N" && Latitude  && Longitude) {
        return { message: "Complete", answer: "ปารีส (PRS)", error: false };
      }
      else if (Degrees == "N" && Latitude  && Longitude) {
        return { message: "Complete", answer: "ซิดนีย์ (SDN)", error: false };
      }

      else if (Degrees == "N" && Latitude  && Longitude) {
        return { message: "Complete", answer: "นิวยอร์ก (NY)", error: false };
      }

      else if (Degrees == "N" && Latitude  && Longitude) {
        return { message: "Predict Complete", answer: "มาดากัสการ์ (MDG)", error: false };
      }

    } catch (error) {
      return { message: "Error to predict", answer: "", error: true };
    }

  }
}

module.exports = Model;
