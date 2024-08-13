import Swiper from 'swiper';
import { Mousewheel, Parallax } from 'swiper/modules';
import 'swiper/css';

import './style/main.scss'

const swiper = new Swiper('.slider', {
  modules: [Mousewheel, Parallax],
  direction: 'vertical',
  mousewheel: true,
  speed: 1500,
  parallax: true,
});
