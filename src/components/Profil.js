import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import banner2 from '../Images/banner-v2.jpg';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import bekasi from '../Images/bekasi.jpg';
import jakarta from '../Images/jakarta.jpg';
import tangerang from '../Images/tangerang.jpg';
import cempaka from '../Images/cempaka-mas.jpg';


class Profil extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={banner2} className="d-block w-100" alt="banner-2"/>
                        </div>
                    </div>
                </div>

                
                    <div className="container">
                        <div className="text-center">
                            <h1 className="text-style-1 jarak-text-7">
                                TENTANG <span className="span-style-1">KAMI</span>
                            </h1>
                        </div>
                        <div className="jarak-text-1">
                            <h2 className="text-style-1"><span className="span-style-1">Siapa</span> Kami?</h2> 
                            WEBCLASS.com (Web Consultant & Training) telah berdiri lebih dari 10 tahun 
                            sejak tahun 2003 dan telah dilengkapi badan hukum. WEBCLASS.com dalam pengalamannya telah 
                            merebut 5 penghargaan ICT Awards (Piala MENKOMINFO) dalam bidang website, sebagai website korporasi 
                            terbaik dan juga dalam kategory People Choice. Kelima penghargaan itu direbut dalam 1 hari yang sama 
                            (sampai dengan saat ini belum pernah terjadi di ajang ICT award).
                        </div>

                        <div className="jarak-text-1">
                            <h2 className="text-style-1">Apa yang Dapat <span className="span-style-1">Kami</span> Berikan untuk Anda?</h2> 
                            Telah lebih dari 4000 peserta, Para Dosen, Guru, Mahasiswa dan Executive 90 
                            Perusahaan ternama mengaku sangat terbantu dalam hal peningkatan keahliannya dibidang :
                            <ul>
                                <li>
                                    Kursus Web Design
                                </li>
                                <li>
                                    Kursus Desain Grafis
                                </li>
                                <li>
                                    Kursus Javascript
                                </li>
                                <li>
                                    Kursus SEO
                                </li>
                                <li>
                                    Kursus PHP
                                </li>
                                <li>
                                    Kursus React JS
                                </li>
                                <li>
                                    Kursus Internet Marketing
                                </li>
                            </ul>
                            <Link to="/product">
                                <button className="btn btn-primary">
                                    Selengkapnya
                                </button>
                            </Link>
                        </div>

                        <div className="jarak-text-1">
                            <h2 className="text-style-1"><span className="span-style-1">Kenapa</span> Mereka Memilih Kami?</h2> 
                            WEBCLASS.com memiliki karya nyata dalam bidang website yang sangat 
                            dikenal oleh dunia online(sesuatu yang jarang di miliki tempat kursus).
                            <ul className="jarak-text-2">
                                <li>
                                    Sukses membuat komunitas flash terbesar di Indonesia yaitu www.babaflash.com
                                </li>
                                <li>
                                    Berhasil menjadi pelopor dan membuat toko buku online nomor 1 di Indonesia www.bukukita.com 
                                    yang memiliki anggota 158.000 orang.
                                </li>
                                <li>
                                    Membuat tempat kursus website, web design dan internet marketing paling terpercaya 
                                    di Indonesia www.WEBCLASS.com
                                </li>
                            </ul>
                            Dijadikan pilihan sebagai tempat upgrade ilmu oleh para succesful people dikarenakan 
                            WEBCLASS.com adalah training center yang unik. Selain mampu membahasakan hal-hal 
                            teknis kedalam bahasa sehari-hari, WEBCLASS.com memiliki karya nyata yang sukses di 
                            Pasaran. Maka dari itu materi yang akan anda peroleh adalah materi yang:
                            <ul className="jarak-text-2">
                                <li>
                                    Bukan hanya bisa membuat website tapi website buatan WEBCLASS.com Sudah 
                                    terbukti sukses di dunia online
                                </li>
                                <li>
                                    Materi yang diajarkan diaplikasikan di perusahaan-perusahaan besar
                                </li>
                            </ul>
                            Murid dengan latar belakang IT maupun tanpa latar belakang IT dapat memahami dengan 
                            mudah materi yang diberikan karena pembuat materi di babastudio adalah penulis belasan 
                            buku best seller, yang salah satu bukunya di jadikan rujukan dan acuan bagi para siswa 
                            di Malaysia.
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
                                <img src={jakarta} className="shadow-img img-fluid" alt="product"/>
                                <h5 className="text-center jarak-text-9">Kampus Jakarta</h5>
                            </div>

                            <div className="col-md-3">
                                <img src={tangerang} className="shadow-img img-fluid" alt="product"/>
                                <h5 className="text-center jarak-text-9">Kampus Tangerang</h5>
                            </div>

                            <div className="col-md-3">
                                <img src={bekasi} className="shadow-img img-fluid" alt="product"/>
                                <h5 className="text-center jarak-text-9">Kampus Bekasi</h5>
                            </div>

                            <div className="col-md-3">
                                <img src={cempaka} className="shadow-img img-fluid" alt="product"/>
                                <h5 className="text-center jarak-text-9">Kampus Cempaka Mas</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Profil;