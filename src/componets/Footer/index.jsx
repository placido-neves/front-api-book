import footer from "../../img/footer.svg"
import './styled.scss'

export default function Footer() {
    return (
        <>
            <div className="container">
                <img src={footer} alt="" />
                <hr className="line"></hr>
                <div>
                    <div className="footer-text">
                        <h4>Terms & Conditions</h4>
                        <h4>Privacy Policy</h4>
                        <div className="social">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}