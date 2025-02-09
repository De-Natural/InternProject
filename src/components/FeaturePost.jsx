import { useState } from 'react';
import content1 from '../assets/Feature-post-1.png';
import content2 from '../assets/Feature-post-3.png';
import content3 from '../assets/Festure-post-2.png';
import icon1 from '../assets/IconsCalendar.svg';
import icon2 from '../assets/VectorBag.svg';
import icon3 from '../assets/@none.svg';

const PostCard = ({ image, initialText }) => {
    const [text, setText] = useState(initialText);

    const handleTextChange = (newText) => {
        setText(newText);
    };

    return (
        <div className="postCard h-[520px] w-full lg:w-[350px] border border-gray-200">
            <div className="div h-60 w-full flex flex-col text-center gap-4">
                <img className='h-full w-full' src={image} alt="" />
            </div>
            <div className="div h-64 w-full flex flex-col items-center pt-3 justify-around">
                <p className='text-base capitalize flex gap-4'>
                    <span onClick={() => handleTextChange("Google is the world's most popular search engine.")} className="cursor-pointer">Google</span>
                    <span onClick={() => handleTextChange("Trending topics keep you updated with the latest news.")} className="cursor-pointer">Trending</span>
                    <span onClick={() => handleTextChange("Stay ahead with new and exciting updates.")} className="cursor-pointer">New</span>
                </p>
                <h2 className='text-xl font-extralight'>Loudest "a let dehu #Medhfhj <br /> (soundest)</h2>
                <p className='text-base text-center'>{text}</p>
                <p className='flex w-4/5 items-center justify-between'>
                    <span className='flex items-center justify-center'>
                        <div className='h-4 w-4'>
                            <img className='object-contain h-full w-full' src={icon1} alt="" />
                        </div>
                        22 April 2001
                    </span>
                    <span className='flex items-center justify-center'>
                        <div className='h-4 w-4'>
                            <img className='object-contain h-full w-full' src={icon2} alt="" />
                        </div>
                        10 comments
                    </span>
                </p>
                <a className='flex gap-2 items-center justify-center ml-[-150px]' href="">Learn more
                    <div className='h-3 w-4'>
                        <img className='object-contain h-full w-full' src={icon3} alt="" />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default function FeaturePost() {
    return (
        <div className='h-fit w-full flex flex-col items-center gap-5 justify-around'>
            <p className='text-blue-700'>Practice Advice</p>
            <h2 className='text-3xl font-semibold'>Featured Post</h2>
            <main className=' h-fit lg:h-[560px] w-full lg:w-[80%] flex flex-col lg:flex-row items-center justify-around'>
                <PostCard image={content1} initialText="Lorem ipsum dolor sit amet consectetur." />
                <PostCard image={content2} initialText="Eos quaerat adipisci illo aliquid voluptatum." />
                <PostCard image={content3} initialText="Laboriosam eveniet ab minus deleniti quae." />
            </main>
        </div>
    );
}