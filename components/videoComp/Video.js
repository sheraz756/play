import React ,{useState} from 'react'
import styles from './Video.module.css'
import axios from 'axios'
import Router, { useRouter } from 'next/router'
import Image from './cancel.png'
import baseUrl from '../../utils/baseUrl'
const Video = ({ src, sub ,user}) => {
    const router = useRouter();
    const id = user._id
    const [showVideo, setShowVideo] = useState(false);

    const handleClick = () => {
      setShowVideo(!showVideo);
    };
const del = async ()=>{
    
    {
        try{

           const send= await axios.delete(`${baseUrl}/signup/delete/${id}`)
           router.push('/home')
          
           
            console.log(send)
        }catch(e){
            console.log(e)
            router.push('/home')
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
            onClick={handleClick}

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
        
        {/* <button onClick={handleButtonClick}>Click me</button> */}
     
        {showVideo && <button className='set' onClick={del}> 
        
        <div className={styles.crossicon} >
        <div className={styles.crossline}></div>
        <div className={styles.crossline}></div>

        </div>
        
         </button>} 
            
          
        </>
    )
}

export default Video