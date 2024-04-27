import React from 'react'

function Publification() {
  return (
    <div className="about__publification">
      <h3 className='about__title'>
        <i class="uil uil-files-landscapes-alt"></i>
        Publifications
      </h3>

      <ul className="pub__list">
        <li className="pub__item">
          <a href="https://ieeexplore.ieee.org/document/10274761" className="pub__link" target="_blank" rel="noopener noreferrer">
            <p className="item__title">
              A Novel Framework of Failure Localization in Optical Transport Network
            </p>
          </a>
          <p className="item__author">
            Yan Jiao; Pin-Han Ho; Xiangzhu Lu; János Tapolcai; Limei Peng
          </p>
          <p className="item__publisher">
            IEEE Communications Magazine
          </p>
        </li>

        <li className="pub__item">
          <a href="https://ieeexplore.ieee.org/document/10186406" className="pub__link" target="_blank" rel="noopener noreferrer">
            <p className="item__title">
              On Real-time Failure Localization via Instance Correlation in Optical Transport Networks
            </p>
          </a>
          <p className="item__author">
            Yan Jiao; Pin-Han Ho; Xiangzhu Lu; Kairan Liang; Yuren You; János Tapolcai; Bingbing Li; Limei Peng
          </p>
          <p className="item__publisher">
            2023 IFIP Networking Conference (IFIP Networking)
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Publification