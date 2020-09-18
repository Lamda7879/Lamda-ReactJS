import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import ReactPlayer from "react-player"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import bekasi from '../Images/bekasi.jpg';
import jakarta from '../Images/jakarta.jpg';
import tangerang from '../Images/tangerang.jpg';
import cempaka from '../Images/cempaka-mas.jpg';
import gc1 from '../Images/gc-1.png';
import gc2 from '../Images/gc-2.png';
import gc3 from '../Images/gc-3.png';
import gc4 from '../Images/gc-4.png';
import gc5 from '../Images/gc-5.png';
import gc6 from '../Images/gc-6.png';
import gc7 from '../Images/gc-7.png';
import gc8 from '../Images/gc-8.png';
import gc9 from '../Images/gc-9.png';
import gl1 from '../Images/gl-1.png';
import gl2 from '../Images/gl-2.png';
import gl3 from '../Images/gl-3.png';
import gl4 from '../Images/gl-4.png';
import gl5 from '../Images/gl-5.png';
import banner1 from '../Images/banner-v1.jpg';
import techbg from '../Images/tech-bg-1.jpg';

class Home extends Component {
    render() {
        return (
            <div>

                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100" alt="banner-1"/>
                        </div>
                    </div>
                </div>

                <div className="jumbotron jarak-text-4">
                    <div className="container jarak-text-5">
                        <div>
                            <h2 className="text-style-2"><span className="span-style-1">Siapa</span> Kami?</h2> 
                            WEBCLASS.com (Web Consultant & Training) telah berdiri lebih dari 10 tahun 
                            sejak tahun 2003 dan telah dilengkapi badan hukum. WEBCLASS.com dalam pengalamannya telah 
                            merebut 5 penghargaan ICT Awards (Piala MENKOMINFO) dalam bidang website, sebagai website korporasi 
                            terbaik dan juga dalam kategory People Choice. Kelima penghargaan itu direbut dalam 1 hari yang sama 
                            (sampai dengan saat ini belum pernah terjadi di ajang ICT award).
                        </div>

                        <Link to="/profil">
                            <button type="button" className="btn btn-primary btn-style-2">Selengkapnya&nbsp;<i className="fad fa-arrow-to-right"></i></button>
                        </Link>
                    </div>
                </div>

                <div className="container">
                    <div className="text-center">
                        <h2 className="text-style-2 jarak-text-6 jarak-text-7"><span className="span-style-1">Web Class</span> Telah Diliput Oleh</h2>
                    </div>
                </div>
                <div className="container">
                    <OwlCarousel
                        className="owl-theme"
                        autoplay
                        loop
                        autoplayTimeout={2000}
                        autoplayHoverPause
                        margin={-200}
                    >
                        <div className="owl-style-1 img-fluid"><img className="img-owl" src={gl1}/></div>
                        <div className="owl-style-1 img-fluid"><img className="img-owl" src={gl2}/></div>
                        <div className="owl-style-1 img-fluid"><img className="img-owl" src={gl3}/></div>
                        <div className="owl-style-1 img-fluid"><img className="img-owl" src={gl4}/></div>
                        <div className="owl-style-1 img-fluid"><img className="img-owl" src={gl5}/></div>
                        <div className="owl-style-1 img-fluid"><img className="img-owl" src={gl4}/></div>
                    </OwlCarousel>
                </div>

                <div className="container">
                    <div className="text-center jarak-text-7">
                        <h2>Mengapa Harus Kursus Di <span className="span-style-1">Web Class?</span></h2>
                    </div>
                </div>

                <div className="container jarak-text-7">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>Konsultan Website Kementrian & Lembaga ...</h2>
                                    <p>
                                        Semenjak tahun 2014 pada acara e-transparancy award. WebClass 
                                        ditunjunk Sebagai Konsultan untuk memberikan masukan atas website-website 
                                        milik kementrian dan Lembaga Ri. Beberapa Website kementrian telah dibangun 
                                        dengan mengikuti tahapan-tahapan pembuatan website yang sesuai dengan 
                                        standarisasi website yang baik, serta peraturan. Contohnya adalah website 
                                        milik kementrian Kelautan, Kementrian agrarian dan beberapa kementrian lain 
                                        telah dibuat oleh WebClass. Sampai saat inipun WebClass masih rutin 
                                        memberikan masukan dan pelatihan pada beberapa kementrian mengenai teknologi 
                                        terbaru dalam bidang website, pemanfaatan social media dan Mobile App.
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <img className="img-fluid img-home" src={gc1}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card jarak-text-7">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="img-fluid img-home" src={gc2}/>
                                </div>
                                <div className="col-md-6">
                                    <h2>Lebih Dari 15 ribu Alumni ...</h2>
                                    <p>
                                        telah kursus di WebClass selama 13 tahun semenjak berdirinya. WebClass 
                                        dipercaya dari mulai dosen, mahasiswa, pemilik perusahaan, ibu rumah tangga, 
                                        serta para eksekutif dari perusahaan ternama. Pada tahun 2013 WebClass mulai 
                                        dipercaya sebagai konsultan website untuk 47 kementrian dan lembaga di 
                                        Indonesia dalam acara e-Transparency Award Pemerintahan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card jarak-text-7">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>Meraih Puluhan Penghargaan ...</h2>
                                    <p>
                                        dari berbagai Lembaga Pendidikan, Swasta, dan Pemerintah atas prestasi 
                                        dalam pembuatan webite, mengajar, menjadi narasumber dan konsultan. 
                                        Sebagai tempat kursus website WebClass amat bersyukur atas kepercayaan 
                                        yang telah diberikan atas penghargaan dan piala yang diberikan kepada kami 
                                        selama 13 tahun berkarya.
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <img className="img-fluid img-home" src={gc3}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card jarak-text-7">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="img-fluid img-home" src={gc4}/>
                                </div>
                                <div className="col-md-6">
                                    <h2>Jadwal Belajar Flexibel ...</h2>
                                    <p>
                                        Jadwal Belajar/Kursus di WebClass mengikuti kesibukan anda 
                                        saat ini. Anda bisa datang kapan saja, sesuka hati. Karena Pengajar
                                        kami akan selalu stand by untuk anda. Hari sabtu dan Minggu kami tetap 
                                        melayani Anda. Jika sepulang kantor, anda ingin kursus kami 
                                        pun tetap melayani anda. Jika anda super sibuk, kamipun akan 
                                        memperbolehkan anda untuk berganti-ganti hari atau jadwal kursus 
                                        sesuka hati. Schedule Kami Flexible!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card jarak-text-7">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>Satu Murid pun, Kelas Mulai ...</h2>
                                    <p>
                                        di WebClass Anda tidak perlu menunggu sampai kelas penuh untuk dapat 
                                        memulai kursus. WebClass adalah tempat kursus website pertama yang 
                                        menerapkan sistem ini untuk melayani para murid yang ingin meningkatkan 
                                        kemampuan dalam membuat website, animasi maupun aplikasi mobile.
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <img className="img-fluid img-home" src={gc5}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card jarak-text-7">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="img-fluid img-home" src={gc6}/>
                                </div>
                                <div className="col-md-6">
                                    <h2>Materi bisa diakses dari rumah ...</h2>
                                    <p>
                                        menu baru ini akan membantu Anda untuk mengulang setiap pelajaran 
                                        yang telah dipelajari di WebClass baik dari rumah, kampus, 
                                        kantor atau dimanapun Anda berada dengan akses online ini kami 
                                        ingin memastikan bahwa Anda berhasil menguasai ilmu yang Anda inginkan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card jarak-text-7">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>Konsultasi Sepuasnya ...</h2>
                                    <p>
                                        sebagai manusia kita lupa apa yang kita pelajari untuk itu WebClass 
                                        memberikan konsultasi sepuasnya tanpa dibatasi sampai Anda bisa. 
                                        termasuk menjadi mentor bila Anda ingin buka usaha, membangun startup, 
                                        serta bagaimana menghadapi klien.
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <img className="img-fluid img-home" src={gc7}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card jarak-text-7">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <img className="img-fluid img-home" src={gc8}/>
                                </div>
                                <div className="col-md-6">
                                    <h2>Belajar Langsung dari Founder, CEO, dan Owner perusahaan ternama.</h2>
                                    <p>
                                        Setiap Bulan satu kali, WebClass mengajak setiap murid dan alumni untuk 
                                        Belajar Secara Tatap Muka dengan CEO, Founder dari perusahaan ternama dan 
                                        Investor, bertujuan Agar Para Murid mendapatkan Pelajaran Yang lebih dalam 
                                        dari mereka yang telah sukses, Karena Belajar langsung dari CEO, Pemilik 
                                        Sebuah PErusahaan memiliki dampak Yang berbeda dan Menguntungkan bagi murid WebClass
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="jumbotron bg-1 jarak-text-8">
                    <div className="text-center text-white">
                        <h2>TESTIMONI MURID WEBCLASS</h2>

                        <div className="jarak-text-7">
                        <OwlCarousel
                            autoplayTimeout={2000}
                            autoplayHoverPause
                            margin={40}
                        >
                            <div className="row">
                                <div className="col-xl-12 col-sm-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="col-sm-6">
                                                <div className="row">
                                                    <div className="mac-dots1"></div>
                                                    <div className="mac-dots2"></div>
                                                    <div className="mac-dots3"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="img-fluid">
                                            <ReactPlayer url="https://youtu.be/4_TWNpstLpY" className="vid-style"/>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12 col-sm-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="col-sm-6">
                                                <div className="row">
                                                    <div className="mac-dots1"></div>
                                                    <div className="mac-dots2"></div>
                                                    <div className="mac-dots3"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="img-fluid">
                                            <ReactPlayer url="https://youtu.be/6txFhHxC_3c" className="vid-style"/>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12 col-sm-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="col-sm-6">
                                                <div className="row">
                                                    <div className="mac-dots1"></div>
                                                    <div className="mac-dots2"></div>
                                                    <div className="mac-dots3"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="img-fluid">
                                            <ReactPlayer url="https://youtu.be/FISQHEYy6b8" className="vid-style"/>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12 col-sm-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="col-sm-6">
                                                <div className="row">
                                                    <div className="mac-dots1"></div>
                                                    <div className="mac-dots2"></div>
                                                    <div className="mac-dots3"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="img-fluid">
                                            <ReactPlayer url="https://youtu.be/KS4T3mTz1Fs" className="vid-style"/>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12 col-sm-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="col-sm-6">
                                                <div className="row">
                                                    <div className="mac-dots1"></div>
                                                    <div className="mac-dots2"></div>
                                                    <div className="mac-dots3"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="img-fluid">
                                            <ReactPlayer url="https://youtu.be/syb5ip2xcuQ" className="vid-style"/>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12 col-sm-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="col-sm-6">
                                                <div className="row">
                                                    <div className="mac-dots1"></div>
                                                    <div className="mac-dots2"></div>
                                                    <div className="mac-dots3"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="img-fluid">
                                            <ReactPlayer url="https://youtu.be/zUzG93GHq64" className="vid-style"/>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                        </OwlCarousel>
                        </div>
                    </div>
                </div>

                <div className="container jarak-text-8">
                    <div className="text-center">
                        <h2>Mulai Membangun <span className="span-style-1">Website</span> Anda Dari Nol Bersama Kami</h2>
                        <Link to="/product">
                            <button type="button" className="btn btn-primary btn-style-3">Lihat Paket Kursus Kami</button>
                        </Link>
                    </div>
                </div>

                <div className="jumbotron jumbotron-fluid jarak-text-8">
                    <div className="container">
                        <div className="text-center">
                            <h1 className="jarak-text-5">Lokasi Kampus WebClass</h1>
                            <p>
                                Kamu dapat berpindah kampus sesuka hati, contohnya : di hari biasa kamu 
                                dapat memilih kampus yang dekat dengan kantor, di hari libur kamu dapat 
                                memilih kampus di dekat rumah kamu, karena babastudio bukan franchise, 
                                tapi di kelola oleh satu management,untuk menjamin kualitas pendidikan 
                                yang kamu peroleh.
                            </p>
                        </div>
                        <div className="row jarak-text-3">
                            <div className="col-md-3">
                                <img src={jakarta} className="shadow-img img-fluid"/>
                                <h5 className="text-center jarak-text-9">Kampus Jakarta</h5>
                            </div>

                            <div className="col-md-3">
                                <img src={tangerang} className="shadow-img img-fluid"/>
                                <h5 className="text-center jarak-text-9">Kampus Tangerang</h5>
                            </div>

                            <div className="col-md-3">
                                <img src={bekasi} className="shadow-img img-fluid"/>
                                <h5 className="text-center jarak-text-9">Kampus Bekasi</h5>
                            </div>

                            <div className="col-md-3">
                                <img src={cempaka} className="shadow-img img-fluid"/>
                                <h5 className="text-center jarak-text-9">Kampus Cempaka Mas</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;

