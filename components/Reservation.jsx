import Input from "./form/Input";
import Title from "./ui/Title";
import { useFormik } from "formik";
import  {reservationSchema}  from "../schema/reservation.js";

const Reservation = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      people: "",
      date: "",
    },
    onSubmit,
    validationSchema: reservationSchema,
  });
  
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: formik.values.fullName,
      errorMessage: formik.errors.fullName,
      touched: formik.touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: formik.values.phoneNumber,
      errorMessage: formik.errors.phoneNumber,
      touched: formik.touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email",
      value: formik.values.email,
      errorMessage: formik.errors.email,
      touched: formik.touched.email,
    },
    {
      id: 4,
      name: "people",
      type: "number",
      placeholder: "Number of People",
      value: formik.values.people,
      errorMessage: formik.errors.people,
      touched: formik.touched.people,
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      placeholder: "Date",
      value: formik.values.date,
      errorMessage: formik.errors.date,
      touched: formik.touched.date,
    },
  ];
  
  return (
    <div className="container mx-auto py-12">
      <Title className="text-[2.5rem] mb-10">Book A Table</Title>
      <div className="flex justify-between flex-wrap-reverse gap-10">
        <form className="lg:flex-1 w-full" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-y-3">
            {inputs.map((input) => {
              return (
                <Input
                  key={input.id}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                  onChance={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              );
            })}
          </div>
          <button className="btn-primary mt-4" type="submit">
            BOOK NOW
          </button>
        </form>
        <div className="lg:flex-1 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11181.507501952728!2d-73.60898722582434!3d45.522621021097386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9197e145a5a3b%3A0x17fec15c3af704b!2sMile%20End%2C%20Montreal%2C%20QC!5e0!3m2!1sen!2sca!4v1690903277170!5m2!1sen!2sca"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
