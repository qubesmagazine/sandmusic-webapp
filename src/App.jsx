import { useContext } from "react";
import Display from "./components/Display";
import { Player, SideBar } from "./components/index";
import { PlayContext } from "./context/PlayContext";


const App = () => {

const {audioRef, track} = useContext(PlayContext)

  return (
    <div className="h-screen bg-primary">
      <div className="h-[90%] flex">
        <SideBar />
        <Display/>
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
