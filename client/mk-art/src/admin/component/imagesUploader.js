import axios from 'axios';
import React, {useState} from 'react';

export default function ImageUploader (props)
{
    const [selectedFile, setSelectedFile] = useState(null);
    const [serverResponse, setServerResponse] = useState('');

    function onFileChange(e) {

        setSelectedFile(e.target.files[0]);
    };

    async function onFileUpload () {

        const formData = new FormData();

        formData.append (
            `${props.nom}`,
            selectedFile,
            selectedFile.name
        );

        console.log (selectedFile);

        try {

            const response = await axios.post(`http://192.168.43.47:5000/api/v1/admin/${props.route}`, formData);
            setServerResponse(response.data);

        } catch (error) {
            console.log (error)
        }

    };
   

    if ( selectedFile ) {

        return (
            <div style={{padding: '100px', position: 'relative'}}>

                {serverResponse === '' ? ( <div>
                    <h2> Details du fichier</h2>
                <p> Nom du fichier: {selectedFile.name}</p>
                <button onClick={onFileUpload}> Telecharger </button>
                </div>) :  (props.route === 'profil' ? <h1> Profil mis a jour avec succes</h1> : <h1> Photo mise dans la gallerie avec succes</h1>)}
            </div>
        )
    } else {
        
        return  ( 
            
            <div style={{padding: '100px', position: 'relative'}}> 
            <input type='file' onChange={onFileChange} />
            <br/>
            <h4> Choisissez le fichier avant de clicker</h4>
        </div>)
    }

    
}