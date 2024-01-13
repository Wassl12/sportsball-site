import { test, expect } from 'vitest'
import renderer from 'react-test-renderer'
import App from './App'

test('renders app', () => {
  const app = renderer.create(<App/>);
  const tree = app.toJSON();
  console.log(tree);
  expect(tree).toBeDefined();
});
