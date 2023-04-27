
export const fileupload = async(file) =>{
    if(!file){ throw new Error('No tenemos ningun archivo a subir')}

    const cloudurl = "https://api.cloudinary.com/v1_1/dukze43st/upload"

    const formData = new FormData(); //crea el objeto form data
    formData.append('upload_preset','react-journal') //calave,valor de el form
    formData.append('file',file)

    try {
        const req = await fetch(cloudurl,{method:'POST',body:formData})

        if(!req.ok){ throw new Error('No se pudo subir la imagen')}

        const resp = await req.json()

        return resp.secure_url;
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}