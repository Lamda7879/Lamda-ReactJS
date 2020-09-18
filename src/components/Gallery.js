import React, { Component } from 'react';
// import {Link} from 'react-router-dom';

import webclass from '../Images/webclass.jpg';
import banner2 from '../Images/banner-v2.jpg';

class Gallery extends Component {
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

                <div className="container jarak-text-7">
                    <div className="text-center">
                        <h1>
                            Lokasi <span className="span-style-1">Strategis</span> Turun Busway Langsung Sampai
                        </h1>
                        <h5 className="jarak-text-9" style={{color:  "#3d3d3d"}}>
                        Lokasi RESMI WebClass hanya ada di ITC Permata Hijau (Jakarta Selatan),
                        Summarecon Mall Serpong (Tangerang), Graha Cempaka Mas (Jakarta Pusat) & Ciputra World, Kuningan (Jakarta Selatan), serta Emporium Pluit (Jakarta Utara)
                        Babastudio TIDAK berafiliasi dengan Lembaga Kursus Manapun.
                        </h5>
                    </div>
                </div>
                <div className="container jarak-text-7">
                    <div className="row jarak-text-7 mb-5">
                        <div className="col-6">
                            <h5 className="mb-3">Masukan Pesan Anda Pada Form Dibawah Ini</h5>
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Nama Lengkap</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Silahkan isi nama lengkap anda"/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Email</label>
                                    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Silahkan isi email anda"/>
                                    <small id="emailHelp" className="form-text text-muted">Kami tidak akan membagikan email mu kepada orang lain.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Pesan</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Silahkan isi pesan anda"></textarea>
                                </div>
                                <button className="btn btn-primary text-white form-btn">
                                    Kirim
                                </button>
                            </form>
                        </div>

                        <div className="col-6">
                            <img src={webclass} alt="banner" className="img-fluid"/>
                            <p className="mt-2">
                                Berdiri sejak tahun 2003 telah memiliki lebih dari 15.000 peserta kursus dan telah 
                                berpengalaman dan dipercaya dalam menangani ratusan klien korporat dan pemerintahan. 
                                Pengalaman keberhasilan dalam dunia online adalah yang paliing utama kami berikan 
                                kepada peserta didik dan itu sangat tidak ternilai harganya.
                            </p>
                            <div className="bar">
                                <h6 className="text-white pt-2 pb-2 pl-3">
                                    COMMING SOON <br/>
                                    BABA STUDIO (Emporium Pluit, Jakarta Utara)  (021) 5366 4008
                                </h6>
                            </div>

                            <div className="bar mt-4">
                                <h6 className="text-white pt-2 pb-2 pl-3">
                                    COMMING SOON <br/>
                                    BABA STUDIO (Ciputra World Kuningan, Jakarta Selatan)  (021) 5366 4008
                                </h6>
                            </div>

                            <div className="bar mt-4">
                                <h6 className="text-white pt-2 pb-2 pl-3">
                                    BABA STUDIO (ITC Permata Hijau, Jakarta Selatan  (021) 5366 4008 <br/>
                                    Ruko Grand ITC Permata Hijau Blok Saphire No.14 - Jl. Letjen Soepeno (Arteri Permata Hijau) - Kebayoran Lama, Grogol Utara, Jakarta Selatan 12210
                                </h6>
                            </div>

                            <div className="bar mt-4">
                                <h6 className="text-white pt-2 pb-2 pl-3">
                                    BABA STUDIO (Ruko Sentra Gading Serpong, Tangerang)  (021) 5366 4008 <br/>
                                    Ruko Sentra Gading Serpong blok SG-1 No. 33 Summarecon, Tangerang 15810
                                </h6>
                            </div>

                            <div className="bar mt-4">
                                <h6 className="text-white pt-2 pb-2 pl-3">
                                    BABA STUDIO (Graha Cempaka Mas, Jakarta Pusat)  (021) 5366 4008 <br/>
                                    Rukan Babastudio, Graha Cempaka Mas Blok E Nomor 2, JL Letjen. Suprapto, 10640
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;