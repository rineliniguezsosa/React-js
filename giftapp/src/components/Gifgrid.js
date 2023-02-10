

export function Gifgrid({usercategory}) {
  const getgift =  async() =>{
    const req = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=DJKw39bBPwS3pPTtIpZnriojFdIDYaEC&q=${usercategory}&limit=15`)
    
  }
  return (
    <>
        <h1>{usercategory}</h1>
        <span>Hola mundo</span>
    </>
  )
}
