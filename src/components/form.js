import * as React from "react"

const Form = () => {
return (
    <>
    <section className="ask">
        <div className="container">
        <h2>Задать вопрос специалисту</h2>
        <form className="ask__form">
            <div className="ask__columns">
            <input type="text" name="name" placeholder="Ваше Имя*" />
            <input type="text" name="phone" placeholder="Телефон*" />
            </div>
            <input type="text" name="phone" placeholder="Вопрос" />
            <div className="ask__button">
            <button type="submit" className="btn">
                Отправить
            </button>
            </div>
        </form>
        </div>
    </section>
    </>
)
}

export default Form