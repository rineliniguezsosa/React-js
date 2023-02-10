

export function useFetchgifs() {
  
  const [images, setImages] = useState([])
  const getImages = async(usercategory) => {
    const img = await getgift(usercategory)
    setImages(img)
  }
  useEffect(() => {
    //getgift(usercategory)
    getImages(usercategory)
  }, [usercategory])
}
