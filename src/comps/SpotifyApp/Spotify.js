import React from 'react'
import { useEffect, useState } from 'react';

const Spotify = () => {

    const CLIENT_ID = '68c4336d381c4b0b9eafe188e0509c33';
    const REDIRECT_URI = 'http://localhost:3000';
    const AUTH_ENDPOINT =  'https://accounts.spotify.com/authorize';
    const RESPONSE_TYPE = "token";
    
   

  return (
    <div className='container'>
        <div className='row'>
            <div className='col text-center'>
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Logg inn på Spotify</a>
            </div>
        </div>
    </div>
  )
}

export default Spotify