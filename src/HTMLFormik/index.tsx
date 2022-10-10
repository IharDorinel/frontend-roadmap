import {Formik, Field} from 'formik';
import {useState} from "react";

type Data = {
  language: Array<string>;
  city: string;
}

function HTMLFormik () {

  const [step, setStep] = useState<number>(1)


  const initialValues = {
    language: [],
    city: '',
  }

  const clickFormik = (data: Data): void => {
    alert(JSON.stringify(data))
  }

  const handleClick = (step: number): void => {
    setStep(step)
  }



  const showQuestion = (values: {language: Array<string>, city: string}) => {
    switch (step) {
      case 1:
        return (
            <>
              <div id="checkbox-group" className="question">Which programming languages do you prefer?</div>
              <div id="formik" className="cont">
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

              <input type="button" id="inputBtn" value="The next question" className="inputBtn" onClick={() => handleClick(2)}></input>
            </>
        )
        break;

      case 2:
        return (
            <>
              <div id="checkbox-group" className="question">Where would you like to live?</div>
              <div id="formik" className="cont">
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
        )
        break;

    }
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
      <div className={`${step === 1 ? "steperActive" : "steper steperActive"}`} onClick={() => handleClick(1)}></div>
      <div className={`${step === 2 ? "steperActive" : "steper steperActive"}`} onClick={() => handleClick(2)}></div>
    </div>

    <form className="form" onSubmit={handleSubmit}>
      {showQuestion(values)}
    </form>

    </div>
)
      }}
      </Formik>
)
}

export default HTMLFormik


