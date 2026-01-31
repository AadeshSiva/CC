import './Section.css'
import homebg from '/homebg.svg'
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Home() {
    return (
        <main className="home-main" id='home'>
            <img src={homebg} alt="" class="home-bg" />

            <div className="home-middle">
                <p className="home-middle-head">
                    Cool more using less with <br />thermoelectrics.
                </p>
                <a href='#features' className="home-middle-btn">Explore <MdOutlineArrowOutward className="home-middle-btn-arrow" /></a>
            </div>
        </main>

    )
}