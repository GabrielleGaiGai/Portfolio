import React from 'react'

function Qualification() {
  return (
    <div className="about__qualification">
      <div className="qual__tabs">
        <div className="about__title">
          <i class="uil uil-briefcase-alt"></i>
          Experience
        </div>
        <div className="about__title">
          <i class="uil uil-graduation-cap"></i>
          Education
        </div>
      </div>

      <div className="qual__container">
        <div className="qual__data">
          <div></div>
          <div className='qual_timeline'>
            <span className="qual__rounder"></span>
            <span className="qual__line"></span>
          </div>
          <div>
            <div className='qual__data__title'>University of Waterloo</div>
            <span className="qual__data__ins">
              Master of Applied Science in Electrical and Computer Engineering
            </span>
            <div className="qual__data__date">
              <i class="uil uil-calender"></i> Sep 2022 - Apr 2024
            </div>
          </div>
        </div>

        <div className="qual__data">
          <div>
            <div className='qual__data__title'>Web Developer Intern</div>
            <div className="qual__data__ins">
              <i class="uil uil-map-marker"></i>
              Daaisi Electronics Co., Ltd., Chengdu
            </div>
            <div className="qual__data__date">
              <i class="uil uil-calender"></i> Jul 2021 – Aug 2021
            </div>
          </div>
          <div className='qual_timeline'>
            <span className="qual__rounder"></span>
            <span className="qual__line"></span>
          </div>
          <div></div>
        </div>

        <div className="qual__data">
          <div>
            <div className='qual__data__title'>Mobile Test Engineer Intern</div>
            <div className="qual__data__ins">
              <i class="uil uil-map-marker"></i>
              Dayforce, Toronto
            </div>
            <div className="qual__data__date">
              <i class="uil uil-calender"></i> May 2019 – Aug 2019, Jan 2020 – Apr 2020
            </div>
          </div>
          <div className='qual_timeline'>
            <span className="qual__rounder"></span>
            <span className="qual__line"></span>
          </div>
          <div></div>
        </div>

        <div className="qual__data">
          <div>
            <div className='qual__data__title'>Full Stack Web Developer Intern</div>
            <div className="qual__data__ins">
              <i class="uil uil-map-marker"></i>
              MindBeacon, Toronto
            </div>
            <div className="qual__data__date">
              <i class="uil uil-calender"></i> Sep 2018 – Dec 2018
            </div>
          </div>
          <div className='qual_timeline'>
            <span className="qual__rounder"></span>
            <span className="qual__line"></span>
          </div>
          <div></div>
        </div>

        <div className="qual__data">
          <div></div>
          <div className='qual_timeline'>
            <span className="qual__rounder"></span>
            <span className="qual__line"></span>
          </div>
          <div>
            <div className='qual__data__title'>University of Waterloo</div>
            <span className="qual__data__ins">
              Bachelor of Mathematics in Computational Mathematics
            </span>
            <div className="qual__data__date">
              <i class="uil uil-calender"></i> Sep 2017 - Apr 2022
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Qualification