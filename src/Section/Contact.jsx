export default function Contact() {
    return (
        <main className="contact-main" id="contact">



            <div className="team-list contact-inner">
                <p className="team-head">Our Team</p>
                <div className="team-items">
                    <div className="team-profile tp1">
                    </div>
                    <div className="team-data">
                        <div className="team-info">
                            <p className="team-name">Prof. Vellaisamy Arul Lenus Roy</p>
                            <p className="team-role">Technical Advisor</p>
                        </div>
                        <div className="team-social">
                            <a href=""><img src="./insta.svg" alt="" className="social-img" /></a>
                            <a href=""><img src="./x.svg" alt="" className="social-img" /></a>
                            <a href=""><img src="./linkedin.svg" alt="" className="social-img" /></a>
                            <a href=""><img src="./facebook.svg" alt="" className="social-img" /></a>

                        </div>
                    </div>
                </div>

                <div className="team-items">
                    <div className="team-profile tp2">
                    </div>
                    <div className="team-data">
                        <div className="team-info">
                            <p className="team-name">Dr. Karthikeyan Vaithinathan</p>
                            <p className="team-role">Director</p>
                        </div>
                        <div className="team-social">
                            <a href=""><img src="./insta.svg" alt="" className="social-img" /></a>
                            <a href=""><img src="./x.svg" alt="" className="social-img" /></a>
                            <a href=""><img src="./linkedin.svg" alt="" className="social-img" /></a>
                            <a href=""><img src="./facebook.svg" alt="" className="social-img" /></a>

                        </div>
                    </div>
                </div>

                <div className="team-items">
                    <div className="team-profile tp3">
                    </div>
                    <div className="team-data">
                        <div className="team-info">
                            <p className="team-name">Leung Pui Fai, Pirry</p>
                            <p className="team-role">Business Lead</p>
                        </div>
                        <div className="team-social">
                            <a href=""><img src="./insta.svg" alt="" className="social-img" /></a>
                            <a href=""><img src="./x.svg" alt="" className="social-img" /></a>
                            <a href=""><img src="./linkedin.svg" alt="" className="social-img" /></a>
                            <a href=""><img src="./facebook.svg" alt="" className="social-img" /></a>

                        </div>
                    </div>
                </div>

                <div className="team-items">
                    <div className="team-profile tp4">
                    </div>
                    <div className="team-data">
                        <div className="team-info">
                            <p className="team-name">Dr. Yeung Chi Shun, Oliver</p>
                            <p className="team-role">Technical Lead</p>
                        </div>
                        <div className="team-social">
                            <a href=""><img src="./insta.svg" alt="" className="social-img" /></a>
                            <a href=""><img src="./x.svg" alt="" className="social-img" /></a>
                            <a href=""><img src="./linkedin.svg" alt="" className="social-img" /></a>
                            <a href=""><img src="./facebook.svg" alt="" className="social-img" /></a>

                        </div>
                    </div>
                </div>
            </div>




            <div className="contact-side">
                <p className="team-head contact-heading">Contact Us</p>

                <div className="contact-form">
                    <p className="contact-sub">
                        Get in touch with us or write us your message
                    </p>

                    <form className="form-wrap">
                        <div className="form-group">
                            <input type="text" placeholder="Name" />
                        </div>

                        <div className="form-group">
                            <input type="email" placeholder="Email" />
                        </div>

                        <div className="form-group">
                            <textarea placeholder="Message" rows="4"></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            </div>


        </main>
    )
}