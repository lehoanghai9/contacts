import { Router } from "express";

import {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
} from "../controllers/contact.controller";
import { validateRequest } from "zod-express-middleware";
import { contactSchema } from "../validations/contact.schema";
import { upload } from "../configs/multer.config";

const contactRouter = Router();
contactRouter.get("/", getAllContacts);
contactRouter.post(
  "/",
  upload.single("picture"),
  validateRequest({
    body: contactSchema,
  }),
  createContact
);
contactRouter.put(
  "/:id",
  upload.single("picture"),
  validateRequest({
    body: contactSchema,
  }),
  updateContact
);
contactRouter.delete("/:id", deleteContact);

export default contactRouter;
