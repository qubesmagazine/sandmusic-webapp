/* eslint-disable react/prop-types */
import { useContext } from "react"
import { PlayContext } from "../context/PlayContext"

const SongItem = ({image, name, comments, id}) => {

const {playWithId} = useContext(PlayContext)

  return (
    <div onClick={() => playWithId(id)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded w-50 h-40" src={image} alt="image" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{comments}</p>
    </div>
  )
}

export default SongItem