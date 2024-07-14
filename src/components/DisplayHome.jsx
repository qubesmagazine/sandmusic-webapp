import {AlbumItem, Navbar, SongItem } from '../components/index'
import {albumsData} from '../assets/index'
import { songsData } from '../assets/index'


const DisplayHome = () => {
  return (
<>
<Navbar/>
<div className='mb-4'>
    <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
    <div className='flex overflow-auto'>
    {albumsData.map((item, index) => (
    <AlbumItem key={index} name={item.name} comments={item.comments} id={item.id} image={item.image}/>
))}
    </div>

</div>
<div className='mb-4'>
    <h1 className='my-5 font-bold text-2xl'>Todays Biggest hits</h1>
    <div className='flex overflow-auto'>
    {songsData.map((item, index) => (
    <SongItem key={index} name={item.name} comments={item.comments} id={item.id} image={item.image}/>
))}
    </div>

</div>
</>


  )
}

export default DisplayHome