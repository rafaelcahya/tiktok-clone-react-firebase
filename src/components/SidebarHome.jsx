import React from 'react'
import profileImage from '../asset/images/steven-cordes-hdWNuitvY0A-unsplash.jpg'

function SidebarHome() {
    return (
        <>
            <div className='fixed top-[60px] h-full overflow-auto pt-5 pb-20 pr-2 w-[356px] bg-white'>
                <div className='flex flex-col gap-3 border-b py-4'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className='w-[32px]'>
                            <path fillRule="evenodd" clipRule="evenodd" d="M24.9505 7.84001C24.3975 7.38666 23.6014 7.38666 23.0485 7.84003L6.94846 21.04C6.45839 21.4418 6.2737 22.1083 6.48706 22.705C6.70041 23.3017 7.26576 23.7 7.89949 23.7H10.2311L11.4232 36.7278C11.5409 38.0149 12.6203 39 13.9128 39H21.5C22.0523 39 22.5 38.5523 22.5 38V28.3153C22.5 27.763 22.9477 27.3153 23.5 27.3153H24.5C25.0523 27.3153 25.5 27.763 25.5 28.3153V38C25.5 38.5523 25.9477 39 26.5 39H34.0874C35.3798 39 36.4592 38.0149 36.577 36.7278L37.7691 23.7H40.1001C40.7338 23.7 41.2992 23.3017 41.5125 22.705C41.7259 22.1082 41.5412 21.4418 41.0511 21.04L24.9505 7.84001Z"></path>
                        </svg>
                        <p className='proximanova-semibold text-[18px]'>For You</p>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"className='w-[32px]'>
                            <path fillRule="evenodd" clipRule="evenodd" d="M18 12.5C15.5897 12.5 13.5849 14.5018 13.5849 17.0345C13.5849 19.5672 15.5897 21.569 18 21.569C20.4103 21.569 22.4151 19.5672 22.4151 17.0345C22.4151 14.5018 20.4103 12.5 18 12.5ZM10.5849 17.0345C10.5849 12.9017 13.8766 9.5 18 9.5C22.1234 9.5 25.4151 12.9017 25.4151 17.0345C25.4151 21.1673 22.1234 24.569 18 24.569C13.8766 24.569 10.5849 21.1673 10.5849 17.0345ZM18 29.8793C14.0801 29.8793 10.7403 32.5616 9.69697 36.2673C9.5473 36.7989 9.03833 37.1708 8.49337 37.0811L7.50662 36.9189C6.96166 36.8292 6.58837 36.3131 6.72325 35.7776C8.00732 30.6788 12.5509 26.8793 18 26.8793C23.449 26.8793 27.9927 30.6788 29.2767 35.7776C29.4116 36.3131 29.0383 36.8292 28.4934 36.9189L27.5066 37.0811C26.9617 37.1708 26.4527 36.7989 26.303 36.2673C25.2597 32.5616 21.9199 29.8793 18 29.8793Z"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M33 31.5371C32.2445 31.5371 31.5198 31.668 30.8447 31.9093C30.3246 32.0951 29.7189 31.9243 29.4549 31.4392L28.9769 30.5608C28.713 30.0757 28.8907 29.463 29.4009 29.2516C30.513 28.791 31.7285 28.5371 33 28.5371C37.4554 28.5371 41.1594 31.6303 42.2706 35.7812C42.4135 36.3147 42.0386 36.8308 41.4935 36.9196L40.5065 37.0804C39.9614 37.1692 39.4546 36.7956 39.2894 36.2686C38.4217 33.5 35.91 31.5371 33 31.5371Z"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M33 18.5C31.6193 18.5 30.5 19.6193 30.5 21C30.5 22.3807 31.6193 23.5 33 23.5C34.3807 23.5 35.5 22.3807 35.5 21C35.5 19.6193 34.3807 18.5 33 18.5ZM27.5 21C27.5 17.9624 29.9624 15.5 33 15.5C36.0376 15.5 38.5 17.9624 38.5 21C38.5 24.0376 36.0376 26.5 33 26.5C29.9624 26.5 27.5 24.0376 27.5 21Z"></path>
                        </svg>
                        <p className='proximanova-semibold text-[18px]'>Following</p>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"className='w-[32px]'>
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.78511 10.3334C6.95518 10.3334 6.33301 10.9792 6.33301 11.7143V20.2858C6.33301 21.0209 6.95518 21.6667 7.78511 21.6667H18.5744C19.4043 21.6667 20.0265 21.0209 20.0265 20.2858V17.5602C20.0265 17.1826 20.2392 16.8372 20.5763 16.6672C20.9135 16.4973 21.3177 16.5317 21.6212 16.7563L25.6663 19.7488V12.2513L21.6212 15.2439C21.3177 15.4684 20.9135 15.5029 20.5763 15.3329C20.2392 15.1629 20.0265 14.8175 20.0265 14.4399V11.7143C20.0265 10.9792 19.4043 10.3334 18.5744 10.3334H7.78511ZM25.6855 12.2371C25.6831 12.2388 25.6839 12.2383 25.6839 12.2383L25.6855 12.2371ZM25.6716 12.2177C25.673 12.2212 25.6746 12.2243 25.6763 12.2269C25.6798 12.2324 25.6834 12.2355 25.6855 12.2371L25.6874 12.2383C25.6874 12.2383 25.6865 12.238 25.6839 12.2383M4.33301 11.7143C4.33301 9.81952 5.90653 8.33337 7.78511 8.33337H18.5744C20.453 8.33337 22.0265 9.81953 22.0265 11.7143V12.4562L24.4963 10.629C25.0929 10.1877 25.8879 10.1155 26.5542 10.4359C27.224 10.758 27.6663 11.4325 27.6663 12.1905V19.8096C27.6663 20.5676 27.224 21.2421 26.5542 21.5642C25.888 21.8846 25.0929 21.8124 24.4963 21.371L22.0265 19.5439V20.2858C22.0265 22.1806 20.453 23.6667 18.5744 23.6667H7.78511C5.90653 23.6667 4.33301 22.1806 4.33301 20.2858V11.7143Z"></path>
                            <path d="M15 15.134C15.6667 15.5189 15.6667 16.4811 15 16.866L12 18.5981C11.3333 18.983 10.5 18.5019 10.5 17.7321L10.5 14.2679C10.5 13.4981 11.3333 13.017 12 13.4019L15 15.134Z"></path>
                        </svg>
                        <p className='proximanova-semibold text-[18px]'>LIVE</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 border-b py-4'>
                    <p className='text-[14px] proximanova-semibold text-[#161823bf]'>Suggested accounts</p>
                    {
                        Array.from({length: 5}).map((_, i) => (
                            <div className='flex items-center gap-2 cursor-pointer'>
                                <img src={profileImage} alt="" className='w-[32px] h-[32px] rounded-full'/>
                                <div>
                                    <p className='text-[16px] proximanova-semibold'>williamkosasie</p>
                                    <p className='text-[12px] proximaNova-regular text-[#161823bf]'>William Kosasie</p>
                                </div>
                            </div>
                        ))
                    }
                    <p className='text-[#fe2c55] proximanova-semibold text-[14px]'>See all</p>
                </div>
                <div className='flex flex-col gap-3 border-b py-4'>
                    <p className='text-[14px] proximanova-semibold text-[#161823bf]'>Following accounts</p>
                    {
                        Array.from({length: 10}).map((_, i) => (
                            <div className='flex items-center gap-2 cursor-pointer'>
                                <img src={profileImage} alt="" className='w-[32px] h-[32px] rounded-full'/>
                                <div>
                                    <p className='text-[16px] proximanova-semibold'>williamkosasie</p>
                                    <p className='text-[12px] proximaNova-regular text-[#161823bf]'>William Kosasie</p>
                                </div>
                            </div>
                        ))
                    }
                    <p className='text-[#fe2c55] proximanova-semibold text-[14px]'>See more</p>
                </div>
                <div className='flex flex-col gap-3 border-b py-4'>
                    <p className='text-[14px] proximanova-semibold text-[#161823bf]'>Discover</p>
                    <div className='flex flex-wrap gap-2'>
                        {
                            Array.from({length: 10}).map((_, i) => (
                                <div className='flex items-center gap-2 border px-4 py-[2px] rounded-full w-max cursor-pointer'>
                                    <svg class="tiktok-1hy6k9f-StyledNumber eikhr9j9" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className='w-[16px]'>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.4263 15L16.9566 3.95205C16.9822 3.41902 17.4218 2.99999 17.9554 2.99999H19.9494C20.5202 2.99999 20.9752 3.47701 20.9483 4.04718L20.4308 15H28.4263L28.9566 3.95205C28.9822 3.41902 29.4218 2.99999 29.9554 2.99999H31.9494C32.5202 2.99999 32.9752 3.47701 32.9483 4.04718L32.4308 15H43C43.5523 15 44 15.4477 44 16V18C44 18.5523 43.5523 19 43 19H32.2404L31.8118 28H42C42.5523 28 43 28.4477 43 29V31C43 31.5523 42.5523 32 42 32H31.6213L31.0434 44.0479C31.0178 44.581 30.5782 45 30.0446 45H28.0507C27.4798 45 27.0248 44.523 27.0518 43.9528L27.6168 32H19.6213L19.0434 44.0479C19.0178 44.581 18.5782 45 18.0446 45H16.0507C15.4798 45 15.0248 44.523 15.0518 43.9528L15.6168 32H5C4.44772 32 4 31.5523 4 31V29C4 28.4477 4.44772 28 5 28H15.8073L16.2358 19H6C5.44772 19 5 18.5523 5 18V16C5 15.4477 5.44772 15 6 15H16.4263ZM20.2404 19L19.8118 28H27.8073L28.2358 19H20.2404Z"></path>
                                    </svg>
                                    <p className='text-[14px] proximaNova-regular text-[#161823bf]'>serunyaliburan</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-3 py-4'>
                    <div className='flex flex-wrap gap-x-2 gap-y-1 text-[12px] text-[#16182380] proximanova-semibold'>
                        <p className='cursor-pointer'>About</p>
                        <p className='cursor-pointer'>TikTok Browse</p>
                        <p className='cursor-pointer'>Newsroom</p>
                        <p className='cursor-pointer'>Contact</p>
                        <p className='cursor-pointer'>Careers</p>
                        <p className='cursor-pointer'>ByteDance</p>
                    </div>
                    <div className='flex flex-wrap gap-x-2 gap-y-1 text-[12px] text-[#16182380] proximanova-semibold'>
                        <p className='cursor-pointer'>TikTok for Good</p>
                        <p className='cursor-pointer'>Advertise</p>
                        <p className='cursor-pointer'>Developers</p>
                        <p className='cursor-pointer'>Transparency</p>
                        <p className='cursor-pointer'>TikTok Rewards</p>
                    </div>
                    <div className='flex flex-wrap gap-x-2 gap-y-1 text-[12px] text-[#16182380] proximanova-semibold'>
                        <p className='cursor-pointer'>Help</p>
                        <p className='cursor-pointer'>Safety</p>
                        <p className='cursor-pointer'>Terms</p>
                        <p className='cursor-pointer'>Privacy</p>
                        <p className='cursor-pointer'>Creator Portals</p>
                        <p className='cursor-pointer'>Community Guidelines</p>
                    </div>
                    <p className='text-[12px] text-[#16182380] proximanova-semibold'>© 2022 TikTok</p>
                </div>
            </div>
        </>
    )
}

export default SidebarHome