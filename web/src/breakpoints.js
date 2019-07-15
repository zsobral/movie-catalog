const mq = bp => `@media (min-width: ${bp}px)`;

export default {
  small: mq(360),
  medium: mq(768),
  large: mq(960),
};
