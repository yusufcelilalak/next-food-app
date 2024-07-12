"use client";

import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { FolderPlusIcon, TrashIcon } from "@heroicons/react/24/outline";

interface ImagePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: (
    files: FileList | File | null | React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const ImagePicker = forwardRef<HTMLInputElement, ImagePickerProps>(
  ({ className, ...props }, ref) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result as string);
          props.onChange?.(event.target.files);
        };
        reader.readAsDataURL(file);
      }
    };

    const handleRemoveImage = () => {
      setSelectedImage(null);
      if (inputRef.current) {
        inputRef.current.value = ""; // Clear the input value
      }
      props.onChange?.(null); // Clear field value
    };

    return (
      <div className="relative w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
        {selectedImage ? (
          <>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-1 right-1 p-1 bg-white rounded-full shadow-md"
            >
              <TrashIcon className="h-5 w-5 text-red-500" />
            </button>
          </>
        ) : (
          <label className="flex flex-col items-center cursor-pointer">
            <FolderPlusIcon className="h-8 w-8 text-gray-500" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
              ref={inputRef}
              name={props.name}
            />
          </label>
        )}
      </div>
    );
  }
);

ImagePicker.displayName = "ImagePicker";

export default ImagePicker;
