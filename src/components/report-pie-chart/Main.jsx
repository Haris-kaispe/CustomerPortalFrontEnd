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
  // only map 6 items for now

  const chartData = props.data.map((item, index) => {
    if (index < 6) {
      return item.count;
    }
  });

  const labels = props.data.map((item, index) => {
    if (index < 6) {
      return item.status;
    }
  });

  const chartColors = () => [
    colors.primary(0.9),
    colors.warning(0.9),
    colors.pending(0.9),
    colors.secondary(0.9),
    colors.success(0.9),
    colors.info(0.9)
=======
  let chartData = [];
  let labels = [];

  props.data.map((value, index) => {
    chartData.push(value.productPercentage);
  });

  // const chartData = [
  //   props.data[0].productPercentage,
  //   props.data[1].productPercentage,
  //   props.data[2].productPercentage,
  // ];
  // const chartColors = () => [colors.pending(0.9), colors.warning(0.9), colors.primary(0.9)];

  //  const chartData = [15, 10, 65];
  const chartColors = () => [
    colors.pending(0.9),
    colors.warning(0.9),
    colors.primary(0.9),
    colors.secondary(0.9),
    colors.success(0.9),
    colors.info(0.9),
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
  ];

  const data = useMemo(() => {
    return {
<<<<<<< HEAD
      labels: labels,
=======
      labels: props.data.map((value, index) => {
        return value.productName;
      }),
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75

      //[props.data[1].productName, props.data[2].productName, props.data[0].productName],
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

  const options = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
<<<<<<< HEAD
          display: false
        }
      }
=======
          display: false,
        },
      },
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
    };
  });

  return (
    <Chart
      type="pie"
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
