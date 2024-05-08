"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ref, uploadBytesResumable } from 'firebase/storage';
import { FormEvent, useState } from 'react';
import { storage } from '../../../firebase/firebase';

const Page = () => {
  const [image, setImage] = useState<File | null>(null);
  const [data, setData] = useState("")
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      console.log(image?.name);
    }
  }

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    console.log("btn presssed")
    if (image) {
      try {
        console.log(storage);
        console.log(image.name);
        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = await uploadBytesResumable(storageRef, image);

        console.log("uploadTask");
      } catch (e) {
        console.log(e)
      }
    }
  }
  return (<div>
    <Input type="file" onChange={handleImageChange} />
    <Button onClick={handleUpload}>Upload</Button>
  </div>);
}

export default Page;