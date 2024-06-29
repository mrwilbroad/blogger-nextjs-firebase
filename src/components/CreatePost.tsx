"use client";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
  FormikProps,
} from "formik";
import * as Yup from "yup";
import { Spinner, Alert } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { FirebaseApp, Firebasedb } from "@/lib/Firebase";

import React, { useEffect, useState } from "react";
import ErrorC from "./Forms/ErrorC";

const CreatePost = () => {
  const [Message, setMessage] = useState({
    variant: "danger",
    message: "",
    show: false,
  });


  const InitialData = {
    title: "",
    description: "",
    created_at: "",
  };

  type InitialDataProps = typeof InitialData;
  const HandleCreate = async (
    values: InitialDataProps,
    { setSubmitting, ...props }: FormikHelpers<InitialDataProps>
  ) => {

    setMessage({...Message,show : false});
    try {
      const collectionRef = collection(Firebasedb, "news");
      const res = await addDoc(collectionRef, {
        title: values.title,
        description: values.description,
      });

      setMessage({
        variant: "success",
        message: "Post successfull created",
        show: true,
      });
      props.resetForm();
    } catch (error) {
      setMessage({
        variant: "danger",
        message: "Something went wrong",
        show: true,
      });
    }

    //  console.log(res.);
  };

  return (
    <div>
      <p>Create New Post</p>

      {Message.message  && Message.show === true && (
        <Alert show={Message.show} variant={Message.variant} >
          <p>{Message.message}</p>
        </Alert>
      )}

      <Formik initialValues={InitialData} onSubmit={HandleCreate}>
        {(formik: FormikProps<InitialDataProps>) => {
          return (
            <Form className="vstack gap-2 col-lg-5">
              <section>
                <Field
                  name="title"
                  placeholder="Title"
                  className="form-control "
                />
                <ErrorMessage name="title" component={ErrorC} />
              </section>

              <section>
                <Field
                  name="description"
                  as="textarea"
                  className="form-control "
                  placeholder="Description"
                />
                <ErrorMessage name="description" component={ErrorC} />
              </section>

              <section>
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="btn btn-primary"
                >
                  {formik.isSubmitting ? (
                    <section>
                      Please wait ...{" "}
                      <Spinner
                        animation="border"
                        variant="info"
                        role="status"
                        size="sm"
                      />
                    </section>
                  ) : (
                    "submit"
                  )}
                </button>
              </section>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CreatePost;
