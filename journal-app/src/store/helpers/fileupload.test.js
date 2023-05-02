import { fileupload } from "../../helpers/fileupload";


describe('Pruebas en fileupload.js',() => {

    test('debe se subir el archivo correctamente a cloudinary',async() => {
        const imgurl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWP9RJSzgEcQo4C_Os5Jj6ggHijm6Z72l1BA&usqp=CAU"

        const req = await fetch(imgurl)
        const blob = await req.blob()
        const file = new File([blob],'react')
        console.log(file)
    });
});