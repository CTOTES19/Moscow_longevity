import React, {useContext} from 'react';
import Header from '../Lending/Header/Header';
import './PersonRoom.css'
import userAvatar from '../../assets/icons/user-avatar.png'

const PersonRoom = () => {

    const {store} = useContext(Context)

    return (
        <>
        <Header/>
        <section className='Private container'>
            <div className="private-wrapper">
                <div className="private-title pd">
                    <h1>Личный кабинет</h1>
                </div>
                <div className="private-title2 pd">
                    <h2>Ваши персональные данные</h2>
                </div>
                {/* <div className="private-title3">Ваши персональные данные</div> */}
                <div className="room__data__wrapper">
                    <div className="room__data">
                        <div className="room__data-name pd">
                            <div className="data-name__index index">ФИО</div>
                            <div className="data-name__value value">{store.user.name}</div>
                        </div>
                        <div className="room__data-surname pd">
                            <div className="data-surname__index index">Дата рождения:</div>
                            <div className="data-surname__value value">{store.user.surname}</div>
                        </div>
                        <div className="room__data-email pd">
                            <div className="data-email__index index">Пол:</div>
                            <div className="data-email__value value">{store.user.email}</div>
                        </div>
                        <div className="room__data-email pd">
                            <div className="data-email__index index">Город:</div>
                            <div className="data-email__value value">{store.user.email}</div>
                        </div>
                        <div className="room__data-email pd">
                            <div className="data-email__index index">Адресс проживания:</div>
                            <div className="data-email__value value">{store.user.email}</div>
                        </div>
                        <div className="room__data-email pd">
                            <div className="data-email__index index">Телефон:</div>
                            <div className="data-email__value value">{store.user.email}</div>
                        </div>
                        <div className="room__data-email pd">
                            <div className="data-email__index index">Email:</div>
                            <div className="data-email__value value">{store.user.email}</div>
                        </div>
                        <button>Редактировать</button>
                    </div>
                    <div className="data__photo">
                        <img src={userAvatar} alt="user avatar" className="user-avatar"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default PersonRoom;
