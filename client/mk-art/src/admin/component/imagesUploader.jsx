/* eslint-disable react/prop-types */
import axios from '../../axiosUrl';
import {useState} from 'react';

export default function ImageUploader (props)
{
    const [selectedFile, setSelectedFile] = useState(null);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    function onFileChange(e) {

        setSelectedFile(e.target.files[0]);
    }

    async function onFileUpload () {
        
        const formData = new FormData();

        formData.append (
            `${props.nom}`,
            selectedFile,
            selectedFile.name
        );
        
        console.log ('ey')
        try {
            
            setLoading(true);
            // eslint-disable-next-line react/prop-types
            const response = await axios.post(`/admin/${props.route}`, formData, 
                {
                    headers: {"Content-Type": "multipart/form-data"}
                }
            );
            setResponse(response.data);

        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }

    }
   

    function getBack () {
        setSelectedFile(null);
    }

    if ( selectedFile ) {

        if (!error) {
            
            return (
                <div className='p-10  border-2 border-gray-200 mt-28 rounded-lg'>
    
                    {!response ? ( <div>
                        <h2 className=' bg-stone-700 rounded-md p-1 text-center my-3'> Details du fichier</h2>
                    <p> Nom du fichier: <span className='text-teal-400'> {selectedFile.name}</span></p>
                    <button disabled={loading} onClick={onFileUpload} className='mt-3'> {loading ? '...' : 'Telecharger'} </button>
                    <button disabled={loading} onClick={getBack} className='mt-3 mx-2'> Choisisez un autre fichier </button>
                    </div>) :  props.route === 'profil' ? 
                    <div className=' justify-center items-center flex flex-col'>
                        <h1 className='text-indigo-600 text-center text-xl'> Profil mis a jour avec succes</h1>
                        <button disabled={loading} onClick={getBack} className='mt-3 mx-2'> Choisisez un autre fichier </button>
                    </div>
                     : 
                     <div className=' justify-center items-center flex flex-col'>
                        <h1 className='text-indigo-600 text-center text-xl'> Photo mise dans la gallerie avec succes</h1>
                        <button disabled={loading} onClick={getBack} className='mt-3 mx-2'> Choisisez un autre fichier </button>
                     </div>}
                </div>
            )
        } else {
            return (
                <h1 className=' mt-28 text-xl'>{error.response ? `${error.response.data.message}` : 'Erreur de connexion'}</h1>
            )
        }
    } else {
        
        return  ( 
            
            <div className='p-5 rounded-md border-2 border-gray-100 mt-28 flex flex-col justify-center items-center'> 
            <input className='rounded-lg p-5 m-5' type='file' onChange={onFileChange} />
            <br/>
            <h4 className='text-center '> Choisissez le fichier avant de clicker</h4>
        </div>)
    }

    
}