import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../button/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCab, faEye, faPlay, faPlayCircle, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { NumberFormatter } from '../../utils/utilityFunctions';
import axios from 'axios'
import baseUrl
    from '../../utils/baseUrl';

const MovieCard = ({ item, user, datalength }) => {
    // console.log(getUserView)

    // const [views , setViews] = useState();
    // function getId(){
    //     const view = axios.get(`${baseUrl}/getUser`)
    //     setViews(view)
    //     console.log(setViews)
    // }
    //    console.log(user)
    const myData = {
        name: user.name,
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        country: user.country,
        imgPic: user.profilePicture,
        userId: user._id
    }
    const setUser = async () => {
        // console.log(user)


        {
            try {

                const send = await axios.post(`${baseUrl}/signup/livestream`, myData)


                console.log(send)
            } catch (e) {
                console.log(e)
            }
        }
    }
    return (
        <>

            <div className='movie-card' style={{ backgroundImage: `url(${item.imgSmPoster})` }}>
                <Link href={item.type === 'movie' ? `/movies/${item._id}` : `/series/${item._id}`}>
                    <button className='btn'>
                        <FontAwesomeIcon icon={faPlay} className='buttonIconMain' onClick={setUser} />
                    </button>
                </Link>
                <div className='buttons'>
                    <div className="likesSeperator">
                        <span>
                            <FontAwesomeIcon
                                icon={faEye}
                                style={{ fontSize: '18px' }} /> {NumberFormatter(datalength)}
                        </span>
                    </div>
                </div>
            </div>
        </>

    );
};

export default MovieCard;






// <i class="fas fa-play"></i>
// <i class="fab fa-google-play"></i>
// <i class="fab fa-youtube"></i>