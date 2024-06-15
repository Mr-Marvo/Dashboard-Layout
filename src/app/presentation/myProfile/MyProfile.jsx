import React, { useRef, useState } from "react";
import { Button, Divider, Typography } from "antd";
import ProfileOutlinePrimary from "../../../assets/svg/ProfileOutlinePrimary";
import PersonalDetails from "./features/PersonalDetails";
import UserIcon from "../../../assets/images/svg/UserIcon";
import NeztdoId from "../../../assets/svg/myProfile/NeztdoId";
import EmailIcon from "../../../assets/svg/myProfile/EmailIcon";
import ImageEditIcon from "../../../assets/svg/myProfile/ImageEditIcon";
import ColorProfileImage from "./features/ColorProfileImage";
import ActionDialog from "../components/common/dialogs/actionDialog/ActionDialog";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";
import Profile from "../../../assets/svg/myProfile/Profile.svg";

const { Text } = Typography;

const MyProfile = () => {
  const [imgUploadDialogOpen, setImgUploadDialogOpen] = useState(false);

  //profcard
  const [previewUrl, setPreviewUrl] = useState("sample url here");
  const imageRef = useRef(null);
  const [cropper, setCropper] = useState(null);

  const handleImageUploadDialogOpen = () => {
    setImgUploadDialogOpen(true);
  };
  const handleImageUploadDialogClose = () => {
    setImgUploadDialogOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file.size > 10 * 1024 * 1024) {
      openNotification("error", "File size exceeds the limit of 10 MB");
      return; // Stop further execution
    }
    if (file.type !== "image/png" && file.type !== "image/jpeg") {
      openNotification("error", "Please upload a JPEG/PNG image file.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const image = imageRef.current;
      image.src = e.target.result;
      if (cropper) {
        cropper.destroy();
      }
      const newCropper = new Cropper(image, {
        aspectRatio: 1 / 1,
      });
      setCropper(newCropper);
    };
    // // Read the selected file as a data URL
    reader.readAsDataURL(file);
  };

  const handleCrop = () => {
    if (cropper) {
      const imgurl = cropper.getCroppedCanvas().toDataURL();
      const img = document.createElement("img");
      img.src = imgurl;
      //document.getElementById("cropped_result").appendChild(img);

      cropper.getCroppedCanvas().toBlob((blob) => {
        updateProfilePicture(blob);
      });
      setUploadButtonState(true);
    }
  };

  const updateProfilePicture = async (profileImage) => {
    //Upload profile pic
  };

  return (
    <div className="flex flex-col w-full h-max">
      <div className="flex flex-row w-full gap-2 justify-between px-4 border-b border-b-secondaryFive py-2 fixed bg-primaryBgColor z-10 ">
        <div>
          <Text
            level={1}
            className="flex flex-row page-title gap-1 items-center"
          >
            <ProfileOutlinePrimary className="flex w-[20px]" />
            My Account
          </Text>
        </div>
      </div>
      <div className="flex w-full flex-col lg:flex-row px-8 lg:px-20 h-fit mt-16">
        <div className="flex min-w-[265px] lg:w-[29%] ">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col gap-2 p-2 md:px-4 border rounded-md border-secondarySix">
              <div className="flex flex-col gap-2 items-start">
                <div className="flex items-center justify-center ml-3 mt-4 w-24 h-[98px] rounded-full border-[1px]">
                  <div className="flex w-full h-full rounded-full">
                    {/* Preview the selected image */}
                    <div className="flex  w-full h-full rounded-full">
                      <ColorProfileImage
                        name="Nishan Premakumara"
                        color="#248f76"
                        textSize="20px"
                      />
                    </div>

                    {/* Input element to select a file */}

                    {/* Button to trigger file input click */}
                    <label
                      className="absolute cursor-pointer mt-[75px] ml-[62px]"
                      onClick={handleImageUploadDialogOpen}
                    >
                      <div className=" rounded-full p-1 bg-white items-center justify-center">
                        <ImageEditIcon className="w-[18px] h-[18px] flex" />
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex flex-row gap-2">
                  <UserIcon size={20} className="w-5" />
                  <div className="flex flex-col">
                    <Text className="primary-button">Nishan Premakumara</Text>
                    <Text className="flex justify-center items-center w-fit px-2 bg-primaryGreen  text-[9px] font-semibold text-white rounded-xl">
                      Software Engineer
                    </Text>
                  </div>
                </div>

                <div className="flex flex-row gap-2">
                  <NeztdoId size={13} className="w-5 mt-1" />
                  <Text className="primary-button">UID 001</Text>
                </div>

                <div className="flex flex-row gap-2">
                  <EmailIcon size={18} className="w-5 mt-1" />
                  <Text className="primary-button">
                    aknpremakumara@gmail.com
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Divider
          type="vertical"
          className="h-[650px] md:mx-6 lg:mx-8 hidden lg:block"
        />
        <Divider className="lg:hidden" />

        <div className="flex justify-center min-w-[220px] md:w-[80%]">
          <PersonalDetails />
        </div>
      </div>

      {imgUploadDialogOpen && (
        <ActionDialog
          modelOpen={imgUploadDialogOpen}
          handleCancel={() => {
            handleImageUploadDialogClose(false);
          }}
          title="Update Profile Picture"
          size={750}
        >
          <div className="flex flex-row gap-3 p-4 w-full justify-center">
            <div className="flex items-center justify-center border-[2px] min-h-[120px] h-[300px] w-[80%]">
              <img
                src={previewUrl != null ? previewUrl : Profile}
                className="max-w-full max-h-full"
                ref={imageRef}
                alt="Preview"
              />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center w-[30%]">
              {/* Input element to select a file */}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden" // Hide the default input style
                id="file-input"
              />
              {/* Button to trigger file input click */}
              <label
                htmlFor="file-input"
                className="cursor-pointer w-20 text-center bg-primaryBgColor  rounded-lg border-[2px]"
              >
                Browse
              </label>
              <Button type="primary" onClick={handleCrop}>
                Upload
              </Button>
            </div>
          </div>
        </ActionDialog>
      )}
    </div>
  );
};

export default MyProfile;
