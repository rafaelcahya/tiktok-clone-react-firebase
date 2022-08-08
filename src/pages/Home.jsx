import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SidebarHome from '../components/SidebarHome'
import db from './firebase'
import Video from './Video'

function Home() {
    const [videos, setVideos] = useState([])

    window.addEventListener('load', () => {
        Fetchdata();
    });

    const Fetchdata = ()=>{
        db.collection("videos").get().then((querySnapshot) => {
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setVideos(arr => [...arr , data]);
            });
        })
    }

    return (
        <>
            <div className='pb-20'>
                <Navbar/>
            </div>
            <div className='flex px-52'>
                <SidebarHome/>
                <div className='absolute top-[60px] right-52 flex flex-col gap-4 py-10'>
                    {
                        videos.map((data) => (
                            <Video
                                channel={data.channel}
                                nickname={data.nickname}
                                description={data.description}
                                song={data.song}
                                url={data.url}
                                share={data.share}
                                likes={data.likes}
                                messages={data.messages}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home