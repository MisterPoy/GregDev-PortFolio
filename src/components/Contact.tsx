import "../assets/styles/Contact.scss";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { useState } from "react";


function Contact() {
  const [name, setName] = useState<string>("");
  /* const [email, setEmail] = useState<string>(""); */
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
/*  const [emailError, setEmailError] = useState<boolean>(false); */
  const [messageError, setMessageError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(name === "");
   /*  setEmailError(email === ""); */
    setMessageError(message === "");

    if (name !== "" && message !== "") {
      const subject = `Nouveau message de ${name}`;
      const body = `Nom: ${name}\n\nMessage: ${message}`;

      const mailtoUrl = `mailto:gregory.poupaux@hotmail.fr?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoUrl;
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contactez Moi</h1>
          <p>
           Vous avez un projet qui n'attend qu'à être réalisé ? Colllaborons pour le concrétiser !
          </p>
          <form
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-name"
                label="Votre nom"
                placeholder="Votre nom ?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Merci d'insérer votre nom" : ""}
              />            
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Une question, un avis ?"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Merci d'entrer le message" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} type="submit">
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
