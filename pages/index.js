
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
export default function Home() {
  const [Data, setData] = useState([])
  useEffect(() => {
    fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json")
      .then((res) => res.json())
      .then((dataGet) => setData(dataGet))
      .catch((err) => console.log(err))

  }, [])

  return (
    <div>
      <div className='container' style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)" }}>
        {
          Data?.map(({ id, name, image
          }) => (
            <Link key={id} href={`/pokemon/${id}`}>
              <div style={{ cursor: "pointer" }} >
                <img width={100} height={100} src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${image}`} />
                <p>
                  {name}
                </p>
              </div>
            </Link>
          ))
        }

      </div>
    </div>
  )
}
