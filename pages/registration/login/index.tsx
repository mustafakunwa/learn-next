import { useRouter } from "next/router";
import { Formik, Form, FormikProps, FormikConfig } from "formik";
import * as Yup from "yup";
import { MutableRefObject, useRef, useState } from "react";
import styles from "./login.module.scss";
import { Grid, Button } from "@mui/material";
import TextField from "../../../components/FormikWrappers/Textfield";
interface credential {
  username: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const formRef = useRef<FormikProps<credential>>(null);
  const [initialFormState] = useState<credential>({
    username: "",
    password: "",
  });

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
  });

  const handleProceed = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const submit = (values: credential) => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__card}>
        <h1>Login</h1>
        <Formik
          innerRef={formRef}
          initialValues={{ ...initialFormState }}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={(values) => submit(values)}
        >
          {({ values }) => (
            <Form>
              <Grid container className={styles.container__form}>
                <Grid item xs={12}>
                  <TextField
                    name="username"
                    label="user name"
                    placeholder="username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="password"
                    label="password"
                    placeholder="password"
                  />
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
        <Button variant="contained" onClick={handleProceed}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
