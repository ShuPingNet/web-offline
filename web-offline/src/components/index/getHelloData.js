import fngetApi from '../common/getApi'

export default function getHelloData() {
  return fngetApi('./static/helloData.json');
}
