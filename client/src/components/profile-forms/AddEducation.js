import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEducation } from "../../actions/profile";
import Alert from "../layout/Alert";

const AddEducation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;

  const changeHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addEducation(formData, navigate));
  };

  return (
    <section class="container">
      <Alert />
      <h1 class="large text-primary">Add Your Education</h1>
      <p class="lead">
        <i class="fas fa-code-branch"></i> Add any school, bootcamp, etc that
        you have attended
      </p>
      <small>* = required field</small>
      <form class="form" onSubmit={submitHandler}>
        <div class="form-group">
          <input
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            value={school}
            onChange={changeHandler}
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            value={degree}
            onChange={changeHandler}
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Field Of Study"
            name="fieldofstudy"
            value={fieldofstudy}
            onChange={changeHandler}
          />
        </div>
        <div class="form-group">
          <h4>From Date</h4>
          <input
            type="date"
            name="from"
            value={from}
            onChange={changeHandler}
          />
        </div>

        <div class="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={(e) => {
                setFormData((prevFormData) => {
                  return { ...prevFormData, current: !prevFormData.current };
                });
                toggleDisabled((prevToDateDisabled) => !prevToDateDisabled);
              }}
            />{" "}
            Current School
          </p>
        </div>
        <div class="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={changeHandler}
            disabled={toDateDisabled ? "disabled" : ""}
          />
        </div>
        <div class="form-group">
          <textarea
            name="description"
            value={description}
            onChange={changeHandler}
            cols="30"
            rows="5"
            placeholder="Program Description"
          ></textarea>
        </div>
        <input type="submit" class="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </section>
  );
};

export default AddEducation;