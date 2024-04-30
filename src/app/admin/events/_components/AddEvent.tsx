"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { storage } from "../../../../../firebase/firebase";

const AddEvent = () => {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    category: "",
    location: "",
    price: 0,
    description: "",
    photo: "",
    date: "",
  });
  const image = useRef<HTMLInputElement>(null);


  const handleUpload = async () => {
    if (image.current && image.current.files && image.current.files[0]) {
      // TODO: add a loading function 
      try {

        const storageRef = ref(storage, `${image.current.files[0].name}`);
        await uploadBytes(storageRef, image.current.files[0])
          .then(() => {

            getDownloadURL(storageRef).then((url) => {
              setData({ ...data, photo: url });
            })
            console.log("upload successfully!!!");
          })
      } catch (e) {
        console.log(e);
      }
    }
  }
  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("submit begun");
    // TODO: add a loading function 
    const res = await fetch("/api/addEvent", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!res.ok) {
      console.log("not ok!!!!");
      return;
    }
    console.log("added to database")
    router.push("/admin/events");


  }

  return (<div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 justify-center items-center" >

    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Add New Event</CardTitle>
        <CardDescription>Fill out the form to create a new listing.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter the name" onChange={(e) => setData({ ...data, name: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="Enter the location" onChange={(e) => setData({ ...data, location: e.target.value })} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input id="price" placeholder="Enter the price" type="number" onChange={e => setData({ ...data, price: Number(e.target.value) })} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" onChange={e => setData({ ...data, date: e.target.value })} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select name="category" onValueChange={e => setData({ ...data, category: e })}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="Enter the city" onChange={e => setData({ ...data, location: e.target.value })} />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea className="min-h-[100px]" id="description" placeholder="Enter a description" onChange={e => setData({ ...data, description: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Add Image</Label>
          <div className="flex items-center space-x-2">
            <Input id="image" type="file" ref={image} />
            <Button variant="outline" onClick={handleUpload}>Add Image</Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onSubmit}
          className={`ml-auto  text-white bg-indigo-500 hover:bg-indigo-400`} type="submit">
          Submit
        </Button>
      </CardFooter>
    </Card>
  </div>);
}

export default AddEvent;