import { keyframes } from 'styled-components';
export default {
	'none': {},
	'Fade In': {
		timingFunction: 'ease-in',
		keyframes: keyframes`
      0% {
        opacity: 0;
        will-change: opacity;
      }
      100% {
       opacity: 1;
       will-change: opacity;
      }
    `
	},
	'Fade Out': {
		timingFunction: 'ease-in',
		keyframes: keyframes`
      0% {
        opacity: 1;
        will-change: opacity;
      }
      100% {
       opacity: 0;
       will-change: opacity;
      }
    `
	},
	'→ Slide In': {
		timingFunction: 'ease-in',
		keyframes: keyframes`
        0% {
        will-change: transform, opacity, filter;
        transform: translate3d(0px, -20px, 0px);
        transform-style: preserve-3d;
      }
      100% {
       will-change: transform, opacity, filter;
       transform: translate3d(0px, 0px, 0px);
       transform-style: preserve-3d;
      }
    `
	},
	'↓ Slide In': {
		timingFunction: 'ease-in',
		keyframes: keyframes`
      0% {
        will-change: transform, opacity, filter;
        transform: translate3d(0px, -30px, 0px);
        transform-style: preserve-3d;
      }
      100% {
       will-change: transform, opacity, filter;
       transform: translate3d(0px, 0px, 0px);
       transform-style: preserve-3d;
      }
    `
	},
	'← Slide In': {
		timingFunction: 'ease-in',
		keyframes: keyframes`
      0% {
        will-change: transform, opacity, filter;
        transform: translate3d(0px, -20px, 0px);
        transform-style: preserve-3d;
      }
      100% {
       will-change: transform, opacity, filter;
       transform: translate3d(0px, 0px, 0px);
       transform-style: preserve-3d;
      }
    `
	},
	'↑ Slide In': {
		timingFunction: 'ease-in',
		keyframes: keyframes`
      0% {
        opacity: 0;
        will-change: transform, opacity, filter;
        transform: translate3d(0px, 30px, 0px);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 1;
       will-change: transform, opacity, filter;
       transform: translate3d(0px, 0px, 0px);
       transform-style: preserve-3d;
      }
    `
	},
	'→ Slide Out': {
		timingFunction: 'ease-in',
		keyframes: keyframes`
      0% {
        opacity: 1;
        will-change: transform, opacity;
        transform: translate3d(0px, 0px, 0px); 
        filter: blur(0px);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 0;
       will-change: transform, opacity;
       transform: translate3d(100px, 0px, 0px);
       filter: blur(5px);
       transform-style: preserve-3d;
      }
    `
	},
	'↓ Slide Out': {
		timingFunction: 'ease-in',
		keyframes: keyframes`
      0% {
        opacity: 1;
        will-change: transform, opacity;
        transform: translate3d(0px, 0px, 0px); 
        filter: blur(0px);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 0;
       will-change: transform, opacity;
       transform: translate3d(0px, 100px, 0px);
       filter: blur(5px);
       transform-style: preserve-3d;
      }
    `
	},
	'← Slide Out': {
		timingFunction: 'ease-in',
		keyframes: keyframes`
      0% {
        opacity: 1;
        will-change: transform, opacity;
        transform: translate3d(0px, 0px, 0px); 
        filter: blur(0px);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 0;
       will-change: transform, opacity;
       transform: translate3d(-100px, 0px, 0px);
       filter: blur(5px);
       transform-style: preserve-3d;
      }
    `
	},
	'↑ Slide Out': {
		timingFunction: 'ease-in',
		keyframes: keyframes`
      0% {
        opacity: 1;
        will-change: transform, opacity;
        transform: translate3d(0px, 0px, 0px); 
        filter: blur(0px);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 0;
       will-change: transform, opacity;
       transform: translate3d(0px, -100px, 0px);
       filter: blur(5px);
       transform-style: preserve-3d;
      }
    `
	},
	'Flip In': {
		timingFunction: 'ease-in',
		keyframes: keyframes`
      0% {
        will-change: transform, opacity, filter;
        transform: translate3d(-80px, 0px, 0px);
        transform-style: preserve-3d;
      }
      100% {
  will-change: transform, opacity, filter;
       transform: translate3d(0px, 0px, 0px);
       transform-style: preserve-3d;
      }
    `
	},
	'Flip Out': {
		timingFunction: 'ease-in',
		keyframes: keyframes`
      0% {
        opacity: 1;
        will-change: transform, opacity;
        transform: rotateY(0deg); 
      }
      100% {
       opacity: 0;
       will-change: transform, opacity;
       transform: rotateY(-90deg);
      }
    `
	},
	'Grow In': {
		timingFunction: 'ease-in',
		keyframes: keyframes`
      0% {
        opacity: 0;
        will-change: transform, opacity;
        transform: scale3d(0.9, 0.9, 1); 
      }
      100% {
       opacity: 1;
       will-change: transform, opacity;
       transform: scale3d(1, 1, 1);
      }
    `
	},
	'Grow Out': {
		timingFunction: 'ease-in',
		keyframes: keyframes`
      0% {
        opacity: 1;
        will-change: transform, opacity;
        transform: scale3d(1, 1, 1); 
      }
      100% {
       opacity: 0;
       will-change: transform, opacity;
       transform: scale3d(1.25, 1.25, 1);
      }
    `
	},
	'Shrink In': {
		timingFunction: 'ease-in',
		keyframes: keyframes`
      0% {
        opacity: 0.4;
        will-change: transform, opacity;
        transform: scale3d(1.3, 1.3, 1.3);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 1;
       will-change: transform, opacity;
       transform: scale3d(1, 1, 1);
       transform-style: preserve-3d;
      }
    `
	},
	'Shrink Out': {
		timingFunction: 'ease-in',
		keyframes: keyframes`
      0% {
        opacity: 1;
        will-change: transform, opacity;
        transform: scale3d(1, 1, 1);
        transform-style: preserve-3d;
      }
      100% {
      opacity: 0;
       will-change: transform, opacity;
       transform: scale3d(0.75, 0.75, 1);
       transform-style: preserve-3d;
      }
    `
	},
	'Spin In': {
		timingFunction: 'ease-in',
		keyframes: keyframes`
      0% {
        opacity: 0;
        will-change: transform, opacity;
        transform: rotateZ(-180deg);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 1;
       will-change: transform, opacity;
       transform: rotateZ(0deg);
       transform-style: preserve-3d;
      }
    `
	},
	'Spin Out': {
		timingFunction: 'ease-in',
		keyframes: keyframes`
      0% {
        opacity: 1;
        will-change: transform, opacity;
        transform: rotateZ(0deg);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 0;
       will-change: transform, opacity;
       transform: rotateZ(90deg);
       transform-style: preserve-3d;
      }
    `
	},
	'Fly In': {
		timingFunction: 'ease-in',
		keyframes: keyframes`
      0% {
        opacity: 0;
        will-change: transform, opacity, filter;
        transform: translate3d(-500px, 0px, 0px) scale3d(0, 0, 1);
        filter: blur(5px);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 1;
       will-change: transform, opacity, filter;
       transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);
       filter: blur(0px);
       transform-style: preserve-3d;
      }
    `
	},
	'Fly Out': {
		timingFunction: 'ease-in',
		keyframes: keyframes`
      0% {
        opacity: 1;
        will-change: transform, opacity, filter;
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);
        filter: blur(0px);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 0;
       will-change: transform, opacity, filter;
       transform: translate3d(-500px, 0px, 0px) scale3d(0.25, 0.25, 1);
       filter: blur(5px);
       transform-style: preserve-3d;
      }
    `
	},
	'Drop In': {
		timingFunction: 'linear',
		keyframes: keyframes`
      0% {
        will-change: transform, opacity, filter;
        transform: translate3d(0px, -45px, 0px);
        animation-timing-function: ease-in;
        filter: blur(5px);
        opacity: 0;
      }
      24% {
        will-change: transform, opacity, filter;
        opacity: 1;
        filter: blur(0px);
      }
      40% {
        will-change: transform, opacity;
        transform: translate3d(0px, -24px, 0px);
        animation-timing-function: ease-in;

      }
      65% {
        will-change: transform, opacity;
        transform: translate3d(0px, -12px, 0px);
        animation-timing-function: ease-in;
      }
      82% {
        will-change: transform, opacity;
        transform: translate3d(0px, -6px, 0px);
        animation-timing-function: ease-in;
      }
      93% {
        will-change: transform, opacity;    
        transform: translate3d(0px, -4px, 0px);
        animation-timing-function: ease-in;
      }
      25%,
      55%,
      75%,
      87% {
        will-change: transform, opacity;
        transform: translate3d(0px, 0px, 0px);
        animation-timing-function: ease-out;
      }
      100% {
        will-change: transform, opacity;
        transform: translate3d(0px, 0px, 0px);
        animation-timing-function: ease-out;
        opacity: 1;
      }
    `
	},
	'Drop Out': {
		timingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
		keyframes: keyframes`
      0% {
        transform: translateY(0) scaleY(1) scaleX(1);
        transform-origin: 50% 50%;
        filter: blur(0);
        opacity: 1;
      }
      100% {
        transform: translateY(100px) scaleY(1) scaleX(0.2);
        transform-origin: 50% 100%;
        filter: blur(5px);
        opacity: 0;
      }
    `
	},
	'Pop': {
		timingFunction: 'ease-in-out',
		keyframes: keyframes`
      0% {
        transform: scale3d(1, 1, 1);
        will-change: transform;
      }
      14% {
        transform: scale3d(1.3, 1.3, 1);
        will-change: transform;
      }
      28% {
        transform: scale3d(1, 1, 1);
        will-change: transform;
      }

      42% {
        transform: scale3d(1.3, 1.3, 1);
        will-change: transform;
      }

      70% {
        transform: scale3d(1, 1, 1);
        will-change: transform;
      }
      80% {
        transform: scale3d(1, 1, 1);
        will-change: transform;
      }
    `
	},
	'Juggle': {
		timingFunction: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
		keyframes: keyframes`
      0%,
      100% {
        transform: rotate(0deg);
        transform-origin: 50% 50%;
      }
      10% {
        transform: rotate(2deg);
      }
      20%,
      40%,
      60% {
        transform: rotate(-4deg);
      }
      30%,
      50%,
      70% {
        transform: rotate(4deg);
      }
      80% {
        transform: rotate(-2deg);
      }
      90% {
        transform: rotate(2deg);
      }
    `
	},
	'Blink': {
		timingFunction: 'ease-in-out',
		keyframes: keyframes`
      0%,
      50%,
      100% {
        opacity: 1;
      }
      25%,
      75% {
        opacity: 0;
      }
    `
	},
	'Bounce': {
		timingFunction: 'ease-in-out',
		keyframes: keyframes`
      0% {
        transform: translateY(-45px);
        animation-timing-function: ease-in;
        opacity: 1;
      }
      24% {
        opacity: 1;
      }
      40% {
        transform: translateY(-24px);
        animation-timing-function: ease-in;
      }
      65% {
        transform: translateY(-12px);
        animation-timing-function: ease-in;
      }
      82% {
        transform: translateY(-6px);
        animation-timing-function: ease-in;
      }
      93% {
        transform: translateY(-4px);
        animation-timing-function: ease-in;
      }
      25%,
      55%,
      75%,
      87% {
        transform: translateY(0px);
        animation-timing-function: ease-out;
      }
      100% {
        transform: translateY(0px);
        animation-timing-function: ease-out;
        opacity: 1;
      }
    `
	},
	'Jello': {
		timingFunction: 'ease-in-out',
		keyframes: keyframes`
      0% {
        transform: scale3d(1, 1, 1);
      }
      30% {
        transform: scale3d(1.25, 0.75, 1);
      }
      40% {
        transform: scale3d(0.75, 1.25, 1);
      }
      50% {
        transform: scale3d(1.15, 0.85, 1);
      }
      65% {
        transform: scale3d(0.95, 1.05, 1);
      }
      75% {
        transform: scale3d(1.05, 0.95, 1);
      }
      100% {
        transform: scale3d(1, 1, 1);
      }
    `
	},
	'Rubber': {
		timingFunction: 'ease-in-out',
		keyframes: keyframes`
      0% {
        transform: skew(0deg 0deg);
      }
      30% {
        transform: skew(25deg 25deg);
      }
      40% {
        transform: skew(-15deg, -15deg);
      }
      50% {
        transform: skew(15deg, 15deg);
      }
      65% {
        transform: skew(-5deg, -5deg);
      }
      75% {
        transform: skew(5deg, 5deg);
      }
      100% {
        transform: skew(0deg 0deg);
      }
    `
	},
	'Rotate': {
		timingFunction: 'linear',
		keyframes: keyframes`
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(360deg);
      }
    `
	},
	'Vibrate 1': {
		timingFunction: 'linear',
		keyframes: keyframes`
    0% {
        transform: translate(0);
      }
      25% {
        transform: translate(-10%, 40%);
      }
      50% {
        transform: translate(40%, 85%);
      }
      75% {
        transform: translate(-10%, 40%);
      }
           100% {
        transform: translate(0);
      }
    `
	},
	'Vibrate 2': {
		timingFunction: 'linear',
		keyframes: keyframes`
        0% {
        transform: translate(0);
      }
      25% {
        transform: translate(170%, 10%);
      }
      50% {
        transform: translate(200%, -50%);
      }
      75% {
        transform: translate(170%, 10%);
      }
           100% {
        transform: translate(0);
      }
    `
	},
	'Flicker': {
		timingFunction: 'linear',
		keyframes: keyframes`
   0% {
        transform: translate(0);
      }
      25% {
        transform: translate(-50%, -60%);
      }
      50% {
        transform: translate(-200%, -48%);
      }
      75% {
        transform: translate(-50%, -60%);
      }
           100% {
        transform: translate(0);
      }
    `
	},
	'Shake': {
		timingFunction: 'linear',
		keyframes: keyframes`
      0%,
      100% {
        transform: rotate(0deg);
        transform-origin: 50% 50%;
      }
      5% {
        transform: rotate(8deg);
      }
      10%,
      20% {
        transform: rotate(-10deg);
      }
      15%,
      25%{
        transform: rotate(10deg);
      }
      30% {
        transform: rotate(0deg);
      }
    `
	},
	'Ping': {
		timingFunction: 'linear',
		keyframes: keyframes`
      0% {
        transform: scale(0.2);
        opacity: 0.8;
      }
      80% {
        transform: scale(1.2);
        opacity: 0;
      }
      100% {
        transform: scale(2.2);
        opacity: 0;
      }
    `
	},
	'Beat': {
		timingFunction: 'linear',
		keyframes: keyframes`
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(0.6);
      }
    `
	},
	'Background': {
		timingFunction: 'linear',
		keyframes: keyframes`
      0% {
        background: #19dcea;
      }
      100% {
        background: #b22cff;
      }
    `
	}
};