import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const options = {
    loop: true,
    rewind: true,
    autoplay: false,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    margin: 10,
    center: true,
    nav: true,
    dots: false,
    smartSpeed: 600,
    responsive: {
        0: {
            items: 1
        },
        992: {
            items: 3
        }
    }
};


const TeamSlider = () => {
    return (
        <OwlCarousel className="row_custom" id="row_custom" {...options}>
            <div className="col-custom-1">
                <div className="service_flip">
                    <div className="service-inner">
                        <div className="service-front">
                            <img alt="" className="img-responsive" src="assets/img/Markus-Seeberger.jpg" />
                            <h2>Dr. Markus Seeberger</h2>
                        </div>

                        <div className="service-back">
                            <div className="content-sec">
                                <h3>Dr. Markus Seeberger</h3>
                                <p>This project included developing a
                                    positioning strategy for a new brand, identifying a suitable target group,
                                    and
                                    specifying detailed product attributes. </p>

                                <div className="line"></div>

                                <p>Finally, we identified several additional
                                    business models around the vehicle and developed a transparent business case
                                    that
                                    can be used as a management tool for financial planning and project steering. To
                                    start a vehicle project from scratch and the high degree of engagement made this
                                    project special. In other projects I analyzed the automotive smart charging
                                    market
                                    and entry strategies in the automotive operating system market for an IT
                                    supplier.
                                </p>

                                <p>In other projects, I got to work on the product strategy of a Chinese EV
                                    newcomer,
                                    several EV battery recycling projects, as well as the elaboration of product
                                    strategies for several companies – from startup to established OEM. Being part
                                    of a
                                    firm with a such diversified portfolio has in fact never stopped to be thrilling
                                    and
                                    puts SAC in a unique position, combining German automotive passion with a
                                    forward-thinking international mindset.</p>

                                <p>I hold a master’s degree in power engineering from the Technical University of
                                    Dresden and have prior experience in the field of new energies, particularly
                                    hydrogen. Ever since I have started my position at SAC, I have had manifold
                                    opportunities to put my past knowledge into practice. I keep looking forward to
                                    projects to participate in and new colleagues to work with!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-custom-1">
                <div className="service_flip">
                    <div className="service-inner">
                        <div className="service-front">
                            <img alt="" className="img-responsive" src="assets/img/Karam-Chehade.jpg" />
                            <h2>Karam Chehade</h2>
                        </div>

                        <div className="service-back">
                            <div className="content-sec">
                                <h3>Karam Chehade</h3>
                                <p>One of my first projects at SAC was with an OEM startup who intended to
                                    launch a
                                    battery electric vehicle in Europe and China. </p>


                                <div className="line"></div>

                                <p>When I started my position as a consultant at SAC, I was immediately posted on a
                                    project with an international recycling company looking to expand its activities
                                    into the EV recycling business. SAC quickly astounded me with the level of
                                    professionalism, depth of analysis but also automotive expertise which were
                                    played
                                    essential roles in the projects. From day one, there was a culture of welcoming
                                    proactive attitudes and rewarding involvement.</p>

                                <p>A focus on international projects, most current topics, a broad automotive
                                    expertise,
                                    the passion of all employees for automobiles, and an amazing team spirit make
                                    working at SAC an unique experience. I also would like to mention the active
                                    company
                                    culture with fantastic regular events (e.g. summer camp).</p>

                                <p>I hold a master’s degree in business administration from the Friedrich–Alexander
                                    University Erlangen–Nürnberg and a PhD from the University of St. Gallen. In my
                                    doctoral thesis, I studied the transformation of the automotive industry toward
                                    electric mobility. In my spare time I like to hike in the mountains, play the
                                    guitar, and watch soccer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-custom-1">
                <div className="service_flip">
                    <div className="service-inner">
                        <div className="service-front">
                            <img alt="" className="img-responsive" src="assets/img/Tobias-Blucher.jpg" />
                            <h2>Tobias Blücher</h2>
                        </div>

                        <div className="service-back">
                            <div className="content-sec">
                                <h3>Tobias Blücher</h3>
                                <p>Soon after joining SAC, I was able to gain my first experiences as a
                                    consultant
                                    with SAC.</p>


                                <div className="line"></div>

                                <p>
                                    In my first project we advised a Chinese OEM on the development of a brand and
                                    portfolio
                                    strategy. This was the perfect opportunity to bring in my automotive industry
                                    expertise
                                    in brand and product strategy. On this project, I was able to manage and execute
                                    my own
                                    workflows, which I think is the perfect way for a steep learning curve. Most
                                    exciting
                                    part of the project was to present the findings and strategy recommendations to
                                    the
                                    client’s top management.</p>
                                <p>The team is truly committed to SAC’s motto of “Inspiring Leaders”, which leads
                                    the drive
                                    to achieve excellence in our daily work tasks. This creates a working
                                    environment that
                                    allows me to bring out the best of myself and that encourages my personal growth
                                    and
                                    ambition. In addition to the top consulting methods and the automotive expertise
                                    in the
                                    company, what I appreciate most about SAC is the team spirit, where we always
                                    help each
                                    other. This team spirit is not only embraced in the daily work routine, but also
                                    at the
                                    company’s team events such as the summer camp or at the Wiesn.</p>
                                <p>I hold a master’s degree in economics from the Humboldt University of Berlin and
                                    a
                                    bachelor’s degree in economics from the University of Freiburg. Prior to joining
                                    SAC, I
                                    was able to gain professional experience in venture capital and investment
                                    banking. In
                                    my free time, I like to go on road bike trips through the Munich countryside or
                                    visit
                                    Munich’s numerous “Biergärten” and “Wirtshäuser” to enjoy a few beers and
                                    delicious
                                    local food. In addition to that I am a huge sports fan and my favorite sports to
                                    watch
                                    are soccer and American football.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-custom-1">
                <div className="service_flip">
                    <div className="service-inner">
                        <div className="service-front">
                            <img alt="" className="img-responsive" src="assets/img/Torsten-T-Resack.jpg" />
                            <h2>Torsten T. Resack</h2>
                        </div>

                        <div className="service-back">
                            <div className="content-sec">
                                <h3>Torsten T. Resack</h3>
                                <p>My start at SAC before 15 months was what I would wish for any new
                                    consultant:</p>


                                <div className="line"></div>

                                <p> after a
                                    very warm welcome by my new boss, switching from “Sie” to “Du”, receiving my new
                                    mobile
                                    device and company laptop, and a short introduction to SAC, 2 hours after
                                    entering the
                                    SAC office I was already in my first client call. A start like a sports car.
                                    Great fit
                                    to an automotive consultancy! Sure, a few days later a comprehensive on-boarding
                                    followed but from the very first moment I was part of the project team and
                                    worked for my
                                    first SAC project.</p>
                                <p>And while this project was automotive related it was not a “pure” automotive
                                    project: the
                                    project’s goal was an evaluation of the German EV-battery recycling market for a
                                    recycling company and an analysis of the EV-battery recycling strategy of the
                                    German
                                    OEMs. This project represents SAC’s project landscape: the projects are not
                                    “only” for
                                    automotive manufacturers, but always have an automotive connection. My second
                                    project
                                    was centered around the mobility services market in China, and afterwards I
                                    worked for
                                    an Asian telecommunications company that wanted to enter the market for
                                    automotive
                                    applications to a greater extent. Only the fourth project was for a “real” car
                                    manufacturer.</p>
                                <p>That’s what I like about SAC. It’s all about cars, and yet the variety of
                                    projects is
                                    extremely large. The fact that 2/3 of our customers come from abroad makes the
                                    work here
                                    very exciting for me. We have a great atmosphere amongst our team and I am very
                                    thankful
                                    for what I learned in my short time being here from my colleagues and from my
                                    automotive
                                    enthusiastic boss Martin.</p>
                                <p>I am currently working on a general MBA, that I will finish in December 2022.
                                    Before
                                    moving to Munich and my start at SAC I worked for another consultancy boutique
                                    for 3
                                    years and lived in Frankfurt. Before being a consultant I worked as protestant
                                    pastor,
                                    most recently in Jerusalem. In my spare time I love mountaineering in summer as
                                    in
                                    winter, free-riding and poetry slam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    )
}

export default TeamSlider