import home from "./icons/home.png";
import artist1 from "./artistimages/album1.png";
import artist2 from "./artistimages/album2.png";
import artist3 from "./artistimages/album3.png";
import artist4 from "./artistimages/album4.png";
import artist5 from "./artistimages/album5.png";
import artist6 from "./artistimages/album6.png";
import artist7 from "./artistimages/artist1.png";
import artist8 from "./artistimages/artist2.png";
import topglobal from "./artistimages/topglobal.png";
import topglobalUS from "./artistimages/top50us.png";
import top50global from "./artistimages/top50global.png";
import megahits from "./artistimages/megahits.png";
import happyfavorites from "./artistimages/happyfavorites.png";
import plusIcon from "./icons/plus.png";
import rightarrow from "./icons/right-arrow.png";
import search from "./icons/search.png";
import stackicon from "./icons/stack.png";
import shuffle from "./icons/shuffle.png";
import next from "./icons/next.png";
import loop from "./icons/loop.png";
import play from "./icons/play.png";
import prev from "./icons/previous.png";
import plays from "./icons/playsicon.png";
import volume from "./icons/volume.png";
import zoom from "./icons/zoom.png";
import miniplayer from "./icons/miniplayer.png";
import speaker from "./icons/speaker.png";
import queue from "./icons/queue.png";
import mic from "./icons/mic.png";
import leftarrow from './icons/left-arrow.png'
import prevpause from "./icons/prevpause.png";
import logosmall from './images/logo-small.png'
import clockicon from './icons/clock.png'





export const assetIcon = {
  home_icon: home,
  searchIcon: search,
  clock: clockicon,
  stack: stackicon,
  plus: plusIcon,
  right: rightarrow,
  playicon: play,
  previcon: prev,
  nexticon: next,
  loopicon: loop,
  shuffleicon: shuffle,
  zoomicon: zoom,
  miniplayericon: miniplayer,
  volumeicon: volume,
  speakericon: speaker,
  queueicon: queue,
  micicon: mic,
  playsicon: plays,
  left: leftarrow,
  logo: logosmall,
  pause: prevpause
};




export const albumsData = [
  {
    id: 0,
    name: "Top 50 Global",
    image: top50global,
    comments: "Your weekly update of the most played tracks",
    bgColor: "#2a4365",

  },
  {
    id: 1,
    name: "Top 50 US",
    image: topglobalUS,
    comments: "Your weekly update of the most played tracks",
    bgColor: "#742a2a",
  },
  {
    id: 2,
    name: "Top 50 Global",
    image: topglobal,
    comments: "Your weekly update of the most played tracks",
    bgColor: "#234e52",
  },

  {
    id: 3,
    name: "Trending Global",
    image: top50global,
    comments: "Your weekly update of the most played tracks",
    bgColor: "#22543d",
  },
  {
    id: 4,
    name: "Mega Hits",
    image: megahits,
    comments: "Your weekly update of the most played tracks",
    bgColor: "#234e52",
  }, 

  {
    id: 5,
    name: "Happy Favorites",
    image: happyfavorites,
    comments: "Your weekly update of the most played tracks",
    bgColor: "#744210",
  },
];







export const songsData = [
  {
    id: 0,
    name: "Zino ft Seyi",
    image: artist1,
    file: "https://cdn.val9ja.com/wp-content/uploads/2024/07/Tml_Vibez_Ft_Seyi_Vibez_-_4ck_Up.mp3",
    comments: "comments: 170",
    duration: "3:00",
  },
  {
    id: 1,
    name: "Davido ft Chioma",
    image: artist2,
    file: "https://cdn.val9ja.com/wp-content/uploads/2024/06/Davido_Ft_Chioma_-_Assurance.mp3",
    comments: "comments: 90",
    duration: "3:00",
  },
  {
    id: 2,
    name: "Phoebe - Resounding",
    image: artist3,
    file: "https://cdn.val9ja.com/wp-content/uploads/2024/06/Pheobe_Crown_-_Resounding_Praise.mp3",
    comments: "comments: 100",
    duration: "3:00",
  },
  {
    id: 3,
    name: "Asake - Wave",
    image: artist4,
    file: "https://cdn.val9ja.com/wp-content/uploads/2024/06/Asake_Ft_Central_Cee_-_Wave.mp3",
    comments: "comments: 210",
    duration: "3:00",
  },
  {
    id: 4,
    name: "Olamide - Synchro",
    image: artist5,
    file: "https://cdn.val9ja.com/wp-content/uploads/2024/06/Olamide_Ft_Pheelz_Young_Jonn_Lil_Kesh_-_Synchro_System.mp3",
    comments: "comments: 40",
    duration: "3:00",
  },
  {
    id: 5,
    name: "DJ Jazzy - Mnike",
    image: artist6,
    file: "https://cdn.val9ja.com/wp-content/uploads/2024/06/DJ_Jazzy_Ft_Tyler_ICU_-_Mnike_Drill_Remix_.mp3",
    comments: "comments: 400",
    duration: "3:00",
  },
  {
    id: 6,
    name: "Tyler ICU - Mnike",
    image: artist7,
    file: "https://cdn.trendybeatz.com/audio/Prince-Gozie-Okeke-Sweet-Life-(TrendyBeatz.com).mp3",
    comments: "comments: 200",
    duration: "3:00",
  },
  {
    id: 7,
    name: "Olamide - Uptown",
    image: artist8,
    file: "https://cdn.val9ja.com/wp-content/uploads/2024/06/Olamide_Ft_Fireboy_DML_Asake_-_Uptown_Disco.mp3",
    comments: "comments: 100",
    duration: "3:00",
  },
  {
    id: 8,
    name: "BurnaBoy - Higher",
    image: artist1,
    file: "https://cdn.trendybeatz.com/audio/Prince-Gozie-Okeke-Sweet-Life-(TrendyBeatz.com).mp3",
    comments: "comments: 190",
    duration: "3:00",
  },
];

