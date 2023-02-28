import React, { useState, useRef } from 'react';
import { parseCookies } from 'nookies';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl'
import Video from '../../components/videoComp/Video';
const CurrentMovie = ({ movie,user}) => {
  // console.log(user.name )


  return (
    <>
    
      <Video src={movie.video} sub={movie.sub} user={user} />
    </>
  );
};



export const getServerSideProps = async ctx => {

  try {
    const { token } = parseCookies(ctx);
    const res = await axios.get(`${baseUrl}/movie/${ctx.query.currentMovie}`, { headers: { Authorization: token } });
    const { movie } = res.data;
    return { props: { movie } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
};
export default CurrentMovie;





