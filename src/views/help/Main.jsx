<<<<<<< HEAD
import * as $_ from "lodash";

import {
  ClassicEditor,
  Lucide,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Tippy
} from "@/base-components";
import {
  clearAllImage,
  clearImage,
  addNewContact as onAddNewContact,
  uploadImage
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { useDropzone } from "react-dropzone";
=======
import {
  Lucide,
  Tippy,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  ClassicEditor
} from "@/base-components";
import * as $_ from "lodash";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import {
  addNewContact as onAddNewContact,
  getHelp as onGetHelp,
  addNewHelp as onAddNewHelp,
  updateHelp as onUpdateHelp,
  deleteHelp as onDeleteHelp
} from "../../store/actions";
import { Button } from "reactstrap";
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75

function Main() {
  const dispatch = useDispatch();

<<<<<<< HEAD
  const { loading, urls, contact } = useSelector((state) => state.HelpReducer);
=======
  const { help } = useSelector((state) => ({
    help: state.HelpReducer?.help
  }));

  const { contact } = useSelector((state) => ({
    contact: state.HelpReducer?.contact
  }));

  const [getHelp, setHelp] = useState([]);
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75

  const [getContact, setContact] = useState({});

  const [caption, setcaption] = useState("");

  const [content, setcontent] = useState("");

  const [title, settitle] = useState("");

<<<<<<< HEAD
  const [error, setError] = useState(null);

  // 5 MB
  const maxFileSize = 5242880;

=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
  const handleFileUpload = () => {
    const body = {
      title: title,
      content: content,
      caption: caption,
<<<<<<< HEAD
      images: urls
=======
      images: getHelp
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
    };

    dispatch(onAddNewContact(body));
    setContact(contact);
<<<<<<< HEAD
    // console.setcontent("");
    settitle("");
    setcontent();
    setcaption("");
    setFiles([]);
    dispatch(clearAllImage());
  };

  // ** State
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    maxSize: maxFileSize,
    multiple: true,
    accept: {
      "image/*": [".png", ".jpg"]
    },
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length) {
        if (rejectedFiles.length > 0 && rejectedFiles[0].size > maxFileSize) {
          setError("File size is too large");
        } else {
          setError("File type is not supported");
        }
      } else {
        setError(null);
        if (acceptedFiles.length === 0) {
          return;
        } else if (acceptedFiles.length + files.length > 5) {
          setError("You can only upload a maximum of 5 files");
        } else {
          setFiles([
            ...files,
            ...acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file)
              })
            )
          ]);
        }
      }
    }
  });

  const handleRemoveFile = (file) => {
    const uploadedFiles = files;
    const filtered = uploadedFiles.filter((i) => i.name !== file.name);
    setFiles([...filtered]);
    setError(null);
    dispatch(clearImage(file.name));
  };

  useEffect(() => {
    if (
      files &&
      files.length > 0 &&
      files.length <= 5 &&
      !error &&
      !loading &&
      urls.length < files.length
    ) {
      dispatch(uploadImage(files));
    }
  }, [files]);

