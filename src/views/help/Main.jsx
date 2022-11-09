import {
  Lucide,
  Tippy,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Litepicker,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TomSelect,
  ClassicEditor,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import {
  addNewContact as onAddNewContact,
  getHelp as onGetHelp,
  addNewHelp as onAddNewHelp,
  updateHelp as onUpdateHelp,
  deleteHelp as onDeleteHelp,
} from "../../store/actions";

function Main() {
  const dispatch = useDispatch();

  const { help } = useSelector((state) => ({
    help: state.HelpReducer?.help,
  }));

  const { contact } = useSelector((state) => ({
    contact: state.HelpReducer?.contact,
  }));

  const [getHelp, setHelp] = useState([]);

  const [getContact, setContact] = useState({});

  const [caption, setcaption] = useState("");

  const [content, setcontent] = useState("");

  const [title, settitle] = useState("");

  // useEffect(() => {
  //   if (!help.hasOwnProperty("docs")) dispatch(onGetHelp(params));

  //   setHelp(help);
  // }, [help]);

  const handleFileUpload = () => {
    console.log("body ", title + content + caption);

    // if (getHelp) {
    //   console.log("body ", "here");

    const body = {
      title: title,
      content: content,
      caption: caption,
      images: getHelp,
    };

    dispatch(onAddNewContact(body));
    setContact(contact);
    // console.setcontent("");
    settitle("");
    setcontent();
    setcaption("");
    SetImages([]);

    console.log("contact", contact);
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
    console.log("IMAGE", key + ":" + value);
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

  useEffect(() => {
    console.log("chec", title + content + caption);
  }, [title, content, caption]);
  return (
    <>
      <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Contact Us</h2>
        <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
          <button
            type="button"
            className="btn box mr-2 flex items-center ml-auto sm:ml-0"
            onClick={() => {
              handleFileUpload();
            }}
          >
            <Lucide icon="Eye" className="w-4 h-4 mr-2" /> Send
          </button>
        </div>
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
          <TabGroup className="post intro-y overflow-hidden box mt-5">
            <TabList className="post__tabs nav-tabs flex-col sm:flex-row bg-slate-200 dark:bg-darkmode-800">
              <Tab
                fullWidth={false}
                className="w-full sm:w-40 py-0 px-0"
                tag="button"
              >
                <Tippy
                  content="Fill in the article content"
                  className="tooltip w-full flex items-center justify-center py-4"
                  aria-controls="content"
                  aria-selected="true"
                >
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Content
                </Tippy>
              </Tab>
              {/* <Tab
                fullWidth={false}
                className="w-full sm:w-40 py-0 px-0"
                tag="button"
              >
                <Tippy
                  content="Adjust the meta title"
                  className="tooltip w-full flex items-center justify-center py-4"
                  aria-selected="false"
                >
                  <Lucide icon="Code" className="w-4 h-4 mr-2" /> Meta Title
                </Tippy>
              </Tab>
              <Tab
                fullWidth={false}
                className="w-full sm:w-40 py-0 px-0"
                tag="button"
              >
                <Tippy
                  content="Use search keywords"
                  className="tooltip w-full flex items-center justify-center py-4"
                  aria-selected="false"
                >
                  <Lucide icon="AlignLeft" className="w-4 h-4 mr-2" /> Keywords
                </Tippy>
              </Tab> */}
            </TabList>
            <TabPanels className="post__content">
              <TabPanel className="p-5">
                <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
                  <div className="font-medium flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                    <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Text
                    Content
                  </div>
                  <div className="mt-5">
                    <ClassicEditor
                      value={content}
                      // onKeyUp={(e) => {
                      //   setcontent(e.target.value);
                      // }}
                      onChange={(val) => {
                        setcontent(val);
                      }}
                    />
                  </div>
                </div>
                <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5 mt-5">
                  <div className="font-medium flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                    <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" />{" "}
                    Caption & Images
                  </div>
                  <div className="mt-5">
                    <div>
                      <label htmlFor="post-form-7" className="form-label">
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
                      <div className="border-2 border-dashed dark:border-darkmode-400 rounded-md pt-4">
                        <div className="flex flex-wrap px-4">
                          {$_.take(GetImages, GetImages.length).map(
                            (value, key) => (
                              <div
                                key={key}
                                className="w-24 h-24 relative image-fit mb-5 mr-5 cursor-pointer zoom-in"
                              >
                                <img
                                  className="rounded-md"
                                  alt="Midone Tailwind HTML Admin Template"
                                  src={value}
                                />
                                <Tippy
                                  tag="div"
                                  content="Remove this image?"
                                  className="w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-danger right-0 top-0 -mr-2 -mt-2"
                                  onClick={() => {
                                    handleRemoveImage(value, key);
                                  }}
                                >
                                  <Lucide icon="X" className="w-4 h-4" />
                                </Tippy>
                              </div>
                            )
                          )}
                        </div>
                        <div className="px-4 pb-4 flex items-center cursor-pointer relative">
                          <Lucide icon="Image" className="w-4 h-4 mr-2" />
                          <span className="text-primary mr-1">
                            Upload a file
                          </span>{" "}
                          or drag and drop
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
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
        {/* END: Post Content */}
      </div>
    </>
  );
}

export default Main;
