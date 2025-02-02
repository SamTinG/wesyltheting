import React, { useState } from "react";
import axios from "axios";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
  FormControl,
} from "@mui/material";
import "./form.css";

const Form = ({ uuid }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    companion: "0",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setIsLoading(true);
    try {
      await axios.post("https://wedding-server-z200.onrender.com/submit", {
        ...formData,
        uuid,
      });
      setSubmitted(true);
    } catch (err) {
      setIsLoading(false);
      setError(
        "Oops! Submission failed! Please try again later or contact the wedding hosts!",
      );
    }
  };

  return (
    <>
      {submitted ? (
        <div className="thankyou-image-container">
          <img
            className="thankyou-image"
            src={`${process.env.PUBLIC_URL}/thankyou.png`}
            alt="thankyou"
          />
        </div>
      ) : (
        <div className="outer-container">
          <div className="form-container">
            <div className="form-image-container">
              <img
                className="image"
                src={`${process.env.PUBLIC_URL}/sny1.jpg`}
                alt="sny1"
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <TextField
                  id="outlined-basic"
                  name="name"
                  label="Name"
                  variant="outlined"
                  onChange={handleChange}
                  required
                  value={formData.name}
                />
              </div>
              <div className="input-field">
                <TextField
                  id="outlined-basic"
                  name="phone"
                  label="Phone"
                  variant="outlined"
                  onChange={handleChange}
                  required
                  value={formData.phone}
                />
              </div>
              <div className="input-field">
                <FormControl fullWidth>
                  <InputLabel id="select-label">
                    How many pax? (0 if unable to attend)
                  </InputLabel>
                  <Select
                    labelId="select-label"
                    name="companion"
                    value={formData.companion}
                    onChange={handleChange}
                    label="How many pax? (Select 0 if unable to attend)"
                    required={true}
                    variant="standard"
                  >
                    <MenuItem value="0">0</MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="8">8</MenuItem>
                    <MenuItem value="9">9</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                loading={isLoading}
                loadingPosition="end"
              >
                Submit
              </Button>
            </form>
            <div className="form-image-container">
              <img
                className="half-image"
                src={`${process.env.PUBLIC_URL}/sny2.jpg`}
                alt="sny1"
              />
              <img
                className="half-image"
                src={`${process.env.PUBLIC_URL}/sny3.jpg`}
                alt="sny1"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
