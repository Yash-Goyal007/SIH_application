import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Autocomplete, Box, Grid, Typography } from "@mui/material";
import { LoadingButton } from "../../components/Buttons/Buttons";
import { FormTextField } from "../../components/TextFields/TextField";
import { useSnackbarContext } from "../../components/Snackbar/context";
import UserContext from "../../context/UserContext";
import UserService from "../../api/userService";

const options: readonly string[] = ["Patient", "Doctor", "Institute"];
function SignUpEmail({ setForm }: any) {
  const [openAutoComplete, setOpenAutocomplete] = useState(false);
  const { isUserLoggedIn, setIsUserLoggedIn, setUser, setToken } =
    useContext(UserContext);
  const navigate = useNavigate();
  const {
    ToastService: { showToast },
  } = useSnackbarContext();

  const handleSubmit = (values: any, setSubmitting: any) => {
    UserService.signUp(
      values.firstName,
      values.lastName,
      values.email,
      values.password,
      values.confirmPassword,
      values.profileType,
      values.institute,
      values.phone,
      values.dob,
      values.standard,
      values.addressLineOne,
      values.addressLineTwo,
      values.zipCode,
      values.licenseNo,
      values.aicteCode,
    )
      .then((response) => {
        setUser(response.user);
        setToken(response.tokenData);
        setIsUserLoggedIn(true);
        setSubmitting(false);
        navigate("/dashboard");
      })
      .catch((error) => {
        showToast(true, "error", "Sign Up Failed. Please try again", "center");
        setSubmitting(false);
      });
  };

  const validationSchema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .oneOf([yup.ref("password"), null], "passwords do not match")
      .required("Confirm Password is required"),
    profileType: yup
      .string()
      .required("Please Enter profile Type")
      .default("Patient"),
    institute: yup.string().when("profileType", {
      is: "Patient",
      then: yup.string().required("Institute is required"),
      otherwise: yup.string().default(""),
    }),
    phone: yup
      .number()
      .min(1000000000, "Enter ten digit No.")
      .max(9999999999, "Enter ten digit No.")
      .required("Phone is required")
      .typeError("A number is required"),
    dob: yup.date().when("profileType", {
      is: "Patient",
      then: yup.date().required("Date of birth is required"),
      otherwise: yup.date(),
    }),
    standard: yup.string().when("profileType", {
      is: "Patient",
      then: yup.string().required("standard is required"),
      otherwise: yup.string().default(""),
    }),
    addressLineOne: yup.string(),
    addressLineTwo: yup.string(),
    zipCode: yup
      .number()
      .min(100000, "Must be a 6 digit number")
      .max(999999, "Must be a 6 digit number")
      .typeError("A number is required"),
    licenseNo: yup.string().when("profileType", {
      is: "Doctor",
      then: yup.string().required("Please Enter Licensce No"),
      otherwise: yup.string().default(""),
    }),
    aicteCode: yup.string().when("profileType", {
      is: "Institute",
      then: yup.string().required("Please Enter AICTE No"),
      otherwise: yup.string().default(""),
    }),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      profileType: "Patient",
      institute: "",
      phone: "",
      dob: "",
      standard: "",
      addressLineOne: "",
      addressLineTwo: "",
      zipCode: "",
      licenseNo: "",
      aicteCode: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmit(values, setSubmitting);
    },
  });

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate("/dashboard");
    }
  }, [isUserLoggedIn, navigate]);

  return (
    <Box
      component="form"
      noValidate
      onSubmit={formik.handleSubmit}
      sx={{ mt: 1 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            component="label"
            variant="subtitle2"
            color="text.secondary"
          >
            First Name *
          </Typography>
          <FormTextField
            required
            fullWidth
            autoComplete="given-name"
            autoFocus
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.firstName)}
            helperText={formik.errors.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            component="label"
            variant="subtitle2"
            color="text.secondary"
          >
            Last Name *
          </Typography>
          <FormTextField
            required
            fullWidth
            autoComplete="family-name"
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.lastName)}
            helperText={formik.errors.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="label"
            variant="subtitle2"
            color="text.secondary"
          >
            Your Email Address *
          </Typography>
          <FormTextField
            required
            fullWidth
            autoComplete="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.email)}
            helperText={formik.errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="label"
            variant="subtitle2"
            color="text.secondary"
          >
            Enter Password *
          </Typography>
          <FormTextField
            required
            autoComplete="new-password"
            fullWidth
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.password)}
            helperText={formik.errors.password}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="label"
            variant="subtitle2"
            color="text.secondary"
          >
            Confirm Password *
          </Typography>
          <FormTextField
            required
            autoComplete="new-password"
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.confirmPassword)}
            helperText={formik.errors.confirmPassword}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="label"
            variant="subtitle2"
            color="text.secondary"
          >
            Contact No *
          </Typography>
          <FormTextField
            required
            autoComplete="phone"
            fullWidth
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.phone)}
            helperText={formik.errors.phone}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="label"
            variant="subtitle2"
            color="text.secondary"
          >
            Profile Type *
          </Typography>
          <Autocomplete
            id="profile-type"
            open={openAutoComplete}
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            onOpen={() => {
              setOpenAutocomplete(true);
            }}
            onClose={() => {
              setOpenAutocomplete(false);
            }}
            options={options}
            autoComplete
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <FormTextField
                {...params}
                label=""
                InputProps={{
                  ...params.InputProps,
                  endAdornment: params.InputProps.endAdornment,
                }}
              />
            )}
            value={formik.values.profileType}
            onChange={(_, opt) => {
              formik.setFieldValue("profileType", opt);
            }}
            renderOption={(liProps, option) => (
              <li {...liProps} key={option}>
                {option}
              </li>
            )}
          />
        </Grid>
        {formik.values.profileType === "Patient" && (
          <>
            <Grid item xs={12}>
              <Typography
                component="label"
                variant="subtitle2"
                color="text.secondary"
              >
                Date of Birth *
              </Typography>
              <FormTextField
                required
                autoComplete="dob"
                fullWidth
                type="date"
                id="dob"
                name="dob"
                value={formik.values.dob}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.dob)}
                helperText={formik.errors.dob}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                component="label"
                variant="subtitle2"
                color="text.secondary"
              >
                Institue *
              </Typography>
              <FormTextField
                required
                autoComplete="institute"
                fullWidth
                id="institute"
                name="institute"
                value={formik.values.institute}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.institute)}
                helperText={formik.errors.institute}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                component="label"
                variant="subtitle2"
                color="text.secondary"
              >
                Standard *
              </Typography>
              <FormTextField
                required
                autoComplete="standard"
                fullWidth
                id="standard"
                name="standard"
                value={formik.values.standard}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.standard)}
                helperText={formik.errors.standard}
              />
            </Grid>
          </>
        )}
        {formik.values.profileType === "Doctor" && (
          <>
            <Grid item xs={12}>
              <Typography
                component="label"
                variant="subtitle2"
                color="text.secondary"
              >
                License No *
              </Typography>
              <FormTextField
                required
                autoComplete="licenseNo"
                fullWidth
                id="licenseNo"
                name="licenseNo"
                value={formik.values.licenseNo}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.licenseNo)}
                helperText={formik.errors.licenseNo}
              />
            </Grid>
          </>
        )}
        {formik.values.profileType === "Institute" && (
          <>
            <Grid item xs={12}>
              <Typography
                component="label"
                variant="subtitle2"
                color="text.secondary"
              >
                AICTE Code *
              </Typography>
              <FormTextField
                required
                autoComplete="aicteCode"
                fullWidth
                id="aicteCode"
                name="aicteCode"
                value={formik.values.aicteCode}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.aicteCode)}
                helperText={formik.errors.aicteCode}
              />
            </Grid>
          </>
        )}
        {(formik.values.profileType === "Doctor" ||
          formik.values.profileType === "Institute") && (
          <>
            <Grid item xs={12}>
              <Typography
                component="label"
                variant="subtitle2"
                color="text.secondary"
              >
                Address Line One *
              </Typography>
              <FormTextField
                required
                autoComplete="address-line1"
                fullWidth
                id="addressLineOne"
                name="addressLineOne"
                value={formik.values.addressLineOne}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.addressLineOne)}
                helperText={formik.errors.addressLineOne}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                component="label"
                variant="subtitle2"
                color="text.secondary"
              >
                Address Line Two *
              </Typography>
              <FormTextField
                required
                autoComplete="address-line2"
                fullWidth
                id="addressLineTwo"
                name="addressLineTwo"
                value={formik.values.addressLineTwo}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.addressLineTwo)}
                helperText={formik.errors.addressLineTwo}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                component="label"
                variant="subtitle2"
                color="text.secondary"
              >
                Zipcode *
              </Typography>
              <FormTextField
                required
                autoComplete="postal-code"
                fullWidth
                id="zipCode"
                name="zipCode"
                value={formik.values.zipCode}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.zipCode)}
                helperText={formik.errors.zipCode}
              />
            </Grid>
          </>
        )}
      </Grid>
      <LoadingButton
        loading={formik.isSubmitting}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign Up
      </LoadingButton>
      <Typography variant="h4" component="h3" color="text.secondary" paragraph>
        Already have an account?{" "}
        <span
          style={{ color: "#0093E3", cursor: "pointer" }}
          onClick={() => setForm("login")}
        >
          Log In
        </span>
      </Typography>
    </Box>
  );
}

export default SignUpEmail;
