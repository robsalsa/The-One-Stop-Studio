export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white dark:border-white/10 dark:bg-black">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-base font-semibold">The One Stop Studio</h3>
            <p>
              Making you <span className="font-semibold">beautiful</span> since 2018.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-base font-semibold">Our Location</h3>
            <address className="not-italic">2922 S Western Ave, Los Angeles, CA 90018</address>
            <div className="mt-2 overflow-hidden rounded">
              <iframe
                title="Map to The One Stop Studio"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.183041912766!2d-118.30925409106783!3d34.02838015117795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b79db660ffbb%3A0x465d852ad147c4cb!2sThe%20One%20Stop%20Studio!5e0!3m2!1sen!2sus!4v1748734461845!5m2!1sen!2sus"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-40 w-full border-0"
              />
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-base font-semibold">Social</h3>
            <a
              href="https://www.instagram.com/theonestopstudiollc/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Follow Us
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-black/10 pt-4 text-xs text-zinc-600 dark:border-white/10 dark:text-zinc-400">
          <p>&copy; The One Stop Studio .llc, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
