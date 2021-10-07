import React from 'react'

export function Comment (props) {
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
          d='M38.5 35.3C42.6 31.2 45 27 45 22c0-10-9.3-18.3-20.7-18.3C12.9 3.7 3.6 11.9 3.6 22c0 10.2 9.6 17.1 21 17.1v3.4c0 1 1.1 1.7 2 1.2 3-1.6 8.4-4.8 11.9-8.3zM14.2 19.5a3 3 0 013 2.9 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3zm13 2.9a3 3 0 00-2.9-3 3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3zm7.2-3a3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3z'
          clipRule='evenodd'
        />
      </g>
      <path
        fill='url(#prefix__b)'
        fillRule='evenodd'
        d='M24.6 39s11.5-.9 16.3-7C36 38.7 31.3 42.4 27 43.6 22.9 45 24.6 39 24.6 39z'
        clipRule='evenodd'
        opacity={0.1}
      />
      <defs>
        <linearGradient
          id='prefix__b'
          x1={20.4}
          x2={22.3}
          y1={37.7}
          y2={43.6}
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
        <filter
          id='prefix__a'
          width={46.2}
          height={45}
          x={1.2}
          y={2.4}
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
