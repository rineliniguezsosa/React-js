import { fileupload } from "../../helpers/fileupload";
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({ 
    cloud_name: 'dukze43st', 
    api_key: '334472128782191', 
    api_secret: 'uDufgooi7dzi7HZw20Be54fGCrU',
    secure: true
});

describe('Pruebas en fileupload.js',() => {

    test('debe se subir el archivo correctamente a cloudinary',async() => {
        const imgurl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWP9RJSzgEcQo4C_Os5Jj6ggHijm6Z72l1BA&usqp=CAU"

        const req = await fetch(imgurl)
        const blob = await req.blob()
        const file = new File([blob],'react.jpg')
        

        const url = await fileupload(file)

        expect(typeof url).toBe('string');
    });

    test('debe retonar null',async() => { 
        const file = new File([],'react.jpg')
        const url = await fileupload(file)
        expect(url).toBe(null);
    })
});