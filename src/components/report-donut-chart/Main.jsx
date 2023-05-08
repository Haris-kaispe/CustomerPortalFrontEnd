import { Chart } from "@/base-components";
<<<<<<< HEAD
import PropTypes from "prop-types";
import { colorScheme as colorSchemeStore } from "@/stores/color-scheme";
import { colors } from "@/utils";
import { darkMode as darkModeStore } from "@/stores/dark-mode";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
=======
import { colors } from "@/utils";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { colorScheme as colorSchemeStore } from "@/stores/color-scheme";
import { darkMode as darkModeStore } from "@/stores/dark-mode";
import { useMemo } from "react";
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75

function Main(props) {
  const darkMode = useRecoilValue(darkModeStore);
  const colorScheme = useRecoilValue(colorSchemeStore);

<<<<<<< HEAD
  const chartData = props.data.map((item) => item.count);

  const labels = props.data.map((item) => item.status);

  const chartColors = () => {
    return props.data.map((item) => {
      if (item.status === "approval") {
        return colors.primary(0.9);
      } else if (item.status === "approved") {
        return colors.warning(0.9);
      } else if (item.status === "processing") {
        return colors.pending(0.9);
      } else if (item.status === "packing") {
        return colors.secondary(0.9);
      } else if (item.status === "shipping") {
        return colors.success(0.9);
      } else if (item.status === "delivered") {
        return colors.info(0.9);
      }
    });
  };

  const data = useMemo(() => {
    return {
      labels: labels,
=======
  //const chartData = [props.data[0].Count, props.data[1].Count, props.data[2].Count];
  const chartData = [
    props.data[0].percent,
    props.data[1].percent,
    props.data[2].percent,
    props.data[3].percent,
    props.data[4].percent,
    props.data[5].percent,
  ];

  //  const chartData = [15, 10, 65];
  const chartColors = () => [
    colors.pending(0.9),
    colors.warning(0.9),
    colors.primary(0.9),
    colors.secondary(0.9),
    colors.success(0.9),
    colors.info(0.9),
  ];
  const data = useMemo(() => {
    return {
      labels: [
        props.data[1].status,
        props.data[2].status,
        props.data[0].status,
        props.data[3].status,
        props.data[4].status,
        props.data[5].status,
      ],

      // labels: [props.data[1].productName, props.data[2].productName, props.data[0].productName],
      //      labels: ["31 - 50 Years old", ">= 50 Years old", "17 - 30 Years old"],
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      datasets: [
        {
          data: chartData,
          backgroundColor: colorScheme ? chartColors() : "",
          hoverBackgroundColor: colorScheme ? chartColors() : "",
          borderWidth: 5,
<<<<<<< HEAD
          borderColor: darkMode ? colors.darkmode[700]() : colors.white
        }
      ]
=======
          borderColor: darkMode ? colors.darkmode[700]() : colors.white,
        },
      ],
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
    };
  });

  // const OrderReport = [
  //   {
  //     status: "approval",
  //     count: 43,
  //     percent: 67,
  //   },
  //   {
  //     status: "approved",
  //     count: 43,
  //     percent: 67,
  //   },
  //   {
  //     status: "processing",
  //     count: 43,
  //     percent: 67,
  //   },
  //   {
  //     status: "packing",
  //     count: 43,
  //     percent: 67,
  //   },
  //   {
  //     status: "shipping",
  //     count: 43,
  //     percent: 67,
  //   },
  //   {
  //     status: "delivered",
  //     count: 43,
  //     percent: 67,
  //   },
  // ];

  const options = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
<<<<<<< HEAD
          display: false
        }
      },
      cutout: "80%"
=======
          display: false,
        },
      },
      cutout: "80%",
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
    };
  });

  return (
    <Chart
      type="doughnut"
      width={props.width}
      height={props.height}
      data={data}
      options={options}
      className={props.className}
    />
  );
}

Main.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
<<<<<<< HEAD
  className: PropTypes.string
=======
  className: PropTypes.string,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
};

Main.defaultProps = {
  width: "auto",
  height: "auto",
<<<<<<< HEAD
  className: ""
=======
  className: "",
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
};

export default Main;
