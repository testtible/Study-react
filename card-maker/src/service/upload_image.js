// require("dotenv").config();
import axios from 'axios';

class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "hmo8g4jf");
    console.log("data!!", data);
    // const res = await fetch(
    //   "https://api.cloudinary.com/v1_1/di5pogsec/upload",
    //   {
    //     method: 'POST',
    //     body: data,
    //   }
    // )
    // return await res.json();
    const res = await axios
      .post("https://api.cloudinary.com/v1_1/di5pogsec/upload", data)
      .then(res => res.data);

    console.log(res);
    return res;
  }
}


export default ImageUploader;


// const cloudinary = require("cloudinary").v2;
// console.log(cloudinary.config().cloud_name);

// cloudinary.uploader.upload("./images/logo.png", {
//   resource_type: "images",
// })