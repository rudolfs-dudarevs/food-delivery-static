import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../Button/Button";
import "./ContactUs.scss";

const ContactUs = () => {
 const [isSent, setIsSent] = useState(false);
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm();

 const onSubmit = (data) => {
  setIsSent(true);
 };

 const contactForm = () => {
  return (
   <div className="contact-us__wrapper">
    <form className="contact-us__form" onSubmit={handleSubmit(onSubmit)}>
     <h2 className="contact-us__title">Contact us</h2>
     <input className="contact-us__input" placeholder="Hungry Joe" {...register("name", { required: true })} />
     {errors.name && <span className="contact-us__error">This field is required</span>}
     <input className="contact-us__input" placeholder="joe@feed.me" {...register("email", { required: true })} />
     {errors.email && <span className="contact-us__error">This field is required</span>}
     <textarea className="contact-us__input-area" placeholder="Hello..." {...register("message", { required: true })} />
     {errors.message && <span className="contact-us__error">This field is required</span>}

     <Button isPrimary type="submit" text="Send" />
    </form>
   </div>
  );
 };

 const sentSuccess = () => {
  return <div className="contact-us_sent-success">We have received your message!</div>;
 };

 return <>{!isSent ? contactForm() : sentSuccess()}</>;
};

export default ContactUs;
