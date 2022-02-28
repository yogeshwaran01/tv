import Card from "./Card"

import channels from "../channels"

const Cards = () => {
    return (
        
        <div className="flex bg-gradient-to-r from-green-500 via-yellow-500 to-pink-500 flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {channels.map(channel => {
                return <Card imgSource={channel.tvg.logo} name={channel.name} id={channel.tvg.id} key={channel.tvg.id} lang={channel.tvg.language} country={channel.tvg.country} />
            })}
        </div>

    )
}

export default Cards
