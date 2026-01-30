import './Section.css'
export default function Better() {
    return (
        <main className="better-main">
            <div className="better-video-container">
                <video
                    className="better-video"
                    src="bettervid.mp4"
                    autoPlay
                    muted
                    loop
                />
                <p className="better-head">Experience the Future of Sustainable Cooling</p>
                <p className="better-sub">Transform your space with our advanced PCM-integrated cooling that creates zero noise. Enjoy superior thermal comfort today while lowering your energy consumption by half.</p>
                <p className="better-btn">Book an Appointment</p>
            </div>
            <div className="better-list">
                <div className="better-items">
                    <img src="./better1.svg" alt="" className='better-item-img' />
                    <p className="better-item-head">9,300 Btu/h</p>
                    <p className="better-item-sub">Cooling Output</p>
                </div>
                <div className="better-items">
                    <img src="./better2.svg" alt="" className='better-item-img' />
                    <p className="better-item-head">540W</p>
                    <p className="better-item-sub">Power Input</p>
                </div>
                <div className="better-items">
                    <img src="./better3.svg" alt="" className='better-item-img' />
                    <p className="better-item-head">8 kg</p>
                    <p className="better-item-sub">Light Weight</p>
                </div>
                <div className="better-items">
                    <img src="./better4.svg" alt="" className='better-item-img' />
                    <p className="better-item-head">20 dB</p>
                    <p className="better-item-sub">Quiet operation</p>
                </div>

            </div>
        </main>
    )
}