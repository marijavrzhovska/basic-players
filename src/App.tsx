import { ChangeEvent, useState } from "react"
type Player = {
  id: number;
  name: string;
}

export default function App(){

  const [player, setPlayer] = useState<Player>({id: 1, name: "Marija"})
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) =>{
    setPlayer({...player, name: event.target.value})
  }

  return (
    <div className="container mt-5 mx-auto">
      <h2 className="text-2xl">Details</h2>
      <div>
        <span className="font-bold">ID:</span> {player.id}
      </div>
      <div className="space-x-2">
        <span className="font-bold">Name:</span>
        <span className="uppercase">{player.name}</span>
      </div>
      <div className="flex flex-col gap-2 mt-3 border-t">
        <label>Player Name</label>
        <input
          type="text"
          placeholder="name"
          className="border border-blue-600 rounded-lg p-2 w-1/4"
          value={player.name}
          onChange={handleNameChange}
        ></input>
      </div>
    </div>
  )
}