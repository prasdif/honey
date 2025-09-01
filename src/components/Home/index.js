import './index.css';
import InfoPopup from '../InfoPopup';

const Home = () => {
  return (
    <>
      <section className="hero">

        {/* LEFT COLUMN - IMAGES */}
        <div className="hero-media">
          <img
            src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756566194/Container_jyfjlg.png"
            alt="Manuka honey jar"
          />

          <div className="subheadingparas">
            <img
              className="bodypotos"
              src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756648312/mak_ghcoch.webp"
              alt="Manuka honey background"
            />
            <img
              className="bodypotos"
              src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756648794/1-manuka-honey-web-24_sadaop.webp"
              alt="Manuka honey background"
            />
          </div>

          <img
            className="bodyface"
            src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756649073/Item_Link_je0o6s.png"
            alt="Manuka honey background"
          />

          <div className="bodynewcontainer">
            <img
              className="bodynew"
              src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756649413/1-manuka-honey-web-24_-1_cb2mtf.webp"
              alt="Manuka honey background"
            />
            <img
              className="bodynew"
              src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756649413/1-manuka-honey-web-24_-3_fycokc.webp"
              alt="Manuka honey background"
            />
          </div>

          <div className="bodynewcontainer3">
            <img
              className="bodyimg"
              src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756649755/US_24_Product_tiles_250g__2000_x_2000_06_mquaa3.webp"
              alt="Manuka honey background"
            />
            <img
              className="bodybottom"
              src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756649755/NEwZealandManukaHoneyUMF24_-06-136149_1_mmyaa3.webp"
              alt="Manuka honey background"
            />
          </div>
        </div>

        {/* RIGHT COLUMN - TEXT */}
        <div className="hero-copy">
          <h1 className="heading">
            Manuka Honey <br />
            <span className="subheadingpara">
              UMF<span className="tm">TM</span> 24+ <br />
              MGO 1122+
            </span>
          </h1>

          <div className="popscontainer">
            <InfoPopup className="pops" />
          </div>

          <div className="optimse-container">
            <p className="optimse-heading">
              The Optimiser
              <span className="heart">💛💛💛💛💛 825 REVIEWS</span>
            </p>
          </div>

          <p className="midllepara">
            For those times in life when quality comes first.
            This pure UMF™ 24+ Manuka Honey<br/> is powerfully active,
            sourced from wild and rugged locations around Aotearoa New Zealand<br/>
            and great for almost all uses. It has a full, delicious flavour
            and your body will love you for it.
          </p>

          <div className="proofcontainer">
            <img className="proofbatch" src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756654088/UMF-Honey-Association-UMFHA-1_jhtoa8.avif" alt="UMF proof logo" />
            <img className="proofbatchs" src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756654088/Non-GMO-Manuka-Honey_dpyve2.avif" alt="UMF proof logo" />
            <img className="proofbatchs" src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756654087/Glyphosate-Free-Manuka-Honey_elglfk.avif" alt="UMF proof logo" />
            <img className="proofbatchs" src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756660175/certifications_puetay.png" alt="UMF proof logo" />
            <img className="proofbatchs" src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756660229/New-Zealand-Fernmark-Manuka-Honey_scajg5.avif" alt="UMF proof logo" />
            <img className="proofbatchsl" src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756660362/certifications_zn4sgn.png" alt="UMF proof logo" />
          </div>

          <p className="paraproduct">
            SIZE (SELECT ONE)<br />
            Variant: 125g | 4.40Z
          </p>

          {/* Decorative background images */}
          <img src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756565739/manu_fgoehk.webp" className="star" alt="Manuka honey background" />
          <img src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756700024/200507dc6ca527981f47be16abbf956084e04dbd_v9ywls.png" className="star2" alt="Manuka honey background" />
          <img src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756703142/d07b7562a11ef9ede254e5ffddc9a19e57a99608_sjkxue.png" className="star2" alt="Manuka honey background" />
          <img src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756703142/7de1f09601655c832d5893519fdcced0e555d0c4_v1w2jx.png" className="star2" alt="Manuka honey background" />

          <div className="starscontainers">
            <img src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756703142/f429565081532e5175a5f130ddd6ae84d203fb8c_jibchr.png" className="star2" alt="Manuka honey background" />
            <img src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756703142/58c66a54fbac705a9aec08ed66696b0281f25e4a_f15mju.png" className="star2" alt="Manuka honey background" />
            <img src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756703142/9e1262aea547565b6267d2ade6938b34433af5bb_1_t28h3q.png" className="star2" alt="Manuka honey background" />
          </div>

          <p className="pricecheck">PAYMENT OPTION (SELECT ONE)</p>

          <div className="subscription-container">
            <div className="option active">
              <p className="title">One-time purchase</p>
              <p className="price">$55.88 <span className="currency">USD</span></p>
            </div>
            <div className="option">
              <p className="title">Subscribe &amp; save 20%</p>
              <p className="price">$44.70 <span className="currency">USD</span></p>
            </div>
          </div>

          <div className="cart-section">
            <div className="quantity-container">
              <p className="quantity-label">SELECT QUANTITY</p>
              <div className="quantity-box">
                <button className="qty-btn">-</button>
                <span className="qty-value">1</span>
                <button className="qty-btn">+</button>
              </div>
            </div>
            <button className="add-to-cart">ADD TO CART</button>
          </div>

          {/* Bundle Card */}
          <div className="bundle-card">
            <div className="bundle-products">
              <div className="bundle-item">
                <img src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756706387/066620652678ace2a8b18d99958799a6750696c0_thvm9f.png" alt="UMF 20+" className="bundle-img" />
                <p>UMF 20+</p>
                <select>
                  <option>250g</option>
                  <option>500g</option>
                </select>
              </div>
              <span className="bundle-plus">+</span>
              <div className="bundle-item">
                <img src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756706387/066620652678ace2a8b18d99958799a6750696c0_thvm9f.png" alt="UMF 24+" className="bundle-img" />
                <p>UMF 24+</p>
                <select>
                  <option>250g</option>
                  <option>500g</option>
                </select>
              </div>
              <span className="bundle-plus">+</span>
              <div className="bundle-item">
                <img src="https://res.cloudinary.com/dztmp3saa/image/upload/v1756706387/999979079a923079d63d37a1077ca3eeb88fd930_znaxd0.png" alt="Wooden Spoon" className="bundle-img" />
                <p>Wooden Spoon</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;
