

export function Gifgrid({usercategory}) {
  const getgift =  async() =>{
    const req = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=DJKw39bBPwS3pPTtIpZnriojFdIDYaEC&q=${usercategory}&limit=15`);
    const {data} = await req.json();
    const gifs = data.map(img => ({
        img:img.id,
        titulo:img.title,
        url:img.images.downsized.url,
    }))
    return gifs;
  }
  getgift()
  return (
    <>
        <h1>{usercategory}</h1>
        <span>Hola mundo</span>
    </>
  )
}
