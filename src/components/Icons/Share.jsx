import React from 'react'

export function Share (props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 48 48'
      {...props}
    >
      <g filter='url(#prefix__a)' opacity={0.9}>
        <path
          fill='#fff'
          fillRule='evenodd'
          d='M25.8 10.3c0-1.3 1.5-2 2.4-1l14 13.3a2.9 2.9 0 01-.1 4.2L28 39c-.8.9-2.3.2-2.3-1v-5.5s-15-2.7-19.7 6c-.5.9-2.2 1.2-1.9-3C5.7 28 8.8 16.3 25.8 16.3v-5.9z'
          clipRule='evenodd'
        />
      </g>
      <path
        fillRule='evenodd'
        d='M25.8 16.8v15.6s-14.3-2-18.8 4.8C2.7 43.8 3.1 29.8 9.6 23c6.5-7 16.2-6 16.2-6z'
        clipRule='evenodd'
        opacity={0.1}
      />
      <defs>
        <radialGradient
          id='prefix__b'
          cx={0}
          cy={0}
          r={1}
          gradientTransform='matrix(-7.4612 -17.5775 17.2788 -7.33441 26.23 42.56)'
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop offset={1} stopOpacity={0} />
          <stop offset={1} stopOpacity={0} />
        </radialGradient>
        <filter
          id='prefix__a'
          width={43.7}
          height={35.2}
          x={1.8}
          y={7.7}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dy={1.2} />
          <feGaussianBlur stdDeviation={1.2} />
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>
      </defs>
    </svg>
  )
}
