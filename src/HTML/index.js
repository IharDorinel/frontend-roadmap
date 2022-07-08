import {useState} from "react";
import {useForm} from "react-hook-form";


function HTMLReactHookForm () {

  const [questOneActive, setQuestOneActive] = useState(true)
  const [questTwoActive, setQuestTwoActive] = useState(false)

  const {
    register,
    handleSubmit,
    watch
  } = useForm({
    mode: "onBlur"
  })

  const showResults = (data) => {
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
      <div>
        <div className="sectionCont">
          <h3>React-hook-form</h3>

        <div className="steperCont">
          <div className={`${questOneActive ? "steperActive" : "steper steperActive"}`} onClick={handleClickOne}></div>
          <div className={`${questTwoActive ? "steperActive" : "steper steperActive"}`} onClick={handleClickTwo}></div>
        </div>

        <form className="form" onSubmit={handleSubmit(showResults)}>

          {questOneActive &&
<>
              <div className="question">Which languages do you speak?</div>
            <div className="cont">
            <div className="element">
            <label>
            <input
          {...register("language", {
            required: 'Обязательно'
          })}
            type="checkbox"
            name="language"
            value="Hindi"/>
              Hindi
            </label>
            </div>

            <div className="element">
            <label>
            <input
          {...register("language")}
            type="checkbox"
            name="language"
            value="Farsi"/>
              Farsi
            </label>
            </div>
            <div className="element">
            <label>
            <input
          {...register("language")}
            type="checkbox"
            name="language"
            value="Afrikaans"/>
              Afrikaans
            </label>
            </div>

            <div className="element">
            <label>
            <input
          {...register("language")}
            type="checkbox"
            name="language"
            value="Nahuatl"/>
              Nahuatl
            </label>
            </div>

            <div className="element">
            <label>
            <input
          {...register("language")}
            type="checkbox"
            name="language"
            value="Maya"/>
              Maya
            </label>
            </div>
            </div>

          <input type="button" value="The next question" className="inputBtn" onClick={handleClickTwo}></input>
</>
          }

          {questTwoActive &&
<>
          <div className="question">Where are you from?</div>
          <div className="cont">
            <div className="element">
          <label>
          <input
              {...register("country", {
                required: 'Обязательно'
              })}
              type="radio"
              name="country"
              value="Morocco"/>
            Morocco
          </label>
            </div>
            <div className="element">
          <label>
          <input
              {...register("country")}
                  type="radio"
                  name="country"
                  value="Tunisia"/>
            Tunisia
          </label>
            </div>
            <div className="element">
          <label>
          <input
              {...register("country")}
              type="radio"
              name="country"
              value="Ghana"/>
            Ghana
          </label>
            </div>
            <div className="element">
          <label>
          <input
              {...register("country")}
              type="radio"
              name="country"
              value="Nigeria"/>
            Nigeria
          </label>
            </div>
            <div className="element">
          <label>
          <input
              {...register("country")}
              type="radio"
              name="country"
              value="Lesotho"/>
            Lesotho
          </label>
            </div>
          </div>

            <div>
          <input type="submit" className={`${!watch().language || !watch().country ? 'inputBtnDis inputBtn' : 'inputBtn'}`} disabled={!watch().language || !watch().country}/>
          </div>
        </>
          }

        </form>

      </div>
      </div>
  );
}

export default HTMLReactHookForm;


