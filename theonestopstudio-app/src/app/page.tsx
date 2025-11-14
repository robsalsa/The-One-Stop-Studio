import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Slideshow from "@/components/Slideshow";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Slideshow (legacy container handled inside component) */}
        <Slideshow />

        {/* Primary CTA buttons */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button className="button-54" role="button">
            <Link href="/services">Check Out Our Services!</Link>
          </button>
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="button-54" role="button">
            <Link href="/es/services">En Español?</Link>
          </button>
        </div>

        {/* Scrolling ad banner */}
        <section className="ad-container" aria-label="Promotions">
          <div className="scrolling-ad">
            <span>CHECK SOCIALS FOR DISCOUNTS</span>
            <span>CHECK SOCIALS FOR DISCOUNTS</span>
            <span>CHECK SOCIALS FOR DISCOUNTS</span>
            <span>CHECK SOCIALS FOR DISCOUNTS</span>
          </div>
        </section>

        {/* Reviews section */}
        <section id="reviews" className="menu-select" aria-labelledby="reviews-heading">
          <h2 id="reviews-heading">Read What They Are Saying Online!</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <h3>Wendy is so dope.</h3>
              <p className="description">
                Wendy is so dope. Called and made an appointment to put a down payment before I walked in. She
                definitely took care of me with the haircut and line up. Who would've thought of the hot towel and
                mask to make sure your face stand out after walking out a new person with a new look. Thank you for
                hooking me up. If I'm near the area best believe I'll be back soon.
              </p>
              <span className="price">Damon W. - Yelp</span>
            </div>
            <div className="menu-item">
              <h3>Found my new barber! Wendy is the boss!</h3>
              <p className="description">
                Wendy got me in for a last minute cut at 8pm and surpassed my expectations. You know you found the
                right shop when you walk in and she got the hot Cheetos, flamin hot Doritos, and the Funyons on deck.
                Found my new barber! Wendy is the boss!
              </p>
              <span className="price">Cameron P. - Yelp</span>
            </div>
            <div className="menu-item">
              <h3>LOVE The One Stop Studio!!!!</h3>
              <p className="description">
                Just gotta say, went in today and got my usual bi-weekly beard trim from Wendy. Decided to spend a
                lil more time and money for the facial and even got my first post-pandemic bald fade. SO AMAZING!!!
                The time and attention to detail that Wendy puts into your care is what's best. I never feel rushed,
                she has the best touch and uses great products! My skin still feels great -- hours later! LOVE The One
                Stop Studio!!!!
              </p>
              <span className="price">Alan E. - Yelp</span>
            </div>
            <div className="menu-item">
              <h3>Wendy's a pro!! Hit her up!</h3>
              <p className="description">
                Wendy's a pro!! I usually break out when other barbers use a straight razor on my neck or face, but
                she's exceptionally clean and thoughtful and I never get that problem. My skin looks and feels great.
                Above and beyond a regular haircut & shave. Flexible scheduling too, which I appreciate with my odd
                work hours. Hit her up!
              </p>
              <span className="price">Byron L. - Yelp</span>
            </div>
          </div>
        </section>

        {/* Booking button */}
        <div style={{ textAlign: "center" }}>
          <button className="button-54" role="button" style={{ width: "300px" }}>
            <Link href="/booking">Book an Appointment</Link>
          </button>
        </div>

        {/* Second ad banner (optional) */}
        <section className="ad-container" aria-label="Promotions duplicate">
          <div className="scrolling-ad">
            <span>CHECK SOCIALS FOR DISCOUNTS</span>
            <span>CHECK SOCIALS FOR DISCOUNTS</span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
