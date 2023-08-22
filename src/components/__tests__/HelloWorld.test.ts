// @ts-ignore
import { render } from '@testing-library/vue/dist'
// @ts-ignore
import HelloWorld from '../HelloWorld.vue';

test('отрисовывает props.msg, если они переданы', () => {
  const {debug} = render(HelloWorld);
  
  debug();
})
