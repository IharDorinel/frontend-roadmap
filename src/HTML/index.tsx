import {ReactNode, useState} from "react";
import {useForm} from "react-hook-form";

type Data = {
    language?: Array<string>;
    country?: string;
}


function HTMLReactHookForm () {

  const [step, setStep] = useState<number>(1)

  const {
    register,
    handleSubmit,
    watch,
      formState: {
        errors,
      }
  } = useForm({
    mode: "onBlur"
  })

  const showResults = (data: Data): void => {
    alert(JSON.stringify(data))
  }

  const handleClick = (step: number): void => {
      setStep(step)
  }


  const showQuestion = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <div className="question">Which languages do you speak?</div>
                        <div className="cont">
                            <div className="element">
                                <label>
                                    <input
                                        {...register("language", {
                                            required: 'Поле обязательно к заполнению!'
                                        })}
                                        type="checkbox"
                                        data-testid = "hindi"
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
                                        data-testid = "farsi"
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
                                        data-testid = "afrikaans"
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
                                        data-testid = "nahuatl"
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
                                        data-testid = "maya"
                                        name="language"
                                        value="Maya"/>
                                    Maya
                                </label>
                            </div>
                        </div>
                        <div>{errors?.language && <p>{errors?.language?.message as ReactNode}</p>}</div>

                        <input type="button" data-testid="inputBtn" value="The next question" className="inputBtn" onClick={() => handleClick(2)}></input>
                    </>
                )
            break;

            case 2:
                return (
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
                                        data-testid = "morocco"
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
                                        data-testid = "tunisia"
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
                                        data-testid = "ghana"
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
                                        data-testid = "nigeria"
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
                                        data-testid = "lesotho"
                                        name="country"
                                        value="Lesotho"/>
                                    Lesotho
                                </label>
                            </div>
                        </div>

                        <div>
                            <input type="submit" data-testid="submitBtn" className={`${!watch().language || !watch().country ? 'inputBtnDis inputBtn' : 'inputBtn'}`} disabled={!watch().language || !watch().country}/>
                        </div>
                    </>
                )
            break;

        }
  }


  return (
      <div data-testid="react-hook-form">
        <div className="sectionCont">
          <h3>React-hook-form</h3>

        <div className="steperCont">
          <div className={`${step === 1 ? "steperActive" : "steper steperActive"}`} onClick={() => handleClick(1)}></div>
          <div className={`${step === 2 ? "steperActive" : "steper steperActive"}`} onClick={() => handleClick(2)}></div>
        </div>

        <form className="form" onSubmit={handleSubmit(showResults)}>
            {showQuestion()}

        </form>

      </div>
      </div>
  );
}

export default HTMLReactHookForm;


