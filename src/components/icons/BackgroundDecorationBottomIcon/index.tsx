import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';
import { mergeSx } from '@/utils';
import styles from '@/components/icons/styles';

const BackgroundDecorationBottomIcon = ({
  viewBox = '0 0 1085 1062',
  sx,
  ...rest
}: SvgIconProps) => (
  <SvgIcon viewBox={viewBox} sx={mergeSx(styles.root, sx)} {...rest}>
    <path
      opacity="0.16"
      d="M1433.69 568.9C1252.87 388.077 1142.16 791.781 939.817 910.099C719.879 1038.7 231.015 907.965 351.618 1192.12C465.543 1460.54 1142.61 1518.23 1316.83 1344.01C1491.05 1169.79 1614.51 749.723 1433.69 568.9Z"
      fill="#EEEEEE"
    />
    <path
      opacity="0.16"
      d="M1388.44 523.645C1207.61 342.822 1096.91 746.526 894.563 864.844C674.624 993.45 185.761 862.71 306.363 1146.86C420.288 1415.28 1097.36 1472.98 1271.58 1298.76C1445.8 1124.54 1569.26 704.468 1388.44 523.645Z"
      fill="#EEEEEE"
    />
    <path
      opacity="0.16"
      d="M1343.18 478.39C1162.36 297.567 1051.65 701.271 849.309 819.59C629.371 948.195 140.507 817.455 261.109 1101.61C375.034 1370.03 1052.1 1427.72 1226.32 1253.5C1400.54 1079.28 1524.01 659.213 1343.18 478.39Z"
      fill="#EEEEEE"
    />
    <path
      opacity="0.16"
      d="M1297.93 433.135C1117.1 252.312 1006.4 656.016 804.054 774.335C584.116 902.94 95.2517 772.2 215.854 1056.35C329.78 1324.77 1006.85 1382.47 1181.07 1208.25C1355.29 1034.03 1478.75 613.958 1297.93 433.135Z"
      fill="#EEEEEE"
    />
    <path
      opacity="0.16"
      d="M1252.67 387.88C1071.85 207.057 961.144 610.761 758.799 729.08C538.861 857.685 49.9969 726.945 170.599 1011.1C284.525 1279.52 961.592 1337.21 1135.81 1162.99C1310.03 988.772 1433.5 568.703 1252.67 387.88Z"
      fill="#EEEEEE"
    />
    <path
      opacity="0.16"
      d="M1207.42 342.625C1026.59 161.803 915.889 565.506 713.544 683.825C493.606 812.431 4.74198 681.691 125.344 965.842C239.27 1234.26 916.337 1291.96 1090.56 1117.74C1264.78 943.518 1388.24 523.448 1207.42 342.625Z"
      fill="#EEEEEE"
    />
    <path
      opacity="0.16"
      d="M1162.16 297.371C981.34 116.548 870.635 520.252 668.289 638.57C448.351 767.176 -40.5129 636.436 80.0894 920.587C194.015 1189.01 871.082 1246.7 1045.3 1072.48C1219.52 898.263 1342.99 478.193 1162.16 297.371Z"
      fill="#EEEEEE"
    />
  </SvgIcon>
);

export default BackgroundDecorationBottomIcon;
