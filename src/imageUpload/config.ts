import cloudinary from 'cloudinary'
// const cloudinary = require("cloudinary");
const configOptions = cloudinary.v2.config({
    cloud_name: 'khalnayak069',
    api_key: '267517331886631',
    api_secret: 'RGtJhnng6Uv43a9DGVXG0HQ2154',
})
console.log(configOptions)

export default configOptions
