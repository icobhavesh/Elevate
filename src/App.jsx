import { useEffect, useState } from "react";


export default function App() {
  const [data, setData] = useState([])
  const FetchFromApi = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json()).then((res) => {
        console.log(res)
        setData(res)
      })
  }
  // .then(json=>console.log(json))
  useEffect(() => {
    FetchFromApi()
  }, [])

  return (
    <div style={{ backgroundImage: (' linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%);') }}
      className=" w-full h-auto
  ">
      <div className="max-w-[1280px] mt-10 h-auto flex flex-wrap   justify-evenly md:justify-between items-center mx-auto gap-10 ">
        {
          data.map((item, idx) => {
            return <div key={idx} className=" max-w-[400px] h-auto overflow-hidden " >
              <img className="w-[200px] block mx-auto h-[200px] mix-blend-multiply" src={item.image}>
              </img>
              <div className=" text-[20px] font-semibold capitalize p-4 ">
                <p className="text-center">{item.category}</p>
                <p className="text-center">{item.price}</p>
                <p className="text-center">{item.description.slice(0, 20)}</p>

              </div>

            </div>
          })
        }
      </div>

    </div>
  );
}

