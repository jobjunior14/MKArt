 import { Type } from './typeEffect';
import useDataFecther from '../util/dataFecther';
import {staticFile} from '../axiosUrl'

export function Home ()
{
    const {loading, error, data} = useDataFecther('/user/profil');

    if (data) {
        if (data.photo.length > 0) {

            return (
                
                <div className='w-full '>
                    <section className="lg:flex lg:mt-40 mt-32 justify-center lg:px-20 px-5 items-center">
                        
                        <div className="lg:mr-40 lg:pb-28 -mb-10 lg:hidden flex justify-center  ">
                        
                            { !loading && !error ? <div className="flex justify-center items-center">
                                <img src= {`${staticFile}/${data ? data.photo[0].photo : ''}`} className=' h-80 w-60 w- ' alt="avatar"/>
                            </div> : 
                            !error && loading  ? <div className='w-64 h-64 animate-pulse bg-slate-700 bg-opacity-35 rounded-xl'></div> : <div className='w-64 h-64 border-2 border-gray-300 rounded-xl flex justify-center items-center p-5'> <p>Erreur lors du chargement de l&apos;image</p></div>
                            }
                        </div>
    
                        <div className="p-5 mt-16">
                            <div className=" mb-5">
                                <span className=' font-serif bg-slate-600 py-1 px-3 rounded-md '>Moïse Kafeka</span>
                            </div>
    
                            <div className="flex">
                                <p className='sm:text-4xl text-3xl font-semibold '>Je&nbsp;suis <span className="text-teal-500 flex"> <Type/> </span></p>
                            </div>
    
                            <div className="my-8">
                                <p> J&apos;ai de l&apos;experience dans le dessin à crayon et numérique depuis maintenant plus 5 ans.</p>
                                <p> Ma spécialité étant le portrait je m&apos;entraine du jour le jour pour toujours me surpasser et satisfaire mes clients</p>
                            </div>
    
                            <div className="flex gap-x-4">
                                <button className="btn blue-btn">Louer mes services</button>
                                <button className="btn">Télécharger le CV <i className="uil uil-file-alt"></i></button>
                            </div>
                        </div>
    
                        <div className="mr-40 pb-0 hidden lg:block">
                        {!loading && !error ? <img src= {`${staticFile}/${data ? data.photo[0].photo : ''}`} className=' h-3/4 w-96 float-right' alt="avatar"/> : 
                            !error && loading ? <div className='w-64 h-64 animate-pulse  bg-slate-700 bg-opacity-35 rounded-xl'></div> : <div className='w-64 h-64 border-2 border-gray-300 rounded-xl flex justify-center items-center p-5'> <p>Erreur lors du chargement de l&apos;image</p></div>
                        }
                        </div>
                    </section>
                </div>
            )
        } else {
            
            return (
        
                <div className='w-full '>
                    <section className="lg:flex lg:mt-40 mt-32 justify-center lg:px-20 px-5 items-center">
                        
                        <div className="lg:mr-40 lg:pb-28 -mb-10 lg:hidden flex justify-center  ">
                            <div className='w-64 h-64 border-2 border-gray-300 rounded-xl flex justify-center items-center p-5'> <p>Pas de Photo de profil</p></div>
                        </div>
        
                        <div className="p-5 mt-16">
                            <div className=" mb-5">
                                <span className=' font-serif bg-slate-600 py-1 px-3 rounded-md '>Moïse Kafeka</span>
                            </div>
        
                            <div className="flex">
                                <p className='sm:text-4xl text-3xl font-semibold '>Je&nbsp;suis <span className="text-teal-500 flex"> <Type/> </span></p>
                            </div>
        
                            <div className="my-8">
                                <p> J&apos;ai de l&apos;experience dans le dessin à crayon et numérique depuis maintenant plus 5 ans.</p>
                                <p> Ma spécialité étant le portrait je m&apos;entraine du jour le jour pour toujours me surpasser et satisfaire mes clients</p>
                            </div>
        
                            <div className="flex gap-x-4">
                                <button className="btn blue-btn">Louer mes services</button>
                                <button className="btn">Télécharger le CV <i className="uil uil-file-alt"></i></button>
                            </div>
                        </div>
        
                        <div className="mr-40 pb-0 hidden lg:block">
    
                            <div className='w-64 h-64 border-2 border-gray-300 rounded-xl flex justify-center items-center p-5'> <p> Pas de Photo de profil</p></div>
                           
                        </div>
                    </section>
                </div>
            );
            
        }
    } else {
        
        return (
    
            <div className='w-full '>
                <section className="lg:flex lg:mt-40 mt-32 justify-center lg:px-20 px-5 items-center">
                    
                    <div className="lg:mr-40 lg:pb-28 -mb-10 lg:hidden flex justify-center  ">
                        {(!error && loading ) && <div className='w-64 h-64 border-2 border-gray-300 rounded-xl flex justify-center items-center p-5'> <p>Erreur lors du chargement de l&apos;image</p></div>}
                    </div>
    
                    <div className="p-5 mt-16">
                        <div className=" mb-5">
                            <span className=' font-serif bg-slate-600 py-1 px-3 rounded-md '>Moïse Kafeka</span>
                        </div>
    
                        <div className="flex">
                            <p className='sm:text-4xl text-3xl font-semibold '>Je&nbsp;suis <span className="text-teal-500 flex"> <Type/> </span></p>
                        </div>
    
                        <div className="my-8">
                            <p> J&apos;ai de l&apos;experience dans le dessin à crayon et numérique depuis maintenant plus 5 ans.</p>
                            <p> Ma spécialité étant le portrait je m&apos;entraine du jour le jour pour toujours me surpasser et satisfaire mes clients</p>
                        </div>
    
                        <div className="flex gap-x-4">
                            <button className="btn blue-btn">Louer mes services</button>
                            <button className="btn">Télécharger le CV <i className="uil uil-file-alt"></i></button>
                        </div>
                    </div>
    
                    <div className="mr-40 pb-0 hidden lg:block">

                        {(!error && loading) && <div className='w-64 h-64 border-2 border-gray-300 rounded-xl flex justify-center items-center p-5'> <p>Erreur lors du chargement de l&apos;image</p></div>}
                       
                    </div>
                </section>
            </div>
        );
    }
}