=======
    settitle("");
    setcontent();
    setcaption("");
    SetImages([]);
  };

  const [categories, setCategories] = useState(["1", "2"]);
  const [tags, setTags] = useState(["1", "2"]);
  const [salesReportFilter, setSalesReportFilter] = useState();
  const [editorData, setEditorData] = useState("<p>Content of the editor.</p>");

  const [GetImages, SetImages] = useState([]);
  const [disabled, setDisabled] = useState(false);

  // if we are using arrow function binding is not required
  //  this.onImageChange = this.onImageChange.bind(this);

  const onImageChange = (event) => {
    if (event.target.files) {
      if (event.target.files[0]) {
        let img = event.target.files[0];
        SetImages((GetImages) => [...GetImages, URL.createObjectURL(img)]);
      }
      if (event.target.files[1]) {
        let img = event.target.files[1];
        SetImages((GetImages) => [...GetImages, URL.createObjectURL(img)]);
      }
      if (event.target.files[2]) {
        let img = event.target.files[2];
        SetImages((GetImages) => [...GetImages, URL.createObjectURL(img)]);
      }
      if (event.target.files[3]) {
        let img = event.target.files[3];
        SetImages((GetImages) => [...GetImages, URL.createObjectURL(img)]);
      }
      if (event.target.files[4]) {
        let img = event.target.files[4];
        SetImages((GetImages) => [...GetImages, URL.createObjectURL(img)]);
      }
    }
  };

  const handleRemoveImage = (value, key) => {
    GetImages.splice(key, 1);
    SetImages(GetImages);
    if (GetImages.length < 5) {
      setDisabled(false);
    }
  };

  useEffect(() => {
    if (GetImages.length != 0) {
      dispatch(onAddNewHelp(GetImages));
    }

    if (GetImages.length == 5) {
      setDisabled(true);
    }

    setHelp(help);
  }, [GetImages, disabled]);

  useEffect(() => {}, [title, content, caption]);
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
  return (
    <>
      <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Contact Us</h2>
<<<<<<< HEAD
        <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
          {/*<button
            type="button"
            className="btn box mr-2 flex items-center ml-auto sm:ml-0"
            onClick={() => {
              handleFileUpload();
            }}
          >
            <Lucide icon="Eye" className="w-4 h-4 mr-2" /> Send
          </button>*/}
        </div>
      </div>
      <div className="pos intro-y grid grid-cols-12 gap-5 mt-5">
        <div className="intro-y col-span-12 lg:col-span-8">
=======
        <div className="w-full sm:w-auto flex mt-4 sm:mt-0"></div>
      </div>
      <div className="pos intro-y grid grid-cols-12 gap-5 mt-5">
        {/* BEGIN: Post Content */}
        <div className="intro-y col-span-12 lg:col-span-8">
          <input
            type="text"
            className="intro-y form-control py-3 px-4 box pr-10"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
          <TabGroup className="post intro-y overflow-hidden box mt-5">
            <TabList className="post__tabs nav-tabs flex-col sm:flex-row bg-slate-200 dark:bg-darkmode-800">
              <Tab fullWidth={false} className="w-full sm:w-40 py-0 px-0" tag="button">
                <Tippy
                  content="Fill in the article content"
                  className="tooltip w-full flex items-center justify-center py-4"
                  aria-controls="content"
                  aria-selected="true"
                >
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Content
                </Tippy>
              </Tab>
            </TabList>
            <TabPanels className="post__content">
              <TabPanel className="p-5">
                <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
                  <div className="font-medium flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                    <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Subject
                  </div>
<<<<<<< HEAD

                  <div className="mt-5">
                    <div>
                      <label htmlFor="post-form-7" className="form-label mr-2">
                        Title
                      </label>
                      <input
                        type="text"
                        className="intro-y form-control box mr-2 py-3 px-4 box pr-10"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => {
                          settitle(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <ClassicEditor
                      value={content}
                      // onKeyUp={(e) => {
                      //   setcontent(e.target.value);
                      // }}
=======
                  <div className="mt-5">
                    <ClassicEditor
                      value={content}
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
                      onChange={(val) => {
                        setcontent(val);
                      }}
                    />
                  </div>
                </div>
                <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5 mt-5">
                  <div className="font-medium flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                    <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Caption & Images
                  </div>
                  <div className="mt-5">
                    <div>
<<<<<<< HEAD
                      <label htmlFor="post-form-7" className="form-label mr-2">
=======
                      <label htmlFor="post-form-7" className="form-label">
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
                        Caption
                      </label>
                      <input
                        id="post-form-7"
                        type="text"
                        className="form-control"
                        placeholder="Write caption"
                        value={caption}
                        onChange={(e) => {
                          setcaption(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mt-3">
                      <label className="form-label">Upload Image</label>
                      <div className="border-2 border-dashed dark:border-darkmode-400 rounded-md pt-4 pb-4">
                        <div className="flex flex-wrap px-4">
<<<<<<< HEAD
                          {$_.take(files, files.length).map((value, key) => (
=======
                          {$_.take(GetImages, GetImages.length).map((value, key) => (
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
                            <div
                              key={key}
                              className="w-24 h-24 relative image-fit mb-5 mr-5 cursor-pointer zoom-in"
                            >
<<<<<<< HEAD
                              <img className="rounded-md" alt={value.name} src={value.preview} />
=======
                              <img
                                className="rounded-md"
                                alt="Customer Portal - KAISPE"
                                src={value}
                              />
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
                              <Tippy
                                tag="div"
                                content="Remove this image?"
                                className="w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-danger right-0 top-0 -mr-2 -mt-2"
                                onClick={() => {
<<<<<<< HEAD
                                  handleRemoveFile(value);
=======
                                  handleRemoveImage(value, key);
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
                                }}
                              >
                                <Lucide icon="X" className="w-4 h-4" />
                              </Tippy>
                            </div>
                          ))}
<<<<<<< HEAD

                          {files.length === 0 || files.length > 4 ? (
                            ""
                          ) : (
                            <div className="w-24 h-24 relative image-fit mb-5 mr-5 cursor-pointer zoom-in">
                              <div className="flex flex-col text-center items-center justify-center rounded-md border-dashed border-2 border-theme-1 dark:border-darkmode-400 w-full h-full ">
                                <div
                                  {...getRootProps({ className: "dropzone" })}
                                  className="w-full h-full p-5 text-center flex flex-col items-center justify-center"
                                >
                                  <Lucide icon="Plus" className="w-4 h-4 mr-2" />
                                  <input {...getInputProps()} />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        {files.length > 0 ? (
                          ""
                        ) : (
                          <div {...getRootProps({ className: "dropzone" })}>
                            <input {...getInputProps()} />
                            <div className="w-full h-full p-5 text-center flex flex-col items-center justify-center">
                              <Lucide icon="Upload" className="w-4 h-4 mr-2 mb-4" />
                              <h4 className="text-primary text-md">
                                <a href="/" onClick={(e) => e.preventDefault()}>
                                  Drop Files here or click to upload
                                </a>
                              </h4>
                              <span className="text-gray-600 dark:text-darkmode-400">
                                Maximum file size is 5 MB <br />
                                Only .jpg, .jpeg & .png files are allowed
                              </span>
                            </div>
                          </div>
                        )}
                        {error && <div className="text-danger text-center">{error}</div>}
                        <span className="text-info mx-7"></span>
=======
                        </div>
                        <div className="px-4 pb-4 flex items-center cursor-pointer relative">
                          <Lucide icon="Image" className="w-4 h-4 mr-2" />
                          <span className="text-primary mr-1">Upload a file</span> or drag and drop
                          <input
                            type="file"
                            className="w-full h-full top-0 left-0 absolute opacity-0"
                            disabled={disabled}
                            multiple="multiple"
                            onChange={(event) => {
                              onImageChange(event);
                            }}
                            accept="image/png, image/jpg, image/jpeg"
                          />
                        </div>
                        <span className="text-info mx-7">
                          Only .png , .jpg ,.jpeg are allowed and Maximum file size is 2 MB{" "}
                        </span>
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
                      </div>
                      <button
                        className="intro-y form-control py-4 px-4 btn btn-primary shadow-md my-4 "
                        onClick={() => {
                          handleFileUpload();
                        }}
<<<<<<< HEAD
                        disabled={loading}
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
                      >
                        <Lucide icon="Send" className="w-4 h-4 mr-2" /> Send
                      </button>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
<<<<<<< HEAD
        {/* END: Post Content */}
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      </div>
    </>
  );
}

export default Main;
