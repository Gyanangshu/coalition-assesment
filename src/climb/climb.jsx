import React from 'react'
import "./climb.css"

import icon from "../images/history_icon.png"

const climb = () => {
    return (
        <section className='climb'>
            <div className='climb__info'>
                <p className='number'>02</p>
                <div className='climb__info-container'>
                    <div className='history__title'>
                        <p className='title'>CLIMB</p>
                        <img className='icon' src={icon} alt="" />
                    </div>
                    <p className='history__para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, minus aliquam? In consequatur, laboriosam nesciunt molestiae, id expedita quos pariatur eos consequuntur illum explicabo illo amet harum, quisquam quasi dolore?</p>
                </div>
            </div>

            <div className='climb__mountains'>
                <div className="mountain__names">
                    <p className='name1'>MOUNTAIN 1</p>
                    <p className='name2'>MOUNTAIN 2</p>
                </div>
            </div>

            <div className="climb__schedule-container">
                <div className="schedule__info">
                    <p className='schedule'>SCHEDULE</p>

                    <div className='info__container'>
                        <div className="dates">
                            <p>25 Nov 2016</p>
                            <p>28 Nov 2016</p>
                            <p>28 Dec 2016</p>
                            <p>7 Jan 2017</p>
                        </div>

                        <div className="places">
                            <p>Vestibulum viverra</p>
                            <p>Vestibulum viverra</p>
                            <p>Vestibulum viverra</p>
                            <p>Vestibulum viverra</p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default climb
