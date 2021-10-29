export const documentUploader = async (allFiles: any) => {
    console.log(allFiles)
    const finalData: any = []
    for (let i = 0; i < allFiles.length; i++) {
            console.log('it is an image')
            const docData = new FormData()
            docData.append('file', allFiles[i])
            docData.append('upload_preset', 'documents')
            docData.append('cloud_name', 'khalnayak069')
            await fetch(
                'https://api.cloudinary.com/v1_1/khalnayak069/raw/upload',
                {
                    method: 'post',
                    body: docData,
                }
            )
                .then((response) => response.json())
                .then((data) => {
                    finalData.push({
                        name: allFiles[i].name,
                        url: data.secure_url,
                        mime_type: allFiles[i].type,
                    })
                }).catch((err:any)=>{
                    console.log(err);
                })
    }

    return finalData
}