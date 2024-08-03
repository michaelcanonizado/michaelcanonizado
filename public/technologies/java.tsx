import React from 'react';

export const Java = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>(({ className, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      {...props}
      className={className}
      height='75'
      viewBox='0 0 810 401'
      fill='#E23C12'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M95.498 309.982C95.498 309.982 80.0956 319.352 106.219 322.037C137.599 326.047 154.423 325.384 189.237 318.69C189.237 318.69 198.607 324.704 211.334 329.411C132.997 362.883 33.9147 327.407 95.5067 309.999L95.498 309.982ZM85.4564 266.468C85.4564 266.468 68.7204 279.195 94.8268 281.871C128.97 285.218 155.843 285.88 201.955 276.519C201.955 276.519 207.969 283.213 218.019 286.56C123.618 314.68 17.8325 289.228 85.4564 266.468ZM270.25 342.792C270.25 342.792 281.634 352.162 257.523 359.528C212.667 372.916 69.3916 376.935 29.2164 359.528C15.1565 353.513 41.9428 344.709 50.642 343.463C59.3587 341.458 64.0308 341.458 64.0308 341.458C48.6372 330.736 -38.4075 363.555 19.8373 372.838C179.849 398.944 311.741 361.454 270.232 342.713L270.25 342.792ZM102.855 220.941C102.855 220.941 29.8789 238.348 76.7397 244.372C96.8229 247.048 136.327 246.376 173.146 243.7C203.271 241.024 233.404 235.664 233.404 235.664C233.404 235.664 222.683 240.353 215.326 245.034C141.008 264.446 -1.59697 255.756 39.2493 235.664C74.0637 218.928 102.855 220.845 102.855 220.845V220.941ZM233.413 293.917C308.394 255.084 273.579 217.594 249.478 222.284C243.463 223.626 240.761 224.96 240.761 224.96C240.761 224.96 242.766 220.95 247.456 219.608C294.988 202.872 332.487 269.816 232.053 295.931C232.053 295.931 232.724 295.26 233.396 293.926L233.413 293.917ZM110.229 399.694C182.534 404.384 293.018 397.018 295.685 362.875C295.685 362.875 290.333 376.264 236.098 386.305C174.506 397.689 98.1827 396.347 53.3093 388.981C53.3093 388.981 62.6797 397.009 110.229 399.694Z' />
      <path d='M187.886 0C187.886 0 229.395 42.1887 148.382 105.785C83.4429 157.336 133.564 186.798 148.382 220.27C110.22 186.127 82.7717 156.002 101.512 127.873C128.97 86.3647 204.622 66.2815 187.886 0ZM166.46 192.15C185.872 214.247 161.1 234.339 161.1 234.339C161.1 234.339 210.645 208.886 187.877 177.419C167.132 147.294 151.058 132.563 238.085 82.3464C238.085 82.3464 100.833 116.49 166.452 192.141L166.46 192.15Z' />
      <path d='M543.242 307.179V205.394C543.242 179.419 528.703 161.776 492.354 161.776C471.583 161.776 453.914 166.971 438.346 173.195L443.541 191.892C454.96 187.734 469.517 183.585 485.085 183.585C504.819 183.585 514.163 191.892 514.163 208.515V222.026H503.86C454.001 222.026 431.163 240.723 431.163 270.839C431.163 295.769 446.74 310.308 474.781 310.308C492.441 310.308 505.944 302.001 518.4 291.611L520.474 307.187H543.312L543.242 307.179ZM514.146 273.951C503.773 283.295 492.337 288.49 481.947 288.49C468.436 288.49 460.137 280.183 460.137 265.653C460.137 251.122 468.445 240.723 501.681 240.723H514.146V273.96V273.951ZM640.851 307.187H604.503L560.893 164.905H592.056L619.06 252.159L625.292 278.135C638.803 240.74 649.176 202.317 653.334 164.931H684.487C676.18 211.67 661.649 262.558 640.869 307.214L640.851 307.187ZM809.101 307.187V205.394C809.101 179.419 794.561 161.776 758.195 161.776C737.423 161.776 719.772 166.971 704.187 173.195L708.345 191.892C720.809 187.734 735.349 183.585 750.925 183.585C770.66 183.585 780.004 191.892 780.004 208.515V222.026H769.631C719.772 222.026 696.934 240.723 696.934 270.839C696.934 295.769 711.474 310.308 739.515 310.308C758.213 310.308 771.715 302.001 784.171 291.611L786.245 307.187H809.083H809.101ZM780.022 273.951C769.649 283.295 758.213 288.49 747.822 288.49C734.312 288.49 726.013 280.183 726.013 265.653C726.013 251.122 734.32 240.723 767.557 240.723H780.022V273.96V273.951ZM398.859 331.071C390.552 343.536 378.088 352.88 362.511 358.075L349 341.461C359.39 335.229 369.772 325.885 373.93 317.578C378.088 310.308 379.125 299.918 379.125 276.034V114H410.287V273.951C410.287 306.15 407.158 318.606 398.859 331.071Z' />
    </svg>
  );
});
Java.displayName = 'Java-SVG';

export default Java;
