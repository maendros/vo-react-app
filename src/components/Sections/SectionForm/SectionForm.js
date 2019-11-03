import React from "react";
import useForm from "react-hook-form";

import "./SectionForm.css";
const SectionForm = ({ ...data }) => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <form className="form-content" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form-title">{data.formText}</h2>
      <p className="form-graph-text ">{data.graphText}</p>

      <input
        type="tel"
        placeholder={data.formLabels[0]}
        className="form-input"
        name="tel"
        ref={register({
          required: true,
          min: 10,
          maxLength: 13,
          pattern: /([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/i
        })}
      />
      <div className="error-info"> {errors.tel && "invalid tel number"}</div>

      <input
        type="text"
        className="form-input"
        name="email"
        placeholder={data.formLabels[1]}
        ref={register({
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address"
          }
        })}
      />
      <div className="error-info"> {errors.email && errors.email.message}</div>

      <input
        type="password"
        placeholder={data.formLabels[2]}
        className="form-input"
        name="password"
        ref={register({
          min: 8,
          pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*/i
        })}
      />
      <div className="error-info">
        {" "}
        {errors.password &&
          "you must at least include 1 lowercase number 1 symbol 1 capital and 1 number "}
      </div>

      <button type="submit" className="form-submit">
        {data.buttonText}
      </button>
    </form>
  );
};

export default SectionForm;
