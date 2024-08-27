import { PrismaClient } from "@prisma/client";
import { type Request, type Response } from "express";

const contactClient = new PrismaClient().contact;

// Get All Contacts
export const getAllContacts = async (req: Request, res: Response) => {
  try {
    const allContacts = await contactClient.findMany();

    res.status(200).json(allContacts);
  } catch (error) {
    console.log(error);
  }
};

// Create Contact
export const createContact = async (req: Request, res: Response) => {
  try {
    const contactData = req.body;
    const contact = await contactClient.create({
      data: {
        name: contactData.name,
        email: contactData.email,
        phone: contactData?.phone,
        picture: req?.file?.filename ?? null,
      },
    });

    res.status(201).json(contact);
  } catch (error) {
    console.log(error);
  }
};

// Update Contact
export const updateContact = async (req: Request, res: Response) => {
  try {
    const contactId = req.params.id;
    const contactData = req.body;
    var updateAbleFields;
    if (contactData?.pictureState === "changed") {
      updateAbleFields = {
        email: contactData?.email,
        name: contactData.name,
        phone: contactData?.phone,
        picture: req?.file?.filename ?? null,
      };
    } else {
      updateAbleFields = {
        email: contactData?.email,
        name: contactData.name,
        phone: contactData?.phone,
      };
    }

    const contact = await contactClient.update({
      where: {
        id: contactId,
      },
      data: updateAbleFields,
    });

    res.status(200).json(contact);
  } catch (error) {
    console.log(error);
  }
};

// Delete Contact
export const deleteContact = async (req: Request, res: Response) => {
  try {
    const contactId = req.params.id;
    const contact = await contactClient.delete({
      where: {
        id: contactId,
      },
    });

    res.status(200).json();
  } catch (error) {}
};
