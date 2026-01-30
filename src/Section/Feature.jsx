export default function Feature() {
    return (
        <main className="feature-main" id="features">
            <div className="feature-cards-wrapper">

                <div className="feature-card">
                    <div className="feature-text">
                        <p className="feature-text-head">
                            Solid-State PCM Integrated Technology
                        </p>
                        <div className="feature-text-sub">
                            A patented, compressor-less cooling system that combines 3D printed thermoelectrics with Phase Change Materials (PCM) for efficient cold energy storage.
                        </div>
                    </div>
                    <img src="./featurecard1.svg" alt="" className="feature-img" />
                </div>

                <div className="feature-card">
                    <img src="./featurecard2.svg" alt="" className="feature-img" />
                    <div className="feature-text">
                        <p className="feature-text-head">Superior Energy Efficiency</p>
                        <div className="feature-text-sub">
                            Delivers a high Coefficient of Performance (COP) of 3.8, achieving up to 60% in energy and cost savings compared to traditional air conditioners.
                        </div>
                    </div>
                </div>

                <div className="feature-card">
                    <div className="feature-text">
                        <p className="feature-text-head">Silent and Low-Maintenance Operation</p>
                        <div className="feature-text-sub">
                            Operates at a whisper-quiet 20 dB and offers a durable lifespan of 100,000 hours due to its solid-state architecture.
                        </div>
                    </div>
                    <img src="./featurecard3.svg" alt="" className="feature-img" />
                </div>

            </div>
        </main>
    );
}
