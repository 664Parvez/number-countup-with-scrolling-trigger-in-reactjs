import { useState } from 'react'
import './App.css'

// Countup and Scroll Trigger Module
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"

function App() {
  const [countScroll, setCountScroll] = useState(false)

  return (
    <>
      <ScrollTrigger onEnter={() => setCountScroll(true)} onExit={() => setCountScroll(false)}>

        <div style={{background: "#545454", padding: 30, marginTop: 1000, marginBottom: 400}}>
          <div className="row">
            <div className="col-lg-3">
              {
                countScroll ? <h1 style={{color: "#fff", textAlign: "center"}}><CountUp start={0} end={130} duration={5} delay={0} /> + </h1> : null
              }
              
            </div>
            <div className="col-lg-3">
              {
                countScroll ? <h1 style={{color: "#fff", textAlign: "center"}}><CountUp start={0} end={250} duration={5} delay={0} /> + </h1> : null
              }
            </div>
            <div className="col-lg-3">
              {
                countScroll ? <h1 style={{color: "#fff", textAlign: "center"}}><CountUp start={0} end={1000} duration={5} delay={0} /> + </h1> : null
              }
            </div>
            <div className="col-lg-3">
              {
                countScroll ? <h1 style={{color: "#fff", textAlign: "center"}}><CountUp start={0} end={70} duration={5} delay={0} /> + </h1> : null
              }
            </div>
          </div>
        </div>

      </ScrollTrigger>
    </>
  )
}

export default App
