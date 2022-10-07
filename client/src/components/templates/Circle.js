import React, { useEffect } from 'react'
import CircleType from 'circletype'

const Circle = () => {
    useEffect(() => {
        new CircleType(document.getElementById('demo1')).radius(320);
        new CircleType(document.getElementById('demo2')).dir(-1).radius(320);
      }, []);

    return (
        <div className="rightSec-img">
            <div className="menumain">
                <div className="main_bg">
                    <div className="bg_green1"></div>
                    <div className="bg_green2"></div>
                </div>
                <div className="overflow_circle">
                    <div  className='hidden' id="menu1">
                        <i className="fa fa-trophy"></i>
                        <h3>Markenentwicklung</h3>
                    </div>
                    <div  className='hidden' id="menu2">
                        <i className="fa fa-car"></i>
                        <h3>Produktstrategie & Entwicklung</h3>
                    </div>
                    <div  className='hidden' id="menu3">
                        <i className="fa fa-cubes"></i>
                        <h3>Organisation wandel</h3>
                    </div>
                    <div  className='hidden' id="menu4">
                        <i className="fa fa-truck"></i>
                        <h3>Beschaffungsoptimierung</h3>
                    </div>
                    <div  className='hidden' id="menu5">
                        <i className="fa fa-users"></i>
                        <h3>Vertrieb & After-Sales</h3>
                    </div>
                    <div  className='hidden' id="menu6">
                        <i className="fa fa-cloud"></i>
                        <h3>Konzern-ESG Compliance (Fokus Dekarbonisierung)</h3>
                    </div>
                    <div  className='hidden' id="menu7">
                        <i className="fa fa-meetup"></i>
                        <h3>Additive Fertigung</h3>
                    </div>
                    <div  className='hidden' id="menu8">
                        <i className="fa fa-bullhorn"></i>
                        <h3>Alternative Vebrenner kraftstoffe (Synfuels)</h3>
                    </div>
                    <div  className='hidden' id="menu9">
                        <i className="fa fa-cogs"></i>
                        <h3>Ev-Batterie Recycling</h3>
                    </div>
                    <div  className='hidden' id="menu10">
                        <i className="fa fa-deaf"></i>
                        <h3>Elektrifizierung Antriebsstrang</h3>
                    </div>
                    <div  className='hidden' id="menu11">
                        <i className="fa fa-sitemap"></i>
                        <h3>Fahrzeuge E/E Architektur</h3>
                    </div>
                    <div  className='hidden' id="menu12">
                        <i className="fa fa-gavel"></i>
                        <h3>Mobilitat der zukunft & Digitalisierung</h3>
                    </div>
                    <div  className='hidden' id="menu13">
                        <i className="fa fa-line-chart"></i>
                        <h3>Konzem und Wachstumsstrategie (inkl. M&A)</h3>
                    </div>
                    <div  className='visible' id="menu14">
                        <h2>SACs Kernkompeten<br />zgebiete</h2>
                    </div>
                </div>

                <div className="circle_txt up" id="demo1">Funktionale Automobilthemen entlang der
                    Wertschöpfungskette</div>

                <nav className="menunav">
                    <ul  className='circle'>
                        <li  className='one slice' data-toggle="modal" data-target="#popSelection">
                            <label htmlFor='one'  className='circle over' id="1">
                                <span>
                                    <div>Konzem und<br />
                                        Wachstums<br />strategie (inkl.<br /> M&A)</div>
                                    <i className="fa fa-line-chart"></i>
                                </span>
                            </label>
                        </li>
                        <li  className='two slice' data-toggle="modal" data-target="#popSelection">
                            <label htmlFor='two'  className='circle over' id="2">
                                <span>
                                    <div>Marken<br />entwicklung</div> <i className="fa fa-trophy"></i>
                                </span>
                            </label>
                        </li>
                        <li  className='three slice' data-toggle="modal" data-target="#popSelection">
                            <label htmlFor='three'  className='circle over' id="3"><span>
                                <div>Produkt<br />strategie &<br /> Entwicklung </div><i
                                    className="fa fa-car"></i>
                            </span></label>
                        </li>
                        <li  className='four slice' data-toggle="modal" data-target="#popSelection">
                            <label htmlFor='four'  className='circle over' id="4"><span>
                                <div>Organisations<br /> wandel</div>
                                <i className="fa fa-cubes"></i>
                            </span></label>
                        </li>
                        <li  className='five slice' data-toggle="modal" data-target="#popSelection">
                            <label htmlFor='five'  className='circle over' id="5"><span>
                                <div>Beschaffungs<br />optimierung</div>
                                <i className="fa fa-truck"></i>
                            </span></label>
                        </li>
                        <li  className='six slice' data-toggle="modal" data-target="#popSelection">
                            <label htmlFor='six'  className='circle over' id="6"><span>
                                <div>Vertrieb &<br />
                                    After-Sales</div>
                                <i className="fa fa-users"></i>
                            </span></label>
                        </li>
                        <li  className='seven slice gray_color' data-toggle="modal" data-target="#popSelection">
                            <label htmlFor='seven'  className='circle over' id="7"><span>
                                <div>Konzern-ESG<br /> Compliance<br />
                                    (Fokus Dekar<br />bonisierung)</div>
                                <i className="fa fa-cloud"></i>
                            </span></label>
                        </li>
                        <li  className='eight slice gray_color' data-toggle="modal" data-target="#popSelection">
                            <label htmlFor='eight'  className='circle over' id="8"><span>
                                <div>Additive<br />
                                    Fertigung</div>
                                <i className="fa fa-meetup"></i>
                            </span></label>
                        </li>
                        <li  className='nine slice gray_color' data-toggle="modal" data-target="#popSelection">
                            <label htmlFor='nine'  className='circle over' id="9"><span>
                                <div>Alternative<br />
                                    Vebrenner<br /> kraftstoffe<br /> (Synfuels)</div>
                                <i className="fa fa-bullhorn"></i>
                            </span></label>
                        </li>
                        <li  className='ten slice gray_color' data-toggle="modal" data-target="#popSelection">
                            <label htmlFor='ten'  className='circle over' id="10"><span>
                                <div>Ev-Batterie<br />
                                    Recycling</div>
                                <i className="fa fa-cogs"></i>
                            </span></label>
                        </li>
                        <li  className='eleven slice gray_color' data-toggle="modal" data-target="#popSelection">
                            <label htmlFor='eleven'  className='circle over' id="11"><span>
                                <div>Elektrifi<br />zierung<br />
                                    Antriebs<br />strang</div>
                                <i className="fa fa-deaf"></i>
                            </span></label>
                        </li>
                        <li  className='twelve slice gray_color' data-toggle="modal" data-target="#popSelection">
                            <label htmlFor='twelve'  className='circle over' id="12"><span>
                                <div>Fahrzeuge E/E<br />
                                    Architektur</div>
                                <i className="fa fa-sitemap"></i>
                            </span></label>
                        </li>
                        <li  className='thirteen slice gray_color' data-toggle="modal" data-target="#popSelection">
                            <label htmlFor='thirteen'  className='circle over' id="13"><span>
                                <div>Mobilitat der<br />
                                    zukunft
                                    & <br />Digitalisierung</div>
                                <i className="fa fa-gavel"></i>
                            </span></label>
                        </li>
                    </ul>
                </nav>

                <div className="circle_txt down" id="demo2">Gegenwärtige und zukünftige branchenpragende Themen
                </div>
            </div>
        </div>
    )
}

export default Circle