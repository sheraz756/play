import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button, { OutlineButton } from '../button/Button';
import Modal, { ModalContent } from '../modal/Modal';
import baseUrl from '../../utils/baseUrl';
import { CapitilizeFirstLetter } from '../../utils/utilityFunctions';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import TrailerModal from '../modal/TrailerModal';


const HeroSLide = () => {
    const [showTrailerModal, setShowTrailerModal] = useState(false);
    const [trailer, setTrailer] = useState('');
    const [movieItems, setMovieItems] = useState([]);
    const getShowCaseMovies = async () => {
        const res = await axios.get(`${baseUrl}/movie/showcase`);
        setMovieItems([...res.data]);
    }

    SwiperCore.use([Autoplay]);

    useEffect(() => {
        getShowCaseMovies();
    }, []);
  
    return (
        <>

            <div className='hero-slide'>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 5000 }}
                >
                    {movieItems.map((item, i) => (
                        <SwiperSlide key={i}>
                            {({ isActive }) => (

                                <HeroSlideItem item={item}
                                    setTrailer={setTrailer}
                                    setShowTrailerModal={setShowTrailerModal}
                                    className={`${isActive ? 'active' : ''}`} />
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
                {
                    showTrailerModal && <TrailerModal trailer={trailer} setShowTrailerModal={setShowTrailerModal} />
                }
            </div>
        </>
    );
};


const HeroSlideItem = props => {
    const item = props.item;
    const setShowTrailerModal = props.setShowTrailerModal;
    const setTrailer = props.setTrailer;
    const router = useRouter();
    return (
        <div
            className={`hero-slide__item ${props.className}`}
            style={{ backgroundImage: `url(${item.imgLgPoster})` }}
        >
            <div className='hero-slide__item__content container'>
                <div className='hero-slide__item__content__info'>
                    <h2 className='title'>{CapitilizeFirstLetter(item.title)}</h2>
                    <div className='details'>
                        <p>{item.year}</p>
                        <p>{item.duration}</p>
                        <p>{item.genre}</p>
                    </div>

                    <div className='overview'>{item.description}</div>

                    <div className='btns'>
                        <button onClick={() => router.push(`/movies/${item._id}`)}>
                            <FontAwesomeIcon icon={faPlay} style={{ color: '#14ED82' }} /> Watch Now
                        </button>
                        <button onClick={() => {
                            setShowTrailerModal(true);
                            setTrailer(item.trailer);
                        }}>
                            Watch Trailer
                        </button>
                    </div>
                </div>
                <div className='hero-slide__item__content__poster'>
                    <img src={item.imgSmPoster} alt={item.title} />
                </div>
            </div>
        </div>
    )
}



export default HeroSLide;
