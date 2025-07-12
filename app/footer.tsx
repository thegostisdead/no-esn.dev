export function Footer() {
    return <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content grid-rows-2 p-10">
        <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
            <h6 className="footer-title">Explore</h6>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Enterprise</a>
            <a className="link link-hover">Security</a>
            <a className="link link-hover">Pricing</a>
        </nav>
    </footer>
}
