import React from 'react';

export const Node = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>(({ className, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      {...props}
      className={className}
      height='75'
      viewBox='0 0 1061 316'
      fill='#E23C12'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_56_143)'>
        <mask
          id='mask0_56_143'
          style={{
            maskType: 'luminance'
          }}
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='1061'
          height='316'
        >
          <path d='M1061 0H0V315.529H1061V0Z' fill='white' />
        </mask>
        <g mask='url(#mask0_56_143)'>
          <path d='M933.771 313.05C931.025 313.05 928.466 312.314 926.09 311.025L901.766 296.484C898.107 294.458 899.938 293.722 901.035 293.354C905.971 291.697 906.885 291.329 912.007 288.384C912.555 288.016 913.286 288.201 913.835 288.569L932.488 299.797C933.219 300.165 934.133 300.165 934.681 299.797L1007.65 257.276C1008.38 256.908 1008.75 256.172 1008.75 255.252V170.394C1008.75 169.474 1008.38 168.738 1007.65 168.37L934.681 126.034C933.95 125.666 933.036 125.666 932.488 126.034L859.521 168.37C858.79 168.738 858.424 169.658 858.424 170.394V255.252C858.424 255.988 858.79 256.908 859.521 257.276L879.454 268.873C890.242 274.395 897.01 267.952 897.01 261.51V177.758C897.01 176.653 897.924 175.549 899.207 175.549H908.534C909.63 175.549 910.727 176.469 910.727 177.758V261.51C910.727 276.052 902.863 284.519 889.146 284.519C884.941 284.519 881.651 284.519 872.321 279.917L853.119 268.873C848.367 266.111 845.438 260.958 845.438 255.435V170.579C845.438 165.056 848.367 159.903 853.119 157.141L926.09 114.621C930.66 112.044 936.879 112.044 941.449 114.621L1014.42 157.141C1019.17 159.903 1022.1 165.056 1022.1 170.579V255.435C1022.1 260.958 1019.17 266.111 1014.42 268.873L941.449 311.393C939.255 312.314 936.513 313.05 933.771 313.05Z' />
          <path d='M956.45 254.698C924.441 254.698 917.856 239.972 917.856 227.455C917.856 226.351 918.77 225.247 920.05 225.247H929.559C930.66 225.247 931.574 225.983 931.574 227.087C933.036 236.843 937.241 241.629 956.629 241.629C971.991 241.629 978.576 238.132 978.576 229.849C978.576 225.063 976.74 221.566 952.786 219.172C932.854 217.147 920.416 212.73 920.416 196.715C920.416 181.806 932.854 172.97 953.7 172.97C977.114 172.97 988.633 181.07 990.096 198.74C990.096 199.293 989.913 199.845 989.551 200.397C989.178 200.765 988.634 201.134 988.077 201.134H978.385C977.479 201.134 976.561 200.397 976.378 199.477C974.181 189.353 968.51 186.04 953.517 186.04C936.692 186.04 934.681 191.93 934.681 196.347C934.681 201.685 937.058 203.342 959.736 206.287C982.228 209.232 992.838 213.466 992.838 229.296C992.838 245.494 979.486 254.698 956.45 254.698Z' />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M173.55 166.767C173.55 163.454 171.721 160.325 168.796 158.668L91.4383 113.57C90.1584 112.834 88.6952 112.466 87.2321 112.283C87.0493 112.283 86.5009 112.283 86.5009 112.283C85.0378 112.283 83.5746 112.834 82.2947 113.57L4.75479 158.484C1.82877 160.141 0 163.27 0 166.767L0.182877 287.518C0.182877 289.175 1.09726 290.831 2.56028 291.567C4.0233 292.488 5.85207 292.488 7.13222 291.567L53.2173 265.061C56.1432 263.405 57.9719 260.275 57.9719 256.962V200.452C57.9719 197.139 59.8007 194.009 62.727 192.353L82.2947 180.941C83.7578 180.02 85.4033 179.652 87.0493 179.652C88.6952 179.652 90.3412 180.02 91.6215 180.941L111.189 192.353C114.115 194.009 115.944 197.139 115.944 200.452V256.962C115.944 260.275 117.773 263.405 120.699 265.061L166.418 291.567C167.881 292.488 169.71 292.488 171.173 291.567C172.636 290.831 173.55 289.175 173.55 287.518V166.767Z'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M546.256 0.552215C544.79 -0.184072 542.962 -0.184072 541.682 0.552215C540.22 1.47256 539.306 2.94514 539.306 4.60178V124.248C539.306 125.352 538.757 126.456 537.657 127.194C536.56 127.745 535.463 127.745 534.366 127.194L514.982 115.965C512.058 114.309 508.581 114.309 505.656 115.965L428.115 161.062C425.191 162.719 423.363 165.848 423.363 169.161V259.172C423.363 262.486 425.191 265.614 428.115 267.271L505.656 312.369C508.581 314.025 512.058 314.025 514.982 312.369L592.523 267.271C595.447 265.614 597.275 262.486 597.275 259.172V34.7895C597.275 31.2921 595.447 28.1629 592.523 26.5063L546.256 0.552215ZM539.123 229.537C539.123 230.457 538.757 231.193 538.026 231.561L511.505 247.024C510.774 247.392 509.86 247.392 509.129 247.024L482.612 231.561C481.881 231.193 481.515 230.273 481.515 229.537V198.613C481.515 197.692 481.881 196.956 482.612 196.588L509.129 181.126C509.86 180.758 510.774 180.758 511.505 181.126L538.026 196.588C538.757 196.956 539.123 197.877 539.123 198.613V229.537Z'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M804.285 197.876C807.214 196.219 808.859 193.09 808.859 189.776V167.872C808.859 164.559 807.031 161.43 804.285 159.774L727.293 114.86C724.369 113.203 720.896 113.203 717.967 114.86L640.43 159.957C637.502 161.614 635.674 164.744 635.674 168.057V258.067C635.674 261.381 637.502 264.51 640.43 266.166L717.419 310.343C720.347 312 723.82 312 726.562 310.343L773.199 284.206C774.661 283.47 775.575 281.812 775.575 280.155C775.575 278.499 774.661 276.842 773.199 276.106L695.293 231.008C693.83 230.089 692.916 228.616 692.916 226.959V198.797C692.916 197.14 693.83 195.483 695.293 194.746L719.616 180.757C721.078 179.837 722.906 179.837 724.369 180.757L748.692 194.746C750.155 195.667 751.069 197.14 751.069 198.797V220.885C751.069 222.542 751.982 224.198 753.449 224.934C754.911 225.855 756.739 225.855 758.201 224.934L804.285 197.876Z'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M721.444 193.644C721.992 193.276 722.728 193.276 723.276 193.644L738.086 202.295C738.635 202.663 739 203.216 739 203.952V221.254C739 221.991 738.635 222.543 738.086 222.912L723.276 231.563C722.728 231.931 721.992 231.931 721.444 231.563L706.634 222.912C706.085 222.543 705.72 221.991 705.72 221.254V203.952C705.72 203.216 706.085 202.663 706.634 202.295L721.444 193.644Z'
          />
          <path d='M303.204 115.228C300.278 113.572 296.803 113.572 293.877 115.228L216.886 159.958C213.96 161.615 212.314 164.743 212.314 168.057V257.699C212.314 261.013 214.143 264.141 216.886 265.799L293.877 310.528C296.803 312.184 300.278 312.184 303.204 310.528L380.195 265.799C383.121 264.141 384.767 261.013 384.767 257.699V168.057C384.767 164.743 382.938 161.615 380.195 159.958L303.204 115.228Z' />
          <path d='M380.379 159.958L303.022 115.228C302.291 114.86 301.376 114.492 300.645 114.308L213.961 263.59C214.693 264.51 215.607 265.246 216.521 265.799L293.879 310.528C296.073 311.816 298.633 312.184 301.01 311.448L382.391 161.615C381.842 160.879 381.111 160.326 380.379 159.958Z' />
          <path d='M380.38 265.796C382.575 264.507 384.221 262.299 384.952 259.905L300.28 114.121C298.086 113.753 295.708 113.937 293.697 115.226L216.888 159.771L299.731 311.814C300.828 311.629 302.109 311.261 303.206 310.709L380.38 265.796Z' />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_56_143'>
          <rect width='1061' height='315.529' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
});
Node.displayName = 'Node-SVG';

export default Node;
