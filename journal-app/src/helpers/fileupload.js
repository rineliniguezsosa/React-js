
export const fileupload = async(file) =>{
    const cloudurl = "https://api.cloudinary.com/v1_1/dukze43st/upload"

    const formData = new FormData(); //crea el objeto form data
    formData.append('upload_preset','react-journal') //calave,valor de el form
    formData.append('file',file)
}