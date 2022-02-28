import { useNavigate } from "react-router-dom"

const Card = ({ imgSource, name, id, country, lang }) => {

    let navigate = useNavigate()


    return (
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center cursor-pointer " onClick={e => { navigate(`tv?tv=${id}`); window.scrollTo(0, 0) }}>
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <img src={imgSource} alt={id} className="w-10 h-10" />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{name}</h2>
          <p  className="leading-relaxed text-base opacity-0">{`${name} is in Language of ${lang} and belong to India(${country})`}</p>

        </div>
        </div>
    )


}

export default Card
