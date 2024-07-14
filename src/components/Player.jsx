import { useContext } from "react";
import { assetIcon } from "../assets";
import { PlayContext } from "../context/PlayContext";

const Player = () => {
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayContext);

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="song data" />
        <div>
          <p>{track.name}</p>
          <p>{track.comments.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            className="w-5 cursor-pointer"
            src={assetIcon.shuffleicon}
            alt="shuffle"
          />
          <img
            onClick={previous}
            className="w-6 cursor-pointer"
            src={assetIcon.previcon}
            alt="prev"
          />

          {playStatus ? (
            <img
              onClick={pause}
              className="w-6 cursor-pointer"
              src={assetIcon.pause}
              alt="pause"
            />
          ) : (
            <img
              onClick={play}
              className="w-6 cursor-pointer"
              src={assetIcon.playicon}
              alt="play"
            />
          )}
          <img
            onClick={next}
            className="w-6 cursor-pointer"
            src={assetIcon.nexticon}
            alt="next"
          />
          <img
            className="w-6 cursor-pointer"
            src={assetIcon.loopicon}
            alt="loop"
          />
        </div>
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute} : {time.currentTime.second}{" "}
          </p>
          <div
            ref={seekBg} onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>
            {time.totalTime.minute} : {time.totalTime.second}{" "}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assetIcon.playsicon} alt="plays" />
        <img className="w-4" src={assetIcon.micicon} alt="mic" />
        <img className="w-4" src={assetIcon.queueicon} alt="queue" />
        <img className="w-4" src={assetIcon.speakericon} alt="speaker" />
        <img className="w-4" src={assetIcon.volumeicon} alt="volume" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img className="w-4" src={assetIcon.miniplayericon} alt="miniplayer" />
        <img className="w-4" src={assetIcon.zoomicon} alt="zoom" />
      </div>
    </div>
  );
};

export default Player;
