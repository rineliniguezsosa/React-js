
const getImage = async() =>{
    const apikey = 'F8OVeoJwy53KS0TI8S4VBdpmemu9QrXx';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}`;
    const resp = await fetch(url);
    console.log(resp)
    

}

getImage()