import * as Yup from 'yup'

export const loginSchema = Yup.object({
  username: Yup.string()
  .max(30)
  .required("กรุณากรอก user"),
  password: Yup.string()
  .max(20)
  .required("กรุณากรอก password")
})