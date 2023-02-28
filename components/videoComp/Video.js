import React from 'react'
import styles from './Video.module.css'
import axios from 'axios'
import Router, { useRouter } from 'next/router'
import baseUrl from '../../utils/baseUrl'
const Video = ({ src, sub ,user}) => {
    const router = useRouter();
    const id = user._id
const del = async ()=>{
    {
        try{

           const send= await axios.delete(`${baseUrl}/signup/delete/${id}`)
           router.push('/home')
          
           
            console.log(send)
        }catch(e){
            console.log(e)
        }
    }
}
    React.useEffect(() => {
        document.querySelector('video').setAttribute('oncontextmenu', "return false;")
    })

    console.log(sub);
    return (
        <>
        <video
            controls
            autoPlay
            controlsList='nodownload'
            className='myVideoPlayer'
        >
            <source src={src} type="video/mp4" />
            <source src={src} type="video/webm" />
            <track
                label='English'
                kind='subtitles'
                srcLang='en'
                src={sub}
                default
            />
        </video>
            <button className='set' onClick={del}>back</button>
            
          
        </>
    )
}

export default Video