import Link from "../Links";
import './style.css'

export default function Footer() {
    return (

        <footer >
           <article >
            <article className="firstSon">
                <div className="DivFirstSon">
                    <Link redirect="#">
                        <h6>SIZE GUILD</h6>
                    </Link>
                    <Link redirect="#">
                        <h6>RETURN POLICY</h6>
                    </Link>
                    <Link redirect="#">
                        <h6>IN-STORE PURCHASES</h6>
                    </Link>
                    <Link redirect="#">
                        <h6>WHERE TO BY</h6>
                    </Link>
                </div>
                <div className="DivFirstSon">
                    <Link redirect="#">
                        <h6>HELP / CONTACT US</h6>
                    </Link>
                    <Link redirect="#">
                        <h6>PRESS</h6>
                    </Link>
                    <Link redirect="#">
                        <h6>PRODUCT RECALLS</h6>
                    </Link>
                    <Link redirect="#">
                        <h6>CAREERS</h6>
                    </Link>
                </div>
                <div className="DivFirstSon">
                    <Link redirect="#">
                        <h6>TERMS</h6>
                    </Link>
                    <Link redirect="#">
                        <h6>SHIPPING INFO</h6>
                    </Link>
                    <Link redirect="#">
                        <h6>PRIVACY POLICY</h6>
                    </Link>
                    <Link redirect="#">
                        <h6>SUPPLY CHAIN DISCLOSURE</h6>
                    </Link>
                </div>
            </article>

            <aside className="secondySon">
                <h4>Get updates from SKALE.</h4>
                <div className="inputs">
                    <input type="email" name="inputEmail" id="inputEmail"
                     placeholder="subscribe your e-mail" />
                     <input type="submit" value="I'm in!" />
                </div>
                    
            </aside>
            </article> 

            <div className="RodapeFooter">
                <ul>
                    <li>
                    <Link redirect="#">
                        <h6>Conditions of Use</h6>
                    </Link>
                    </li>
                    <li>
                    <Link redirect="#">
                        <h6>Privacy Notice</h6>
                    </Link>
                    </li>
                    <li>
                    <Link redirect="#">
                        <h6>Interest-Based Ads</h6>
                    </Link>
                    </li>
                    
                    <li>
                        <h6><span>&copy; 1996-2022, Skale.com, Inc.</span></h6>
                    </li>
                </ul>
            </div>
        </footer>
    );
}