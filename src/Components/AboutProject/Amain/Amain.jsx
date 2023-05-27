import React from 'react'

import grand from '../../../assets/img/AboutGrand.png'
import './Amain.css'


const Amain = () => {
  return (
    <section className='amain'>
        <div className="container">
            <div className="amain--wrapper">
                <div className="amain--content">
                    <img src={grand} alt="GrandMa" />
                </div>
                <div className="amain--text">
                    <div className="amain--text-title">«Московское долголетие» — крупнейший оздоровительный, образовательный и досуговый проект для москвичей старшего возраста</div>
                    <div className="amain--text-subtitle">Более 30 направлений активностей открыто очно в каждом районе столицы и онлайн. Очные занятия проходят в помещениях организаций-поставщиков и на свежем воздухе. Посещайте спортивные тренировки, творческие и образовательные классы бесплатно в компании единомышленников.
                    <br/>
                    <br/>
                    Онлайн-формат полюбился тем, кому удобно заниматься не выходя из дома. Записывайтесь на бесплатные занятия для души, для ума и для тела в удобном формате!
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Amain