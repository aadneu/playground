import React from 'react'


const AboutMe = () => {

    

    

  return (
    <section id="om">
        <div className='text-center'> 
            <h2>HVEM ER JEG?</h2>
        </div>

     <div className='container-lg'>
       
       <div className="row my-5">
            <div className='col-6'>
                <img src={require('./aadne.jpg')} className='img-fluid'  alt=''/>      
            </div>

            <div className='col '>
                <p>
                    Jeg heter Ådne, og jeg er for tiden 35 år gammel. 
                    Blant mine interesser er familien min, uformelle samtaler om livet, nyte en god kopp sort gull, lage vafler, lytte til musikk.
                 <p>
                
                </p>   
                    Jeg liker å holde meg i form gjennom regelmessige treningsøkter, tidligere var det fotball, nå er det helst styrketrening eller kampsport. Om vinteren liker jeg både langrenn og alpint. 
                    I tillegg til disse hobbyene, liker jeg også å spille spill, spesielt Rocket League og Heroes of Newerth.
                </p>
                <p>
                    Når det gjelder mine ferdigheter, behersker jeg HTML, CSS, Bootstrap, JavaScript og React, noe som gjør meg godt kjent med front-end webutviklingsteknologier. 
                    I tillegg har jeg noe erfaring med C#. Disse ferdighetene gjør at jeg kan bidra til webutviklingsprosjekter og oppgaver innen programvareutvikling.
                </p>

            </div>
        </div>
        
        
     </div>
    </section>
  )
}

export default AboutMe