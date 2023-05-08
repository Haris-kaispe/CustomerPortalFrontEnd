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

  const data = useMemo(() => {
    return {
<<<<<<< HEAD
      labels: [
        //labels
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],

=======
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      datasets: [
        {
          //currSales
          label: "# of Votes",
<<<<<<< HEAD
          data: props.data.map((item) => item.currSales || 0),
          // if it exists or else 0
          // props.data.map((item) => item.currSales || 0),

=======
          data: [
            props.data[0].currSales,
            props.data[1].currSales,
            props.data[2].currSales,
            props.data[3].currSales,
            props.data[4].currSales,
            props.data[5].currSales,
            props.data[6].currSales,
            props.data[7].currSales,
            props.data[8].currSales,
            props.data[9].currSales,
            props.data[10].currSales,
            props.data[11].currSales,
          ],
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
          borderWidth: 2,
          borderColor: colorScheme ? colors.primary(0.8) : "",
          backgroundColor: "transparent",
          pointBorderColor: "transparent",
<<<<<<< HEAD
          tension: 0.4
=======
          tension: 0.4,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
        },
        {
          //prev
          label: "# of Votes",
<<<<<<< HEAD
          data: props.data.map((item) => item.prevSales || 0),

=======
          data: [
            props.data[0].prevSales,
            props.data[1].prevSales,
            props.data[2].prevSales,
            props.data[3].prevSales,
            props.data[4].prevSales,
            props.data[5].prevSales,
            props.data[6].prevSales,
            props.data[7].prevSales,
            props.data[8].prevSales,
            props.data[9].prevSales,
            props.data[10].prevSales,
            props.data[11].prevSales,
          ],
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
          //          [0, 300, 400, 560, 320, 600, 720, 850, 690, 805, 1200, 1010],
          borderWidth: 2,
          borderDash: [2, 2],
          borderColor: darkMode ? colors.slate["400"](0.6) : colors.slate["400"](),
          backgroundColor: "transparent",
          pointBorderColor: "transparent",
<<<<<<< HEAD
          tension: 0.4
        }
      ]
=======
          tension: 0.4,
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
=======
          display: false,
        },
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      },
      scales: {
        x: {
          ticks: {
            font: {
<<<<<<< HEAD
              size: 12
            },
            color: colors.slate["500"](0.8)
          },
          grid: {
            display: false,
            drawBorder: false
          }
=======
              size: 12,
            },
            color: colors.slate["500"](0.8),
          },
          grid: {
            display: false,
            drawBorder: false,
          },
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
        },
        y: {
          ticks: {
            font: {
<<<<<<< HEAD
              size: 12
=======
              size: 12,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
            },
            color: colors.slate["500"](0.8),
            callback: function (value) {
              return "$" + value;
<<<<<<< HEAD
            }
=======
            },
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
          },
          grid: {
            color: darkMode ? colors.slate["500"](0.3) : colors.slate["300"](),
            borderDash: [2, 2],
            drawBorder: false,
<<<<<<< HEAD
            borderWidth: 5
          }
        }
      }
=======
          },
        },
      },
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
    };
  });

  return (
    <Chart
      type="line"
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
