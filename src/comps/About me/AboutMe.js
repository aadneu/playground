import React from 'react'


const AboutMe = () => {

    

    const me = {
        name: 'Ådne',
        age: '30 + 5',
        interests: ['mor di','familien min','prate skit', 'kaffi', 'fotball',  'trening','ski/snowboard', 'rocket league', 'heroes of newerth'],
        skills: ['html','css', 'javascript', 'react', 'c#',],
        bilde: './img/aadne.jpg'
    }

  return (
    <div className='aboutme'>
        <h2>Overskrift</h2>
        <div className='aboutmecontent'>
            <div className='aboutmetext'>
             <ul>
                <li>Navn: {me.name}</li>
                <li>Alder: {me.age}</li>
                <li>Interesser inkluderer: {me.interests.map((interest,index) => (
                    <ul key={index}>
                        <li>
                            {interest}
                        </li>
                    </ul>
                ))}</li>
                <li>Ferdigheter: {me.skills.map((skill, index)=> (
                    <ul className='listskill' key={index}>
                    <li>{skill} </li> 
                    </ul>
                ))}</li>
            </ul> 
        </div>
        <div className='aboutmepic'>
        <img src={require('./aadne.jpg')} style={{width: '300px', height: 'auto'}} />
                
        </div>
        </div>
        
        
    </div>
  )
}

export default AboutMe