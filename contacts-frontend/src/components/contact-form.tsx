import React from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/common/form'
import ImageInput from '@/components/image-input'
import InputWrapper from '@/components/common/input-wrapper'
import { Input } from '@/components/common/input'
import { Label } from '@/components/common/label'
import { z } from 'zod'
import { UseFormReturn } from 'react-hook-form'
import { contactSchema } from '@/schemas/contact'
import { DialogClose, DialogFooter } from '@/components/common/dialog'
import { Button } from '@/components/common/button'

interface ContactFormProps {
  form: UseFormReturn<z.infer<typeof contactSchema>>
  onSubmit: (values: z.infer<typeof contactSchema>) => void
  onCancel?: () => void
  firstImage?: string
  loading?: boolean
}

const ContactForm = ({
  form,
  onSubmit,
  onCancel,
  firstImage,
  loading = false,
}: ContactFormProps) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-2 space-y-6"
        id="create-contact"
      >
        <ImageInput form={form} firstImage={firstImage} />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputWrapper>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" {...field} placeholder="Jamie Wright" />
                </InputWrapper>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputWrapper>
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" {...field} placeholder="+01 234 5678" />
                </InputWrapper>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputWrapper>
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    {...field}
                    placeholder="jamie.wright@mail.com"
                  />
                </InputWrapper>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="ghost" onClick={onCancel}>
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" loading={loading}>
            Done
          </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}

export default ContactForm
