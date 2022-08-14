import { Formik, Form, Field } from "formik";
import { Component } from "react";
import { Box } from "../../utils/Box";
import { SField, SLabel, SMaskedInput } from "./Phonebook.styled";
import * as Yup from "yup";

export class Phonebook extends Component {
  SignupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    number: Yup.string().required("Required"),
  });
  initialValues = {
    name: "",
    number: "",
  };
  submit = (value, evt) => {
    this.props.add(value);
    evt.resetForm();
  };

  render() {
    const { initialValues, submit, SignupSchema } = this;
    return (
      <>
        <Box width="250px">
          <h1>Phonebook</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={submit}
            validationSchema={SignupSchema}
          >
            <Form>
              <Box mb={3}>
                <SLabel htmlFor="name">
                  <SField
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  />
                </SLabel>
              </Box>
              <div>
                <SLabel htmlFor="number">
                  <Field id="number" name="number">
                    {({ field }) => {
                      return (
                        <SMaskedInput
                          mask={[
                            /[1-9]/,
                            /\d/,
                            /\d/,

                            "-",
                            /\d/,
                            /\d/,

                            "-",
                            /\d/,
                            /\d/,
                          ]}
                          {...field}
                          type="tel"
                          placeholder="Number for ex:111-22-33"
                        />
                      );
                    }}
                  </Field>
                </SLabel>
              </div>

              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </Box>
      </>
    );
  }
}
