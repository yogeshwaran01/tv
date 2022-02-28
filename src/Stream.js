import { useParams } from "react-router-dom"
import channels from "./channels"
import Cards from "./components/Cards"
import Player from "./components/Player"


const Stream = () => {

    let { id } = useParams()
    let required = channels.filter(channel => channel.tvg.id === id)[0]

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <Player url={required.url} />
                </div>
                <Cards />
            </div>
    </section>
    )
}

export default Stream
