import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import { Input } from '@/components/common/input'
import { Button } from '@/components/common/button'
import PlusIcon from '@/components/common/icons/plus-icon'
import TrashIcon from '@/components/common/icons/trash-icon'
import defaultProfilePic from '@/images/default-pic.png'
import { UseFormReturn } from 'react-hook-form'
import { contactSchema } from '@/schemas/contact'
import { z } from 'zod'
import ChangeIcon from './common/icons/change-icon'
import { apiImageUrl } from '@/lib/constants'

interface ImageInputProps {
  form: UseFormReturn<z.infer<typeof contactSchema>>
  firstImage?: string
}

const ImageInput = ({ form, firstImage }: ImageInputProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    firstImage ? apiImageUrl + firstImage : null,
  )
  const currentImage = form.watch('picture')

  const addImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setSelectedImage(imageUrl)
      form.setValue('picture', file)
    }
  }, [])

  const removeImage = useCallback(() => {
    form.setValue('picture', undefined)
    setSelectedImage(null)
  }, [])

  return (
    <div className="flex items-center">
      <Image
        src={selectedImage || defaultProfilePic}
        width={300}
        height={300}
        alt="Default profile picture"
        className="aspect-square w-[88px] rounded-full object-cover"
      />
      <Input
        id="picture"
        type="file"
        className="hidden"
        accept="image/*"
        onChange={addImage}
      />
      <Button className="ml-4" type="button" asChild>
        <label
          htmlFor="picture"
          className="flex cursor-pointer items-center gap-2 font-normal"
        >
          {currentImage ? (
            <>
              <ChangeIcon /> Change picture
            </>
          ) : (
            <>
              <PlusIcon /> Add picture
            </>
          )}
        </label>
      </Button>
      {currentImage && (
        <Button type="button" className="ml-2" onClick={removeImage}>
          <TrashIcon />
        </Button>
      )}
    </div>
  )
}

export default ImageInput
