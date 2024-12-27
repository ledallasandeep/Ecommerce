import React from 'react'

const videos = [
    { id: 1, title: "1st video", img: "apple.jpeg" },
    { id: 2, title: "2nd video", img: "apple.jpeg" },
    { id: 3, title: "3rd video", img: "apple.jpeg" },
    { id: 4, title: "4th video", img: "apple.jpeg" },
    { id: 5, title: "5th video", img: "apple.jpeg" },
    { id: 6, title: "6th video", img: "apple.jpeg" },
  ];

const Gallery = [
    {id:1, tit:'1st', img1:'apple.jpeg'},
    {id:2 ,tit:'1st', img1:'apple.jpeg'},
    {id:3,tit:'1st', img1:'apple.jpeg'},
    {id:4, tit:'1st', img1:'apple.jpeg'},
    {id:5, tit:'1st', img1:'apple.jpeg'},
    {id:6, tit:'1st', img1:'apple.jpeg'},
    {id:7, tit:'1st', img1:'apple.jpeg'},
    {id:8, tit:'1st', img1:'apple.jpeg'},
    {id:9, tit:'1st', img1:'apple.jpeg'},
    {id:10, tit:'1st', img1:'apple.jpeg'},
    {id:11, tit:'1st', img1:'apple.jpeg'},
    {id:12, tit:'1st', img1:'apple.jpeg'},
    {id:13, tit:'1st', img1:'apple.jpeg'},
    {id:14, tit:'1st', img1:'apple.jpeg'},
    {id:15, tit:'1st', img1:'apple.jpeg'},
    {id:16, tit:'1st', img1:'apple.jpeg'},

];

const Prac = () => {
  return (
    <div className='w-full  '>
        <h1 className='text-3xl font-bold text-start p-[10px] mx-[20%]'>Franchise Research</h1>
            <div className='flex  gap-4 w-[70%] h-[auto] mx-auto '>
                <img src='apple.jpeg'  className='w-[30%] h-auto  '/>
                <div className='flex flex-col  gap-[10%] w-[25%] '>
                    <h1 className='text-start font-bold text-2xl'>Nova is allu arjun fan</h1>
                    <p className='text-start font-bold text-lg'>Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu
                            sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
                            magna.
                            
                    </p>
                </div>
                <div className='w-[30%] h-[200px] overflow-y-auto px-10 flex flex-col '>
                          {videos.map((video) => (
                           <div key={video.id} className="flex gap-2 p-1 border-b-2">
                              <img src={video.img} alt={video.title} className="w-[30%] h-[60px]" />
                               <h1>{video.title}</h1>
                               <p className=' text-justify font-bold text-xs  '>Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu
                                sem.  
                             
                            </p>
                                 </div>
                                     ))}
                </div>
            </div>
  
        <div className=' w-[70%] mx-auto flex flex-wrap gap-8 my-[3%] '>
            {Gallery.map((gall)=>(
            <div key={gall.id} className='flex flex-col gap-5 w-[20%] '>
                <img src={gall.img1}  alt={gall.tit} className='h-30 w-50'/>
                <h1 className=' text-start text-lg font-medium'>{gall.tit}</h1>
                <p className=' text-justify font-bold text-xs '>Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu
                            sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
                            magna.
                </p>
            </div>
                 ))}
        </div>
    </div>
  )
}

export default Prac