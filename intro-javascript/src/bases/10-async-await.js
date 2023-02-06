
const getImage = async() =>{
    try{
        const apikey = 'F8OVeoJwy53KS0TI8S4VBdpmemu9QrXx';
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}`;
        const resp = await fetch(url);
        console.log(resp)
    }catch(e){
        console.log('Algo salio mal :/',e)
    }
    

}

getImage()