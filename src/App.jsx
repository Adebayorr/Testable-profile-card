import { useState, useEffect } from 'react'
import profileImage from './assets/profile-image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.css'

function App() {

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setTime(Date.now()), 1000);
    return () => clearInterval(timer); // Cleanup prevents memory leaks
  }, []);

  return (
    <article data-testid="test-profile-card">
      <div className="banner">

      </div>
      <header>
        <figure>
          <img 
            src={profileImage} 
            alt="Fatai Raheem image headshot" 
            data-testid="test-user-avatar" 
          />
        </figure>
        <h2 className='name' data-testid="test-user-name" aria-label='Author Name'>Fatai Olalekan Raheem</h2>
      </header>

      <p data-testid="test-user-bio">
        I'm AbdulFatai. I studied English Language but I eventually drifted toward web design and eventually Web development. Hence, why 
        I am currently an intern at HNG.
      </p>

      <div data-testid="test-user-time" aria-live="polite">
        {time}
      </div>

      <ul data-testid="test-user-social-links" className='socios'>
        <a href="https://github.com/Adebayorr" 
          target="_blank" rel="noopener noreferrer" 
          data-testid="test-user-social-github"> <FontAwesomeIcon icon={faGithub} fontSize={32} /></a>
        <a href="https://www.linkedin.com/in/bayorrraheem/" target="_blank" rel="noopener noreferrer" data-testid="test-user-social-linkedin"><FontAwesomeIcon icon={faLinkedin} fontSize={32} /></a>
        <a href="https://x.com/RAdebayorr74806" target="_blank" rel="noopener noreferrer" data-testid="test-user-social-twitter"><FontAwesomeIcon icon={faXTwitter} fontSize={32}/></a>
      </ul>

      <section className='hobbies'>
        <h3>Hobbies:</h3>
        <ul data-testid="test-user-hobbies">
          <li>Coding</li>
          <li>Reading</li>
          <li>Watching Movies</li>
          <li>Jogging</li>

        </ul>
      </section>

      <section className='dislikes'>
        <h3>Dislikes:</h3>
        <ul data-testid="test-user-dislikes">
          <li>Mosquitos</li>
        </ul>
      </section>
    </article>
  )
}

export default App