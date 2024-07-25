import { NameVariants } from '@/types';

const Orange = ({ ...props }) => {
  return (
    <svg
      viewBox='0 0 870 152'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M42.396 149H0.66V37.112H39.732V71.078H41.952C44.394 52.43 54.606 34.892 82.8 34.892C109.218 34.892 121.872 50.876 124.092 71.078H126.312C128.754 52.43 139.41 34.892 168.492 34.892C197.13 34.892 210.672 53.096 210.672 77.294V149H168.936V92.612C168.936 77.072 164.496 72.188 147.18 72.188C130.086 72.188 126.534 76.85 126.534 91.28V149H84.798V92.612C84.798 77.072 80.358 72.188 63.042 72.188C45.948 72.188 42.396 76.85 42.396 91.28V149ZM264.83 26.9H223.094V0.259996H264.83V26.9ZM264.83 149H223.094V37.112H264.83V149ZM340.986 151.22C301.248 151.22 275.94 129.242 275.94 93.056C275.94 56.648 301.248 34.892 340.986 34.892C379.17 34.892 403.59 54.428 403.59 84.398V87.95H362.076V86.174C362.076 74.63 353.64 72.188 340.098 72.188C324.78 72.188 317.454 75.518 317.454 93.056C317.454 110.372 324.78 113.702 340.098 113.702C353.64 113.702 362.076 111.482 362.076 99.938V97.94H403.59V101.714C403.59 131.462 379.17 151.22 340.986 151.22ZM456.478 149H414.742V0.259996H456.478V71.078H458.698C462.25 52.208 474.682 34.892 503.32 34.892C533.068 34.892 547.276 53.762 547.276 78.626V149H505.54V92.612C505.54 77.072 499.546 72.188 480.454 72.188C461.14 72.188 456.478 76.85 456.478 91.28V149ZM595.965 151.22C570.657 151.22 556.449 139.676 556.449 120.584C556.449 104.822 567.327 93.5 592.635 91.058L638.145 86.618V84.398C638.145 73.076 633.261 71.3 618.387 71.3C604.623 71.3 600.405 73.964 600.405 83.288V84.176H558.669V83.732C558.669 53.984 583.533 34.892 621.495 34.892C660.567 34.892 679.437 53.984 679.437 85.286V149H640.365V125.468H638.145C633.927 141.23 620.163 151.22 595.965 151.22ZM598.407 117.92C598.407 121.472 601.959 122.138 608.397 122.138C628.599 122.138 636.813 119.696 637.923 109.706L603.735 113.702C599.961 114.146 598.407 115.478 598.407 117.92ZM754.19 151.22C716.228 151.22 689.588 135.014 689.588 93.056C689.588 56.648 716.006 34.892 753.302 34.892C791.93 34.892 816.572 54.206 816.572 90.17C816.572 93.944 816.35 96.83 815.906 100.826H728.216C728.882 114.368 734.876 118.142 752.636 118.142C769.508 118.142 773.948 115.256 773.948 108.596V106.154H815.684V108.818C815.684 133.682 791.93 151.22 754.19 151.22ZM752.414 66.86C737.096 66.86 730.658 70.19 728.882 79.736H776.168C774.614 70.19 767.954 66.86 752.414 66.86ZM869.476 149H827.74V0.259996H869.476V149Z'
        fill='#E23C12'
      />
    </svg>
  );
};

export const NameFirst = ({
  className,
  variant
}: { className?: string } & NameVariants) => {
  if (variant === 'orange') {
    return <Orange className={className} />;
  }
};
