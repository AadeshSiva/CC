import './Component.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">

                <img src='./whitelogo.svg' alt="Clima Circuit" className="footer-logo" />

                <p className="footer-tag">
                    Cool more using less with thermoelectrics.
                </p>
                {/* 
                <div className="footer-social">
                    <img src='./insta.svg' alt="" />
                    <img src='./x.svg' alt="" />
                    <img src='./linkedin.svg' alt="" />
                    <img src='./facebook.svg' alt="" /> */}
                {/* <img src={mail} alt="" /> */}
                {/* </div> */}
                <p className="footer-tag">
                    &copy; 2026 All rights recived
                </p>
            </div>
        </footer>
    )
}
