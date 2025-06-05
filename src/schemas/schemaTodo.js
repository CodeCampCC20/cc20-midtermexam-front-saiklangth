import * as Yup from "yup"

export const schemaTodo = Yup.object({
  taskName: Yup.string()
  .max(30)
  .required("Username is required")
})