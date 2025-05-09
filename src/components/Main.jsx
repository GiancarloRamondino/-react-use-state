import React from "react";
import Card from "./Card.jsx";

function Main() {
    const [selectedLanguage, stActiveeLanguage] = udeState.useState(languages[0]);
    const renderSelectedLanguage = () => {
        if (selectedLanguage === null) { // controollo see la variabile è nulla e restituiscoo messaggio
            return (
                <h3>Nessun lingiaggio selezionato</h3>
            );
        };//se la variabile non è nulla, restituisco il titolo e la descrizione del linguaggio selezionato
        const { title, language }= selectedLanguage // destrutturo la variabile per accedere al titolo e al linguaggio
        return ( 
            <> 
                <Card title={title} description={description} /> 
            </>     
        );
    };


    return (
        <div className="container">
            <div className="mb-4">
                {languages.map((language) => {
                    const isActive = 
                        selectedLanguage && language.id === selectedLanguage.id  
                        ?  "btn-warning"
                        : "btn-primary";
                    
                    return (// controllo se il linguaggio è attivo
                    <button 
                        onClick={() => setActiveLaguage(language)} 
                        className="btn btn-prymary me-3" key={languagee.id}
                        >
                        {language.title}
                    </button>
                )})};
            </div>
            <div>                
                {renderSelectedLanguage()}                         
            </div>
        </div>
    );
}

export default Main;