import gsap from 'gsap'
import { openingHours, socials } from '../../constants'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'

const Contact = () => {

    useGSAP(() => {
        const titleSplit = new SplitText('#contact h2', { type: 'chars, words' })
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: 'expo.out',
        })
        timeline.from((titleSplit.chars, titleSplit.words), {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            stagger: 0.06,            
        })
        .from('#contact h3, #contact p', {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            stagger: 0.06,
            delay: 0.5,
        })
        .to('#f-left-leaf', {
            y: -50,
            duration: 0.08,
            ease: 'expo.out',   
        })
        .to('#f-right-leaf', {
            y: 50,
            duration: 1,
            ease: 'expo.out',
        }, '<')
        
    })

  return (
    <footer id='contact'>
      <img src="/images/footer-right-leaf.png" alt="" id="f-right-leaf" />
      <img src="/images/footer-left-leaf.png" alt="" id="f-left-leaf" />
      <div className="content">
        <h2>Where to find us</h2>
        <div>
            <h3>Our Address</h3>
            <p>123 Main St, Anytown, USA</p>
        </div>
        <div>
            <h3>Contact Us</h3>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@ourcompany.com</p>
        </div>
        <div>
            <h3>Opening Hours</h3>
            {openingHours.map((time) => (
                <p key={time.day}>
                {time.day}: {time.time}
              </p>
            ))}
        </div>
        <div>
            <h3>Stay connected with us on social media!</h3>
            <div className="flex-center gap-5">
                {socials.map((social) => (
                    <a href={social.url} target="_blank" rel="noopener noreferrer" key={social.name}>
                        <img src={social.icon} alt={social.name} className="social-icon" />
                    </a>
                ))}
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Contact
