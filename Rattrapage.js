import React, {useState, useEffect} from "react";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Legend, Bar} from 'recharts';
import { Box, DropButton, Text, Paragraph} from "grommet";

import datamovie2019 from '../data_movie_2019_Final.json';

//const data = (d) => {d.Genre => d.Genre.toUpperCase()}

var occurences = datamovie2019.reduce(function (r, row) {
    r[row.Genre] = ++r[row.Genre] || 1;
    return r;
    }, {});
    
    var result = Object.keys(occurences).map(function (key) {
    return { Genre: key, Proportion: occurences[key] };
    });
    

    console.log(result);


      
  const Rattrapage = () => {

    const [data, setData] = useState([]);

    

    useEffect(() => {

        //Appels (fetch) api ici

        fetch(
            "https://www.data.gouv.fr/fr/datasets/r/b39196f2-97c4-42f4-8dee-5eb07e823377"    )
                  .then((response) => response.json())
                  .then((data) => setData(data));
                }, []);
    

    return(
        <Box align="center" pad="small" >
            <Text>Rattrapage Dataviz</Text>

            <Text margin="medium" weight="bold" color="accent">Exercice 1</Text>
            <Text margin="small">Grace à cette API :https://www.data.gouv.fr/fr/datasets/donnees-relatives-aux-personnes-vaccinees-contre-la-covid-19/#_</Text>
            <Text margin="small">(appel api grâce à fetch + traitement de la donnée JSON)</Text>
            <Text margin="small">Afficher ci-dessous l'évolution du nombre de vaccinés entre 11 janvier et le 26 janvier grâce à un graph rechart</Text>
             
        {/*LineChart Exercice 1*/}
            <Box margin="medium">
                <Text margin="small" color="ok">Évolution du nombre de vaccinés entre le 11 janvier et le 26 janvier 2021</Text>
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="total_vaccines" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
            </Box>
     
            <Text margin="medium" weight="bold" color="accent">Exercice 2</Text>
            <Text margin="small">Depuis cette page wikipédia :https://fr.wikipedia.org/wiki/Liste_de_films_fran%C3%A7ais_sortis_en_2019</Text>
            <Text margin="small">Représenter de la manière de votre choix la proportion des films sortis en 2019 en France en fonction de leurs genre</Text>
            <Text margin="small">(écrire un script python de scraping et utiliser le fichier JSON généré par ce script)</Text>
        
        {/*BarChart Exercice 2*/}
            <Box margin="medium" align="center" pad="small">
                <Text margin="medium" color="ok">Proportion des films sortis en 2019 en France par Genre</Text>
                <BarChart width={1500} height={500} data={result}>
                    <CartesianGrid strokeDasharray="10 10" />
                    <XAxis dataKey="Genre" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Genre" fill="#8884d8" />
                    <Bar dataKey="Proportion" fill="#82ca9d" />
                </BarChart>
            </Box>
     
            <Text margin="medium" weight="bold" color="accent">Exercice 3: Question de cours</Text>
            <Text margin="small">Rappeler quels sont les 3+3v du BigData, les détailler et représenter ces informations de la manière de votre choix</Text>

            <Box margin="small" align="center" >
                <Text margin="small" color="ok">Les 3+3v du BigData</Text>
                <Text margin="small">Afin de visualiser les détails associés à chaque V, merci de bien vouloir cliquer sur le bouton qui vous intéresse.</Text>
            </Box>

    {/*3V*/}      
            <Box margin="small" direction="row" >

    {/*V VOLUME*/}
                <DropButton
                    size="large"
                    margin="medium"
                    color="#FF4040"
                    label="Volume"
                    dropAlign={{ top: 'bottom', right: 'right' }}
                    dropContent={
                        <Box>
                            <Paragraph margin="medium">
                                <b>- Nombre de clics</b> <br/>
                                <b>- Traitement des flux</b> <br/>
                                <b>- L'analyse des recherches</b> <br/>
                                &nbsp;&nbsp;Exemple : Le clic sur YouTube va modifié légèrement 
                                &nbsp;&nbsp;l’algorithme de YouTube.
                        </Paragraph>
                        </Box>
                    }
                />

    {/*V VITESSE*/}
                <DropButton
                    size="large"
                    margin="medium"
                    color="#FFAA15"
                    label="Vitesse (vélocité ou célérité)"
                    dropAlign={{ top: 'bottom', center: 'center' }}
                    dropContent={
                        <Box>
                            <Paragraph margin="small">
                                <b>- Temps réel et asynchrone</b> <br/>
                                <b>- Algorithmes de traitement</b> <br/>
                                <b>- Gestion de la vitesse</b> <br/>
                                &nbsp;&nbsp;Vitesse des réseaux de plus en plus importante.<br/>
                                &nbsp;&nbsp;Problème avec les flux continus de données.<br/>
                                &nbsp;&nbsp;Problématique d’hardware et de software<br/>
                                &nbsp;&nbsp;avec des algorithmes capable de ranger les données.<br/>
                                &nbsp;&nbsp;(tronçonnement ou chunk,<br/>
                                &nbsp;&nbsp;utilisation de la force des thread)
                            </Paragraph>
                        </Box>
                        
                    }
                />

    {/*V VARIETE*/}
                <DropButton
                    size="large"
                    margin="medium"
                    color="#7D4CDB"
                    label="Variété"
                    dropAlign={{ top: 'bottom', left: 'left' }}
                    dropContent={
                        <Box>
                            <Paragraph margin="small">
                                <b>- Données structurés</b> <br/>
                                &nbsp;&nbsp;(Ex SQL ou fichier au format JSON) <br/>
                                <b>- Données semi structurées</b> <br/>
                                &nbsp;&nbsp;(Ex clics, logs et temps réel) <br/>
                                <b>- Données non structurées</b> <br/>
                                &nbsp;&nbsp;(pixel, fichier de couleur, rbg) <br/>
                                &nbsp;&nbsp;(Ex Données textes et médias, <br/>
                                &nbsp;&nbsp;Clusters Hadoop ou NoSQL) <br/>
                            </Paragraph>
                        </Box>
                        
                    }
                />
            </Box>
            
            <Box margin="large" gap="xlarge"/>
            <Box margin="large" gap="xlarge"/>

    {/*+3V*/}
            <Box margin="small" direction="row" gap="medium" >
    
    {/*V VERACITE*/}
                <DropButton
                    size="large"
                    margin="medium"
                    color="#00C781"
                    label="Veracité"
                    dropAlign={{ top: 'bottom', right: 'right' }}
                    dropContent={
                        <Box>
                            <Paragraph margin="small">
                                <b>- Besoin d'analyses</b> <br/>
                                <b>- Risque d'incertitude</b> <br/>
                                <b>&nbsp;&nbsp;=&gt; Diminution de l'efficacité des données</b> <br/>
                                On le sait, sur internet, il n’y a pas que la vérité.<br/>
                                Cela arrive d’avoir des bugs et des données vides ou mal formées et qui ne s’intègre pas dans la véracité des données de notre architecture de type big data par exemple. <br/>
                                Valeurs nulles : bugs dans la code 
                            </Paragraph>
                        </Box>
                        
                    }
                />

    {/*V VALEUR*/}
                <DropButton
                    size="large"
                    margin="medium"
                    color="#81FCED"
                    label="Valeur"
                    dropAlign={{ top: 'bottom', center: 'center' }}
                    dropContent={
                        <Box>
                            <Paragraph margin="small">
                                <b>Calcul de la valeur commerciale d’une donnée</b> <br/>
                                &nbsp;&nbsp;- Soit pour le vendre <br/>
                                &nbsp;&nbsp;- Soit pour le positionner dans un schéma de données <br/>
                                &nbsp;&nbsp;- Ex : Facebook (valeur de sa BDD inconnue car chiffre faramineux) 
                            </Paragraph>
                        </Box>
                        
                    }
                />

    {/*V VARIABILITE*/}
                <DropButton
                    size="large"
                    margin="medium"
                    color="#FD6FFF"
                    label="Variabilité"
                    dropAlign={{ top: 'bottom', left: 'left' }}
                    dropContent={
                        <Box>
                            <Paragraph margin="small">
                                <b>- Systèmes asynchrones</b> <br/>
                                <b>- Architecture State full</b> <br/>
                                Traitement de données (parfois non structurés et variables donc nous devons utiliser des moyens algorithmique plus malins) <br/>
                                <b>Exemple de la bibliothèque :</b> 
                                &nbsp;&nbsp;À un moment donnée, il faut avoir la possibilité de modifier un mot sur la 103ème page du livre 20 milieux sous les mers. 
                                Permission de modifier les données déjà enregistrés.<br/>
                                Données non immuables. <br/>
                                Différence entre big data web et une bibliothèque.<br/>
                            </Paragraph>
                        </Box>
                        
                    }
                />

            </Box>
            
            <Box margin="large" gap="xlarge"/>
            <Box margin="large" gap="xlarge"/>
            <Box margin="large" gap="xlarge"/>

        </Box>
            
        
    )
}


export default Rattrapage;