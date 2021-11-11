// import configOptions from "./config";
// import cloudinary from "cloudinary";
// const uploader = cloudinary.v2.uploader.upload;

// export default uploader;
export const imageUploader = async (allFiles: any) => {
    const finalData: any = []

    for (let i = 0; i < allFiles.length; i++) {
        if (
            allFiles[i].type === 'image/jpeg' ||
            allFiles[i].type === 'image/png'
        ) {
            const imageData = new FormData()
            imageData.append('file', allFiles[i])
            imageData.append('upload_preset', 'inovact_projects')
            imageData.append('cloud_name', 'khalnayak069')
            await fetch(
                'https://api.cloudinary.com/v1_1/khalnayak069/image/upload',
                {
                    method: 'post',
                    body: imageData,
                }
            )
                .then((response) => response.json())
                .then((data) => {
                    finalData.push({
                        name: allFiles[i].name,
                        url: data.secure_url,
                        mime_type: allFiles[i].type,
                    })
                })
        }
    }

    return finalData
}
