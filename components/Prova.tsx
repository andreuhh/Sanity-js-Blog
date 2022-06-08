import { useState } from 'react';
import { setEnvironmentData } from 'worker_threads';
import { sanityClient, urlFor } from '../sanity';

// interface Articles {
//     articles: [Articles]
// }


function Prova() {
    const [articles, setArticles] = useState<any[]>([])

    const fetchArticles = async () => {
        const response = await fetch('https://api.cercacasa.it/api/articles')
        const data = await response.json()
        setArticles(data)
    }

    console.log(articles);


    return (
        <>
            <button onClick={fetchArticles} className='bg-green-600 px-4 py-1 text-white rounded-full'>Fetch Data</button>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md-gap-6 p-2 md:p-6'>

                {articles.map((art) => (
                    <div key={art.excerpt} className='border rounded-lg group cursor-pointer overflow-hidden'>
                        <img className='w-full h-60 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' src={art.hero_img} alt="" />
                        <div className='flex justify-between p-5 bg-white'>
                            <div>
                                <p className='text-lg font-bold'>{art.title}</p>
                                <p className='text-xs'>{art.excerpt}</p>
                            </div>
                            <img className='h-12 w-12 rounded-full' src={art.hero_img} alt="" />


                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Prova