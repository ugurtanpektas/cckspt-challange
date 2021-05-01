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
                                                <img src={footerPhones} alt="Footer Phone Image" />
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
                                                    <div class="qr-download-bold">Çiçek Sepeti Mobil Uygulamayı İndirin</div>
                                                    <div>Mobil Uygulamayı QR Kod ile İndirin.</div>
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
                                            <img src={logo} alt="Çiçeksepeti Logo" />
                                        </div>
                                        <div className="footer-social-icons mb-4">
                                            <a href="javascript:;">
                                                <img src={facebookLogo} alt="Facebook Logo" />
                                            </a>
                                            <a href="javascript:;">
                                                <img src={twitterLogo} alt="Twitter Logo" />
                                            </a>
                                            <a href="javascript:;">
                                                <img src={instagramLogo} alt="Instagram Logo" />
                                            </a>
                                            <a href="javascript:;">
                                                <img src={youtubeLogo} alt="Youtube Logo" />
                                            </a>
                                            <a href="javascript:;">
                                                <img src={penLogo} alt="Pen Logo" />
                                            </a>
                                        </div>
                                        <div className="personal-data-info mb-4">
                                            CicekSepeti.com olarak kişisel verilerinizin gizliliğini önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında oluşturduğumuz aydınlatma metnine <a href="javascript:;">buradan</a> ulaşabilirsiniz.
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 col-sm-12">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-6">
                                                <div className="footer-menu">
                                                    <ul>
                                                        <li className="menu-header">Faydalı Bilgiler</li>
                                                        <li><a href="javascript:;">Çiçek Bakımı</a></li>
                                                        <li><a href="javascript:;">Çiçek Eşliğinde Notlar</a></li>
                                                        <li><a href="javascript:;">Çiçek Anlamları</a></li>
                                                        <li><a href="javascript:;">Özel Günler</a></li>
                                                        <li><a href="javascript:;">Mevsimlere Göre Çiçekler</a></li>
                                                        <li><a href="javascript:;">BonnyFood Saklama Koşulları</a></li>
                                                        <li><a href="javascript:;">Site Haritası</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6">
                                                <div className="footer-menu">
                                                    <ul>
                                                        <li className="menu-header">Kurumsal</li>
                                                        <li><a href="javascript:;">Çiçek Bakımı</a></li>
                                                        <li><a href="javascript:;">Çiçek Eşliğinde Notlar</a></li>
                                                        <li><a href="javascript:;">Mevsimlere Göre Çiçekler</a></li>
                                                        <li><a href="javascript:;">BonnyFood Saklama Koşulları</a></li>
                                                        <li><a href="javascript:;">Site Haritası</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6">
                                                <div className="footer-menu">
                                                    <ul>
                                                        <li className="menu-header">İletişim</li>
                                                        <li><a href="javascript:;">Bize Ulaşın</a></li>
                                                        <li><a href="javascript:;">Sıkça Sorulan Sorular</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-6">
                                                <div className="footer-menu">
                                                    <ul>
                                                        <li className="menu-header">Gizlilik Sözleşmesi</li>
                                                        <li><a href="javascript:;">Çiçek Bakımı</a></li>
                                                        <li><a href="javascript:;">Çiçek Eşliğinde Notlar</a></li>
                                                        <li><a href="javascript:;">Çiçek Anlamları</a></li>
                                                        <li><a href="javascript:;">Özel Günler</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-bottom-text">
                                Türkiyenin en büyük online çiçek sitesi ÇiçekSepeti ile sevdiklerinizi mutlu etmek çok kolay! Çiçek göndermenin ve “Mutlu etmenin adresi” Çiçek Sepeti ile sevdiklerinize özel günlerde online çiçek gönderebilirsiniz. Geniş çiçekçi ağı sayesinde çiçek siparişleriniz Türkiye’nin dört bir yanına hızlı ve sorunsuz şekilde gönderilir. Taze çiçeklerle hazırlanan mis kokulu şık çiçek aranjmanları arasından beğendiğiniz ürünü seçerek, hızlı bir şekilde online sipariş verebilirsiniz. Sevdiklerinizin doğum günü, yıldönümü gibi mutlu günlerinde onların sevincine ortak olmak için yapmanız gereken sadece birkaç tıkla sipariş vermek. Sevgililer Günü, Kadınlar Günü, Anneler Günü gibi özel günlerde de çiçek, hediye ve lezzetli bonnyFood ürünleriyle sevdiklerinizi mutlu edebilirsiniz. Çünkü mutlu etmenin adresi; ÇiçekSepeti.
                            </div>
                        </div>
                    </div>
               </div>
                <div className="copyright-container">
                    Copyright © 2019 Çiçek Sepeti İnternet Hizmetleri A.Ş
                </div>
           </div>
            
        )
    }
}

export default Footer;