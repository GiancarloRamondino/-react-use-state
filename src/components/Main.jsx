import React from "react";
import Card from "./Card.jsx";
import Button from "./Button.jsx"; 
import languages from "../assets/languages.js"; 


function Main() {
    const [selectedLanguage, setActiveLanguage] = useState(null);
    const renderSelectedLanguage = () => {
        if (selectedLanguage === null) { // controollo see la variabile è nulla e restituiscoo messaggio
            return (
                <h3>Nessun linguaggio selezionato</h3>
            );
        };//se la variabile non è nulla, restituisco il titolo e la descrizione del linguaggio selezionato
        const { title, description } = selectedLanguage; // destrutturo la variabile per accedere al titolo e alla descrizione
        return ( 
            <> 
                <Card title={title} description={description} /> 
            </>     
        );
    };

    // Removed unused renderButtons function
    const renderButtons = () => {
        return languages.map((language) => {
            const active =
            selectedLanguage && language.id === selectedLanguage.id
            ? "btn-warning"
            : "btn-primary";
            return (
               <Button 
                    title={language.title} 
                    key={language.id} 
                    isActive={active} 
                    onSelect={() => setActiveLanguage(language)}
                />
            ); 
        });  
    };

    return (
        <div className="container">
            <div className="mb-4">
                {renderButtons()}            
            </div>
            <div>
                {renderSelectedLanguage()}          
            </div>
        </div>
    );
}

export default Main;