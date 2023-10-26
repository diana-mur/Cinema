import { useState } from 'react'
import '../Entry/Entry.css'
import './Registration.css'

export default function Registration() {
  return (
    <>
      <div className="mainEntry">
        <div className='entry'>
          <h1 className='titleForm'>Зарегистрироваться</h1>
          <form action="" id='entryForm'>
            <input type="text" placeholder="Имя"
              className='userInput' />
            <input type="text" placeholder="Фамилия"
              className='userInput' />
            <input type="login" placeholder="Придумайте логин"
              className='userInput' />
            <input type="password" placeholder="Придумайте пароль"
              className='userInput' />
            <input type="password" placeholder="Повторите пароль"
              className='userInput' />
            <input type="text" placeholder="Номер телефона или e-mail"
              className='userInput' />
            <div className='checkboxReg'>
              <div>
                <input id='checkbox1' type="checkbox" className='checkboxApp' />
                <label htmlFor='checkbox1' className='labelPolit'>
                  <pre>Соглашаюсь на условия </pre>
                  <a className='linkPolit'>политики конфиденциальности</a>
                </label>
              </div>
              <div>
                <input id='checkbox2' type="checkbox" className='checkboxApp' />
                <label htmlFor='checkbox2' className='labelPolit'>
                  Соглашаюсь на обработку персональных данных
                </label>
              </div>
            </div>
            <button type='submit' className='btnEntry'>Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </>
  )
}