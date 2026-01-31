import './Section.css'

import real1 from '/real1.svg'
import real2 from '/real2.svg'
import real3 from '/real3.svg'

export default function Real() {
    return (
        <main className="real-main">
            <div className="real-left real-inner">
                <img src={real1} alt="" className="real-img" />
            </div>


            <div className="real-right real-inner">
                <div className="real-des-container">
                    <p className="real-des-head">Real-World Results</p>
                    <p className="real-des-sub">Our thermoelectric cooling technology has already demonstrated its effectiveness in demanding applications, such as achieving thermal comfort in lift cabins. We deliver tangible results in temperature reduction and energy savings. Performance data shows stable operation even under fluctuating load conditions, where conventional compressor systems often lose efficiency. The solid-state architecture also reduces maintenance requirements due to fewer moving parts, improving long-term reliability and lifecycle cost predictability.</p>
                    <p className="real-know-more">Know more</p>
                </div>

                <div className="real-bottom-images">
                    <div className="real-img-cover">
                        <img src={real2} alt="" className="real-img" />
                    </div>
                    <div className="real-img-cover">
                        <img src={real3} alt="" className="real-img" />
                    </div>
                </div>
            </div>
        </main>
    )
}


