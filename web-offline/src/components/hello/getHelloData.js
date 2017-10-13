import fngetApi from '../common/geiApi'

export default function getHelloData() {
  return fngetApi('./static/helloData.json');
}
