import React, { useEffect, useState } from 'react'
import { useActionData } from 'react-router-dom'


const AboutMe = () => {

    const [paragraphs, setParagraphs] = useState(null);

    useEffect(() => {
        fetch('http://localhost/playgroundserver/aboutme.php')
        .then(response => response.json())
        .then(data => setParagraphs(data))
        .catch(error => console.error('error getting prgrph', error))

    }, [])

    const hardCodeParagraphs = () => {
        return (
            <div>
                <p>
                    Jeg heter Ådne, og jeg er for tiden 35 år gammel. 
                    Blant mine interesser er familien min, uformelle samtaler om livet, 
                    nyte en god kopp sort gull, lage vafler, lytte til musikk.
                </p>
                <p>
                    Jeg liker å holde meg i form gjennom regelmessige treningsøkter, 
                    tidligere var det fotball, nå er det helst styrketrening eller kampsport. 
                    Om vinteren liker jeg både langrenn og alpint. I tillegg til disse hobbyene, 
                    liker jeg også å spille spill, spesielt Rocket League og Heroes of Newerth.
                </p>
                <p>
                    Når det gjelder mine ferdigheter, behersker jeg HTML, CSS, Bootstrap, 
                    JavaScript og React, noe som gjør meg godt kjent med front-end 
                    webutviklingsteknologier. I tillegg har jeg noe erfaring med C#. 
                    Disse ferdighetene gjør at jeg kan bidra til webutviklingsprosjekter 
                    og oppgaver innen programvareutvikling.
                </p>  
                <p>
                    Dette er hardkodet.
                </p>
            </div>
          
        )
    }

  return (
    <section id="om">
        <div className='text-center my-5'> 
            <h3>HVEM ER JEG?</h3>
        </div>

     <div className='container-lg'>
       
       <div className="row my-5 justify-content-center">

            <div className='col-11 col-md-6 col-lg-5 order-2 order-md-1'>
                <img src={require('./aadne.jpg')} className='img-fluid'  alt=''/>      
            </div>
            <div className='col-11 col-md-6 col-lg-5 order-1 order-md-2'>
                
                {
                paragraphs ?
                paragraphs.map((prg) => (
                    <p key={prg.id}>{prg.paragraph}</p>
                )) : hardCodeParagraphs()
                }
                
            </div>
            
        </div>
        
        
     </div>
    </section>
  )
}

export default AboutMe