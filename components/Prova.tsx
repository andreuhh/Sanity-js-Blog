import { useState, useEffect } from 'react';
import Image from 'next/image';

function Prova() {
    const [articles, setArticles] = useState<any[]>([])

    useEffect(() => {
        fetch(
            'https://api.cercacasa.it/api/articles'
        )
            .then((response) => response.json())
            .then((data) => {
                setArticles(data);
            })
            .catch(() => {
                console.log("error");
            });
    }, []);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md-gap-6 p-2 md:p-6'>
            {articles.map((art) => (
                <div key={art.excerpt} className='border rounded-lg group cursor-pointer overflow-hidden'>
                    <img className='w-full h-60 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' src={art.hero_img} alt="" />
                    {/* <Image
                        src={art.hero_img}
                        layout="fixed"
                        alt={art.title}
                        width={300}
                        height={300}
                    /> */}
                    <div className='flex justify-between p-5 bg-white'>
                        <div>
                            <p className='text-lg font-bold'>{art.title}</p>
                            <p className='text-xs'>{art.excerpt}</p>
                        </div>
                        {/* <img className='h-12 w-12 rounded-full' src={art.hero_img} alt={art.title} /> */}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Prova