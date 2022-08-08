import React from 'react'
import image from '../asset/images/steven-cordes-hdWNuitvY0A-unsplash.jpg'
import like from '../asset/icon/like.svg'
import message from '../asset/icon/message.svg'
import shares from '../asset/icon/share.svg'

function Video({channel, nickname, description, song, url, likes, messages, share}) {
    return (
        <>
            <div className='proximanova-regular border-b pb-5 h-max'>
                <div className='flex justify-between gap-10 w-full'>
                    <div className='flex justify-start gap-3'>
                        <img src={image} alt="" className='w-[52px] h-[52px] rounded-full cursor-pointer'/>
                        <div className='flex flex-col gap-1'>
                            <div className='group flex items-center gap-1 cursor-pointer w-max'>
                                <div className='flex items-start gap-1'>
                                    <p className='proximanova-bold text-[18px group-hover:underline'>{channel}</p>
                                    <span className='bg-[#3CDAEE] p-[2px] rounded-full'>
                                        <svg width="12" height="12" stroke-width="3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 13L9 17L19 7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                </div>
                                <p className='text-[#161823] text-[14px]'>{nickname}</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <span>
                                    <p>{description}</p>
                                    <div className='flex items-center gap-1 proximanova-semibold'>
                                        <p>#fyp</p>
                                        <p>#valorant</p>
                                    </div>
                                </span>
                            </div>
                            <div className='group flex items-center gap-2 cursor-pointer w-max'>
                                <svg class="tiktok-15gak6d-StyledMusicNote eikhr9j10" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className='w-[16px] h-[16px]'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M35.0001 10.7587C35.0001 10.1169 34.4041 9.64129 33.7784 9.78359L17.7902 13.4192C17.335 13.5227 17.0119 13.9275 17.0119 14.3943V37.9972H17.0109C17.0374 40.1644 14.8022 42.4189 11.612 43.2737C8.05093 44.2279 4.64847 43.0769 4.01236 40.7028C3.37624 38.3288 5.74735 35.6308 9.30838 34.6766C10.606 34.3289 11.8826 34.2608 13.0119 34.4294V14.3943C13.0119 12.0601 14.6271 10.0364 16.9033 9.5188L32.8914 5.88317C36.0204 5.17165 39.0001 7.54986 39.0001 10.7587V33.1191C39.084 35.3108 36.8331 37.6109 33.6032 38.4763C30.0421 39.4305 26.6397 38.2795 26.0036 35.9055C25.3675 33.5315 27.7386 30.8334 31.2996 29.8792C32.5961 29.5319 33.8715 29.4635 35.0001 29.6316V10.7587Z"></path>
                                </svg>
                                <p className='proximanova-semibold group-hover:underline'>{song}</p>
                            </div>
                            <div className='flex items-end gap-5 py-1'>
                                <div className='w-[300px] h-[520px] rounded-xl overflow-hidden'>
                                    <video autoPlay loop muted controls>
                                        <source src={url} type="video/mp4" />
                                    </video>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex flex-col items-center gap-1 cursor-pointer'>
                                        <span className='bg-[#f0f0f1] hover:bg-[#E7E7E9] rounded-full p-3'>
                                            <img src={like} alt="" className='w-[24px] h-[24px]' />
                                        </span>
                                        <p className='text-[12px] proximanova-semibold text-[#50525A]'>{likes}</p>
                                    </div>
                                    <div className='flex flex-col items-center gap-1 cursor-pointer'>
                                        <div className='flex flex-col items-center gap-1'>
                                            <span className='bg-[#f0f0f1] hover:bg-[#E7E7E9] rounded-full p-3'>
                                                <img src={message} alt="" className='w-[24px] h-[24px]' />
                                            </span>
                                        </div>
                                        <p className='text-[12px] proximanova-semibold text-[#50525A]'>{messages}</p>
                                    </div>
                                    <div className='flex flex-col items-center gap-1 cursor-pointer'>
                                        <div className='flex flex-col items-center gap-1'>
                                            <span className='bg-[#f0f0f1] hover:bg-[#E7E7E9] rounded-full p-3'>
                                                <img src={shares} alt="" className='w-[24px] h-[24px]' />
                                            </span>
                                        </div>
                                        <p className='text-[12px] proximanova-semibold text-[#50525A]'>{share}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='text-[#FE2C55] border border-[#FE2C55] hover:bg-[#fe2c5612] px-5 rounded-md h-max cursor-pointer'>Follow</p>
                </div>
            </div>
        </>
    )
}

export default Video