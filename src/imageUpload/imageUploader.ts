// import configOptions from "./config";
import cloudinary from "cloudinary";
const uploader = cloudinary.v2.uploader.upload;

export default uploader;