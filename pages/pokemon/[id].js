import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function Details() {
    const {
        query: { id },
    } = useRouter()

    const [Data, setData] = useState(null)
    useEffect(() => {
        fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`)
            .then((res) => res.json())
            .then((dataGet) => setData(dataGet))
            .catch((err) => console.log(err))

    }, [id])


    return (
        <div>
            <Link href="/">BACK TO HOME</Link>
            <div key={Data?.name}>
                <h4>
                    {Data?.name}
                    <img width={100} height={100} src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${Data?.image}`} />

                    {Data?.stats.map(({ name, value }) => (<p>
                        {name}: {value}
                    </p>))}

                </h4>
            </div>
        </div>
    )
}

export default Details