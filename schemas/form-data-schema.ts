import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const FormDataSchema = z.object({
  creator: z.string().min(1, {
    message: "Name is required",
  }),
  creator_email: z.string().email({
    message: "Invalid email address",
  }),
  title: z.string().min(1, {
    message: "Title is required",
  }),
  summary: z.string().min(1, {
    message: "Summary is required",
  }),
  instructions: z.string().min(1, {
    message: "Instructions is required",
  }),
  image: z
    .any()
    .refine((file) => file !== null, { message: "Image is required." })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), {
      message: "Only .jpg, .jpeg, and .png files are accepted.",
    })
    .refine((file) => file?.size <= MAX_FILE_SIZE, {
      message: `Max file size is 5MB.`,
    }),
  slug: z.any(),
});

export default FormDataSchema;
