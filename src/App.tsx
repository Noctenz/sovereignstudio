import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const text =
    "Minecraft Studio ‎ ‎ • ‎ ‎ Models ‎ ‎ • ‎ ‎ Texture ‎ ‎ • ‎ ‎ Configuration ‎ ‎ • ‎ ‎ Commission ‎ ‎ •";

  // ================= BLOCK INSPECT =================
  useEffect(() => {
    const blockContextMenu = (e: MouseEvent) => e.preventDefault();

    const blockDevTools = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key.toLowerCase() === "u")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("keydown", blockDevTools);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("keydown", blockDevTools);
    };
  }, []);

  return (
    <div className="page">
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="navbar-inner">
          <img
            src="https://cdn.discordapp.com/attachments/988467646133579787/1463399483474710591/1.png?ex=6971b079&is=69705ef9&hm=a2848ad4fe6eec20db5b65a5647684e14875289680ad560645955cdc4707b27d&"
            alt="Sovereign Studio"
            className="navbar-logo-img"
          />

          <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#products" onClick={() => setMenuOpen(false)}>
              Products
            </a>
            <a
              href="https://discord.com/invite/MKxcHBV9xB"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </nav>

          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="overlay" />
        <div className="hero-content">
          <span className="badge">Commission Open</span>
          <div className="title-glow">
            <img
              src="https://imgur.com/a/GyFCzIK"
              alt="Sovereign Studio"
              className="title-image"
            />
          </div>
        </div>
      </section>

      {/* ================= RUNNING TEXT ================= */}
      <div className="running-text">
        <div className="running-inner">
          <span className="marquee-item">{text}</span>
          <span className="marquee-item">{text}</span>
          <span className="marquee-item">{text}</span>
          <span className="marquee-item">{text}</span>
          <span className="marquee-item">{text}</span>
          <span className="marquee-item">{text}</span>
          <span className="marquee-item">{text}</span>
          <span className="marquee-item">{text}</span>
        </div>
      </div>

      {/* ================= ABOUT ================= */}
      <section className="about" id="about">
        <p className="about-top-text">
          The world’s best companies rely on SovereignStudio to make better
          design decisions.
        </p>

        <div className="about-logos">
          <img src="https://imgur.com/YyrV6wF.png" alt="Alwination" />
          <img src="https://imgur.com/zlOm0sX.png" alt="CitizenCraft" />
        </div>

        <h2 className="about-title">About Sovereign Studio</h2>
        <div className="about-divider"></div>

        <p className="about-description">
          Welcome to the world of Blocky adventure. Make your server more
          interesting with resources from Sovereign Studio. We provide Minecraft
          Models, Minecraft Skins, Plugin Configurations, Custom Textures. You
          can get our resources through BuiltByBit or Polymart websites.
          <br />
          <br />
          Want something unique? We also accept commissions! We are ready to
          realize your Minecraft ideas whether for servers, personal projects,
          or content creators. Just tell us your concept, and let us build your
          dream world block by block.
        </p>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="products" id="products">
        {(() => {
          const products = [
            {
              title: "ProfileX — Discord Bot",
              image: "https://cdn.discordapp.com/attachments/988467646133579787/1463167391616733184/TAB_Configuration.png?ex=6972d292&is=69718112&hm=fc723493b86fc261c1556a3570e8dcea4603695391f84b3a286c123868b398c3&",
              tags: ["Utility", "DiscordBot"],
              priceId: "Rp67.500",
            },
            {
              title: "Elemental Orb Pack VOL 1 | 5 Type",
              image: "https://cdn.discordapp.com/attachments/988467646133579787/1463167391616733184/TAB_Configuration.png?ex=6972d292&is=69718112&hm=fc723493b86fc261c1556a3570e8dcea4603695391f84b3a286c123868b398c3&",
              tags: ["MMOItem", "MythicMobs"],
              priceId: "Rp121.500",
            },
            {
              title: "RankUp+ Menu | DeluxMenus | 3 Type",
              image: "https://cdn.discordapp.com/attachments/988467646133579787/1463167391616733184/TAB_Configuration.png?ex=6972d292&is=69718112&hm=fc723493b86fc261c1556a3570e8dcea4603695391f84b3a286c123868b398c3&",
              tags: ["DeluxMenu", "GUI"],
              priceId: "Rp27.000",
            },
            {
              title: "Training dummy - With Damage Indicator",
              image: "https://cdn.discordapp.com/attachments/988467646133579787/1463167391616733184/TAB_Configuration.png?ex=6972d292&is=69718112&hm=fc723493b86fc261c1556a3570e8dcea4603695391f84b3a286c123868b398c3&",
              tags: ["MythicMobs", "Mobs"],
              priceId: "Rp108.000",
            },
            {
              title: "AuraSkills Configuration",
              image: "https://cdn.discordapp.com/attachments/988467646133579787/1463167391616733184/TAB_Configuration.png?ex=6972d292&is=69718112&hm=fc723493b86fc261c1556a3570e8dcea4603695391f84b3a286c123868b398c3&",
              tags: ["AuraSkills", "GUI", "Texture"],
              priceId: "Rp94.500",
            },
            {
              title: "TAB Configuration",
              image: "https://cdn.discordapp.com/attachments/988467646133579787/1463167391616733184/TAB_Configuration.png?ex=6972d292&is=69718112&hm=fc723493b86fc261c1556a3570e8dcea4603695391f84b3a286c123868b398c3&",
              tags: ["TAB", "Texture"],
              priceId: "Rp40.500",
            },
            {
              title: "Rewards GUI - Oraxen & Itemadders",
              image: "https://cdn.discordapp.com/attachments/988467646133579787/1463167391616733184/TAB_Configuration.png?ex=6972d292&is=69718112&hm=fc723493b86fc261c1556a3570e8dcea4603695391f84b3a286c123868b398c3&",
              tags: ["Rewards", "GUI", "Texture"],
              priceId: "Rp27.000",
            },
          ];

          return (
            <>
              <div className="products-header">
                <div>
                  <span className="products-badge">OUR PRODUCT</span>
                  <h2>Explore Our Recently Latest Products!</h2>
                </div>

                <div className="products-stats">
                  <div className="stat-item">
                    <i className="fa-solid fa-check-circle stat-icon"></i>
                    <div className="stat-number">7</div>
                    <div className="stat-label">Finished Project</div>
                  </div>

                  <div className="stat-divider"></div>

                  <div className="stat-item">
                    <i className="fa-solid fa-cart-shopping stat-icon"></i>
                    <div className="stat-number">88</div>
                    <div className="stat-label">Purchases</div>
                  </div>
                </div>
              </div>

              <div className="products-top">
                <h3>Latest Product</h3>
              </div>

              <div className="products-grid">
                {products.map((p, i) => (
                  <div className="product-card" key={i}>
                    <div
                      className="product-thumb"
                      style={{ backgroundImage: `url(${p.image})` }}
                    />

                    <div className="product-body">
                      <h4>{p.title}</h4>

                      <div className="product-tags">
                        {p.tags.map((tag, idx) => (
                          <span key={idx}>{tag}</span>
                        ))}
                        <span className="sale">Sale</span>
                      </div>

                      <div className="product-prices">
                        <button className="price-id price-button"
                          onClick={() => {alert(`${p.title} : ${p.priceId}`);}}>
                          {p.priceId}
                        </button>
                        <button className="price-int price-button"
                          onClick={() => window.open("https://builtbybit.com/creators/sovereign-studio.502083/", "_blank")}>
                          International Buy
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          );
        })()}
      </section>
      {/* ================= FOOTER ================= */}
<footer className="footer">
  <div className="footer-inner">
    <div className="footer-text">
      © Copyright Sovereign Studios 2025 – 2026 all right reserved.
    </div>
    <div className="footer-sub">
      Developed by Noctenz
    </div>
  </div>

  <button
    className="scroll-top"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    aria-label="Scroll to top"
  >
    <i className="fa-solid fa-arrow-up"></i>
  </button>
</footer>
    </div>
  );
}
