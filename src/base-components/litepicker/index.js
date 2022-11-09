import dayjs from "dayjs";
import Litepicker from "litepicker";

const getDateFormat = (format) => {
  //  return format !== undefined ? format : "D MMM, YYYY";
  return format !== undefined ? format : "MM/DD/YYYY";
};

const setValue = (props) => {
  const format = getDateFormat(props.options.format);
  if (!props.value.length) {
    let startdate = dayjs().format(format);

    startdate +=
      !props.options.singleMode && props.options.singleMode !== undefined
        ? "-" + dayjs().format(format)
        : "";

    props.onChange(startdate);
  }
};

const init = (el, props) => {
  const format = getDateFormat(props.options.format);
  el.litePickerInstance = new Litepicker({
    element: el,
    ...props.options,
    format: format,
    setup: (picker) => {
      picker.on("selected", (startDate, endDate) => {
        let date = dayjs(startDate.dateInstance).format(format);
        date +=
          endDate !== undefined
            ? "-" + dayjs(endDate.dateInstance).format(format)
            : "";
        props.onChange(date);
      });
    },
  });
};

const reInit = (el, props) => {
  el.litePickerInstance.destroy();
  init(el, props);
};

export { setValue, init, reInit };
