import React from "react";

import '../assets/scss/footer.scss';

import footerPhones from '../assets/img/footer-phones.png';
import qrImage from '../assets/img/qr.png';
import androidImage from '../assets/img/google-play.svg';
import iosImage from '../assets/img/app-store.svg';
import logo from '../assets/img/logo.svg';
import facebookLogo from '../assets/img/facebook-logo.svg';
import twitterLogo from '../assets/img/twitter-logo.svg';
import instagramLogo from '../assets/img/instagram-logo.svg';
import youtubeLogo from '../assets/img/youtube-logo.svg';
import penLogo from '../assets/img/pen-logo.svg';

class Footer extends React.Component{

    componentDidMount(){
        
    }

    render(){
       return (
           <div className="footer-container">
               <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="download-app-container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="footer-phone-container">
                                            <div className="footer-phones">
                                                <img src={footerPhones} alt="Footer Phone" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="download-right-container">
                                            <div className="qr-container">
                                                <div className="qr-image">
                                                    <img src={qrImage} alt="Qr Code for mobile app" />
                                                </div>
                                                <div>
                                                    <div className="qr-download-bold">??i??ek Sepeti Mobil Uygulamay?? ??ndirin</div>
                                                    <div>Mobil Uygulamay?? QR Kod ile ??ndirin.</div>
                                                </div>
                                            </div>
                                            <div className="download-container">
                                                <img src={androidImage} alt="Download from Google Play Store" />
                                                <img src={iosImage} alt="Download from App Store" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-menu-container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12 col-sm-12 footer-menu-left">
                                        <div className="mb-4">
                                            <img src={logo} alt="??i??eksepeti Logo" />
                                        </div>
                                        <div className="footer-social-icons mb-4">
                                            <a href="/#">
                                                <img src={facebookLogo} alt="Facebook Logo" />
                                            </a>
                                            <a href="/#">
                                                <img src={twitterLogo} alt="Twitter Logo" />
                                            </a>
                                            <a href="/#">
                                                <img src={instagramLogo} alt="Instagram Logo" />
                                            </a>
                                            <a href="/#">
                                                <img src={youtubeLogo} alt="Youtube Logo" />
                                            </a>
                                            <a href="/#">
                                                <img src={penLogo} alt="Pen Logo" />
                                            </a>
                                        </div>
                                        <div className="personal-data-info mb-4">
                                            CicekSepeti.com olarak ki??isel verilerinizin gizlili??ini ??nemsiyoruz. 6698 say??l?? Ki??isel Verilerin Korunmas?? Kanunu kapsam??nda olu??turdu??umuz ayd??nlatma metnine <a href="/#">buradan</a> ula??abilirsiniz.
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 col-sm-12">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-6">
                                                <div className="footer-menu">
                                                    <ul>
                                                        <li className="menu-header">Faydal?? Bilgiler</li>
                                                        <li><a href="/#">??i??ek Bak??m??</a></li>
                                                        <li><a href="/#">??i??ek E??li??inde Notlar</a></li>
                                                        <li><a href="/#">??i??ek Anlamlar??</a></li>
                                                        <li><a href="/#">??zel G??nler</a></li>
                                                        <li><a href="/#">Mevsimlere G??re ??i??ekler</a></li>
                                                        <li><a href="/#">BonnyFood Saklama Ko??ullar??</a></li>
                                                        <li><a href="/#">Site Haritas??</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6">
                                                <div className="footer-menu">
                                                    <ul>
                                                        <li className="menu-header">Kurumsal</li>
                                                        <li><a href="/#">??i??ek Bak??m??</a></li>
                                                        <li><a href="/#">??i??ek E??li??inde Notlar</a></li>
                                                        <li><a href="/#">Mevsimlere G??re ??i??ekler</a></li>
                                                        <li><a href="/#">BonnyFood Saklama Ko??ullar??</a></li>
                                                        <li><a href="/#">Site Haritas??</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6">
                                                <div className="footer-menu">
                                                    <ul>
                                                        <li className="menu-header">??leti??im</li>
                                                        <li><a href="/#">Bize Ula????n</a></li>
                                                        <li><a href="/#">S??k??a Sorulan Sorular</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6">
                                                <div className="footer-menu">
                                                    <ul>
                                                        <li className="menu-header">Gizlilik S??zle??mesi</li>
                                                        <li><a href="/#">??i??ek Bak??m??</a></li>
                                                        <li><a href="/#">??i??ek E??li??inde Notlar</a></li>
                                                        <li><a href="/#">??i??ek Anlamlar??</a></li>
                                                        <li><a href="/#">??zel G??nler</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-bottom-text">
                                T??rkiyenin en b??y??k online ??i??ek sitesi ??i??ekSepeti ile sevdiklerinizi mutlu etmek ??ok kolay! ??i??ek g??ndermenin ve ???Mutlu etmenin adresi??? ??i??ek Sepeti ile sevdiklerinize ??zel g??nlerde online ??i??ek g??nderebilirsiniz. Geni?? ??i??ek??i a???? sayesinde ??i??ek sipari??leriniz T??rkiye???nin d??rt bir yan??na h??zl?? ve sorunsuz ??ekilde g??nderilir. Taze ??i??eklerle haz??rlanan mis kokulu ????k ??i??ek aranjmanlar?? aras??ndan be??endi??iniz ??r??n?? se??erek, h??zl?? bir ??ekilde online sipari?? verebilirsiniz. Sevdiklerinizin do??um g??n??, y??ld??n??m?? gibi mutlu g??nlerinde onlar??n sevincine ortak olmak i??in yapman??z gereken sadece birka?? t??kla sipari?? vermek. Sevgililer G??n??, Kad??nlar G??n??, Anneler G??n?? gibi ??zel g??nlerde de ??i??ek, hediye ve lezzetli bonnyFood ??r??nleriyle sevdiklerinizi mutlu edebilirsiniz. ????nk?? mutlu etmenin adresi; ??i??ekSepeti.
                            </div>
                        </div>
                    </div>
               </div>
                <div className="copyright-container">
                    Copyright ?? 2019 ??i??ek Sepeti ??nternet Hizmetleri A.??
                </div>
           </div>
            
        )
    }
}

export default Footer;