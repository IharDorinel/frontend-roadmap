import {Formik, Field} from 'formik';
import {useState} from "react";

function HTMLFormik () {

  const [questOneActive, setQuestOneActive] = useState(true)
  const [questTwoActive, setQuestTwoActive] = useState(false)

  const initialValues = {
    language: [],
    city: []
  }

  const clickFormik = (data) => {
    alert(JSON.stringify(data))
  }

  const handleClickOne = () => {
    setQuestOneActive(true)
    setQuestTwoActive(false)
  }

  const handleClickTwo = () => {
    setQuestOneActive(false)
    setQuestTwoActive(true)
  }


  return (
      <Formik
          initialValues={initialValues}
          onSubmit={clickFormik}>
        {(formik) => {
          const {
            handleSubmit,
            values
          } = formik


return (
    <div className="sectionCont">
      <h3>Formik</h3>

    <div className="steperCont">
      <div className={`${questOneActive ? "steperActive" : "steper steperActive"}`} onClick={handleClickOne}></div>
      <div className={`${questTwoActive ? "steperActive" : "steper steperActive"}`} onClick={handleClickTwo}></div>
    </div>
    <form className="form" onSubmit={handleSubmit}>
      {questOneActive &&
          <>
  <div id="checkbox-group" className="question">Which programming languages do you prefer?</div>
  <div className="cont">
    <div className="element">
    <label>
      <Field type="checkbox" name="language" value="Java"/>
      Java
    </label>
    </div>
    <div className="element">
    <label>
      <Field type="checkbox" name="language" value="JavaScript"/>
      JavaScript
    </label>
    </div>
    <div className="element">
    <label>
      <Field type="checkbox" name="language" value="Python"/>
      Python
    </label>
    </div>
    <div className="element">
    <label>
      <Field type="checkbox" name="language" value="Ruby"/>
      Ruby
    </label>
    </div>
    <div className="element">
    <label>
      <Field type="checkbox" name="language" value="Pascal"/>
      Pascal
    </label>
    </div>
  </div>
        <input type="button" value="The next question" className="inputBtn" onClick={handleClickTwo}></input>
        </>
      }
      {questTwoActive &&
          <>
  <div id="checkbox-group" className="question">Where would you like to live?</div>
  <div className="cont">
    <div className="element">
      <label>
        <Field type="radio" name="city" value="Mogadishu"/>
        Mogadishu
      </label>
    </div>
    <div className="element">
      <label>
        <Field type="radio" name="city" value="Dakar"/>
        Dakar
      </label>
    </div>
    <div className="element">
      <label>
        <Field type="radio" name="city" value="Luanda"/>
        Luanda
      </label>
    </div>
    <div className="element">
      <label>
        <Field type="radio" name="city" value="Johannesburg"/>
        Johannesburg
      </label>
    </div>
    <div className="element">
      <label>
        <Field type="radio" name="city" value="Ndjamena"/>
        Ndjamena
      </label>
    </div>
  </div>
  <button type="submit" className={`${!values.language.length || !values.city.length ? "inputBtn inputBtnDis" : "inputBtn"}`} disabled={!values.language.length || !values.city.length}>Submit</button>
          </>
      }
</form>
    </div>
)
      }}
      </Formik>
)
}

export default HTMLFormik
